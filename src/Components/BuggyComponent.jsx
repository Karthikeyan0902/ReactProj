import React, { useState } from 'react';

function BuggyComponent() {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('Simulated error!');
  }

  return (
    <div>
      <h3>Buggy Component</h3>
      <button onClick={() => setThrowError(true)}>Trigger Error</button>
    </div>
  );
}

export default BuggyComponent;
