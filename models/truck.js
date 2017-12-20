const mongoose = require('mongoose')
const Schema = mongoose.Schema

// truck Schema
const TruckSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  location: {
    type: String,
    required: [true, 'Location field is required']
  },
  cuisine: {
    type: String,
    required: [true, 'Cuisine field is required']
  },
  priceRange: {
    type: String,
    required: [true, 'Price Range field is required']
  },
  url: {
    type: String,
    required: [true, 'URL field is required']
  }
})

const Truck = mongoose.model('trucks', TruckSchema)

module.exports = Truck