var Q = require('q'),
    defer = Q.defer();

defer.promise.then(console.log);
defer.resolve("SECOND");

console.log("FIRST");


