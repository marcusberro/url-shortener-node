'use strict';

var ShortenUrlDAO = require('../model/shorten-url').ShortenUrlDAO;

function ShortenController(db){

  this.redirect = function(req, res, next){
    var code = decodeURIComponent(req.params.code);

    var shortenUrlDAO = new ShortenUrlDAO(db);
    shortenUrlDAO.getByCode(code, function(err, redirectionUrl) {
        if (err) return next(new restify.errors.InternalServerError(err));

        // TODO Get redirection url here
        if(redirectionUrl)
          res.redirect(redirectionUrl.url, next);

        res.send(404, 'Could not find code '+code);
        return next();
    });
  };

  this.shorten = function(req, res, next){
    res.send('shorten ');
    return next();
  };
};


// class ShortenController {
//
//   constructor(db){
//       console.log('db: ',db);
//       this._db = db;
//       console.log('db this: ', this._db);
//   }
//
//   redirect(req, res, next) {
//     var code = decodeURIComponent(req.params.code);
//
//     console.log('Find code ', code);
//
//     console.log('db redirect: ', this._db);
//
//     var shortenUrlDAO = new ShortenUrlDAO(this._db);
//     shortenUrlDAO.getByCode(code, function(err, redirectionUrl) {
//         if (err) return next(new restify.errors.InternalServerError(err));
//
//         // TODO Get redirection url here
//         if(redirectionUrl)
//           res.redirect(redirectionUrl.url, next);
//
//         res.send(404, 'Could not find code '+code);
//         return next();
//     });
//   }
//
//   shorten(req, res, next) {
//     res.send('shorten ');
//     return next();
//   }
// };

module.exports.ShortenController = ShortenController;
