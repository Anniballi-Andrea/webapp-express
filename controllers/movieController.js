
const connection = require('../database/db_movies')

const index = (req, res) => {

    const sql = 'SELECT* FROM movies'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })

        console.log(results)

        res.json(results)
    })

}

const show = (req, res) => {

    const id = Number(req.params.id)

    const sql = 'SELECT *FROM movies WHERE id= ?'

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            })
        } else if (results.length === 0) {
            return res.status(404).json({
                error: true,
                message: 'movie not found'
            })
        }

        res.json(results)

    })

}

const store = (req, res) => {
    return res.send('it work')
}

const update = (req, res) => {
    return res.send('it work')
}

const modify = (req, res) => {
    return res.send('it work')
}

const destroy = (req, res) => {
    return res.send('it work')
}

module.exports = {

    index,
    show,
    store,
    update,
    modify,
    destroy
}