import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Counter";

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // New state for email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleSubmit = () => {
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // After successful signup, navigate to login page
    setError('');
    alert("Signup successful!");
    navigate("/Login"); // Redirect to Login page after Signup
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
          label="Email"  // Email field added
          type="email"  // Use email type for validation
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <Button variant="contained" onClick={handleSubmit}>SignUp</Button>{' '}
        <Button variant="outlined" onClick={() => { setUsername(''); setEmail(''); setPassword(''); }}>Cancel</Button>
      </div>
    </div>
  );
}

export default Signup;
