const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    phone: {
        type: Number,
    },
    address: {
        street: { type: String },
        city: { type: String },
        pincode: { type: String }
    }
})

module.exports = mongoose.model('user', userSchema)