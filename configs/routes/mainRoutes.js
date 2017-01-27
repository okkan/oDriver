/**
 * Created by Captain on 27.01.2017.
 */
/**
 * Created by Captain on 27.01.2017.
 */
/**
 * Created by Captain on 27.01.2017.
 */
"use strict";

const cDrivers = require("../../controllers/cDrivers");

module.exports = (app, router)=>{
    router.route("/").get(
        (req, res) => {
            res.json({message: "main active"});
        }
    );

    app.use("/", router);
};