'use strict';

module.exports.ShortenUrlDAO = function(db) {

  var shortenUrls = db.collection('shorten.urls');

  this.getByCode = function(code, callback){
    shortenUrls.findOne({'code': code}, function(err, url) {
        if (err) return callback(err, null);
        callback(null, url);
    });
  };

  this.saveUrl = function(shortenUrl, callback){
    shortenUrls.insert(shortenUrl, function (err, result) {
        if (err) return callback(err, null);
        callback(null, result);
    });
  };
}
