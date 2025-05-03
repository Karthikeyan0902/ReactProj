import React, { useState } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useToggle from "../Hooks/useToggle";

function Login({ setLoggedInUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, toggleShowPassword] = useToggle(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // For demo → assume username is 'TestUser'
    const username = 'TestUser';

    setLoggedInUser({ username, email });
    setError('');
    alert("Login successful!");
    navigate("/Home");
  };

  return (
    <div>
      <div className="content">
        <TextField 
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        /><br /><br />

        <TextField 
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        /><br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Button variant="contained" onClick={handleLogin}>Login</Button>{' '}
        <Button variant="outlined" onClick={() => { setEmail(''); setPassword(''); }}>Cancel</Button>
      </div>
    </div>
  );
}

export default Login;
