const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/magicDB', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB connection Succeeded!');
    } else {
        console.log('Error in DB Connection: ', err);
    }
});

require('./users.model');