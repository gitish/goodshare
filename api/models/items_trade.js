/**
 * Created by sshail on 03/06/2017.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var item_trade= new Schema({
    itemId: {
        type: String,
        Required: 'Kindly enter itemId'
    },
    userId:{
        type:user.userId,
        Required: 'Invalid userID'
    },
    priority: {
        type: [{
            type: String,
            enum: ['general', 'priority7', 'priority15','priority30','priority90','special','recommended']
        }],
        default: ['general']
    },
    price:{
        type:Number
    },
    trade_type:{
        type:[{
            type:String,
            enum: ['sell','purchase','rent-in','rent-out','leased','support']
        }]
    }

});

/*
add another schema here
 */
module.exports = mongoose.model('item_trade', item_trade);