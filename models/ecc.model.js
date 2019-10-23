const mongoose = require('mongoose');

var eccSchema = new mongoose.Schema({
    eccNo : {
        type: Number
    },
    noOfRooms : {
        type: Number
    }
}); 

mongoose.model('ECC', eccSchema); 