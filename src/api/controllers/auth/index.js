const express = require('express')
const router = express.Router()
const { registerUser, authUser } = require('./authController')


router.post('/register', registerUser)
router.post('/authenticate', authUser)

module.exports = router