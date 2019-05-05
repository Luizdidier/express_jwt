const express = require('express')
const router = express.Router()
const { sendVenda } = require('./vendasController')
const authMiddleware = require('../../middleware/auth')

router.post('/create/venda', authMiddleware ,sendVenda)

module.exports = router