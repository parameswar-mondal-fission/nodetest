'use strict';

const utility = require('../utility/utility');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const user = new User();
const error = new Error();

// create user
exports.create = (req, res, next) => {
    console.log('req.body ', req.body);
    let { body } = req;

    if (!body || (body && Object.keys(body).length === 0 && Object.getPrototypeOf(body) === Object.prototype)) {
        error.status = 400;
        error.message = 'Please give the request body parameters to user create';
        return next(error);
    }

    try {
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.email = body.email;
        user.phone = body.phone;
        user.gender = body.gender;
        user.address = body.address;
        user.pin = body.pin;

        user.save().then((data) => {
            return res.status(200).send({
                result: {
                    success: true,
                    data: data,
                    message: 'User Created Successfully!'
                }
            });
        }).catch((error) => {
            console.log('User creation error: ', error);
            if (error.name === 'ValidationError') {
                const validationError = utility.handleValidationError(error);
                return res.status(400).send({
                    error: validationError
                });
            } else {
                return res.status(400).send({
                    error: error
                });
            }
        });

    } catch (error) {
        return next(error);
    }
};

// user list
exports.list = (req, res, next) => {
    try {
        User.find().then((data) => {
            return res.status(200).send({
                result: {
                    success: true,
                    data: data
                }
            });
        }).catch((error) => {
            return res.status(400).send({
                error: error
            });
        });
    } catch (error) {
        return next(error);
    }
};

// user find by id
exports.findById = (req, res, next) => {
    if (!req.params.id) {
        error.status = 400;
        error.message = 'Please pass the user id';
        return next(error);
    }

    try {
        User.findOne({
            _id: req.params.id
        }).then((data) => {
            return res.status(200).send({
                result: {
                    success: true,
                    data: data
                }
            });
        }).catch((error) => {
            return res.status(400).send({
                error: error
            });
        });
    } catch (error) {
        return next(error);
    }
};

// update user
exports.update = (req, res, next) => {
    console.log('req.body ', req.body);
    let { body } = req;

    if (!body.id) {
        error.status = 400;
        error.message = 'Please pass the user id';
        return next(error);
    }

    if (!body || (body && Object.keys(body).length === 0 && Object.getPrototypeOf(body) === Object.prototype)) {
        error.status = 400;
        error.message = 'Please give the request body parameters to user create';
        return next(error);
    }

    try {
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.email = body.email;
        user.phone = body.phone;
        user.gender = body.gender;
        user.address = body.address;
        user.pin = body.pin;

        User.findOneAndUpdate({ _id: body.id }, body, { new: true }, (error, data) => {
            if (!error) {
                return res.status(200).send({
                    result: {
                        success: true,
                        data: data
                    }
                });
            } else {
                if (error.name === 'ValidationError') {
                    const validationError = utility.handleValidationError(error);
                    return res.status(400).send({
                        error: validationError
                    });
                } else {
                    return res.status(400).send({
                        error: error
                    });
                }
            }
        });

    } catch (error) {
        return next(error);
    }
};

// delete user
exports.delete = (req, res, next) => {
    if (!req.params.id) {
        error.status = 400;
        error.message = 'Please pass the user id';
        return next(error);
    }

    try {
        User.findByIdAndRemove({ _id: req.params.id }).then((data) => {
            return res.status(200).send({
                result: {
                    success: true,
                    data: data
                }
            });
        }).catch((error) => {
            return res.status(400).send({
                error: error
            });
        });
    } catch (error) {
        return next(error);
    }
};