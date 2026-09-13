require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
const dashboardUrl = process.env.DASHBOARD_URL || "http://localhost:3001";

const app = express();
app.use(
  cors({
    origin: [frontendUrl, dashboardUrl],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/", authRoute);

function requireAuth(req, res, next) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized. Login required." });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid or expired token." });
    }

    req.user = { id: decoded.id };
    next();
  });
}

app.get("/allHoldings", requireAuth, async (req, res) => {
  let allHoldings = await HoldingsModel.find({ userId: req.user.id });
  res.json(allHoldings);
});

app.get("/allPositions", requireAuth, async (req, res) => {
  let allPositions = await PositionsModel.find({ userId: req.user.id });
  res.json(allPositions);
});

app.get("/allOrders", requireAuth, async (req, res) => {
  let allOrders = await OrdersModel.find({ userId: req.user.id });
  res.json(allOrders);
});

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    const name = req.body.name;
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);
    const mode = req.body.mode;
    const userId = req.user.id;

    if (!name || !qty || qty <= 0 || !price || !mode) {
      return res.status(400).json({ error: "Invalid order payload." });
    }

    const newOrder = new OrdersModel({
      userId,
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    if (mode === "BUY") {
      const newHolding = new HoldingsModel({
        userId,
        name,
        qty,
        avg: price,
        price,
        net: "+0.00%",
        day: "+0.00%",
      });
      await newHolding.save();
    }

    if (mode === "SELL") {
      const existingHolding = await HoldingsModel.findOne({ userId, name });
      if (existingHolding) {
        const remainingQty = existingHolding.qty - qty;
        if (remainingQty <= 0) {
          await HoldingsModel.deleteOne({ userId, name });
        } else {
          existingHolding.qty = remainingQty;
          existingHolding.price = price;
          await existingHolding.save();
        }
      }
    }

    res.send("Order saved!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not save order." });
  }
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});
