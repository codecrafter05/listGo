//file: src/components/NewProjectModal.jsx
export default function NewProjectModal() {
  return (
      <>
			<div id="create_project" className="modal custom-modal fade" role="dialog">
				<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Add a List</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="row">
									<div className="col-sm-12">
										<div className="input-block mb-3">
											<label className="col-form-label">List Name</label>
											<input className="form-control" type="text"></input>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="input-block mb-3">
											<label className="col-form-label">Add Team Member</label>
											<div className="input-group">
												<input className="form-control" type="text"></input>
												<button className="btn btn-primary" type="button">add</button>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-block mb-3">
											<label className="col-form-label">Team Members</label>
											<div className="project-members">
												<a className="avatar" href="#" data-bs-toggle="tooltip" title="John Doe">
													<img src="assets/img/profiles/avatar-02.jpg" alt="User Image"></img>
												</a>
												<a className="avatar" href="#" data-bs-toggle="tooltip"
													title="Richard Miles">
													<img src="assets/img/profiles/avatar-09.jpg" alt="User Image"></img>
												</a>
												<a className="avatar" href="#" data-bs-toggle="tooltip" title="John Smith">
													<img src="assets/img/profiles/avatar-10.jpg" alt="User Image"></img>
												</a>
												<a className="avatar" href="#" data-bs-toggle="tooltip"
													title="Mike Litorus">
													<img src="assets/img/profiles/avatar-05.jpg" alt="User Image"></img>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="submit-section">
									<button className="btn btn-primary submit-btn">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
      </>
  );
}