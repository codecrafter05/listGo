const List = require('../../models/list');

module.exports = {
  create
};

async function create(req, res) {
    try {
      const list = await List.create(req.body);
      res.status(201).json(list);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  