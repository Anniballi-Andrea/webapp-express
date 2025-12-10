function errorHandler(err, req, res, next) {

    res.status(500)
    res.json({
        error: true,
        message: err.message
    })
    next
}

module.exports = errorHandler