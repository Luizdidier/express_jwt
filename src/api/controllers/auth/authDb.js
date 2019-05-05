const knex = require('../../../database/knex')
const bcrypt = require('bcryptjs')

const findUserByEmail = async (email) => {
    try {
        const query = await knex('Users')
                            .select('id', 'name', 'email', 'password')
                            .where('email', email)
        
        return query[0]
    } catch (err) {
        return err
    }
}

const createUser = async (obj) => {
    try{
        const query = await knex('Users')
                            .insert({
                                email: obj.email,
                                password: await bcrypt.hash(obj.password, 10),
                                name: obj.name
                            })
                            .returning('*')
        return query[0]
    } catch (err) {
        return err
    }
}

module.exports = {
    findUserByEmail,
    createUser
}