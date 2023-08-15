const express = require('express')
const router = express.Router()
const stor = require('../stor')

router.put('/books/:id', (req, res) => {
  const {books} = stor
  const {id} = req.params
  const idx = books.findIndex(el => el.id === id)
  if (idx !== -1) {
    const {
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName
    } = req.body
    books[idx] = {
      ...books[idx],
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName
    }
    res.json(books[idx])
  } else {
    res.status(404)
    res.json('404 | страница не найдена')
  }
})

module.exports = router