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
    pinCode:{
        type:String
    },
    geoLocation:{
        type:String
    },
    geoLongitude:{
        type:Number
    },
    geoLatitude:{
        type:Number
    }
});

/*
add another schema here
 */
module.exports = mongoose.model('location', location);