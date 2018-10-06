'use strict'

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const router = express.Router();

//Load Profile and User model
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route      GET api/profile  /test
// @desc       Tests profile route
// @access     Public
router.get('/test', (req, res) => res.json({msg: 'Profile works'}));

// @route      GET api/profile
// @desc       Get current users profile
// @access     Private
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id}).then(profile => {
        if (!profile) {
            errors.noprofile = 'There is no profile for this user'
            return res.status(404).json(errors)
        }
        res.json(profile);
    }).catch(err => res.status(404).json(err));
})

// @route      POST api/profile
// @desc       Create user profile
// @access     Private
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    //Get fields
    
})

module.exports = router;