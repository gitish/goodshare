/**
 * Created by sshail on 03/06/2017.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationMap= new Schema({
    source:String,
    destination:String,
    distance:Number,
    status:Boolean
});

/*
add another schema here
 */
module.exports = mongoose.model('locationMap', locationMap);