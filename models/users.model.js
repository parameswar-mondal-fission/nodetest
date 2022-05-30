const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: 'This first name is required'
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required'
    },
    phone: {
        type: String,
        trim: true,
        required: 'Phone number is required'
    },
    gender: {
        type: String,
        trim: true,
        required: 'Gender is required'
    },
    address: {
        type: String,
        trim: true
    },
    pin: {
        type: Number,
        trim: true,
        required: 'Pin number is required'
    }
});

mongoose.model('User', userSchema);

userSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
}, 'The e-mail field cannot be empty.');
