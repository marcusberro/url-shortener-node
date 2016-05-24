'use strict';

var restify = require('restify');
var MongoClient = require('mongodb').MongoClient;

var server = restify.createServer({
    name: 'URL Shortener Server',
    version: '0.0.1'
});

require('./middleware')(server);

MongoClient.connect('mongodb://localhost:27017/url-shortener', function(err, db) {
  if(err) throw err;
  
  require('./controller')(server, db);

  server.listen(process.env.PORT || 9999, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("%s listening at %s", server.name, addr.address + ":" + addr.port);
  });
});
