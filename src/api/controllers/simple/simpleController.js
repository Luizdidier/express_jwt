const firstRoute = (req, res, next) => {
    return res.status(200).send({ 'Ok': true})
}

module.exports = { firstRoute }