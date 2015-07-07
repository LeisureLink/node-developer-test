'use strict';

var express = require('express');
var app = express();

app.get('/ping', function(req, res) {
  res.send({ hello: 'world' });
});

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("Application started: http://localhost:3000");
});

module.exports = app;