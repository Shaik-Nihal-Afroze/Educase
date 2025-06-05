import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './LoginPage.css';

function LoginPage() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameFromEmail = email.split('@')[0];
    const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);

    setUser({
      name: formattedName,
      email: email,
      description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr...'
    });
    if (isButtonEnabled) {
      navigate('/account'); 
    }
  };

  return (
    <div className="login-card">
      <h2>
        Signin to your <br />
        PopX account
      </h2>
      <p>
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className={`login-btn `}
          type="submit"
          
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
