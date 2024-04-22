import React, { useState } from 'react';
import './LoginForm.css';

//import {useHistory} from 'react-dom'


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError ] = useState('');

  const handleLogin = (e) => {
    //add username and password we can check from db or API
    e.preventDefault();
    if (username === 'admin@gmail.com' && password === 'password') {
      alert('Login successful!');
     // history.push('/Dashboard')
      //want to redirect page
    } else {
      alert("Invalid username and password.")
      //setError('Invalid username and password.');
    }
    
 };

  return (
    <div className="login-form">
      <h2>Welcome back!</h2>
      <h4>Please enter the credentials below.</h4>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            value={username} 
            placeholder="Enter Email Address" 
            onChange={(e) => setUsername(e.target.value)}
          />
          
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            placeholder="Enter Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}

        </div>
        <button type="submit">LOGIN</button>

        <div className="forgot-password">
          <a onClick={''} >Forgot your Password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
