'use strict';

var restify = require('restify');

var server = restify.createServer({
    name: 'URL Shortener Server',
    version: '0.0.1'
});

require('./middleware')(server);
require('./controller')(server);

server.listen(9999, function() {
  console.log('%s listening at %s', server.name, server.url);
});
