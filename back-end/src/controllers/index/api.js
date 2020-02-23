const express = require('express');
const api = express();

const serviceIndex = require('./service');
api.get('/', serviceIndex.blabla);

module.exports = api;