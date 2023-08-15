const express = require('express')
const {v4: uuid} = require('uuid')
const logger = require('./middleware/logger')
const err404 = require('./middleware/err-404')
const indexRouter = require('./routes/index')

const app = express()

app.use(logger)
app.use('/api', indexRouter)
app.use(err404)



const stor = {
  books: []
}

const PORT = process.env.PORT || 3000
app.listen(PORT)
