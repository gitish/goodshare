/**
 * Created by sshail on 03/06/2017.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var item= new Schema({
    itemId: {
        type: String,
        Required: 'Kindly enter itemId'
    },
    userId:{
        type:user.userId,
        Required: 'Invalid userID'
    },
    name:{
        type:String
    },
    desc:{
        type:String
    },
    img:{
        type:String
    },
    specification:{
        type:String
    },
    location:{
        type:String
    },
    last_updated:{
        type:Date
    }
});

/*
add another schema here
 */
module.exports = mongoose.model('item', item);