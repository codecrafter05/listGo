import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginPage({ setUser }) {

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
    <body className="account-page">
	
        <div className="main-wrapper">
			<div className="account-content">
				<div className="container">
				
					<div className="account-logo">
						<a href="admin-dashboard.html"><img src="assets/img/logo2.png" alt="Dreamguy's Technologies"></img></a>
					</div>
					
					<div className="account-box">
						<div className="account-wrapper">
							<h3 className="account-title">Login</h3>
							<p className="account-subtitle">Access to our dashboard</p>
							
							<form>
								<div className="input-block mb-4">
									<label className="col-form-label">Email Address</label>
									<input type="text" name="email" className="form-control"></input>
								</div>
								<div className="input-block mb-4">
									<div className="row align-items-center">
										<div className="col">
											<label className="col-form-label">Password</label>
										</div>
									</div>
									<div className="position-relative">
										<input className="form-control" type="password" name="password" id="password"></input>
										<span className="fa-solid fa-eye-slash" id="toggle-password"></span>
									</div>
								</div>
								<div className="input-block mb-4 text-center">
									<button className="btn btn-primary account-btn">Login</button>
								</div>
								<div className="account-footer">
									<p>Don't have an account yet? <a href="register.html">Register</a></p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
        </div>	
    </body>
        </>
      );
}