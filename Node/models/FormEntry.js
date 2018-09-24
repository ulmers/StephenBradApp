const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var formEntrySchema = new Schema({
    userId: String,
    formName: String,
    birthDate: String,//YYYYMMDD
    isMale: Boolean,
    healthPlans: [{
        name: String,
        deductible: Number,
        annualPremium: Number,
        outOfPocketMaximum: Number
    }],
    hasChronicDisease: Boolean
});

module.exports = mongoose.model('FormEntry', formEntrySchema);
