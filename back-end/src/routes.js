const express = require('express');
const router = express();

const index = require('./controllers/index/api');
router.use('/index', index);

const library = require('./controllers/library/api');
router.use('/library', library);

const auth = require('./controllers/auth/api');
router.use('/auth', auth);

module.exports = router;