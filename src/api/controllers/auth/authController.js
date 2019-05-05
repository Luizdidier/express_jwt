const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth')
const _ = require('lodash')
const { findUserByEmail, createUser } = require('./authDb')

const _generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, { expiresIn: 100 })
}

const registerUser = async (req, res, next) => {
    const { email } = req.body
   try {

    if(await findUserByEmail(email))
        return res.status(400).send({error: "User already exists"})

    const user = await createUser(req.body)

    console.log(user)

    return res.send( {user: user, token: _generateToken({ id: user.id, name: user.name, email: user.email })} )
   } catch (err) {
       console.log(err)
       res.status(400).send({error: 'Registration failed'})
       next()
   }
}

const authUser = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await findUserByEmail(email)

        if(_.isUndefined(user))
            return res.status(400).send({error: 'User not found'})

        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({error: 'Invalid password'})

        user.password = undefined

        res.send({user, token: _generateToken({ id: user.id, name: user.name, email: user.email })})
    } catch(err) {
        console.log(err)
        res.status(400).send({error: 'Some wrong request'})
        next()
    }
}

module.exports = {
    registerUser,
    authUser
}