/**
 * Created by Captain on 27.01.2017.
 */
"use strict";

const cDrivers = require("../../controllers/cDrivers");

module.exports = (app, router)=>{
  router.route("/").post(
      (req, res) => {
          res.json({message: req.body.deneme, from : "routes.js"});
      }
  )

    app.use("/api", router);
};