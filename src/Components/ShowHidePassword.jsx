import React from 'react';
import useToggle from '../Hooks/useToggle';

function ShowHidePassword() {
  const [isPasswordVisible, togglePasswordVisibility] = useToggle(false);

  return (
    <div style={{ padding: '20px' }}>
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Enter password"
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      <button onClick={togglePasswordVisibility} style={{ padding: '8px' }}>
        {isPasswordVisible ? 'Hide' : 'Show'} Password
      </button>
    </div>
  );
}

export default ShowHidePassword;
