const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const logger = require('./middlewear/logger');
const members = require('./Members');

// Initializing middlewear
// app.use(logger);

// Handlebars middlewear (Views engine)
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//Home page route
// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

// Adding middlewear for body-parser
app.use(bodyParser.json()); // Handles json content
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));