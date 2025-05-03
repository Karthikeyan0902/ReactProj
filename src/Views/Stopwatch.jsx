import React, { useState, useEffect } from 'react';
import SideBar from '../Components/SideBar';
import FindingBar from '../Components/FindingBar'

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <FindingBar/>
      <h1>Stopwatch</h1>
      <h2>{seconds}s</h2>
      <button onClick={toggle}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={reset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
      
      <SideBar/>
    </div>
  );
};

export default Stopwatch;
