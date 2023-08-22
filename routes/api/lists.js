//Folder: routes/api/lists.js
const express = require('express');
const router = express.Router();
const listsCtrl = require('../../controllers/api/lists');

router.post('/', listsCtrl.create);
router.delete('/:id', listsCtrl.delete); // Delete list route
router.put('/:id', listsCtrl.edit); // Edit list route

module.exports = router;