// file: src/components/TaskDetails/TaskLog.jsx

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

            <hr className="task-line"></hr>
            <div className="task-information">
                <span className="task-info-line">
                    <a className="task-user" href="#">Username1</a>
                    <span className="task-info-subject">Created the task</span>
                </span>
                <div className="task-time">1/1/2020 1:05pm</div>
            </div>

            <div className="task-information">
                <span className="task-info-line">
                    <a className="task-user" href="#">Username1</a>
                    <span className="task-info-subject">Assign the task to
                        Username2</span>
                </span>
                <div className="task-time">1/1/2020 1:06pm</div>
            </div>
            <br></br>
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
                            <span className="task-chat-user">Username2</span> <span
                                className="chat-time">1/1/2020 1:09pm</span>
                            <p>What Should i do Exacxtly ??!!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat chat-left">
                <div className="chat-avatar">
                    <a href="profile.html" className="avatar">
                        <img src="assets/img/profile s/avatar-02.jpg"
                            alt="User Image"></img>
                    </a>
                </div>
                <div className="chat-body">
                    <div className="chat-bubble">
                        <div className="chat-content">
                            <span className="task-chat-user">Username1</span>
                            <span className="file-attached">attached 3 files <i
                                className="fa-solid fa-paperclip"></i></span>
                            <span className="chat-time">Feb 17, 2019 at 4:32am</span>
                            <p>details attached, call me if needed</p>
                            <ul className="attach-list">
                                <li><i className="fa fa-file"></i> <a
                                    href="#">project_document.avi</a></li>
                                <li><i className="fa fa-file"></i> <a
                                    href="#">video_conferencing.psd</a></li>
                                <li><i className="fa fa-file"></i> <a
                                    href="#">landing_page.psd</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="completed-task-msg">
                <span className="task-success">
                    <a href="#">Username2</a> marked this task as completed.
                </span>
                <span className="task-time">Today at 9:27am</span>
            </div>

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

            <div className="completed-task-msg">
                <span className="task-danger">
                    <a href="#">Username1</a> marked this task as incompleted.
                </span>
                <span className="task-time">Today at 9:27am</span>
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