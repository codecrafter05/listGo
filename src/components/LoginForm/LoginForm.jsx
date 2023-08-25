import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <h3 className="account-title">Login</h3>
      <p className="account-subtitle">Access to our dashboard</p>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-block mb-4">
          <label className="col-form-label">Email Address</label>
          <input type="text" name="email" className="form-control" value={credentials.email} onChange={handleChange} required></input>
        </div>
        <div className="input-block mb-4">
          <div className="row align-items-center">
            <div className="col">
              <label className="col-form-label">Password</label>
            </div>
          </div>
          <div className="position-relative">
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required className="form-control" id="password"></input>
            <span className="fa-solid fa-eye-slash" id="toggle-password"></span>
          </div>
        </div>
        <div className="input-block mb-4 text-center">
          <button type="submit" className="btn btn-primary account-btn">Login</button>
        </div>
      </form>
    </>
  );
}

