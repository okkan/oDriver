/**
 * Created by Captain on 27.01.2017.
 */
"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 8088;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./configs/routes/index")(app);

app.listen(port, () => {
    console.log("Api listening at", port.toString(), "port");
});

