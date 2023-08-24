// file: src/components/TaskDetails/TaskCommentInput.jsx
import { useState } from 'react';

export default function TaskCommentInput() {
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
