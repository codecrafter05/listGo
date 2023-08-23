///src/components/HomePage/SideBarMenu.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // SMOHD : imported useDispartch
import NewListModal from "./NewListModal";
import EditListModal from "./EditListModal"; // import the new component

export default function SideBarMenu() {
  const [listData, setListData] = useState([]); 
  const dispatch = useDispatch(); //SMOHD : use dispatch
  // const [selectedListId, setSelectedListId] = useState(null); // SMOHD : Im tracing the selected list here

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

  const handleListClick = (listId) => {
    dispatch({ type: 'SET_SELECTED_LIST', payload: listId });
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
                  {/* <a onClick={() => { console.log('List clicked:', item._id); setSelectedListId(item._id); }}>{item.name}</a> */}
                  <a onClick={() => { console.log('List clicked:', item._id); handleListClick(item._id); }}>{item.name}</a>
                  {/* SMOHD : am i seting the selected list here ? */}
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