/**
 * Created by Captain on 27.01.2017.
 */
'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaDriver = new Schema(
    {
        name : String,
        surname : String,
        jobCount : Number,
        currLoc : {
            latitude : String,
            longitude : String
        },
        creationDate : {type : Date, default : Date.now()},
    }
);

module.exports = mongoose.model("Driver", schemaDriver);