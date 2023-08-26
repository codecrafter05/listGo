// file: controllers/profiles.js
const User = require('../../models/user');

const findUser = (req, res) => {
    if (!req.user) {
      return res.status(401).json('User is not authenticated');
    }
  
    User.findById(req.user._id)
      .then(user => {
        if (!user) {
          return res.status(404).json('User not found');
        }
  
        res.json(user);
      })
      .catch(err => res.status(500).json('Error: ' + err));
};

const updateUser = (req, res) => {
  const updateFields = {
    name: req.body.name,
    email: req.body.email,
    jobTitle: req.body.jobTitle,
    image: req.body.image
  };

  User.findByIdAndUpdate(req.user._id, updateFields)
    .then(() => res.json('User updated!'))
    .catch(err => res.status(500).json('Error: ' + err));
};

module.exports = {
  findUser,
  updateUser,
};