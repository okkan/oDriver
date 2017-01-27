/**
 * Created by Captain on 27.01.2017.
 */
const Router = require("express").Router;

module.exports = (app)=>{
    require("./apiRoutes")(app, Router());
    require("./rideRoutes")(app, Router());
    require("./mainRoutes")(app, Router());
};