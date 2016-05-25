'use strict';

var ShortenUrlDAO = require('../model/shorten-url').ShortenUrlDAO;
var RedirectionDAO = require('../model/redirection').RedirectionDAO;
var CodeService = require('./code-service').CodeService;

function ShortenService(db){

  var shortenUrlDAO = new ShortenUrlDAO(db);
  var redirectionDAO = new RedirectionDAO(db);
  var codeService = new CodeService(db);

  this.shorten = function(url, callback){
    codeService.getNextCode(function(err, codeObj){
      console.log('Shorten Service error: ', err);
      if (err) return callback(err, null);

      var shortenURL = {'url':url, 'seed': codeObj.seed, 'code': codeObj.code};

      console.log('Calling shortenerUrlDAO...', shortenURL);
      shortenUrlDAO.saveUrl(shortenURL, function(err, result){
        if (err) return callback(err, null);
        callback(null, shortenURL);
      });
    });
  };

  this.redirect = function(code, sourceInfo, callback){
    shortenUrlDAO.getByCode(code, function(err, shortenUrl) {
      if (err) return callback(err, null);

      if(shortenUrl) {

        console.log('Redirection: %s', shortenUrl);

        var redirection = {'code': shortenUrl.code};

        redirectionDAO.saveRedirection(redirection, function(err, result){
            if (err) return callback(err, null);
            callback(null, shortenUrl.url);
        });
      } else {
        callback(null, null);
      }
    });
  };
}

module.exports.ShortenService = ShortenService;
