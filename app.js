//Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express();
const port = 8000;


//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//Set Templating Engine
app.set(expressLayouts)
app.set('view engine', 'ejs')

//Navigation
app.get('', (req, res) => {
  res.render('index')
})

//Listen on Port 5500
app.listen(port, () => console.info(`Example app listening on port ${port}!`))

