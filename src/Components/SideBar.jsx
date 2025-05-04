import React, { useState } from "react";
import { Link } from "react-router-dom";
import './sidebar.css';

function Sidebar({ username }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <p>Welcome, {username || 'Guest'}!</p>

      <ul>
        <li><Link to="/Home">Home</Link></li>

        <li>
          <button onClick={() => toggleSubmenu('tools')}>
            Tools {openSubmenu === 'tools' ? '▲' : '▼'}
          </button>

          {openSubmenu === 'tools' && (
            <ul className="submenu">
              <li><Link to="/Counter">Counter</Link></li>
              <li><Link to="/Stopwatch">StopWatch</Link></li>
            </ul>
          )}
        </li>
        <li>
          <button onClick={() => toggleSubmenu('utilities')}>
            Utilities {openSubmenu === 'utilities' ? '▲' : '▼'}
          </button>
          {openSubmenu === 'utilities' && (
            <ul className="submenu">
              <li><Link to="/Search">SearchFilter</Link></li>
              <li><Link to="/Focus">Focus</Link></li>
              <li><Link to="/List">List</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/theme">Theme</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/Login">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
