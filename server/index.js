const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// morgan log generator
app.use(morgan('combined'))
// bodyParser for JSON
app.use(bodyParser.json())
// cors This can cause security issues - probably don't use it.
 app.use(cors())
// error page

// basic endpoint
app.get('/status', (req, res) => {
  res.send({
    // returns JSON data
    message: 'hello world'
  })
})

// Morgan Logger
morgan((tokens, req, res) => {
  return [
    tokens.methods(req, res),
    tokens.url(req, res),
    tokens.status(req,res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms' 
  ].join(' ')
})


// Define port
const PORT = process.env.PORT || 8081
// listen on port
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})
