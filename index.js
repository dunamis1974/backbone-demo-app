var express = require('express');
var request = require('request');
var conf = require('./conf');

var apiServerHost = conf.API_HOST;

var app = express();

app.use(require('morgan')('dev'));

app.use(conf.STATIC_ROUTE, express.static(conf.STATIC_PATH));
app.use(conf.API_PATH, function(req, res) {
  var url = apiServerHost + req.url;
  console.log(url);
  req.pipe(request(url)).pipe(res);
});

app.listen(conf.SERVER_PORT);
