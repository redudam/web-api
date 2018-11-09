'use strict'

module.exports.findTasks = function findTasks(req, res, next) {
  res.send({
    message: 'This is the mockup controller for findTasks'
  });
};

module.exports.createTask = function createTask(req, res, next) {
  res.send({
    message: 'This is the mockup controller for createTask'
  });
};