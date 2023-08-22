import React, { useState } from 'react';

export default function AddNewTask({ isOpen, onClose }) {
  const [newTask, setNewTask] = useState(''); // State for the new task input
  const [tasks, setTasks] = useState([]); // State for the list of tasks

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // If the modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add a List</h5>
        <button type="button" className="btn-close" onClick={onClose} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="task-list-container">
          <div className="task-list-body">
            <ul id="task-list">
              {tasks.map((task, index) => (
                <li key={index} className="task">
                  {/* Your task list item */}
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <div className="task-list-footer">
            <div className="new-task-wrapper">
              <textarea
                id="new-task"
                placeholder="Enter new task here. . ."
                value={newTask}
                onChange={handleNewTaskChange}
              ></textarea>
              <span className="add-new-task-btn btn" id="add-task" onClick={handleAddTask}>
                Add Task
              </span>
              <span className="btn" id="close-task-panel" onClick={onClose}>
                Close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}