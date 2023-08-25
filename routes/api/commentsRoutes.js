const express = require('express');
const router = express.Router();

const comments = []; // Temporary storage for comments

// Handle POST request to save a new comment
router.post('/', (req, res) => {
    const newComment = req.body.text;
    if (newComment) {
        comments.push(newComment);
        res.status(201).json({ message: 'Comment saved successfully' });
    } else {
        res.status(400).json({ error: 'Invalid comment' });
    }
});

// Handle GET request to fetch all comments
router.get('/', (req, res) => {
    res.status(200).json({ comments });
});

module.exports = router;
