//vaiables
var express = require('express');
var bodyParser = require('body-parser');
var mustache = require('mustache-express');
var dal = require('./dal');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

// set up bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

//routes
app.get('/', function(req, res){
  res.redirect('/fruits')
})

app.get('/fruits', function(req, res) {
  const fruits = dal.getAllFruits()
  fruits.then(function (fruits){
    res.json(fruits)
  })
})
app.post('/new', function(req, res){
  const fruit = dal.addFruit(req.body)
  fruit.then(function (){
    res.send('yassss')
  })
})
app.get('/new', function(req, res){
  res.render('newFruit')
})
app.get('/fruits/:name', function (req, res){
  const fruitName = dal.getFruitByName(req.params.name)
  fruitName.then(function(fruit){
    res.json(fruit)
  })
})
app.delete('/fruits/:id', function (req, res){
  const fruitId = req.params.id
  const del = dal.deleteFruit(fruitId)
  del.then(function(res){
    res.send('deleted')
  })
})
app.listen(3000, function(){
  console.log('port: 3000');
})
