var q = require('q');

function success(value) {
  console.log(value);
}

function failure(reason) {
}

var deferred = q.defer();
deferred.promise.then(success, failure);
setTimeout(deferred.resolve, 300, "RESOLVED!")

