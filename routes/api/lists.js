//Folder: routes/api/lists.js
const express = require('express');
const router = express.Router();
const listsCtrl = require('../../controllers/api/lists');

// Routes
router.post('/', listsCtrl.create);
router.delete('/:id', listsCtrl.delete); // Route for deleting a list
router.put('/:id', listsCtrl.edit); // Route for editing a list
router.get('/', listsCtrl.getAll); // Route for getting all lists

module.exports = router;