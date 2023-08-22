//File: src/components/Task/TasksContents.jsx

import React, { useState } from 'react';
import TasksList from './TasksList';
import TasksFooter from './TasksFooter';

export default function TasksContents() {
    const [selectedListId, setSelectedListId] = useState(null); // Add selectedListId state

    return (
        <div className="chat-contents">
            <div className="chat-content-wrap">
                <div className="chat-wrap-inner">
                    <div className="chat-box">
                        <div className="task-wrapper">
                            <TasksList selectedListId={selectedListId} /> {/* Pass selectedListId as prop */}
                            <TasksFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
