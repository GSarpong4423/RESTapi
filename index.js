const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

//  set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/farmergo');
mongoose.Promise = global.Promise;

app.use(express.static('view'));

app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));


// Error handling middleware
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422).send({error: err.message});
    
});
// listen for requests
app.listen(process.env.PORT || process.env.IP, function(){
    console.log('now listening for requests');
});
