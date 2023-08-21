import React from "react";
import "./TaskHeader.css"; // Need to be fixed to the right bath in order to work properly.

function TaskHeader() {
  return (
    <div className="task-header">
      <div className="assignee-info">
        <a href="#" data-bs-toggle="modal" data-bs-target="#assignee">
          <div className="avatar">
            <img src="assets/img/profiles/avatar-02.jpg" alt="User Image" />
          </div>
          <div className="assigned-info">
            <div className="task-head-title">Assigned To</div>
            <div className="task-assignee">John Doe</div>
          </div>
        </a>
        <span className="remove-icon">
          <i className="fa fa-close"></i>
        </span>
      </div>
      <div className="task-due-date">
        <a href="#" data-bs-toggle="modal" data-bs-target="#date">
          <div className="due-icon">
            <span>
              <i className="material-icons">date_range</i>
            </span>
          </div>
          <div className="due-info">
            <div className="task-head-title">Due Date</div>
            <div className="due-date">Mar 26, 2019</div>
          </div>
        </a>
        <span className="remove-icon">
          <i className="fa fa-close"></i>
        </span>
      </div>
    </div>
  );
}

export default TaskHeader;
