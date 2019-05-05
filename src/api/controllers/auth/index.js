const express = require('express')
const router = express.Router()
const { registerUser, authUser, verifyToken } = require('./authController')
const authMiddleware = require('../../middleware/auth')


router.post('/register', registerUser)
router.post('/authenticate', authUser)
router.get('/verify', authMiddleware, verifyToken)

module.exports = router