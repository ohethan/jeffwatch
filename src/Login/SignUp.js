import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

function SignUp() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  }

  return (
    <div className="SignUp">
      <h1>Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="username-form">
          <label>
            Username:
            <input 
              type="text" 
              name="username" 
              onChange={(e) => setUsername(e.target.value)}
              minLength="4" 
              required 
            />
          </label>
        </div>
        <div className="password-form">
          <label>
            Password:
            <input 
              type="password" 
              name="password" 
              onChange={(e) => setPassword(e.target.value)} 
              minLength="4" 
              required 
            />
          </label>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default SignUp