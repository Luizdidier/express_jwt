const express = require('express')
const router = express.Router()
const { firstRoute } = require('./simpleController')
const authMiddleware = require('../../middleware/auth')

router.get('/project', authMiddleware, firstRoute)

module.exports = router