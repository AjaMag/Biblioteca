// sections HTML routes HTML routes
const path = require('path')

// HTML-Routes
module.exports = (app) => {

  app.get('/sectionadmin', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sections/index.html'))
  })
  
  app.get('/sectionadmin-add', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sections/sectionAdd.html'))
  })

  app.get('/sectionadmin-edit', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sections/sectionEdit.html'))
  })

  app.get('/sectionadmin-delete', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/sections/sectionDelete.html'))
  })

} // module.exports  
