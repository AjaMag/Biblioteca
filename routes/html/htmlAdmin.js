// HTML ADMIN

const path = require('path')

module.exports = (app) => {

  app.get('/libraryadmin', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/admin/index.html'))
  })

} // module.exports