const express = require('express');
const router = express.Router();
const farmer = require('../models/farmer');

// GET request
router.get("/farmers", function(req, res, next) {
  farmer.aggregate([{
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
      },
      distanceField: "dist.calculated",
      includeLocs: "dist.location",
      maxDistance: 100000,
      spherical: true
    }
  }])
    .then(function(farmer) {
      res.send(farmer);
    })
    .catch(next);
});


// POST request | add a new farmer to the db
router.post('/farmers', function(req, res, next) {
    farmer.create(req.body).then(function(farmer) {
        res.send(farmer);
    }).catch(next);
});

// UPDATE (put) request to put a new record in the db/collection
router.put('/farmers/:id', function(req, res, next) {
    farmer.findByIdAndUpdate({_id:req.params.id}, req.body).then(function() {
        farmer.findOne({_id:req.params.id}).then(function(farmer) {
           res.send(farmer);  
        });
        
    });
   
});

// DELETE request
router.delete('/farmers/:id', function(req, res, next) {
    farmer.findByIdAndRemove({_id:req.params.id}).then(function(farmer) {
        res.send(farmer);
    });
});


module.exports = router;


