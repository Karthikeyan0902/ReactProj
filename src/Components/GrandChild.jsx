import React from 'react';

function GrandChild() {
  const style = {
    backgroundColor: 'var(--background-color)',
    color: 'var(--text-color)',
    padding: 20,
    marginTop: 10,
  };

  return (
    <div style={style}>
      <p>I am the GrandChild component.</p>
    </div>
  );
}

export default GrandChild;
