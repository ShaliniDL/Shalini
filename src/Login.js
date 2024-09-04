// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Optional: for custom styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [submittedPassword, setSubmittedPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Set submitted values
    setSubmittedEmail(email);
    setSubmittedPassword(password);

    // Clear error if submission is successful
    setError('');
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {submittedEmail && submittedPassword && (
        <div className="submitted-info">
          <h3>Submitted Details:</h3>
          <p><strong>Email:</strong> {submittedEmail}</p>
          <p><strong>Password:</strong> {submittedPassword}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
