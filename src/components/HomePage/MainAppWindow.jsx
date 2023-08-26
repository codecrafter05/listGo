import React from 'react';
import ChatWindow from "../../components/HomePage/ChatWindow/ChatWindow";
import SingleTaskDetails from "../../components/HomePage/SingleTaskDetails";

export default function SideBarMenu({ selectedListId, selectedTaskId, setSelectedTaskId, isDetailsVisible, setIsDetailsVisible }) {
    return (
        <>
            <div className="page-wrapper">
                <div className="chat-main-row">
                    <div className="chat-main-wrapper">
                        <ChatWindow selectedListId={selectedListId} selectedTaskId={selectedTaskId} setSelectedTaskId={setSelectedTaskId} isDetailsVisible={isDetailsVisible} setIsDetailsVisible={setIsDetailsVisible} />
                        <SingleTaskDetails selectedListId={selectedListId} setSelectedTaskId={setSelectedTaskId} selectedTaskId={selectedTaskId} isDetailsVisible={isDetailsVisible} setIsDetailsVisible={setIsDetailsVisible} />
                    </div>
                </div>
            </div>
        </>
    );
}
