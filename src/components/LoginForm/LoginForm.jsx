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
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            <div className="account-logo">
              <a href="admin-dashboard.html">
                <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
              </a>
            </div>

            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>

                <form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="input-block mb-4">
                    <label className="col-form-label">Email Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-block mb-4">
                    <div className="row align-items-center">
                      <div className="col">
                        <label className="col-form-label">Password</label>
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          value={credentials.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block mb-4 text-center">
                    <button className="btn btn-primary account-btn" type="submit">
                      LOG IN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}