/**
 * Created by sshail on 03/06/2017.
 */
'use strict';

module.exports = function(app) {
    var userController = require('../controllers/user-controller.js');
    var itemController = require('../controllers/item-controller.js');

    app.route('/tasks')
        .get(userController.list_all_users)
        .post(userController.create_new_user)
        .put(userController.update_user)
        .delete(userController.invalidate_user);


    app.route('/tasks/:taskId')
        .get(itemController.read_items)
        .put(itemController.update_a_item)
        .delete(itemController.delete_a_item);
};