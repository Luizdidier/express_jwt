const express = require('express')
const router = express.Router()
const { sendVenda, getVendas } = require('./vendasController')
const authMiddleware = require('../../middleware/auth')

router.post('/create/venda', authMiddleware ,sendVenda)
router.get('/vendas', getVendas)

module.exports = router