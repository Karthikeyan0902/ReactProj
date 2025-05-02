import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './Counter.css'
import SideBar from '../Components/SideBar';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div class="body">
      <div class="Content scroll">
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>

        <Button onClick={handleIncrement} variant='contained'>Increment</Button>{' '}
        <Button onClick={handleDecrement} color='error' variant='outlined'>Decrement</Button>{' '}
        <Button onClick={handleReset} variant='outlined'>Reset</Button>

        {count === 0 && <p>Counter is at zero.</p>}
      </div>

      <SideBar/>
    </div>
  );
}

export default Counter;
