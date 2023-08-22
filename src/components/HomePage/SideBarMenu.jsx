import { useState, useEffect } from 'react';
import NewListModal from "./NewListModal";

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

  const handleEdit = (listId) => {
    const newName = prompt('Enter the new name for the list');

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
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                  <button onClick={() => handleEdit(item._id)}>Edit</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}