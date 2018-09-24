const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var userSchema = new Schema({
    userId: String,
    loginMethod: String,
    firstName: String,
    lastName: String,
    emailAddress: String
});

module.exports = mongoose.model('User', userSchema);
