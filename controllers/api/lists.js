const List = require('../../models/list');

module.exports = {
  create,
  delete: deleteList,
  edit: editList,
  getAll,
};

async function create(req, res) {
  try {
    const list = await List.create(req.body);
    res.status(201).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteList(req, res) {
  try {
    const list = await List.findByIdAndRemove(req.params.id);
    if (!list) return res.status(404).json({error: 'List not found'});
    res.status(200).json({message: 'List deleted'});
  } catch (err) {
    res.status(500).json(err);
  }
}

async function editList(req, res) {
  try {
    const list = await List.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!list) return res.status(404).json({error: 'List not found'});
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getAll(req, res) {
  try {
    console.log(`user: ${req.user}`);
    const lists = await List.find({});
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json(err);
  }
}