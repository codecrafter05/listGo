//File: src/components/Task/TasksFooter.jsx

import React, { useState } from "react";

export default function TasksFooter({ selectedListId }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleNewTaskChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleAddTask = async () => {
    if (newTaskTitle.trim() === "") {
      return;
    }

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTaskTitle,
          list: selectedListId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error adding task. Status: ${response.status}`);
      }

      // Clear the input field after successful submission
      setNewTaskTitle("");
    } catch (error) {
      console.log("Error adding task:", error);
    }
  };

  return (
    <div className="task-list-footer">
      <div className="new-task-wrapper">
        <textarea
          id="new-task"
          placeholder="Enter new task here. . ."
          value={newTaskTitle}
          onChange={handleNewTaskChange}
        ></textarea>
        <span className="add-new-task-btn btn" id="add-task" onClick={handleAddTask}>
          Add Task
        </span>
        <span className="btn" id="close-task-panel">
          Close
        </span>
      </div>
    </div>
  );
}
