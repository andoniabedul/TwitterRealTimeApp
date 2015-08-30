module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  return router.get('/', function(req, res) {
    if (!req.session.profile) {
      res.redirect('/');
    } else {
      res.render('home', { title: 'Home Twitter Real-Time Application', profile: req.session.profile });
    }
  });
};