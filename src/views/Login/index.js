import React, { useState } from 'react'
import './login.scss';

function Login() {
  document.title = "Login";
  
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('loggedIn', (username ==='admin' && password === 'admin123'));

    window.location.reload();
  }

  return (
    <div className="login">
      <form className="login-box" onSubmit={ handleSubmit }>
        <h3 className="login-box--title">Login</h3>
        <div className="login-box--group">
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="login-box--group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="login-box--group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
