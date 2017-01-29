/**
 * Created by Captain on 27.01.2017.
 * Driver Controller File - 'Controller' doesn't mean MVC's controller
 */
"use strict";
const mDriver = require("../models/mDrivers");

/**
 * @param req - request
 * @param res - response
 */
exports.create = (req, res) => {

    let driver = new mDriver();
    driver.name = req.body.name;
    driver.surname = req.body.surname;

    driver.save((err, newDriver) => {
        if (err)
            res.send(err);

        res.json({message: "success", _id: newDriver._id})
    });

};

/**
 * @param req - request
 * @param res - response
 */
exports.update = (req, res) => {

    mDriver.findById(req.params._id, (err, driver) => {
        if (err)
            res.send(err);

        driver.name = req.body.name;
        driver.surname = req.body.surname;
        driver.jobCount = req.body.jobCount;
        driver.currLoc = req.body.currLoc;

        driver.save((err, newDriver) => {
            if (err)
                res.send(err);

            res.json({message: "success", updatedDriver: newDriver})
        });
    });

};

/**
 * @param req - request
 * @param res - response
 */
exports.all = (req, res) => {

    mDriver.find((err, drivers) => {
        if (err)
            res.send(err);

        res.json(drivers);
    });

};

/**
 * @param req - request
 * @param res - response
 */
exports.find = (req, res) => {

    mDriver.findById(req.params._id, (err, driver) => {
        if (err)
            res.send(err);

        res.json(driver);
    });

};

/**
 * @param req - request
 * @param res - response
 */
exports.delete = (req, res) => {

    mDriver.findById(req.params._id, (err, driver) => {
        if (err)
            res.send(err);

        driver.remove(() => {
            res.json({message: "Deleted", _id: req.params._id});
        });
    });

};

/**
 * @param req - request
 * @param res - response
 */
exports.closestThree = (req, res) => {

    //using mongoose geoNear to find closest 3 driver.
    mDriver.geoNear(
        {type: "Point", coordinates: req.body.location},
        {
            spherical: true,
            maxDistance: 1000, //1000 meters
            limit : 3
        }
    ).then((doc)=>{
        res.json(doc);
    });

};