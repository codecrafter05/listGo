//file: src/components/HomePage/TaskHeader.jsx
export default function TaskHeader() {
  return (
    <>
      <div className="col-lg-5 message-view task-chat-view task-right-sidebar" id="task_window">
        <div className="chat-window">
          <div className="fixed-header">
            <div className="navbar">
              <div className="task-assign">
                <a className="task-complete-btn" id="task_complete"
                // href="javascript:void(0);"
                >
                  <i className="material-icons">check</i> Mark Complete
                </a>
              </div>
              <ul className="nav float-end custom-menu">
                <li className="dropdown dropdown-action">
                  <a href="" className="dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false"><i className="material-icons">more_vert</i></a>
                  <div className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
                    <a className="dropdown-item"
                    // href="javascript:void(0)"
                    >Delete Task</a>
                    <a className="dropdown-item"
                    // href="javascript:void(0)"
                    >Settings</a>
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
                            <img src="assets/img/profiles/avatar-02.jpg"
                              alt="User Image"></img>
                          </div>
                          <div className="assigned-info">
                            <div className="task-head-title">Assigned To</div>
                            <div className="task-assignee">John Doe</div>
                          </div>
                        </a>
                        <span className="remove-icon">
                          <i className="fa fa-close"></i>
                        </span>
                      </div>
                      <div className="task-due-date">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#date">
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
                        <textarea className="form-control" placeholder="Notes"></textarea>
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
                          <img src="assets/img/profiles/avatar-02.jpg"
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
    </>

  );
}


