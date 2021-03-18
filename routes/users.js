'use strict';

const express = require('express');
// Array of users:
const Users = require('./models').User;
// Router instance:
const router = express.Router();

/* Handler function to wrap each route. */
function asyncHandler(cb){
    return async(req, res, next) => {
        try {
        await cb(req, res, next)
        } catch(error){
        // Forward error to the global error handler
        next(error);
        }
    }
}

// Users routes:
// Get Route for a list of users:
router.get('/users', asyncHandler(async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
    res.status(200).end();
}));

// Post Route to add a new user:
router.post('/users', asyncHandler(async (req, res) => {
    let user;
    try {
        user = await Users.create(req.body);
        res.status(201).location("/").end();
    } catch (error) {
        if(error.name === "SequelizeValidationError") {
            const errors = error.errors.map(error => error.message);
            res.status(400).json({errors});
        } else {
            throw error;
        } 
    }
}));

module.exports = router;