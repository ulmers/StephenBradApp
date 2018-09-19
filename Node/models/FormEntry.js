const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.model('FormEntry', {
    userId: String,
    formName: String,
    birthdate: String,
    sex: Boolean,
    healthPlans: _id,
    hasChronicDisease: Boolean
});
