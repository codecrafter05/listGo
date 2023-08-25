//File: src/components/Task/TasksList.jsx

import React, { useState, useEffect, useRef } from 'react';
import sendRequest from '../../../utilities/send-request';

export default function TasksList({ selectedListId, isDetailsVisible, setIsDetailsVisible, selectedTaskId, setSelectedTaskId }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const editableRefs = useRef(Array(tasks.length).fill(null));

  const toggleDetailsVisibility = () => setIsDetailsVisible(!isDetailsVisible);

  const handleEditableBlur = async (event, task, index) => {
    const updatedTitle = event.target.textContent;

    if (updatedTitle !== task.title) {
      try {
        const response = await fetch(`/api/tasks/${task._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: updatedTitle }),
        });
        if (!response.ok) {
          throw new Error(`Error updating task. Status: ${response.status}`);
        }
        // Update the task title in the local state or context
        // For example: updateTasks(updatedTasks);
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  const handleKeyDown = async (event, task, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.blur(); // Unfocus the element
      try {
        const response = await fetch(`/api/tasks/${task._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: event.target.textContent }),
        });
        if (!response.ok) {
          throw new Error(`Error updating task. Status: ${response.status}`);
        }
        // Update the task title in the local state or context
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Error deleting task. Status: ${response.status}`);
      }
      // Update the task list after deletion
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (selectedListId !== null) {
          const tasksData = await sendRequest(`/api/tasks?listId=${selectedListId}`);
          console.log('Fetched tasks data:', tasksData);
          setTasks(tasksData);
        }
      } catch (error) {
        console.log('Error fetching tasks:', error);
      } finally {
        setLoading(false); // Mark loading as done
      }
    };
    fetchTasks();
  }, [selectedListId]);
  // Include selectedListId in dependency array

  console.log(tasks);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="task-list-body">
      <ul id="task-list">
        {tasks.map((task, index) => (
          <li className="task" key={task._id}>
            <div className="task-container">
              <span className="task-action-btn task-check">
                <span
                  className="action-circle large complete-btn"
                  title="Mark Complete"
                >
                  <i className="material-icons" cursor="pointer">check</i>
                </span>
              </span>

              <span
                className="task-label"
                onClick={toggleDetailsVisibility}
                contentEditable
                onBlur={(event) => handleEditableBlur(event, task, index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    event.target.blur(); // Unfocus the element
                  }
                }}
                ref={(element) => (editableRefs.current[index] = element)}
                dangerouslySetInnerHTML={{ __html: task.title }}
              />

              <span className="task-action-btn task-btn-right">
                <span className="action-circle large" title="edit" onClick={() => {
                  task.editing = !task.editing;
                  if (editableRefs.current[index]) {
                    editableRefs.current[index].focus();
                  }
                }}>
                  <i className="material-icons">edit</i>
                </span>
                <span
                  className="action-circle large"
                  title="visibility"
                  onClick={() => {
                    console.log(`visibility: this task id ${task.id}`);
                    setSelectedTaskId(task._id); // Set the selected task ID
                    toggleDetailsVisibility(); // Call the callback function
                  }}
                >
                  <i className="material-icons">visibility</i>
                </span>
                <span
                  className="action-circle large"
                  title="Delete Task"
                  onClick={() => handleDeleteTask(task._id)}
                >
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
