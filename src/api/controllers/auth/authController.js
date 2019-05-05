const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth')
const _ = require('lodash')
const { findUserByEmail, createUser } = require('./authDb')

const _generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, { expiresIn: 84600 })
}

const registerUser = async (req, res) => {
    const { email } = req.body
   try {

        if(await findUserByEmail(email))
            return res.status(400).send({error: "User already exists"})

        const user = await createUser(req.body)

        return res.send( {user: user, token: _generateToken({ id: user.id, name: user.name, email: user.email })} )
   } catch (err) {
       return res.status(400).send({error: 'Registration failed'})
   }
}

const authUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await findUserByEmail(email)

        if(_.isUndefined(user))
            return res.status(400).send({error: 'User not found'})

        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error: 'Invalid password'})

        user.password = undefined

        return res.send({user, token: _generateToken({ id: user.id, name: user.name, email: user.email })})
    } catch(err) {
        console.log(err)
        return res.status(400).send({error: 'Some wrong request'})
    }
}

module.exports = {
    registerUser,
    authUser
}