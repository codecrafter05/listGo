//File: src/components/Task/TasksFooter.jsx

import React from "react";

export default function TasksFooter() {
  return (
    <div className="task-list-footer">
      <div className="new-task-wrapper">
        <textarea
          id="new-task"
          placeholder="Enter new task here. . ."
        ></textarea>
        <span className="add-new-task-btn btn" id="add-task">
          Add Task
        </span>
        <span className="btn" id="close-task-panel">
          Close
        </span>
      </div>
    </div>
  );
}
