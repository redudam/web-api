'use strict'

var vartasksController = require('./tasksControllerService');

module.exports.findTasks = function findTasks(req, res, next) {
  vartasksController.findTasks(req.swagger.params, res, next);
};

module.exports.createTask = function createTask(req, res, next) {
  vartasksController.createTask(req.swagger.params, res, next);
};