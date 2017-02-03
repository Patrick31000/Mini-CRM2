var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('data'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '/', 'index.html'));
});




app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});