'use strict';
var mongoose = require('mongoose'),
    Item = mongoose.model('item');

exports.read_items = function(req, res) {
    Item.find({}, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
    console.log("get call with requestId in path")
};

exports.update_a_item = function(req, res) {
    Item.findById(req.params.itemId, function(err, item) {
        if (err)
            res.send(err);
        item.name = req.body.name;
        item.desc = req.body.desc;

        //save
        item.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: "name updated" });
        });
    })
    console.log("put call with requestId in path")
};

exports.delete_a_item = function(req, res) {
    Item.remove({
        _id: req.params.itemId
    }, function(err, Item) {
        if (err) {
            res.send(err);
            res.json({ message: "Successful delete" });
        }
    });
    console.log("delete call withe requestId in path")
};
/**
 * Created by sshail on 03/06/2017.
 */