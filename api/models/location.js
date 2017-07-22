/**
 * Created by sshail on 03/06/2017.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var location= new Schema({
    country:String,
    state:String,
    district:String,
    region:String,
    post_office:String,
    local_location:String,
    pinCode:String,
    geoLocation:String,
    geoLongitude:Number,
    geoLatitude:Number,
    status:Boolean
});

/*
add another schema here
 */
module.exports = mongoose.model('location', location);