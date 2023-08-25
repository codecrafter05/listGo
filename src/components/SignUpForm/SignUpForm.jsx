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
      <>
        <h3 className="account-title">Register</h3>
        <p className="account-subtitle">Access to our dashboard</p>

        <form autoComplete="off" onSubmit={this.handleSubmit}>

          <div className="input-block mb-4">
            <label className="col-form-label">Name<span className="mandatory">*</span></label>
            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} required></input>
          </div>

          <div className="input-block mb-4">
            <label className="col-form-label">Email <span className="mandatory">*</span></label>
            <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} required></input>
          </div>

          <div className="input-block mb-4">
            <div className="row align-items-center">
              <div className="col">
                <label className="col-form-label">Password<span className="mandatory">*</span></label>
              </div>
            </div>
            <div className="position-relative">
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required className="form-control" id="password"></input>
              <span className="fa-solid fa-eye-slash" id="toggle-password"></span>
            </div>
          </div>

          <div className="input-block mb-4">
            <div className="row align-items-center">
              <div className="col">
                <label className="col-form-label">Repeat Password<span className="mandatory">*</span></label>
              </div>
            </div>
            <div className="position-relative">
              <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required className="form-control" id="confirm"></input>
              <span className="fa-solid fa-eye-slash" id="toggle-password"></span>
            </div>
          </div>

          <div className="input-block mb-4 text-center">
            <button className="btn btn-primary account-btn" type="submit" disabled={disable}>Register</button>
          </div>

        </form>
        <p className="error-message">&nbsp;{this.error}</p>
      </>
    );
  }
}
