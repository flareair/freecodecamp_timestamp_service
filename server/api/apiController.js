'use strict';
const path = require('path');

const dateTimeUtil = require('../shared/dateTimeUtil');

exports.processDate = (req, res, next) => {
    let date = dateTimeUtil.validate(req.originalUrl);

    if (!date) {
        return res.status(400).json(dateTimeUtil.outputError());
    }

    return res.json(dateTimeUtil.outputFromUnix(date));
};