const { getClienteByCnpj, createCliente, createVenda, getAllVendas} = require('./vendasDb')
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

const getVendas = async (req, res) => {
    try{
        const data = { data : await getAllVendas() } 

        if(_.isEmpty(data.data))
            return res.status(404).send({data: 'Not Found !'})

        return res.status(200).send(data)
    } catch(err) {
        console.log(err)
        res.status(400).send({error: 'Some wrong request'})
        next()
    }
}

module.exports = { sendVenda, getVendas }