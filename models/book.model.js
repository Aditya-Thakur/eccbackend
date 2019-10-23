const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    eccNo : {
        type: Number
    },
    roomNo : {
        type: Number
    },
    employeeId : {
        type: Number
    }
}); 

mongoose.model('book', bookSchema); 