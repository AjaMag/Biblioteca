// sections HTML routes HTML routes
const path = require('path')

// HTML-Routes
module.exports = (app) => {

  app.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/sections/index.html'))
  })

} // module.exports  
