/**
 * Created by Captain on 27.01.2017.
 */
"use strict";
const mongoose = require("mongoose");

exports.create = (req, res)=>{
  res.json({message : "created"});
};