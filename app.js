const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middlewear
// const logger = function(req, res, next){
//   console.log('Logging... ');
//   next();
// }

// app.use(logger);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Adding middlewear for body-parser
app.use(bodyParser.json()); // Handles json content
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index', {
    title: 'Customers'
  });
});

app.listen(3000, function(){
  console.log('Server Started on Port 3000...')
})