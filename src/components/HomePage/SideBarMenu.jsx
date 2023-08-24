////src/components/HomePage/SideBarMenu.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NewListModal from "./NewListModal";
import EditListModal from "./EditListModal";
import { Modal, Button } from 'react-bootstrap';
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import sendRequest from '../../utilities/send-request';

export default function SideBarMenu(user) {
  const [listData, setListData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [currentListId, setCurrentListId] = useState(null);
  const dispatch = useDispatch();

useEffect(() => {
  const fetchLists = async () => {
    try {
      const data = await sendRequest('/api/lists');
      setListData(data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };
  
  fetchLists();
}, []);

  const handleCreate = (newList) => {
    setListData(prevListData => [...prevListData, newList]);
  };

  const handleDelete = (listId) => {
    // Close the modal
    setModalShow(false);
    // Optimistically update state
    setListData(prevListData => prevListData.filter(list => list._id !== listId));
    
    fetch(`/api/lists/${listId}`, { method: 'DELETE' })
      .catch(() => {
        // If server operation fails, revert state
        fetch('/api/lists')
          .then(response => response.json())
          .then(data => setListData(data));
      });
  };

  const openDeleteConfirmationModal = (listId) => {
    setCurrentListId(listId);
    setModalShow(true);
  };

  const handleEdit = (listId, newName) => {
    if (newName) {
  // Optimistically update state
  setListData(prevListData => prevListData.map(list => list._id === listId ? { ...list, name: newName } : list));

  fetch(`/api/lists/${listId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: newName }),
  })
    .then(response => response.json())
    .then(updatedList => {
      // Update state with server response
      setListData(prevListData => prevListData.map(list => list._id === listId ? updatedList : list));
    })
    .catch(() => {
  // If server operation fails, revert state
  sendRequest('/api/lists')
    .then(data => setListData(data))
    .catch(error => {
      console.error('Error fetching lists:', error);
    });
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
                <NewListModal onCreate={handleCreate} user={user} />
              </li>
              {listData.map((item) => (
				<li key={item._id} className="d-flex flex-column align-items-center text-center">
                  <a style={{wordWrap: 'break-word', maxWidth: '100%'}} onClick={() => { console.log('List clicked:', item._id); handleListClick(item._id); }}>{item.name}</a>
                  <div style={{marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
				  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '5px', flexWrap: 'wrap'}}>
                      <button style={{width: '80px', height: '30px', padding: '2px 6px', fontSize: '0.7rem'}} className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#edit_list_${item._id}`}>Edit</button>
                      <button style={{width: '80px', height: '30px', padding: '2px 6px', fontSize: '0.7rem'}} className="btn btn-danger btn-sm" onClick={() => openDeleteConfirmationModal(item._id)}>Delete</button>
                    </div>
                    <EditListModal listId={item._id} onEdit={(newName) => handleEdit(item._id, newName)} />
                  </div>
                </li>
              ))}
			  <DeleteConfirmationModal show={modalShow} onHide={() => setModalShow(false)} onDelete={() => handleDelete(currentListId)} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}