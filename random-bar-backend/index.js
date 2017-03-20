require('dotenv').config();
const express        = require('express');
const bodyParser     = require('body-parser');
const logger         = require('morgan');
const cors           = require('cors');
const app            = express();
const jwt            = require('jsonwebtoken');
const PORT           = process.env.PORT || 8000;


let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// config cors
app.use(cors(corsOptions));

// config morgan
app.use(logger('dev'));

// config body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// link to resources
app.use('/', require('./resources'));

// config local host port
app.listen(PORT, () => {
  console.log('Server is listening on', PORT);
});

// export app for test suite
module.exports = app;
