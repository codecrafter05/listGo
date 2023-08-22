//File: src/components/Task/TasksContents.jsx

import React from 'react';
import TasksList from './TasksList';
import TasksFooter from './TasksFooter';

export default function TasksContents() {
    return (
        <div className="chat-contents">
            <div className="chat-content-wrap">
                <div className="chat-wrap-inner">
                    <div className="chat-box">
                        <div className="task-wrapper">
                            <TasksList />
                            <TasksFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
