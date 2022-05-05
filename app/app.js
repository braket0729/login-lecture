'use strict';

const express = require('express');
const app = express();
const home = require('./src/routes/home');
const bodyParser = require('body-parser');

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// add.use(bodyParser.urlencoded({ extended: false }));
app.use('/', home);

module.exports = app;
