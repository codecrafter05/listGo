import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="account-page">
      <div className="main-wrapper">
    <div className="account-content">
      <div className="container">
      
        <div className="account-logo">
          <a href="admin-dashboard.html"><img src="assets/img/logo2.png" alt="Dreamguy's Technologies"></img></a>
        </div>
        
        <div className="account-box">
          <div className="account-wrapper">
            <h3 className="account-title">Register</h3>
            <p className="account-subtitle">Access to our dashboard</p>
            
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="input-block mb-4">
              <label className="col-form-label">Name<span className="mandatory">*</span></label>
              <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label className="col-form-label">Email<span className="mandatory">*</span></label>
                <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
              </div>
              <div className="input-block mb-4">
                <label className="col-form-label">Password<span className="mandatory">*</span></label>
                <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              </div>
              <div className="input-block mb-4">
                <label className="col-form-label">confirm<span className="mandatory">*</span></label>
                <input className="form-control" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              </div>
              <div className="input-block mb-4 text-center">
                <button className="btn btn-primary account-btn" type="submit">Register</button>
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
}