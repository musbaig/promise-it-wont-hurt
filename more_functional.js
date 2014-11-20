var Q_IO = require('q-io/http'),
    _ = require('lodash'),
    id;

function getId() {
  return Q_IO.read('http://localhost:7000/');
}

function getUser(id) {
  return Q_IO.read('http://localhost:7001/' + id);
}

getId()
  .then(getUser)
  .then(_.compose(console.log, JSON.parse))
  .then(null, console.log)
  .done();
