'use strict';

const http = require('http');
const app = require('./app');

const port = (process.env.PORT) ? process.env.PORT : 8080;
const env = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development'; // 'production' en prod

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
