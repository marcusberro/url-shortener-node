'use strict';

var ShortenerController = require('./shortener').ShortenerController;

module.exports = (server, db) => {
  var shortenerController = new ShortenerController(db);

  server.get('/', (req, res) => {
      res.send(200, 'Main page');
  });
  server.get('/health', (req, res) => {
      res.send(200, 'healthy');
  });
  server.get('/:code', shortenerController.redirect);
  server.post('/', shortenerController.shorten);
};
