///folder:src/HomePage/NewListModal.jsx
import React, { useState, useRef } from 'react';
import sendRequest from '../../utilities/send-request';

export default function NewListModal({ onCreate }) {
  const [listName, setListName] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const memberInputRef = useRef(null);

  const handleAddMember = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      await addMember();
    }
  };

  const addMember = async () => {
    const value = memberInputRef.current.value.trim();
    if (value !== '') {
      const memberId = await memberId(value); // replace this with actual function
      setTeamMembers(prevMembers => [...prevMembers, memberId]);
      memberInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (listName.trim() === '' ) {
      alert('Both fields are required!');
      return;
    }

    try {
      const creatorId = '60d3b41f228e21d5a42e92a8'; //hard coded need to change this
      const response = await sendRequest('/api/lists', 
        'POST',
        {
          name: listName,
          members: teamMembers,
          creator: creatorId
        },
        );

      const data = await response.json();

      onCreate(data);
      setIsOpen(false);

    } catch (err) {
      console.error(err);
    }

    setListName('');
    setTeamMembers([]);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div id="create_list" className="modal custom-modal" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add a List</h5>
            <button type="button" className="btn-close responsive-btn" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">List Name</label>
                    <input className="form-control" type="text" value={listName} onChange={(e) => setListName(e.target.value)} maxLength={17} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Team Member</label>
                    <div className="input-group">
                      <input ref={memberInputRef} className="form-control" type="text" onKeyPress={handleAddMember} />
                      <button className="btn btn-primary responsive-btn" type="button" onClick={addMember} style={{
                        width: '80px',
                        height: '40px',
                        display: 'block',
                        margin: '10px auto'
                      }}>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Team Members</label>
                    <div className="project-members">
                      {teamMembers.map((member, index) => (
                        <a className="avatar" href="#" data-bs-toggle="tooltip" title={member} key={index}>
                          <img src="assets/img/profiles/avatar-02.jpg" alt="User Image" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section" style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button type="submit" className="btn btn-primary submit-btn responsive-btn" style={{ width: '120px', height: '50px' }}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
