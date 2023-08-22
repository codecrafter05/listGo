const Project = require('../../models/project');

module.exports = {
  create
};

async function create(req, res) {
    try {
      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  