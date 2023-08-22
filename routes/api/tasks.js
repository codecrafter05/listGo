// File: routes/tasks.js

const express = require('express');
const router = express.Router();
const Task = require('../models/task'); // Your Task model

// GET all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;