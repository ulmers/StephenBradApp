const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var healthInsuranceRecFormEntrySchema = new Schema({
    userId: String,
    birthDate: String,//YYYYMMDD
    isMale: Boolean,
    healthPlans: [{
        name: String,
        deductible: Number,
        annualPremium: Number,
        outOfPocketMaximum: Number
    }],
    hasChronicDisease: Boolean,
    result_id: _id
});

module.exports = mongoose.model('HealthInsuranceRecFormEntry', healthInsuranceRecFormEntrySchema);
