//Imports
const express = require('express')
const expressLayouts = required('express-ejs-layouts')

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


//Listen on Port 8000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

