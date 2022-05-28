const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    pin: {
        type: Number
    }
});

mongoose.model('User', userSchema);