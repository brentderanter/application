var express = require('express');
var path = require('path');

var data = require('./data/data.json')


var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Node luistert op poort 3000');
});

console.log("Webserver draait");

app.get('/veld', function(req, res){
  res.render('veld', {
    velden: data
  });
});

app.get('/home', function(req, res){
  res.render('home', {
    velden: data
  });
});

app.get('/land', function(req, res){
  res.render('land', {
    velden: data
  });
});

app.get('/test', function(req, res){
  res.render('test', {
    velden: data
  });
});

app.get('/home/:id', function(req, res){
  res.render('veld', {
    velden: data.features[req.params.id]
  })
});

app.get('/', function(req, res){
  res.render('index', {
    velden: data
  });
});

app.get('/search', function(req, res){
  res.render('search', {
    velden: data
  });
});

app.get('/result', function(req, res){
  res.render('result', {
    velden: data
  });
});

 app.get('/map', function(req, res){
   res.render('map', {
     velden: data.features[req.params.id]
   });
 });
