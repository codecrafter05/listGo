//file : models/workspace.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Workspace', workspaceSchema);