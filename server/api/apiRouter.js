'use strict';

const express = require('express');
let router = express.Router();

const apiController = require('./apiController');

/*
    Mount point /
*/
router.get('*', apiController.processDate);


module.exports = router;
