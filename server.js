require('./models/db');
var cors = require('cors')
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const userController = require('./controllers/userController'); 
const eccController = require('./controllers/eccController'); 
const bookController = require('./controllers/bookController');
var app = express();
app.use(bodyParser.json())
app.listen(3000, () => {
    console.log('Express server started at port: 3000');
});
app.use(cors());
app.use('/user', userController); 
app.use('/ecc', eccController);
app.use('/book', bookController)
 