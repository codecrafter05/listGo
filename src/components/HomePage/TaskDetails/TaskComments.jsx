// file: src/components/TaskDetails/TaskComments.jsx
import { useState } from 'react';

export default function TaskLog() {
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleButtonClick = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        if (response.ok) {
            const date = new Date();
            const comment = {
                text,
                author: 'You', // The username is now "You"
                date: date.toLocaleString() // The current date and time
            };
            setComments([...comments, comment]);
            setText('');
        } else {
            console.error('An error occurred while saving the comment');
        }
    }

    return (
        <>
            <hr className="task-line"></hr><br />
            {comments.map((comment, index) => (
                <div key={index} className="chat chat-left">
                    <div className="chat-body">
                        <div className="chat-bubble">
                            <div className="chat-content">
                                <span className="task-chat-user">{comment.author}</span> 
                                <span className="chat-time">{comment.date}</span>
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
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