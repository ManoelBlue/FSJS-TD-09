'use strict';

const { Router } = require('express');
const express = require('express');

// Array of users:
const users = [];

// Router instance:
const router = express.Router();

// Get Route for a list of users:
router.get('/users', (req, res) => {
    res.json(users);
});

// Post Route to add a new user:
router.post('/users', (req, res) => {
    // the new user to be added:
    const user = req.body;

    // add the new user to the users array:
    users.push(user);

    // set the status to 'created':
    res.status(201).end();
});

module.exports = router;