'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('hbs');
require('./models/db');

const port = process.env.PORT || 3000;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// parse application/json
app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "/views/"));

// all routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));

//========= Error Handling Middleware ===================//
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            success: (error.status == 200) ? true : false,
            message: error.message
        }
    });
});
//================ End ==================================//

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the hell of haven.'
}));

// Create a Server
app.listen(port, () => {
    console.log(`Nodejs Server listening on port ${port}`)
});
module.exports = app;