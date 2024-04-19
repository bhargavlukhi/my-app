import React from 'react';
import './LoginForm.css';



function LoginForm() {
  return (
    <div className="login-form">
      <h2>Welcome back!</h2>
      <h4>Please enter the credentials below.</h4>
      <form>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
