const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of the ninjas from db
router.get('/ninjas', function(req, res, next){
    res.send ({type: 'GET'});
});

//add a new ninja to database
router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
            res.send(ninja);
    }).catch(next);
});

//update ninja in database
router.put('/ninjas/id', function(req, res, next){
    Ninja.findByIdAndRemove({_id:req.params.id},req.body).then(function(){
        Ninja.findOne({_id:req.params.id}).then(function(ninja){
            res.send (ninja);
        });
    });
});

//delete ninga in database
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});



module.exports = router;