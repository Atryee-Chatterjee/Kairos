const { Signup, Login, Logout, VerifyUser } = require('../Controllers/AuthController')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/logout', Logout)
router.get('/verify', VerifyUser)

module.exports = router