/**
 * Created by sshail on 03/06/2017.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var user = new Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the user'
    },
    email:{
        type:String,
        Required: ''
    },
    mobile:{
        type:String,
        Required:''
    },
    password:{
        type:String,
        Required:'',
        default:'password@123'
    },
    Modified_date:{
        type:Date,
        default:Date.now
    },
    userId:{
        type:String
    },
    status: {
        type: [{
            type: String,
            enum: ['registered', 'active', 'inactive','blocked']
        }],
        default: ['registered']
    }
});

module.exports = mongoose.model('user', user);
/*
add another schema here
 */


