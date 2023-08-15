const fs = require('fs')
const os = require('os')

module.exports = (req, res, next) => {
  const now = Date.now()
  const {url, method} = req
  const data = `${now} ${method} ${url}`

  // os.EOL = \n
  fs.appendFile('server.log', data + os.EOL, (err) => {
    if (err) throw Error
  })

  next()
}