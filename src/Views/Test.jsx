import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmitChange = () => {
    if (!name || !pass) {
      alert("Please fill in both fields.");
      return;
    }

    // Add the user to the user list
    const updatedUserList = [...userList, name];
    setUserList(updatedUserList);
    setSubmitted(true);
    alert(`Hello: ${name}`);
    setName('');

    // Navigate to /userlist and pass userList through state
    navigate('/userlist', { state: { users: updatedUserList } });
  };

  let message = null;
  if (submitted) {
    message = <p style={{ color: 'green' }}>Welcome, {name}!</p>;
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <input
        type="text"
        placeholder="Enter The Name"
        value={name}
        onChange={handleNameChange}
      /><br />
      <input
        type="password"
        placeholder="Enter The Pass"
        value={pass}
        onChange={handlePasswordChange}
      /><br />

      {name && pass && (
        <button onClick={handleSubmitChange}>Submit</button>
      )}

  {message}
    </div>
  );
}

export default SignIn;
