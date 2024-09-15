const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String},
    imageUrl: {type: String},
    price: {type: Number},
    userId: {type: String},
});

module.exports = mongoose.model('Thing', thingSchema);