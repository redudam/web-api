'use strict'

module.exports.getTask = function getTask(req, res, next) {
  res.send({
    message: 'This is the mockup controller for getTask'
  });
};

module.exports.updateTask = function updateTask(req, res, next) {
  res.send({
    message: 'This is the mockup controller for updateTask'
  });
};