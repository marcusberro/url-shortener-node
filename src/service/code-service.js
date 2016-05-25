'use strict';

var SequenceDAO = require('../model/sequence').SequenceDAO;

function CodeService(db){
  var sequenceDAO = new SequenceDAO(db);

  this.getNextCode = function(callback){
    sequenceDAO.getUrlCodeNextId(function(err, seqId){
      console.log('codeService next seq ', seqId);
      console.log('codeService next error ', err);
      if (err) return callback(err, null);

      // TODO generate hash code based on id
      var hexString = seqId.toString(16);

      callback(null, { 'code': hexString, 'seed': seqId});
    });
  };
}

module.exports.CodeService = CodeService;
