'use strict';
var mongoose = require('mongoose'),
    Item = mongoose.model('item');

exports.read_items = function(req, res) {
    console.log("get call with requestId in path")
};

exports.update_a_item = function(req, res) {
    console.log("put call with requestId in path")
};

exports.delete_a_item = function(req, res) {
    console.log("delete call withe requestId in path")
};
/**
 * Created by sshail on 03/06/2017.
 */
