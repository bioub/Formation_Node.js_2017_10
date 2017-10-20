'use strict';

const http = require('http');
const app = require('./app');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server started');
});
