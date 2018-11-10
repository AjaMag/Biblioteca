// API-Routes 
module.exports = (app) => {  
  require('./sectionsRoutes')(app)
  require('./booksRoutes')(app)
  require('./cartRoutes')(app)
}


