import React, { useState } from 'react';

export default function NewListModal({ onCreate }) {
  const [listName, setListName] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);

  const handleAddMember = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      setTeamMembers(prevMembers => [...prevMembers, e.target.value]);
      e.target.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (listName.trim() === '' || teamMembers.length === 0) {
      alert('Both fields are required!');
      return;
    }

    try {
      const response = await fetch('/api/lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: listName,
          members: teamMembers,
        }),
      });

      const data = await response.json();
      console.log(data); // Log the data for now, update this to do something useful in your app

      // Call the onCreate function prop after creating the list
      onCreate(data);

    } catch (err) {
      console.error(err);
    }

    setListName('');
    setTeamMembers([]);
  };

  return (
    <div id="create_list" className="modal custom-modal" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add a List</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <label>Canary</label>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">List Name</label>
                    <input className="form-control" type="text" value={listName} onChange={(e) => setListName(e.target.value)}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Add Team Member</label>
                    <div className="input-group">
                      <input className="form-control" type="text" onKeyDown={handleAddMember}/>
                      <button className="btn btn-primary" type="button">Add</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Team Members</label>
                    <div className="list-members">
                      {teamMembers.map((member, index) => (
                        <a className="avatar" href="#" data-bs-toggle="tooltip" title={member} key={index}>
                          <img src="assets/img/profiles/avatar-02.jpg" alt="User Image"/>
                        </a>
                      ))}
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
  );
}