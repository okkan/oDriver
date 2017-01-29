/**
 * Created by Captain on 28.01.2017.
 */
"use strict";
const should = require('should');
const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const winston = require('winston');
const config = require('../configs/index');
const server = require("../index");


let url = "http://localhost:8088";
let test_id = "";

let generate_Location = () => {
    let r = 1000 / 111300 // = 1000 meters
        , y0 = -45.79888
        , x0 = 5.17888
        , u = Math.random()
        , v = Math.random()
        , w = r * Math.sqrt(u)
        , t = 2 * Math.PI * v
        , x = w * Math.cos(t)
        , y1 = w * Math.sin(t)
        , x1 = x / Math.cos(y0)

    let result = [];

    result.push(y0 + y1);
    result.push(x0 + x1);
    return result;
};


describe("Routing", () => {
    before(() => {
        let options = {server: {socketOptions: {keepAlive: 1}}};
        mongoose.connect(config.db, options).connection;
        done();
    });
});

describe("Driver", () => {


    it('should post new driver to server', (done) => {
        let driver = {
            name: "test",
            surname: "driver",
        };

        request(url)
            .post('/api/driver')
            .send(driver)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                res.status.should.have.equal(200);
                res.body.message.should.have.equal("success");
                res.body.should.have.property("_id");
                test_id = res.body._id;
                done();
            });


    });

    it('should update test driver successfully', (done) => {
        let userLocation = generate_Location();
        let driver = {
            name: "test user",
            surname: "driverson",
            currLoc: userLocation,
            jobCount: 1
        };
        request(url)
            .put('/api/driver/' + test_id)
            .send(driver)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                res.status.should.have.equal(200);
                res.body.message.should.have.equal("success");
                res.body.should.have.property("updatedDriver");
                res.body.updatedDriver.name.should.have.equal("test user");
                res.body.updatedDriver.surname.should.have.equal("driverson");
                res.body.updatedDriver.jobCount.should.have.equal(1);
                res.body.updatedDriver.currLoc.should.containDeepOrdered(userLocation);
                done();
            });
    });

    it('should find a random driver successfully', (done) => {
        request(url)
            .get('/api/driver/' + test_id)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                res.status.should.have.equal(200);
                res.body._id.should.have.equal(test_id);
                done();
            });
    });

    it('should list all drivers successfully', (done) => {
        request(url)
            .get('/api/driver')
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                res.status.should.have.equal(200);
                done();
            });
    });
    it('should list 3 closest located drivers successfully', (done) => {
        let location = {"location": [-45.79888, 5.17888]};
        request(url)
            .post('/ride')
            .send(location)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                res.status.should.have.equal(200);
                done();
            });
    });


    it('should delete test user successfully', (done) => {
        request(url)
            .delete('/api/driver/' + test_id)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                res.status.should.have.equal(200);
                res.body.message.should.have.equal("Deleted");
                res.body._id.should.have.equal(test_id);
                done();
            });
    });


});