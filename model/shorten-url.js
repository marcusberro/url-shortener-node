'use strict';

// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');
//
// // Connection URL
// var url = 'mongodb://localhost:27017/myproject';
//
// function ShortenUrl() {}
//
// ShortenUrl.prototype.findByCode = function(code, _callback){
//   // Use connect method to connect to the Server
//   MongoClient.connect(url, function(err, db, _callback) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server");
//
//     // Get the documents collection
//     var collection = db.collection('documents');
//     // Find some documents
//     collection.find({}).toArray(function(err, docs) {
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.dir(docs);
//       db.close();
//       callback(docs);
//     });
//   });
// };
//
// module.exports = new ShortenUrl();
