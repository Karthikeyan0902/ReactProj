import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from './Button'; // ← import reusable Button
import './sidebar.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <Button onClick={toggleSidebar} className="toggle-btn">
        Expand/Short
      </Button>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Counter">Counter</Link></li>
        <li><Link to="/TodoList">TodoList</Link></li>
        <li><Link to="/Search">SearchFilter</Link></li>
        <li><Link to="/Stopwatch">StopWatch</Link></li>
        <li><Link to="/theme">Theme</Link></li>
        <li><Link to="/Focus">Focus</Link></li>
        <li><Link to="/Login">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
