var http = require('http');
var express = require('express');

var app = express();
var path = require('path');

app.set('view engine','ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));



app.use(express.static(path.resolve(__dirname, 'client')));





app.get('/', function(req, res){
    res.render('index.ejs');
})





app.listen(8080);
console.log('sever');