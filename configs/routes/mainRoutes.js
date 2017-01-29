/**
 * Created by Captain on 27.01.2017.
 * / Route Config File
 */
"use strict";

module.exports = (app, router)=>{
    router.route("/").get(
        (req, res) => {
            res.json({message: "main active"});
        }
    );

    app.use("/", router);
};