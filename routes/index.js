const express = require('express')
const router = express.Router()

const getBooksRouter = require('./getBooksRouter')
const getBookRouter = require('./getBookRouter')
const editBookRouter = require('./editBookRouter')
const createBookRouter = require('./createBookRouter')
const deleteBookRouter = require('./deleteBookRouter')
const loginRouter = require('./loginRouter')



router.use('/', getBooksRouter)
router.use('/', getBookRouter)
router.use('/', createBookRouter)
router.use('/', editBookRouter)
router.use('/', deleteBookRouter)
router.use('/', loginRouter)

module.exports = router