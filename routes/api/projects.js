const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects');

router.post('/', projectsCtrl.create);

module.exports = router;