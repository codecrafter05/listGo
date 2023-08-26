//Folder: routes/api/profiles.js
const express = require('express');
const router = express.Router();
const profiles = require('../../controllers/api/profiles');
console.log(__dirname); // Add this line here
// Matches with "/api/profiles"
router.route('/')
  .get(profiles.findUser)
  .post(profiles.updateUser);

module.exports = router;