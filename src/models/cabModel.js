const mongoose = require('mongoose');

const cabSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    driverName: {
        type: String,
    },
    driverNumber: {
        type: String
    },
    location: {
        lattitude: {
            type: Number,
            default: 0
        },
        longitude: {
            type: Number,
            default: 0
        }
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    color: {
        type: String
    }
});

module.exports = mongoose.model('cab', cabSchema)