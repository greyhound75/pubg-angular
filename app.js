//Part 1: Initialization

var https          = require('https');
var express        = require('express');
var app            = express();

var expressSession = require('express-session');

//Section 3: Static Content

app.get('/*', function(req, res, next) {
  console.log('serving static');
  next();
});
app.use(express.static('./static'));


