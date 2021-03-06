// Dependencies
const express = require('express');
const path = require('path');
const router = express.Router();



router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/survey.html'));
});



// Export routes as a module
module.exports = router;