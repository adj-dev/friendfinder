// Dependencies
const express = require('express');
// const path = require('path');
const router = express.Router();
const friends = require('../data/friends.js');



router.get('/friends', function (req, res) {
  res.json(friends);
});


router.post('/friends', function (req, res) {
  console.log(req.body);
});


// Export routes as a module
module.exports = router;