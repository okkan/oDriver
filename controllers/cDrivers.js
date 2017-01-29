/**
 * Created by Captain on 27.01.2017.
 */
"use strict";
const mDriver = require("../models/mDrivers");

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


exports.all = (req, res) => {

    mDriver.find((err, drivers) => {
        if (err)
            res.send(err);

        res.json(drivers);
    });

};

exports.find = (req, res) => {

    mDriver.findById(req.params._id, (err, driver) => {
        if (err)
            res.send(err);

        res.json(driver);
    });

};

exports.delete = (req, res) => {

    mDriver.findById(req.params._id, (err, driver) => {
        if (err)
            res.send(err);

        driver.remove(() => {
            res.json({message: "Deleted", _id: req.params._id});
        });
    });

};

exports.closestThree = (req, res) => {

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