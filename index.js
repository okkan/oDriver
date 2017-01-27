/**
 * Created by Captain on 27.01.2017.
 */
"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./configs/index");

const app = express();

const port = process.env.PORT || 8088;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./configs/routes/index")(app);

connectToDb()
    .on('error', console.log)
    .on('disconnected', connectToDb)
    .once('open', listen);

function connectToDb() {
    let options = {server: {socketOptions: {keepAlive: 1}}};
    return mongoose.connect(config.db, options).connection;
}

function listen() {
    app.listen(port, () => {
        console.log("Api listening at", port.toString(), "port");
    });
}

