'use strict'

var vartaskstaskIdController = require('./taskstaskIdControllerService');

module.exports.getTask = function getTask(req, res, next) {
  vartaskstaskIdController.getTask(req.swagger.params, res, next);
};

module.exports.updateTask = function updateTask(req, res, next) {
  vartaskstaskIdController.updateTask(req.swagger.params, res, next);
};