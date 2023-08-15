const express = require('express')
const router = express.Router()
const stor = require('../stor')

router.get('/books', (req, res) => {
  const {books} = stor
  res.status(200)
  res.json(books)
})

module.exports = router