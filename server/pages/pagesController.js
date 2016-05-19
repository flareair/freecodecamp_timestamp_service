'use strict';
const path = require('path');


exports.renderMain = (req, res, next) => {
    res.render('pages/views/layout.html');
};