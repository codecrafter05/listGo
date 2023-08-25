// file: src\pages\AuthPage\AuthPage.jsx
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <div className="account-page">
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container">
              <div className="account-logo">
                <a href="admin-dashboard.html"><img src="assets/img/logo2.png" alt="Dreamguy's Technologies"></img></a>
              </div>
              <div className="account-box">
                <div className="account-wrapper">
                  {showSignUp ?
                    <SignUpForm setUser={setUser} />
                    :
                    <LoginForm setUser={setUser} />
                  }
                  <div className="account-footer">
                    {showSignUp ? (
                      <p>
                        Already have an account?{' '}
                        <a href='#' onClick={() => setShowSignUp(false)}>Login</a>
                      </p>
                    ) : (
                      <p>
                        Don't have an account yet?{' '}
                        <a href='#' onClick={() => setShowSignUp(true)}>Register</a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}