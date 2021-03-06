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


/**
 * connecting to mongoDB with mongoose
 */
let startServer = () => {
    let options = {server: {socketOptions: {keepAlive: 1}}};
    return mongoose.connect(config.db, options).connection;
};

/**
 * inits express
 */
let listen = () => {
    app.listen(port, () => {
        console.log("REST API listening at", port.toString(), "port");
    });
};

startServer()
    .on('error', console.log)
    .on('disconnected', startServer)
    .once('open', listen);