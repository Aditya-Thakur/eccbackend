const express = require('express');
const mongoose = require('mongoose');
const book = mongoose.model('book');
var router = express.Router();

router.get('/', (req, res) => {
    res.json("this works");
});

router.post('/bookNewRoom', (req, res) => {
    bookNewRoom(req, res);
});

router.post('/unbook', (req, res) => {
    unbook(req, res);
});

router.post('/getBookingInfo',(req, res) => {

    book.find({ employeeId: req.body.employeeId}, function(err, docs){
        if(!err){
        res.json(docs);
    } else {
            console.log('Error in retrieving booking list: ' + err);
        }
    });
} )


function bookNewRoom(req, res){
    var bookNew = new book(); 
    bookNew.eccNo = req.body.eccNo;
    bookNew.roomNo = req.body.roomNo;
    bookNew.employeeId = req.body.employeeId;
    bookNew.save((err, doc) => {
        if(!err){
            res.json(bookNew);
        } else {
            console.log('Error during ECC record insertion: ' + err);
        }
    });
}

function unbook(req, res){
    book.findOneAndRemove({ employeeId: req.body.employeeId}, function(err, docs){
        if(!err){
        res.json('Check out successful for Employee: '+ req.body.employeeId);
    } else {
            console.log('Error in checking out: ' + err);
        }
    });
}

module.exports = router; 