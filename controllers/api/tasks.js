//file controller/task.js

const Task = require('../../models/task');

module.exports = {
  create,
};

async function create(req, res) {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
}