'use strict';

exports.validate = date => {
    let trimmed =  this.trimSlashes(date);

    if (!isNaN(trimmed)) {
        return trimmed;
    }

    let parsed = Date.parse(decodeURIComponent(trimmed));
    if (!isNaN(parsed)) {
        return parsed;
    }

    return false;
};

exports.trimSlashes = date => {
    if (date.charAt(0) === '/') {
        date = date.substr(1);
    }

    if (date.charAt(date.length - 1) === '/') {
        date = date.slice(0, -1);
    }

    return date;
};


exports.outputFromUnix = (date) => {
    let dateObj = new Date(Number(date));
    console.log(dateObj);
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let natural = months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();

    return {
        unix: date,
        natural: natural
    };
};

exports.outputError = () => {
    return {
        unix: null,
        natural: null
    };
};