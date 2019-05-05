const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://s3cr3t:s3cr3t@cluster0-aqeve.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose