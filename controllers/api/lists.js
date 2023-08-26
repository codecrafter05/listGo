//controllers/api/lists.js
const List = require('../../models/list');

module.exports = {
  create,
  delete: deleteList,
  edit: editList,
  getAll,
  getOne,
};

async function create(req, res) {
  try {
    const list = await List.create(req.body);
    res.status(201).json(list);
    console.log("list create controller is working");
  } catch (err) {
    console.log("list create controller error");
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
    const lists = await List.find({
      $or: [
        { creator: req.user._id },
        { members: req.user._id }
      ]
    });
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getOne(req, res) {
  try {
    const listId = req.params.listId;

    const list = await List.findOne({ _id: listId });
    console.log(`getOne req in controller : ${list}`);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    res.json(list); // Send the list data as JSON response
  } catch (error) {
    console.error('Error fetching list:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}