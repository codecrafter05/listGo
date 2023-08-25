//File: src/components/Task/TasksContents.jsx

import React, { useState } from 'react';
import TasksList from './TasksList';
import TasksFooter from './TasksFooter';

export default function TasksContents({ selectedListId, isDetailsVisible, setIsDetailsVisible, selectedTaskId, setSelectedTaskId }) {
    // const [selectedListId, setSelectedListId] = useState(null); // Add selectedListId state
    console.log('Received selectedListId as prop:', selectedListId);
    console.log('TasksContents rendering with selectedListId:', selectedListId);

    const [formSubmitted, setFormSubmitted] = useState(0);

    return (
        <div className="chat-contents">
            <div className="chat-content-wrap">
                <div className="chat-wrap-inner">
                    <div className="chat-box">
                        <div className="task-wrapper">
                            <TasksList selectedListId={selectedListId} isDetailsVisible={isDetailsVisible} setIsDetailsVisible={setIsDetailsVisible} selectedTaskId={selectedTaskId} setSelectedTaskId={setSelectedTaskId} formSubmitted={formSubmitted} />
                            <TasksFooter selectedListId={selectedListId} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
