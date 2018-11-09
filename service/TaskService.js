'use strict';


/**
 * Create a new task 
 *
 * body Task  (optional)
 * returns Task
 **/
exports.createTask = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : {
    "lattitude" : 0.8008281904610115,
    "longitude" : 6.027456183070403
  },
  "description" : "description",
  "ownerId" : 2,
  "type" : "type",
  "assigneeId" : 1,
  "photos" : [ "photos", "photos" ],
  "duration" : 5,
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : 5,
  "time" : "2000-01-23T04:56:07.000+00:00",
  "status" : "available",
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all tasks from the system that the user has access to 
 *
 * limit Integer maximum number of results to return (optional)
 * returns List
 **/
exports.findTasks = function(limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : {
    "lattitude" : 0.8008281904610115,
    "longitude" : 6.027456183070403
  },
  "description" : "description",
  "ownerId" : 2,
  "type" : "type",
  "assigneeId" : 1,
  "photos" : [ "photos", "photos" ],
  "duration" : 5,
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : 5,
  "time" : "2000-01-23T04:56:07.000+00:00",
  "status" : "available",
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
}, {
  "address" : {
    "lattitude" : 0.8008281904610115,
    "longitude" : 6.027456183070403
  },
  "description" : "description",
  "ownerId" : 2,
  "type" : "type",
  "assigneeId" : 1,
  "photos" : [ "photos", "photos" ],
  "duration" : 5,
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : 5,
  "time" : "2000-01-23T04:56:07.000+00:00",
  "status" : "available",
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Info for a specific task 
 *
 * taskId String The id of the task to retrieve
 * returns Task
 **/
exports.getTask = function(taskId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : {
    "lattitude" : 0.8008281904610115,
    "longitude" : 6.027456183070403
  },
  "description" : "description",
  "ownerId" : 2,
  "type" : "type",
  "assigneeId" : 1,
  "photos" : [ "photos", "photos" ],
  "duration" : 5,
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : 5,
  "time" : "2000-01-23T04:56:07.000+00:00",
  "status" : "available",
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a specific task 
 *
 * taskId String The id of the task to update
 * returns Task
 **/
exports.updateTask = function(taskId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : {
    "lattitude" : 0.8008281904610115,
    "longitude" : 6.027456183070403
  },
  "description" : "description",
  "ownerId" : 2,
  "type" : "type",
  "assigneeId" : 1,
  "photos" : [ "photos", "photos" ],
  "duration" : 5,
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : 5,
  "time" : "2000-01-23T04:56:07.000+00:00",
  "status" : "available",
  "updatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

