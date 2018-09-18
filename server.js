// -- EXPRESS --
var express = require('express');
var app = express();

// -- STATIC PATH
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.use(express.static( __dirname + '/public/dist/public' ));

// -- BODY-PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// -- ROUTES --



app.listen(8000);
