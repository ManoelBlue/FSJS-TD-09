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
    console.log(req.body);
    try {
        user = await Users.create(req.body);
        res.status(201).end();
    } catch (error) {
        if(error.name === "SequelizeValidationError") {
            console.log(error);
            res.json({
                message: "The user could not be created."
            });
            res.status(400).end()
        } else {
            console.log(error);
            throw error;
        } 
    }
}));

//Courses routes:
// Get all Courses route:
router.get('/courses', )

module.exports = router;