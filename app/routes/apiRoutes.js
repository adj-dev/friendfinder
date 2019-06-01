// Dependencies
const express = require('express');
// const path = require('path');
const router = express.Router();
const friends = require('../data/friends.js');



router.get('/friends', function (req, res) {
  res.json(friends);
});


router.post('/friends', function (req, res) {
  let { scores } = req.body;
  let differences = [];
  for (let i = 0; i < friends.length; i++) {
    let runningTotal = 0;
    for (let j = 0; j < friends[i].scores.length; j++) {
      runningTotal += Math.abs(friends[i].scores[j] - scores[j]);
    }
    differences.push(runningTotal);
  }

  let closestMatchIndex = differences.indexOf(Math.min(...differences));
  let { name, image } = friends[closestMatchIndex];

  res.send(`Closest match: ${name}`)
});


// Export routes as a module
module.exports = router;