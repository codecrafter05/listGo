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
                                <span className="followers-title">List Members</span>
                                <div className="avatar" data-bs-toggle="tooltip" title="Jeffery Lalor">
                                    <img src="assets/img/profiles/avatar-16.jpg" alt="User Image" />
                                </div>
                                <div className="avatar" data-bs-toggle="tooltip" title="Richard Miles">
                                    <img src="assets/img/profiles/avatar-09.jpg" alt="User Image" />
                                </div>
                                <div className="avatar" data-bs-toggle="tooltip" title="John Smith">
                                    <img src="assets/img/profiles/avatar-10.jpg" alt="User Image" />
                                </div>
                                <div className="avatar" data-bs-toggle="tooltip" title="Mike Litorus">
                                    <img src="assets/img/profiles/avatar-05.jpg" alt="User Image" />
                                </div>
                                <div className="followers-add" data-bs-toggle="modal" data-bs-target="#task_followers">
                                    <i className="material-icons">add</i>
                                </div>
                            </div>
                            <div className="nav float-end custom-menu">
                                <div className="nav-item dropdown dropdown-action">
                                    <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                        <i className="fa-solid fa-gear"></i>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
                                        <button className="dropdown-item">Pending Tasks</button>
                                        <button className="dropdown-item">Completed Tasks</button>
                                        <button className="dropdown-item active">All Tasks</button>
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