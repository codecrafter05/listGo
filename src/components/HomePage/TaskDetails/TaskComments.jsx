// file: src/components/TaskDetails/TaskComments.jsx
import { useState } from 'react';

export default function TaskLog() {

    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleButtonClick = async () => {
        // Send a request to the back-end to save the new comment
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        // Handle the response
        if (response.ok) {
            // Update the state
            setComments([...comments, text]);
            setText('');
        } else {
            console.error('An error occurred while saving the comment');
        }
    }

    return (
        <>
            <hr className="task-line"></hr><br />

            <div className="chat chat-left">
                <div className="chat-avatar">
                    <a href="profile.html" className="avatar">
                        <img src="assets/img/profiles/avatar-02.jpg"
                            alt="User Image"></img>
                    </a>
                </div>
                <div className="chat-body">
                    <div className="chat-bubble">
                        <div className="chat-content">
                            <span className="task-chat-user">Username1</span> <span
                                className="chat-time">Today at 10:30am</span>
                            <p>YOU ARE NOT DONE YET!!</p>
                        </div>
                    </div>
                </div>
            </div>


            <ul>
                {comments.map(comment => (
                    <li key={comment}>{comment}</li>
                ))}
            </ul>


            <div className="chat-footer">
                <div className="message-bar">
                    <div className="message-inner">
                        <a className="link attach-icon" href="#"><img src="assets/img/attachment.png"
                            alt="Attachment Icon"></img></a>
                        <div className="message-area">
                            <div className="input-group">
                                <textarea className="form-control" placeholder="Type message..." value={text} onChange={handleTextChange}></textarea>
                                <button className="btn btn-primary" type="button" onClick={handleButtonClick}><i
                                    className="fa-solid fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );

}