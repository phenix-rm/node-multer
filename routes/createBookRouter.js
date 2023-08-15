const express = require('express')
const router = express.Router()
const stor = require('../stor')
// import Book from '../stor/books'

router.post('/books', (req, res) => {
  const {books} = stor
  const {
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName
  } = req.body
  const newBook = new Book(
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName
  )
  books.push(newBook)
  res.status(201)
  res.json(newBook)
})

module.exports = router