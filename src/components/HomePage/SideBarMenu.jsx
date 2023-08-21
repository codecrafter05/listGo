export default function SideBarMenu() {
  return (
      <>
		<div className="sidebar" id="sidebar">
			<div className="sidebar-inner slimscroll">
				<div id="sidebar-menu" className="sidebar-menu">

					<ul>
						<li className="menu-title"> <a href="#" data-bs-toggle="modal" data-bs-target="#create_project"><i
									className="fa-solid fa-plus"></i></a></li>
						<li>
							<a href="tasks.html">List 1 Name</a>
						</li>
						<li className="active">
							<a href="tasks.html">List 2 Name</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
      </>
  );
}