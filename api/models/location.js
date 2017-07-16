'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var location = new Schema({
    locationId: {
        type: String,
        Required: 'kindly enter locationId'
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    region: {
        type: String
    },
    addressline1: {
        type: String
    },
    addressline2: {
        type: String
    },
    pincode: {
        type: String
    },
    geolocation: {
        type: String
    },
    geolongitude: {
        type: String
    },
    geolatitude: {
        type: String
    }
});



module.exports = mongoose.model('location', location);