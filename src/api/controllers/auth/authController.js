const User = require('../../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth')

const _generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, { expiresIn: 100 })
}

const registerUser = async (req, res, next) => {
    const { email } = req.body
   try {

    if(await User.findOne({email}))
        return res.status(400).send({error: "User already exists"})

    const user = await User.create(req.body)
    user.password = undefined

    return res.send( {user, token: _generateToken({ id: user.id, name: user.name, email: user.email })} )
   } catch (err) {
       console.log(err)
       res.status(400).send({error: 'Registration failed'})
       next()
   }
}

const authUser = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email }).select('+password')

        if(!user)
            res.status(400).send({error: 'User not found'})

        if(!await bcrypt.compare(password, user.password))
            res.status(400).send({error: 'Invalid password'})

        user.password = undefined

        res.send({user, token: _generateToken({ id: user.id, name: user.name, email: user.email })})
    } catch(err) {
        res.status(400).send({error: 'Some wrong request'})
        next()
    }
}

module.exports = {
    registerUser,
    authUser
}