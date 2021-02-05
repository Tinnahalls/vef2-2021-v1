const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const videos = require('../vef2-2021-v1/src/videos');

const app = express();
const PORT = process.env.PORT || 5000;

// Get JSON File



// Get date
app.locals.parseDate = (d) => {
  const date = new Date(d);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};



// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use('/png', express.static(__dirname + 'videos/png'));

// something maybbe missing?
// app.use('/', public);

// Set Templating Engine
app.use(expressLayouts);
app.set("view engine", "ejs");

// Routes
app.get("", (req, res) => {
  res.render("index", { title: "Home Page" });
});

// Listen on Port 5000
app.listen(PORT, () => console.info(`App listening on port ${PORT}`));
