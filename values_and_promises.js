var Q = require('q'),
    defer = Q.defer();

function attachTitle(arg) {
  return "DR. " + arg;
}

defer.promise
  .then(attachTitle)
  .then(console.log);
defer.resolve("MANHATTAN");


