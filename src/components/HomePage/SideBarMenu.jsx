import { useState, useEffect } from 'react';
import NewProjectModal from "../NewProjectModal/NewProjectModal";

export default function SideBarMenu() {
  const [listData, setListData] = useState([]); // The data for your lists
  
  useEffect(() => {
    fetch('/api/to/your/data') // Replace this with your API endpoint
      .then(response => response.json())
      .then(data => setListData(data)); // Update your state with the data
  }, []); // Empty array means this effect runs once on component mount

  return (
      <>
		<div className="sidebar" id="sidebar">
			<div className="sidebar-inner slimscroll">
				<div id="sidebar-menu" className="sidebar-menu">
					<ul>
						<li className="menu-title"> 
							<a data-bs-toggle="modal" data-bs-target="#create_project">
							  <i className="fa-solid fa-plus"><NewProjectModal /></i>
							</a>
						</li>
						{listData.map((item, index) => (
							<li key={index}>
							  <a href={item.link}>{item.name}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
      </>
  );
}