import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Counter";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // After successful login, navigate to home
    setError('');
    alert("Login successful!");
    navigate("/Home"); // Redirect to home page
  };

  return (
    <div>
      <div className="content">
        <TextField 
          label="UserName" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
        /><br /><br />
        <TextField 
          label="Password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        /><br /><br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        <Button variant="contained" onClick={handleLogin}>Login</Button>{' '}
        <Button variant="outlined" onClick={() => { setUsername(''); setPassword(''); }}>Cancel</Button>
      </div>
    </div>
  );
}

export default Login;
