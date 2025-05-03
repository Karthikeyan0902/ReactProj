import React, { useRef } from 'react';
import Sidebar from '../Components/SideBar';
function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>useRef Hook Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br /><br />
      <button onClick={handleFocus} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Focus Input
      </button>
      <Sidebar/>
    </div>
  );
}

export default FocusInput;
