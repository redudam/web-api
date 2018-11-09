'use strict';

var utils = require('../utils/writer.js');
var Task = require('../service/TaskService');

module.exports.createTask = function createTask (req, res, next) {
  var body = req.swagger.params['body'].value;
  Task.createTask(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findTasks = function findTasks (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  Task.findTasks(limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTask = function getTask (req, res, next) {
  var taskId = req.swagger.params['taskId'].value;
  Task.getTask(taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTask = function updateTask (req, res, next) {
  var taskId = req.swagger.params['taskId'].value;
  Task.updateTask(taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
