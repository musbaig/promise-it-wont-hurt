var Q = require('q');

var defer1 = Q.defer(),
    defer2 = Q.defer(),
    val1, val2;

function promiseOne () {
  defer1.promise
      .then(function(result) {
        val1 = result;
      })
      .then(null, function(err) {
        throw new Error(err);
      });
  return defer1.promise;
}

function promiseTwo () {
  defer2.promise
      .then(function(result) {
        val2 = result;
      })
      .then(null, function(err) {
        throw new Error(err);
      });
  return defer2.promise;
}

Q.all([promiseOne(), promiseTwo()])
    .then(function(result) {
      console.log([result[0], result[1]]);
    })
    .then(null, console.log)
    .done();

setTimeout(function() {
  defer1.resolve("PROMISES");
  defer2.resolve("FTW");
}, 200);
