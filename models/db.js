'use strict';

const config = require('../config/config');
const mongoose = require('mongoose');

let username = config.DEFAULT_USERNAME;
let password = config.DEFAULT_PASSWORD;
let database = config.DEFAULT_DATABASE;
let host = config.DEFAULT_HOST;
let dbPort = config.DEFAULT_DBPORT;
let environment = config.NODE_ENV;

let connectionUrl = (environment !== 'local') ? `mongodb://${username}:${password}@${host}:${dbPort}/${database}?ssl=true&retrywrites=false` : `mongodb://${host}:${dbPort}/${database}`;
console.log('connectionUrl ', connectionUrl);

mongoose.connect(connectionUrl, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB connection Succeeded!');
    } else {
        console.log('Error in DB Connection: ', err);
    }
});

require('./users.model');