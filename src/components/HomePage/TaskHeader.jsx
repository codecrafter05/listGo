import { useState } from 'react';

export default function TaskHeader({ onRemove, allowedUserId, currentUserId }) {
    const [notes, setNotes] = useState('');
    const [assignedUser, setAssignedUser] = useState(null);

    const users = [
        { id: 1, name: 'Richard Miles', role: 'Web Developer' },
        { id: 2, name: 'John Smith', role: 'Android Developer' },
        { id: 3, name: 'Jeffery Lalor', role: 'Team Leader' },
    ];

    const handleAssignClick = (user) => {
        setAssignedUser(user);
    };

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    };
    // to check if the current user’s ID matches the allowed user’s ID before rendering the component. 
    if (currentUserId !== allowedUserId) {
        return null;
    }

    return (
        <>
            <div className="col-lg-5 message-view task-chat-view task-right-sidebar" id="task_window">
                <div className="chat-window">
                    <div className="fixed-header">
                        <div className="navbar">
                            <div className="task-assign">
                                <a className="task-complete-btn" id="task_complete" href="javascript:void(0);">
                                    <i className="material-icons">check</i> Mark Complete
                                </a>
                            </div>
                            <ul className="nav float-end custom-menu">
                                <li className="dropdown dropdown-action">
                                    <a href="" className="dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                    <div className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
                                        <a className="dropdown-item" href="javascript:void(0)">Delete Task</a>
                                        <a className="dropdown-item" href="javascript:void(0)">Settings</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="chat-contents task-chat-contents">
                        <div className="chat-content-wrap">
                            <div className="chat-wrap-inner">
                                <div className="chat-box">
                                    <div className="chats">
                                        <h4>Task Details </h4>
                                        <div className="task-header">
                                            <div className="assignee-info">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#assignee">
                                                    <div className="avatar">
                                                        <img src="assets/img/profiles/avatar-02.jpg" alt="User Image" />
                                                    </div>
                                                    <div className="assigned-info">
                                                        <div className="task-head-title">Assigned To</div>
                                                        <div className="task-assignee">{assignedUser || 'None'}</div>
                                                    </div>
                                                </a>
                                                <span className="remove-icon" onClick={onRemove}>
                                                    <i className="fa fa-close"></i>
                                                </span>
                                            </div>
                                            <div className="task-due-date">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#dueDate">
                                                    <div className="due-icon">
                                                        <span>
                                                            <i className="material-icons">date_range</i>
                                                        </span>
                                                    </div>
                                                    <div className="due-info">
                                                        <div className="task-head-title">Due Date</div>
                                                        <div className="due-date">Mar 26, 2019</div>
                                                    </div>
                                                </a>
                                                <span className="remove-icon">
                                                    <i className="fa fa-close"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <hr className="task-line"></hr>
                                        <div className="task-desc">
                                            <div className="task-textarea">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Notes"
                                                    value={notes}
                                                    onChange={handleNotesChange} />
                                            </div>
                                        </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>

            <div id="assignee" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Assign to this task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group m-b-30">
                                <input placeholder="Search to add" className="form-control search-input" type="text"></input>
                                <button className="btn btn-primary">Search</button>
                            </div>
                            <div>
                                <ul className="chat-user-list">
                                    <div>
                                        <ul>
                                            {users.map((user) => (
                                                <li key={user.id}>
                                                    <a href="#" onClick={() => handleAssignClick(user.name)}>
                                                        <div className="chat-block d-flex">
                                                            <div className="avatar">
                                                                <img src="assets/img/profiles/avatar-02.jpg" alt="User Image" />
                                                            </div>
                                                            <div className="media-body align-self-center text-nowrap">
                                                                <div className="user-name">{user.name}</div>
                                                                <span className="designation">{user.role}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                            <div className="submit-section">
                                {/* <button className="btn btn-primary submit-btn" onClick={handleAssignClick}>Assign</button> */}
                                <button type="button" className="btn btn-primary submit-btn" data-bs-dismiss="modal" aria-label="Close">
                                    Assign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="duedate" className="modal custom-modal fade" role="dialog">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Select a Due Date</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="input-block mb-3 col-md-6">
								<div className="cal-icon">
									<input className="form-control datetimepicker" type="text"></input>
								</div>
							</div>
							<div className="submit-section">
								<button class="btn btn-primary submit-btn">Assign</button>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>

    );
}


