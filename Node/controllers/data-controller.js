const jwt      = require('jsonwebtoken');
const exec     = require('child_process').exec;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dev');

var User = require('../models/User.js');
var FormEntry = require('../models/FormEntry.js');

function sendToken(res, package) {

    console.log('send token with package:' + package.toString());

    var token = jwt.sign({}, process.env.SECRET_KEY, {
        expiresIn: 4000
    });

    res.json({
        success: true,
        token: token,
        package: package
    });
}

// CREATE

module.exports.postFormEntry = function(req, res) {
    console.log(req.body);

    var formEntryJSON = req.body;

    // TODO: add formEntry to db

    var formEntry = new FormEntry({
        userId: formEntryJSON.userId,
        formName: formEntryJSON.formName,
        birthDate: formEntryJSON.birthDate,
        isMale: formEntryJSON.isMale,
        healthPlans: formEntryJSON.healthPlans,
        hasChronicDisease: formEntryJSON.hasChronicDisease
    });

    formEntry.save(function(err) {
        if(err) {
            res.status(500).send('Error: ' + err.toString());
        }


    });

    // TODO: run through python

    exec('python ../Python/modelMain.py ' + formEntryJSON, (err, stdout, stderr) => {
        console.log(stdout);

        // TODO: add result to db

        // TODO: send result to user

        res.send()
    })


};

// READ
module.exports.helloWorld = function(req, res) {
    res.send('Hello World!');
}

// UPDATE

// DELETE
