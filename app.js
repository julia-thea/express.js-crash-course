const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const logger = require('./middlewear/logger');

// Initializing middlewear
// app.use(logger);

// Body parser middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Adding middlewear for body-parser
app.use(bodyParser.json()); // Handles json content
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));