var Q = require('q');

var defer1 = Q.defer(),
    defer2 = Q.defer();

function all(p1, p2) {
  var iDefer = Q.defer(),
      counter = 0,
      val1,
      val2;

  p1.then(function(result) {
    val1 = result;
    counter++;
    if(counter == 2) {
      iDefer.resolve([val1, val2]);
    }
  })
  .then(null, iDefer.reject)
  .done();

  p2.then(function(result) {
    val2 = result;
    counter++;
    if(counter == 2) {
      iDefer.resolve([val1, val2]);
    }
  })
  .then(null, iDefer.reject)
  .done();

  return iDefer.promise;
}

all(defer1.promise, defer2.promise)
.then(console.log)
.done();

setTimeout(function() {
  defer1.resolve("PROMISES");
  defer2.resolve("FTW");
}, 200);
