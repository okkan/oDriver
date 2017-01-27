/**
 * Created by Captain on 27.01.2017.
 */
"use strict";

const cDrivers = require("../../controllers/cDrivers");

module.exports = (app, router) => {
    router.route("/driver")
        .post(
            cDrivers.create
        )
        .get(
            cDrivers.all
        );
    router.route("/driver/:_id")
        .get(
            cDrivers.find
        )
        .put(
            cDrivers.update
        );

    app.use("/api", router);
};