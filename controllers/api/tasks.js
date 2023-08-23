//file controller/task.js

const Task = require('../../models/task');

module.exports = {
  create,
  update,
};

async function create(req, res) {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function update(req, res) {
  const { taskId } = req.params;
  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, { title: req.body.title }, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json(error);
  }
}