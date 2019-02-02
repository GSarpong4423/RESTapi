const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of the ninjas from db
router.get('/ninjas', function(req, res){
    res.send ({type: 'GET'});
});

//add a new ninja to database
router.post('/ninjas', function(req, res){
    Ninja.create(req.body).then(function(ninja){
            res.send(ninja);
    });
});

//update ninja in database
router.put('/ninjas/id', function(req, res){
    res.send ({type: 'PUT'});
});

//delete ninga in database
router.delete('/ninjas/:id', function(req, res){
    res.send ({type: 'DELETE'});
});



module.exports = router;