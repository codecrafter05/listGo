import React from 'react';

export default function ChatWindow() {
    return (
        <>
        <div className="col-lg-7 message-view task-view task-left-sidebar">
            <div className="chat-window">
                <div className="fixed-header">
                    <div className="navbar">
                        <div className="float-start me-auto">
                            <div className="add-task-btn-wrapper">
                                <button className="add-task-btn btn btn-white btn-sm">
                                    Add New Task
                                </button>
                            </div>
                        </div>
                        <div className="task-chat profile-rightbar float-end" id="task_chat">
                            <i className="fa fa fa-comment"></i>
                        </div>
                        <div className="project-members task-followers">
                            <span className="followers-title">List Members </span>
                            <a className="avatar" href="#" data-bs-toggle="tooltip" aria-label="Jeffery Lalor" data-bs-original-title="Jeffery Lalor">
                                <img src="assets/img/profiles/avatar-16.jpg" alt="User Image"></img>
                            </a>
                            <a className="avatar" href="#" data-bs-toggle="tooltip" aria-label="Richard Miles" data-bs-original-title="Richard Miles">
                                <img src="assets/img/profiles/avatar-09.jpg" alt="User Image"></img>
                            </a>
                            <a className="avatar" href="#" data-bs-toggle="tooltip" aria-label="John Smith" data-bs-original-title="John Smith">
                                <img src="assets/img/profiles/avatar-10.jpg" alt="User Image"></img>
                            </a>
                            <a className="avatar" href="#" data-bs-toggle="tooltip" aria-label="Mike Litorus" data-bs-original-title="Mike Litorus">
                                <img src="assets/img/profiles/avatar-05.jpg" alt="User Image"></img>
                            </a>
                            <a href="#" className="followers-add" data-bs-toggle="modal" data-bs-target="#task_followers"><i className="material-icons">add</i></a>
                        </div>
                        <ul className="nav float-end custom-menu">
                            <li className="nav-item dropdown dropdown-action">
                                <a href="" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-gear"></i></a>
                                <div className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0)">Pending Tasks</a>
                                    <a className="dropdown-item" href="javascript:void(0)">Completed Tasks</a>
                                    <a className="dropdown-item active" href="javascript:void(0)">All Tasks</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="chat-contents">
                    <div className="chat-content-wrap">
                        <div className="chat-wrap-inner">
                            <div className="chat-box">
                                <div className="task-wrapper">
                                    <div className="task-list-container">
                                        <div className="task-list-body">
                                            <ul id="task-list">
                                                <li className="task">
                                                    <div className="task-container">
                                                        <span className="task-action-btn task-check">
                                                            <span className="action-circle large complete-btn"
                                                                title="Mark Complete">
                                                                <i className="material-icons">check</i>
                                                            </span>
                                                        </span>
                                                        <span className="task-label" contenteditable="true">Task
                                                            1</span>
                                                        <span className="task-action-btn task-btn-right">
                                                            <span className="action-circle large"
                                                                title="Assign">
                                                                <i className="material-icons">person_add</i>
                                                            </span>
                                                            <span className="action-circle large delete-btn"
                                                                title="Delete Task">
                                                                <i className="material-icons">delete</i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="task">
                                                    <div className="task-container">
                                                        <span className="task-action-btn task-check">
                                                            <span className="action-circle large complete-btn"
                                                                title="Mark Complete">
                                                                <i className="material-icons">check</i>
                                                            </span>
                                                        </span>
                                                        <span className="task-label" contenteditable="true">Task
                                                            2</span>
                                                        <span className="task-action-btn task-btn-right">
                                                            <span className="action-circle large"
                                                                title="Assign">
                                                                <i className="material-icons">person_add</i>
                                                            </span>
                                                            <span className="action-circle large delete-btn"
                                                                title="Delete Task">
                                                                <i className="material-icons">delete</i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="completed task">
                                                    <div className="task-container">
                                                        <span className="task-action-btn task-check">
                                                            <span className="action-circle large complete-btn"
                                                                title="Mark Complete">
                                                                <i className="material-icons">check</i>
                                                            </span>
                                                        </span>
                                                        <span className="task-label">Task 3</span>
                                                        <span className="task-action-btn task-btn-right">
                                                            <span className="action-circle large"
                                                                title="Assign">
                                                                <i className="material-icons">person_add</i>
                                                            </span>
                                                            <span className="action-circle large delete-btn"
                                                                title="Delete Task">
                                                                <i className="material-icons">delete</i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="task-list-footer">
                                            <div className="new-task-wrapper">
                                                <textarea id="new-task"
                                                    placeholder="Enter new task here. . ."></textarea>
                                                <span className="add-new-task-btn btn" id="add-task">Add
                                                    Task</span>
                                                <span className="btn" id="close-task-panel">Close</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="notification-popup hide">
                                    <p>
                                        <span className="task"></span>
                                        <span className="notification-text"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}