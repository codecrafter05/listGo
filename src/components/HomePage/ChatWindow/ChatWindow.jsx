//file: src/components/homepage/chatwindow/chatwindow.jsx

import React, { useState } from 'react';
import TasksContents from '../Task/TasksContents';
import { useSelector } from 'react-redux';

export default function ChatWindow({isDetailsVisible, setIsDetailsVisible, selectedTaskId, setSelectedTaskId}) {
    const selectedListId = useSelector(state => state.selectedListId);
    console.log('ChatWindow rendering');

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
                <TasksContents selectedListId={selectedListId} isDetailsVisible={isDetailsVisible} setIsDetailsVisible={setIsDetailsVisible} selectedTaskId={selectedTaskId} setSelectedTaskId={setSelectedTaskId} />
            </div>
        </div>
        </>
    );
}