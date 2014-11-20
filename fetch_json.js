var Q_IO = require('q-io/http');

Q_IO.read('http://localhost:1337')
    .then(function(res) {
      console.log(JSON.parse(res));
    })
    .then(null, console.log)
    .done();
