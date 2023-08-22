///src/components/HomePage/SideBarMenu.jsx
import { useState, useEffect } from 'react';
import NewListModal from "./NewListModal";
import EditListModal from "./EditListModal"; // import the new component

export default function SideBarMenu() {
  const [listData, setListData] = useState([]); 

  useEffect(() => {
    fetch('/api/lists')
      .then(response => response.json())
      .then(data => setListData(data));
  }, []);

  const handleCreate = (newList) => {
    setListData(prevListData => [...prevListData, newList]);
  };

  const handleDelete = (listId) => {
    fetch(`/api/lists/${listId}`, { method: 'DELETE' })
      .then(() => {
        setListData(prevListData => prevListData.filter(list => list._id !== listId));
      });
  };

  const handleEdit = (listId, newName) => {
    if (newName) {
      fetch(`/api/lists/${listId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      })
        .then(response => response.json())
        .then(updatedList => {
          setListData(prevListData => prevListData.map(list => list._id === listId ? updatedList : list));
        });
    }
  };

  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"> 
                <span 
                  data-bs-toggle="modal" 
                  data-bs-target="#create_list"
                  style={{cursor: 'pointer'}}>
                  <i className="fa-solid fa-plus"></i>
                </span>
                <NewListModal onCreate={handleCreate} />
              </li>
              {listData.map((item, index) => (
                <li key={index} className="d-flex justify-content-between align-items-center">
                  <a href={item.link}>{item.name}</a>
                  <div>
                    <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(item._id)}>Delete</button>
                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#edit_list_${item._id}`}>Edit</button>
                    <EditListModal listId={item._id} onEdit={(newName) => handleEdit(item._id, newName)} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}