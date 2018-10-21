const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var healthInsuranceRecFormResultSchema = new Schema({
    userId: String,

});

module.exports = mongoose.model('HealthInsuranceRecFormResult', healthInsuranceRecFormResultSchema);
