// HTML-Routes 
module.exports = (app) => {  
  require('./html/htmlBooks')(app)
  require('./html/htmlCarts')(app)
  require('./html/htmlSections')(app)
}