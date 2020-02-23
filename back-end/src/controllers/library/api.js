const express = require('express');
const api = express();
const passport = require('passport');
const serviceLibrary = require('./service');

api.get('/queryImages', serviceLibrary.queryImages);
api.post('/uploadImages', serviceLibrary.uploadImages);

module.exports = api;