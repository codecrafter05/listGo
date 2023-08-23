// file: src/components/TaskDetails/TaskCommentInput.jsx

export default function TaskCommentInput() {

    return (
        <>
            <div className="chat-footer">
                <div className="message-bar">
                    <div className="message-inner">
                        <a className="link attach-icon" href="#"><img src="assets/img/attachment.png"
                            alt="Attachment Icon"></img></a>
                        <div className="message-area">
                            <div className="input-group">
                                <textarea className="form-control" placeholder="Type message..."></textarea>
                                <button className="btn btn-primary" type="button"><i
                                    className="fa-solid fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </>

    );
}