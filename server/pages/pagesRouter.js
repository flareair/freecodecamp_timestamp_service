'use strict';

const express = require('express');
let router = express.Router();

const pagesController = require('./pagesController');

/*
    Mount point /pages
*/

router.get('/', pagesController.renderMain);


module.exports = router;
