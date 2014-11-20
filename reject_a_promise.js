var q = require('q');
var deferred = q.defer();

function success(value) {
}

function failure(error) {
  console.log(error.message);
}

deferred.promise.then(success,failure);
setTimeout(deferred.reject, 300, new Error("REJECTED!"));

