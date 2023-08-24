//File: src/components/Task/TasksContents.jsx

import React, { useState } from 'react';
import TasksList from './TasksList';
import TasksFooter from './TasksFooter';

export default function TasksContents({selectedListId, isDetailsVisible, setIsDetailsVisible}) {
    // const [selectedListId, setSelectedListId] = useState(null); // Add selectedListId state
    console.log('Received selectedListId as prop:', selectedListId);
    console.log('TasksContents rendering with selectedListId:', selectedListId);

    return (
        <div className="chat-contents">
            <div className="chat-content-wrap">
                <div className="chat-wrap-inner">
                    <div className="chat-box">
                        <div className="task-wrapper">
                            <TasksList selectedListId={selectedListId} isDetailsVisible={isDetailsVisible} setIsDetailsVisible={setIsDetailsVisible} />
                            <TasksFooter selectedListId={selectedListId} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
