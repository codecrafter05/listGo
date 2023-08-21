//file : models/task.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  list: { type: Schema.Types.ObjectId, ref: 'List', required: true },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  subtasks: [{ type: Schema.Types.ObjectId, ref: 'Subtask' }],
  notes: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
