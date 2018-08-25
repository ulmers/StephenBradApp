var jwt = require('jsonwebtoken');
const exec = require('child_process').exec;
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'StephenBrad2018!',
    database: 'test'
})

connection.connect();

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

module.exports.createFormEntry = function(req, res) {

    // TODO: Save entry to db with entry result null

    // TODO: Called python child process

    // TODO: Add entry result id to entry

    // TODO: Send result to user


}

// READ
module.exports.helloWorld = function(req, res) {
    res.send('Hello World!');
}

// UPDATE

// Delete
