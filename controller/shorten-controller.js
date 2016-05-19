'use strict';

class ShortenController {

  redirect(req, res, next) {
    var code = decodeURIComponent(req.params.code);

    console.log('Find code ', code);

    // TODO Get redirection url here
    var redirectionUrl = 'https://google.com';

    if(redirectionUrl)
      res.redirect(redirectionUrl, next);

    res.send(404, 'Could not find code '+code);
    return next();
  }

  shorten(req, res, next) {
    res.send('shorten ');
    return next();
  }
};

module.exports = new ShortenController();
