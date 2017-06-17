/**
 * Created by sshail on 03/06/2017.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var location= new Schema({
    locationId: {
        type: String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    dist:{
        type:String
    },
    post_office:{
        type:String
    },
    local_location:{
        type:String
    },
    pin_code:{
        type:String
    },
    geo_location:{
        type:String
    },
    geo_longi{
        type:Number
    },
    geo_lati{
        type:Number
    }
});

/*
add another schema here
 */
module.exports = mongoose.model('location', location);