const express = require('express');
const api = express();
const passport = require('passport');
// require('../config/passport')(passport);

const serviceAuth = require('./service');
api.post('/signup', serviceAuth.signup);
api.post('/login', serviceAuth.login);

module.exports = api;