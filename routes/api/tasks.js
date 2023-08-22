// File: routes/api/tasks.js

const express = require('express');
const router = express.Router();
const Task = require('../../models/task');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log('Tasks:', tasks); // Log tasks here
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;