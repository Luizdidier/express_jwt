const { getClienteByCnpj, createCliente, createVenda } = require('./vendasDb')
const _ = require('lodash')

const sendVenda = async (req, res, next) => {
    try{
        const body = req.body
        const cliente = await getClienteByCnpj(body.cliente)

        if(cliente){
            await createVenda(body, cliente.id)
        }else{
            const cliente = await createCliente(body)
            await createVenda(body, cliente[0])
        }
        return res.status(200).send({success: 'Venda Enviada !'})
    } catch(err) {
        console.log(err)
        res.status(400).send({error: 'Some wrong request'})
        next()
    }
}

module.exports = { sendVenda }