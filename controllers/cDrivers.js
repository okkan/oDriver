/**
 * Created by Captain on 27.01.2017.
 */
"use strict";
const mongoose = require("mongoose");
const mDriver = require("../models/mDrivers");

exports.create = (req, res)=>{

    let driver = new mDriver();
    driver.name = req.body.name;
    driver.surname = req.body.surname;

    driver.save((err, newDriver)=>{
        if(err)
            res.send(err);

        res.json({message : "success", _id:newDriver._id})
    });

};

exports.update = (req, res)=>{

    mDriver.findById(req.params._id,(err, driver)=>{
        if(err)
            res.send(err);

        driver.name = req.body.name;
        driver.surname = req.body.surname;
        driver.jobCount = req.body.jobCount;
        driver.currLoc= {latitude: req.body.currLoc.latitude, longitude: req.body.currLoc.longitude};

        driver.save((err, newDriver)=>{
            if(err)
                res.send(err);

            res.json({message : "success", updatedDriver: newDriver})
        });
    });

};


exports.all = (req, res)=>{

    mDriver.find((err, drivers)=>{
        if(err)
            res.send(err);

        res.json(drivers);
    });

};

exports.find = (req, res)=>{

    mDriver.findById(req.params._id,(err, driver)=>{
        if(err)
            res.send(err);

        res.json(driver);
    });

};