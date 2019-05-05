const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const authRouter = require('./api/controllers/auth/index')
const vendaRouter = require('./api/controllers/vendas/index')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const corsOptions = {
    origin: '*'
};
app

app.use(cors(corsOptions))
app.use('/auth', authRouter)
app.use('/', vendaRouter)

app.listen(process.env.PORT || 3000, function(){
    console.log('Running 4000');
});
