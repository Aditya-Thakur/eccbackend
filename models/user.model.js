const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    fullName : {
        type: String
    },
    employeeId : {
        type: String
    }
}); 

mongoose.model('User', userSchema); 