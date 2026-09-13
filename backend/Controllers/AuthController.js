const { UserModel } = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    console.log('[AuthController] Signup request body:', { email, username });

    if (!email || !password || !username) {
      return res.status(400).json({ message: 'All fields are required', success: false });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use", success: false });
    }
    const user = await UserModel.create({ email, password, username, createdAt });
    console.log('[AuthController] Created user id:', user._id);
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });
    console.log('[AuthController] Set cookie token for user:', user._id);
    return res.status(201).json({ message: "User signed up successfully", success: true, user: { username: user.username, email: user.email } });
  } catch (error) {
    console.error('[AuthController] Signup error:', error);
    // Duplicate key (unique) error
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already in use', success: false });
    }
    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ message: messages.join(', '), success: false });
    }
    return res.status(500).json({ message: 'Signup failed', success: false, error: error.message });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Incorrect password or email' });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: 'Incorrect password or email' });
    }
    const token = createSecretToken(user._id);
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.status(200).json({ message: 'User logged in successfully', success: true, user: { username: user.username, email: user.email } });
  } catch (error) {
    console.error('[AuthController] Login error:', error);
    return res.status(500).json({ message: 'Login failed', success: false, error: error.message });
  }
};

module.exports.Logout = async (req, res) => {
  try {
    res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
    return res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Logout failed' });
  }
};

module.exports.VerifyUser = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.json({ status: false });
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) return res.json({ status: false });
      const user = await UserModel.findById(data.id).select('username email');
      if (!user) return res.json({ status: false });
      return res.json({ status: true, user });
    });
  } catch (error) {
    console.error(error);
    return res.json({ status: false });
  }
};
