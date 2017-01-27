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
        jobCount : {type : Number, default : 0},
        currLoc : {
            latitude : {type : Number, default : 0},
            longitude : {type : Number, default : 0},
        },
        creationDate : {type : Date, default : Date.now()},
    }
);

module.exports = mongoose.model("Driver", schemaDriver);