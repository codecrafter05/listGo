// src/components/HomePage/EditListModal.jsx
import { useState } from 'react';

export default function EditListModal({ listId, onEdit }) {
  const [newName, setNewName] = useState('');

  const handleEdit = (event) => {
    event.preventDefault();
    onEdit(newName);
    setNewName('');
  };

  return (
    <div className="modal fade" id={`edit_list_${listId}`} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit List</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleEdit}>
              <div className="mb-3">
                <label htmlFor="newName" className="form-label">New List Name</label>
                <input type="text" className="form-control" id="newName" value={newName} onChange={(e) => setNewName(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}