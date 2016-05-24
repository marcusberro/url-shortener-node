'use strict';

var restify = require('restify');

module.exports = (server) => {
  server.use(restify.queryParser());
  server.use(restify.bodyParser());
  server.pre(restify.pre.sanitizePath());
}
