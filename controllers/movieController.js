
const connection = require('../database/db_movies')

const index = (req, res) => {

    const sql = 'SELECT* FROM movies'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })

        //console.log(results)

        res.json(results)
    })

}

const show = (req, res) => {

    const id = Number(req.params.id)

    const sql = 'SELECT `id`, `title`, `genre`, `release_year`, `director`, `abstract`, `image`FROM `movies` WHERE `id`= ?'
    const reviewSql = 'SELECT `name`,`text` AS `review`, `vote`, `created_at`FROM `reviews` WHERE `movie_id`= ?'


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

        const movie = results[0]

        connection.query(reviewSql, [id], (err, reviewResults) => {
            if (err) {
                return res.status(500).json({
                    error: true,
                    message: err.message
                })
            }
            movie.review = reviewResults
            //console.log(movie)
            res.json(movie)
        })


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