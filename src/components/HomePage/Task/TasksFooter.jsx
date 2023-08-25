//File: src/components/Task/TasksFooter.jsx

import React, { useState } from "react";

export default function TasksFooter({ selectedListId, formSubmitted, setFormSubmitted }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

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

      console.log(`formSubmitted before setting inside handleSubmit event: ${formSubmitted}`);
      setFormSubmitted(formSubmitted + 1);

      console.log(`tasks: ${JSON.stringify(response)}`)

      if (!response.ok) {
        throw new Error(`Error adding task. Status: ${response.status}`);
      }

      // Clear the input field after successful submission
      setNewTaskTitle("");

      // if (handleReRender) {
      //   handleReRender();
      // }

    } catch (error) {
      console.log("Error adding task:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask();
  };


  const handleNewTaskChange = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent new lines and form submission
      handleAddTask(); // Call your handleAddTask function
    } else {
      setNewTaskTitle(event.target.value);
    }
  };

  return (
    <div className="task-list-footer">
      <form onSubmit={handleSubmit}>
        <div className="new-task-wrapper">
          <textarea
            id="new-task"
            placeholder="Enter new task here. . ."
            value={newTaskTitle}
            onChange={handleNewTaskChange}
            onKeyDown={handleNewTaskChange}
          ></textarea>
          <button type="submit" className="add-new-task-btn btn">
            Add Task
          </button>
          <span className="btn" id="close-task-panel">
            Close
          </span>
        </div>
      </form>
    </div>
  );
}
