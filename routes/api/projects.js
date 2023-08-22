const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');

router.post('/', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;