const express = require('express')
const app = express()
const PORT = 3000

const movieRouter = require('./routes/movies')
const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')

app.use(express.json())

app.get('/', (req, resp) => {

    resp.send(`server respond at port ${PORT}`)
})

app.use('/api/movies', movieRouter)

app.listen(PORT, () => {
    console.log('server is running')
})

app.use(errorHandler)
app.use(notFound)
