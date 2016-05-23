'use strict';

var ShortenController = require('./shorten-controller').ShortenController;

module.exports = (server, db) => {
  var shortenController = new ShortenController(db);

  server.get('/', (req, res) => {
      res.send(200, 'Main page');
  });
  server.get('/health', (req, res) => {
      res.send(200, 'healthy');
  });
  server.get('/:code',shortenController.redirect);
  server.post('/',shortenController.shorten);
};
