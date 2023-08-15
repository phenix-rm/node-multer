const express = require('express')
const router = express.Router()
const stor = require('../stor')

router.delete('/books/:id', (req, res) => {
  const {books} = stor
  const {id} = req.params
  const idx = books.findIndex(el => el.id === id)
  if (idx !== -1) {
    books.splice(idx)
  } else {
    res.status(404)
    res.json('404 | страница не найдена')
  }
})

module.exports = router