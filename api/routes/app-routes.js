/**
 * Created by sshail on 03/06/2017.
 */
'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/app-controller.js');

    app.route('/tasks')
        .get(todoList.list_all_users)
        .post(todoList.create_new_user);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};