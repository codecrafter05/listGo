///folder:src/ProfilePage/profile.jsx
import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import '../../styles/PersonalProfile.css'; 
import sendRequest from '../../utilities/send-request';

const PersonalProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [jobTitle, setJobTitle] = useState(() => localStorage.getItem('jobTitle') || 'Web Designer');
  const [selectedFile, setSelectedFile] = useState(() => localStorage.getItem('selectedFile') || null);

  useEffect(() => {
    sendRequest('/api/profiles')
      .then(data => setProfileData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const user = profileData || {
    name: 'Marie Horwitz',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
    email: 'info@example.com',
  };

  const handleFileChange = (e) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setSelectedFile(fileUrl);
    localStorage.setItem('selectedFile', fileUrl);
  };

  const handleJobChange = (e) => {
    setJobTitle(e.target.value);
    localStorage.setItem('jobTitle', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    user.image = selectedFile;
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <label htmlFor="profile-pic">
                    <MDBCardImage src={selectedFile || user.image}
                      alt="Avatar" className="my-5 rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} fluid />
                  </label>
                  <input id="profile-pic" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                  <MDBTypography tag="h5">{user.name}</MDBTypography>
                  <MDBTypography tag="h6" variant="muted">{jobTitle}</MDBTypography>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h5" className="mb-4">
                      Welcome {user.name}
                    </MDBTypography>
                    <MDBTypography tag="h6" className="mb-4 text-muted">
                      Email: {user.email}
                    </MDBTypography>
                    <form onSubmit={handleSubmit}>
                      <MDBInput type="text" value={jobTitle} onChange={handleJobChange} outline size="sm" />
                      {/* <MDBBtn type="submit" rounded className="mt-3">Update</MDBBtn> */}
                    </form>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default PersonalProfile;