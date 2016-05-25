'use strict';

var ShortenUrlDAO = require('../model/shorten-url').ShortenUrlDAO;
var CodeService = require('./code-service').CodeService;

function ShortenService(db){

  var shortenUrlDAO = new ShortenUrlDAO(db);
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
}

module.exports.ShortenService = ShortenService;
