var express = require('express');
const passport = require('passport')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users');
});

router.get('/auth/google', passport.authenticate(
  'google',{
    scope:['profile', 'email'],
    prompt: "select_account"
  }
  ));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users',
    failureRedirect: '/users'
  }
))
router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/users');
});

module.exports = router;
