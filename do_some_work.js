var Q_IO = require('q-io/http');

function getId() {
  return Q_IO.read('http://localhost:7000/');
}

function getUser(id) {
  return Q_IO.read('http://localhost:7001/' + id);
}

getId().then(function(res) {
  getUser(res)
      .then(function(res) {
        console.log(JSON.parse(res));
      })
      .then(null, console.log)
      .done();
});
