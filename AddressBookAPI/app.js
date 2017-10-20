'use strict';

const express = require('express');
const morgan = require('morgan');
const notFound = require('./middlewares/not-found');
const routerContacts = require('./routes/contacts');

const app = express();
app.use(morgan('dev'));

app.use('/api/contacts', routerContacts);

app.use(notFound);

module.exports = app;

