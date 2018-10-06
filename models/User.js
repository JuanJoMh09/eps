'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name : 
    { 
        type: String, 
        required: true 
    },
  
    email : { type: String, required: true },
    password : { type: String, required: true },
    avatar : { type: String},
    date : { type: Date, default: Date.now }
});

module.exports = mongoose.model('users', UserSchema);