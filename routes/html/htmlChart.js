// Chart HTML routes
const path = require('path')

// HTML-Routes
module.exports = (app) => {

  app.get('/chartview', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/charts/chart.html'))
  })

} // module.exports  
