const express = require('express')
var bodyParser = require('body-parser');

const app = express();

//cargar archivos rutas
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

// rutas
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', post);
app.get('/', (req, res) => res.send('Hello there!'));




module.exports = app;