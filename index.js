'use strict';

const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('./models/db');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "/views/"));

app.get('/', (req, res) => {
    res.render('index');
});

// Create a Server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});