'use strict';
var mongoose = require('mongoose'),
    User = mongoose.model('user');

exports.list_all_users = function(req, res) {
    console.log("get call for user data");
    User.find({}, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.create_new_user = function(req, res) {
    console.log("post call without pathparam");
    var user = new User(req.body);
    console.log(req.body);
    console.log(JSON.stringify(user));
    user.save(function(err, result) {
        if (err){
            res.send(err);
        }
        res.json(result);
    });
};

exports.update_user = function(req, res) {
    console.log("put with requestId in path")
};

exports.invalidate_user = function(req, res) {
    console.log("put call with requestId in path")
};

/**
 * Created by sshail on 03/06/2017.
 */