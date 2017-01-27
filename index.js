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

const apiRouter = express.Router();
const mainRouter = express.Router();

apiRouter.get("/", (req, res) => {
    res.json({message: "Api Active"});
});

mainRouter.get("/", (req, res)=>{
    res.json({message: "Main Active"});
});


app.use("/", mainRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
    console.log("basladı");
});

