//file controller/task.js

const Task = require('../../models/task');

module.exports = {
  create,
  update,
  remove,
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

async function remove(req, res) {
  const taskId = req.params.taskId; // Use the correct parameter name
  try {
    console.log('Deleting task with ID:', taskId); // Debug information
    const deletedTask = await Task.findOneAndDelete({ _id: taskId });
    if (!deletedTask) {
      console.log('Task not found for deletion'); // Debug information
      return res.status(404).json({ message: 'Task not found' });
    }
    console.log('Task deleted successfully:', deletedTask); // Debug information
    res.json({ message: 'Task deleted successfully', deletedTask });
  } catch (err) {
    console.error('Error deleting task:', err); // Debug information
    res.status(500).json(err);
  }
}