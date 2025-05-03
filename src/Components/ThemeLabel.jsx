// ThemeLabel.jsx

import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

function ThemeLabel() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default ThemeLabel;
