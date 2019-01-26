const express = require('express');
const router = express.Router();

//get a list of the ninjas from db
router.get('/ninjas', function(req, res){
    res.send ({type: 'GET'});
});

//add a new ninja to database
router.post('/ninjas', function(req, res){
    console.log(req.body);
    res.send ({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
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