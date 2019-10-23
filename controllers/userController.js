const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.json('just checking user')
});

module.exports = router; 