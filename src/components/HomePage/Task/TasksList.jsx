//File: src/components/Task/TasksList.jsx

import React, { useState, useEffect } from 'react';

export default function TasksList() {
  const [tasks, setTasks] = useState([]);

    useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/tasks'); // Relative path to your backend
        const tasksData = await response.json();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
    }, []);
  
  
  return (
    <div className="task-list-body">
      <ul id="task-list">
        <li className="task">
          <div className="task-container">
            <span className="task-action-btn task-check">
              <span
                className="action-circle large complete-btn"
                title="Mark Complete"
              >
                <i className="material-icons">check</i>
              </span>
            </span>
            <span className="task-label" contenteditable="true">
              Task 1
            </span>
            <span className="task-action-btn task-btn-right">
              <span className="action-circle large" title="Assign">
                <i className="material-icons">person_add</i>
              </span>
              <span
                className="action-circle large delete-btn"
                title="Delete Task"
              >
                <i className="material-icons">delete</i>
              </span>
            </span>
          </div>
        </li>
        <li className="task">
          <div className="task-container">
            <span className="task-action-btn task-check">
              <span
                className="action-circle large complete-btn"
                title="Mark Complete"
              >
                <i className="material-icons">check</i>
              </span>
            </span>
            <span className="task-label" contenteditable="true">
              Task 2
            </span>
            <span className="task-action-btn task-btn-right">
              <span className="action-circle large" title="Assign">
                <i className="material-icons">person_add</i>
              </span>
              <span
                className="action-circle large delete-btn"
                title="Delete Task"
              >
                <i className="material-icons">delete</i>
              </span>
            </span>
          </div>
        </li>
        <li className="completed task">
          <div className="task-container">
            <span className="task-action-btn task-check">
              <span
                className="action-circle large complete-btn"
                title="Mark Complete"
              >
                <i className="material-icons">check</i>
              </span>
            </span>
            <span className="task-label">Task 3</span>
            <span className="task-action-btn task-btn-right">
              <span className="action-circle large" title="Assign">
                <i className="material-icons">person_add</i>
              </span>
              <span
                className="action-circle large delete-btn"
                title="Delete Task"
              >
                <i className="material-icons">delete</i>
              </span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
