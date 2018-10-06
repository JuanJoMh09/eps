const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

//cargar archivos rutas
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

//CORS

// rutas
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', post);



module.exports = app;