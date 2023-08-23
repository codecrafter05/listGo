//File: src/components/Task/TasksList.jsx

import React, { useState, useEffect } from 'react';

export default function TasksList({selectedListId}) {
  const [tasks, setTasks] = useState([]);

useEffect(() => {
  const fetchTasks = async () => {
    try {
      if (selectedListId !== null) {
        const response = await fetch(`/api/tasks?listId=${selectedListId}`);
        if (!response.ok) {
          throw new Error(`Error fetching tasks. Status: ${response.status}`);
        }
        const tasksData = await response.json();
        console.log('Fetched tasks data:', tasksData);
        setTasks(tasksData);
      }
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };
  fetchTasks();
}, [selectedListId]); // Include selectedListId in dependency array

  console.log(tasks);
  
  return (
    <div className="task-list-body">
      <ul id="task-list">
        {tasks.map((task) => (
          <li className="task" key={task._id}>
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
                {task.title}
              </span>
              
              <span className="task-action-btn task-btn-right">
                <span className="action-circle large" title="edit">
                  <i className="material-icons">edit</i>
                </span>
                <span className="action-circle large" title="visibility">
                  <i className="material-icons">visibility</i>
                </span>
                <span className="action-circle large delete-btn" title="Delete Task">
                  <i className="material-icons">delete</i>
                </span>
              </span>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
