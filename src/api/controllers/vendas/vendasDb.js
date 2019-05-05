const knex = require('../../../database/knex')
const bcrypt = require('bcryptjs')

const getClienteByCnpj = async (cliente) => {
    try{
        let query = await knex('Clientes')
                            .select('id', 'name', 'cnpj', 'rua', 'numero', 'cidade', 'estado', 'cep')
                            .where('cnpj', cliente.cnpj)
        return query[0]
    } catch (err) {
        console.log(err)
        return null
    }
}

const createCliente = (obj) => {
    return knex('Clientes')
            .insert({
                name: obj.cliente.nome,
                cnpj: obj.cliente.cnpj,
                rua: obj.rua,
                cidade: obj.cidade,
                estado: obj.estado,
                numero: obj.numero,
                cep: obj.cep,
                email: obj.email ? obj.email : ''
            })
            .returning('id')
}   

const createVenda = (obj, cliente_id) => {
    return knex('Vendas')
            .insert({
                cliente_id: cliente_id,
                rua: obj.rua,
                cidade: obj.cidade,
                estado: obj.estado,
                numero: obj.numero,
                cep: obj.cep,
                observacao: obj.observacao,
                valor_total: obj.valor_total,
                prazo: obj.prazo
            })
}


module.exports = {
    getClienteByCnpj,
    createCliente,
    createVenda  
}