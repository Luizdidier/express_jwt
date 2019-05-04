const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const authRouter = require('./api/controllers/auth/index')
const simpleRouter = require('./api/controllers/simple/index')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors())
app.use('/auth', authRouter)
app.use('/simple', simpleRouter)

app.listen(80)
