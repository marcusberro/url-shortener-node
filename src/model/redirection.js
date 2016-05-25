'use strict';

module.exports.RedirectionDAO = function(db){

  var redirections = db.collection('redirections');

  this.saveRedirection = function(redirection, callback){
    redirections.insert(redirection, function (err, result) {
        if (err) return callback(err, null);
        callback(null, result);
    });
  };
}
