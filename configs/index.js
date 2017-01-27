/**
 * Created by Captain on 27.01.2017.
 */
"use strict";
const dev = require("./env/dev");
const prod = require("./env/prod");

module.exports = {
    development: dev,
    production: prod
}[process.env.NODE_ENV || 'development'];