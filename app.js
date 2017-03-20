var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(5000);
