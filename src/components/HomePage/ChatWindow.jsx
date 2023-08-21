export default function ChatWindow() {
    return (
        <>
          <div className="col-lg-7 message-view task-view task-left-sidebar">
						<div className="chat-window">
							<div className="fixed-header">
								<div className="navbar">
									<div className="float-start me-auto">
										<div className="add-task-btn-wrapper">
											<span className="add-task-btn btn btn-white btn-sm">
												Add New Task
											</span>
										</div>
									</div>
									<a className="task-chat profile-rightbar float-end" id="task_chat"
										href="#task_window"><i className="fa fa fa-comment"></i></a>
									<div className="project-members task-followers">
										<span className="followers-title">List Members</span>
										<a className="avatar" href="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
											<img src="assets/img/profiles/avatar-16.jpg" alt="User Image"></img>
										</a>
										<a className="avatar" href="#" data-bs-toggle="tooltip" title="Richard Miles">
											<img src="assets/img/profiles/avatar-09.jpg" alt="User Image"></img>
										</a>
										<a className="avatar" href="#" data-bs-toggle="tooltip" title="John Smith">
											<img src="assets/img/profiles/avatar-10.jpg" alt="User Image"></img>
										</a>
										<a className="avatar" href="#" data-bs-toggle="tooltip" title="Mike Litorus">
											<img src="assets/img/profiles/avatar-05.jpg" alt="User Image"></img>
										</a>
										<a href="#" className="followers-add" data-bs-toggle="modal"
											data-bs-target="#task_followers"><i className="material-icons">add</i></a>
									</div>
									<ul className="nav float-end custom-menu">
										<li className="nav-item dropdown dropdown-action">
											<a href="" className="dropdown-toggle" data-bs-toggle="dropdown"
												aria-expanded="false"><i className="fa-solid fa-gear"></i></a>
											<div className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
												<a className="dropdown-item" href="javascript:void(0)">Pending Tasks</a>
												<a className="dropdown-item" href="javascript:void(0)">Completed Tasks</a>
												<a className="dropdown-item active" href="javascript:void(0)">All Tasks</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
							</div>
						</div>
						
        </>
    );
  }