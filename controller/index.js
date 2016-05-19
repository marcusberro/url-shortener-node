'use strict';

var shortenController = require('./shorten-controller');

module.exports = (server) => {
  server.get('/', (req, res) => {
      res.send(200, 'Main page');
  });
  server.get('/health', (req, res) => {
      res.send(200, 'healthy');
  });
  server.get('/:code',shortenController.redirect);
  server.post('/',shortenController.shorten);
};
