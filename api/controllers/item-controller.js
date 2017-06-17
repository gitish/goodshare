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
exports.create_new_items = function(req, res) {
    var item = new Item();
    item.itemId = req.body.itemId;
    item.userId = req.body.userId;
    item.name = req.body.name;
    item.desc = req.body.desc;
    item.img = req.body.img;
    item.specification = req.body.specification;
    item.location = req.body.location;
    item.last_updated = req.body.last_updated;
    item.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'data save' });
    })
}

exports.update_a_item = function(req, res) {
    Item.findById(req.params.taskId, function(err, item) {

        if (err)
            res.send(err);

        item.name = req.body.name;
        item.desc = req.body.desc;
        item.img = req.body.img;
        item.specification = req.body.specification;
        item.location = req.body.location;
        item.last_updated = req.body.last_updated;

        //save
        item.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: "name updated" });
        });
    });
    console.log("put call with requestId in path")
};

exports.delete_a_item = function(req, res) {
    Item.remove({
        itemId: req.params.taskId
    }, function(err, Item) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successful delete" });
    });
    console.log("delete call withe requestId in path")
};
/**
 * Created by sshail on 03/06/2017.
 */