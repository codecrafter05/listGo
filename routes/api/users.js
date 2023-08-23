//file: routes/api/users.js
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

// POST /api/users/emailToId
router.post('/emailToId', usersCtrl.emailToId);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;