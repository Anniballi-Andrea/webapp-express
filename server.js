const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

const movieRouter = require('./routes/movies')
const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, resp) => {

    resp.send(`server respond at port ${PORT}`)
})

app.use('/api/movies', movieRouter)

app.listen(PORT, () => {
    console.log('server is running')
})

app.use(errorHandler)
app.use(notFound)
