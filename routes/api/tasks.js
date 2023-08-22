// File: routes/api/tasks.js

const express = require('express');
const router = express.Router();
const Task = require('../../models/task');

router.get('/', async (req, res) => {
  const { listId } = req.query; // Get the listId from the query parameter
  try {
    const tasks = await Task.find({ list: listId }); // Filter tasks based on listId
    console.log('Tasks:', tasks); // Log tasks
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;