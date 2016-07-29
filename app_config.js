var express = require('express');

var bodyParser = require('body-parser');

var app = module.exports = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));
app.listen(5000);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
  next();
});
