/**
 * Created by Captain on 27.01.2017.
 * Driver schema file for Mongoose
 */
'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaDriver = new Schema(
    {
        name : String,
        surname : String,
        jobCount : {type : Number, default : 0},
        currLoc : {
            type: [Number],  // [<longitude>, <latitude>]
            index: '2dsphere'
        },
        creationDate : {type : Date, default : Date.now()},
    }
);

module.exports = mongoose.model("Driver", schemaDriver);