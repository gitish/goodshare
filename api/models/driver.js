/**
 * Created by sshail on 03/06/2017.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var driver= new Schema({
    itemId: {
        type: String
    },
    userId:{
        type:String
    },
    date:{
        type:Date
    },
    startLocation:{
        type:String
    },
    startTime:{
        type:String
    },
    waitTime:{
        type:Number
    },
    workTime:{
        type:Number
    },
    currentLocation:{
        type:String
    },
    expenseOnItem:{
        type:Number
    },
    expenseDetails:{
        type:String
    }
});

/*
add another schema here
 */
module.exports = mongoose.model('driver', driver);