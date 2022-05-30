'use strict';

const express = require('express');
const app = express.Router();

const users = require('../controllers/user.controller');

app.get('/', (req, res) => {
    res.send('Welcome to the User.');
});

// user create
app.post('/create', users.create);

// all user list
app.get('/list', users.list);

// user get by id
app.get('/info/:id', users.findById);

// user update
app.put('/update', users.update);

// user delete
app.delete('/delete/:id', users.delete);

module.exports = app;