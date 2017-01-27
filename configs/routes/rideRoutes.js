/**
 * Created by Captain on 27.01.2017.
 */
"use strict";

const cDrivers = require("../../controllers/cDrivers");

module.exports = (app, router)=>{
    router.route("/").post(
      cDrivers.closestThree
    );

    app.use("/ride", router);
};