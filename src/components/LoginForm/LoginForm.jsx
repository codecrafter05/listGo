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
      // The promise returned by the login service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="container">
          <div className="account-logo">
            <a href="admin-dashboard.html"><img src="assets/img/logo2.png" alt="Dreamguy's Technologies" /></a>
          </div>
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle">Access to our ListGo</p>

              <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                <button type="submit">LOG IN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}