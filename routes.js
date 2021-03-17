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
}));

// Post Route to add a new user:
router.post('/users', (req, res) => {
    // the new user to be added:
    const user = req.body;

    // add the new user to the users array:
    users.push(user);

    // set the status to 'created':
    res.status(201).end();
});

//Courses routes:
// Get all Courses route:
router.get('/courses', (req, res) => {

})

module.exports = router;