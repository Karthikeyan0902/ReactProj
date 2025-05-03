import React, { useReducer } from 'react';
import Button from '@mui/material/Button';
import './Counter.css'
import SideBar from '../Components/SideBar';
import FindingBar from '../Components/FindingBar'

const initialState = { count: 0, error: '' };

function counterReducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, error: '' };
    case 'DECREMENT':
      if (state.count <= 0) {
        return { ...state, error: 'Minis value reached' }; 
      }
      return { count: state.count - 1, error: '' };
    case 'RESET':
      return { count: 0, error: '' };
    default:
      return state;
  }
}

function Counter() {

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <FindingBar />
      <div className="body">
        <div className="Content scroll">
          <h1>Counter App</h1>
          <h2>Count: {state.count}</h2>

          <Button onClick={handleIncrement} variant='contained'>Increment</Button>{' '}
          <Button onClick={handleDecrement} color='error' variant='outlined'>Decrement</Button>{' '}
          <Button onClick={handleReset} variant='outlined'>Reset</Button>

          {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

          {state.count === 0 && <p>Counter is at zero.</p>}
        </div>

        <SideBar />
      </div>
    </div>
  );
}

export default Counter;
