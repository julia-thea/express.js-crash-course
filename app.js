const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const members = require('./Members')

const app = express();

// Middlewear
// const logger = function(req, res, next){
//   console.log('Logging... ');
//   next();
// }

// app.use(logger);

// Gets all members
app.get('/api/members', (req, res) => {
  res.json(members);
});

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Adding middlewear for body-parser
app.use(bodyParser.json()); // Handles json content
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));