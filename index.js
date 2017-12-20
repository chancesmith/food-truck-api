const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// init the app
const app = express()

// connect to mongdb: foodtruck
mongoose.connect('mongodb://localhost/foodtruck')
mongoose.Promise = global.Promise

// parse body
app.use(bodyParser.json())

// init routes
app.use('/api', require('./routes/api'))

// error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({error: err.message})
})

// listen to request
app.listen(process.env.port || 4000, function () {
  console.log('ready for requests')
})