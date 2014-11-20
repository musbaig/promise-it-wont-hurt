var Q = require('q');

function parsePromised(arg) {
  var defer = Q.defer(),
      result;
  try {
    result = JSON.parse(arg);
    defer.resolve(result);
  } catch(e) {
    defer.reject(e);
  }
  return defer.promise;
}

parsePromised(process.argv[2])
  .then(null, console.log);

