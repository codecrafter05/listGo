require('dotenv').config();
require('./config/database');
const mongoose = require('mongoose');
const User = require('./models/user');
const List = require('./models/list');
const Task = require('./models/task');
const Comment = require('./models/comment');

(async function() {
  await User.deleteMany({});
  const users = await User.create([
  {
    _id: "64e3748996003e0e77ece761",
    name: "Alice",
    email: "alice@example.com",
    password: "pass123"
  },
  {
    _id: "64e3748996003e0e77ece762",
    name: "Bob",
    email: "bob@example.com",
    password: "pass123"
  },
  {
    _id: "64e3748996003e0e77ece763",
    name: "Carol",
    email: "carol@example.com",
    password: "pass123"
  },
  {
    _id: "64e3748996003e0e77ece764",
    name: "David",
    email: "david@example.com",
    password: "pass123"
  },
  {
    _id: "64e3748996003e0e77ece765",
    name: "Eve",
    email: "eve@example.com",
    password: "pass123"
  },
  // Add more users here
  // ...
  ]);

  await List.deleteMany({});
  const lists = await List.create([
  {
    _id: "64e3748996003e0e77ece763",
    name: "Grocery List",
    creator: "64e3748996003e0e77ece761",
    members: ["64e3748996003e0e77ece761", "64e3748996003e0e77ece762"],
    tasks: ["64e3748996003e0e77ece765"],
    due_date: new Date()
  },
  {
    _id: "64e3748996003e0e77ece764",
    name: "Work Tasks",
    creator: "64e3748996003e0e77ece761",
    members: ["64e3748996003e0e77ece761", "64e3748996003e0e77ece762"],
    tasks: ["64e3748996003e0e77ece766"],
    due_date: new Date()
  },
  {
    _id: "64e3748996003e0e77ece765",
    name: "Home Renovation",
    creator: "64e3748996003e0e77ece762",
    members: ["64e3748996003e0e77ece761", "64e3748996003e0e77ece763"],
    tasks: ["64e3748996003e0e77ece767"],
    due_date: new Date()
  },
  {
    _id: "64e3748996003e0e77ece766",
    name: "Vacation Planning",
    creator: "64e3748996003e0e77ece761",
    members: ["64e3748996003e0e77ece763", "64e3748996003e0e77ece764"],
    tasks: ["64e3748996003e0e77ece768"],
    due_date: new Date()
  },
  // Add more lists here
  // ...
  ]);

  await Task.deleteMany({});
  const tasks = await Task.create([
  {
    _id: "64e3748996003e0e77ece765",
    title: "Buy Milk",
    description: "Get 2 liters of milk",
    list: "64e3748996003e0e77ece763",
    assignedTo: "64e3748996003e0e77ece761",
    notes: "Don't forget the milk!",
    comments: ["64e3748996003e0e77ece767"]
  },
  {
    _id: "64e3748996003e0e77ece766",
    title: "Prepare Presentation",
    description: "Prepare slides for upcoming presentation",
    list: "64e3748996003e0e77ece764",
    assignedTo: "64e3748996003e0e77ece762",
    notes: "Focus on key points",
    comments: ["64e3748996003e0e77ece768"]
  },
  {
    _id: "64e3748996003e0e77ece767",
    title: "Buy Eggs",
    description: "Don't forget the eggs",
    list: "64e3748996003e0e77ece765",
    assignedTo: "64e3748996003e0e77ece762",
    notes: "Also get some butter",
    comments: ["64e3748996003e0e77ece769"]
  },
  {
    _id: "64e3748996003e0e77ece768",
    title: "Research Destination",
    description: "Research vacation destinations",
    list: "64e3748996003e0e77ece766",
    assignedTo: "64e3748996003e0e77ece763",
    notes: "Check flight prices",
    comments: ["64e3748996003e0e77ece770"]
  },
  // Add more tasks here
  // ...
  ]);

  await Comment.deleteMany({});
  const comments = await Comment.create([
  {
    _id: "64e3748996003e0e77ece767",
    content: "Remember to also buy eggs",
    task: "64e3748996003e0e77ece765",
    author: "64e3748996003e0e77ece761"
  },
  {
    _id: "64e3748996003e0e77ece768",
    content: "Great job on the slides!",
    task: "64e3748996003e0e77ece766",
    author: "64e3748996003e0e77ece762"
  },
  {
    _id: "64e3748996003e0e77ece769",
    content: "Also get some butter",
    task: "64e3748996003e0e77ece767",
    author: "64e3748996003e0e77ece762"
  },
  {
    _id: "64e3748996003e0e77ece770",
    content: "Consider beach destinations",
    task: "64e3748996003e0e77ece768",
    author: "64e3748996003e0e77ece763"
  },
  // Add more comments here
  // ...
  ]);

  console.log('Data seeded successfully');
  process.exit();

})();