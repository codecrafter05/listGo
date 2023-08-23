import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="auth-container-ali">
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
      <p>Don't have an account yet? <a className='account-footer' style={{ color: 'blue' }} onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Register'}</a></p>
    </main>
  );
}