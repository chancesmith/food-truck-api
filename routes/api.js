const express = require('express')
const router = express.Router()
const Truck = require('../models/truck')

// get all Trucks
router.get('/trucks', function (req, res, next) {
  Truck.find({}).then(function (trucks) {
    res.send(trucks)
  }).catch(next)
})
// get one Truck
router.get('/trucks/:id', function (req, res, next) {
  Truck.findOne({_id: req.params.id }).then(function (truck) {
    res.send(truck)
  }).catch(next)
})
// add new Truck
router.post('/trucks', function (req, res, next) {
  Truck.create(req.body)
    .then(function (truck) {
      res.send(truck)
    }).catch(next)
})
// update Truck
router.put('/trucks/:id', function (req, res, next) {
  Truck.findByIdAndUpdate({_id: req.params.id }, req.body)
    .then(function () {
      Truck.findOne({_id: req.params.id}).then(function (truck) {
        res.send(truck)
      })
    }).catch(next)
})
// delete one Truck
router.delete('/trucks/:id', function (req, res, next) {
  Truck.findByIdAndRemove({_id: req.params.id })
    .then(function (truck) {
      res.send(truck)
    }).catch(next)
})

module.exports = router