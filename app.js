const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

// setting the route and corresponding response
app.get('/', (req, res) => {
  res.send(`This is my first Express Web App`)
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})