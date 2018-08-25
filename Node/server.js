const bodyparser = require('body-parser');
const jst        = require('jsonwebtoken');
const express    = require('express');

var app = express();

// Controllers
var dataController = require('./controllers/data-controller.js');
//var authenticateController = require("./controllers/authenticate-controller.js");

app.use(bodyparser.urlencoded({limit: '2mb', extended: true}));
app.use(bodyparser.json({limit: '2mb'}));

app.listen(3000, function(){
    console.log('Listening on port 3000...')
});

// ROUTER

// CREATE

// READ

// UPDATE

// DELETE