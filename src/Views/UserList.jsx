import React from 'react';
import { useLocation } from 'react-router-dom';

function UserList() {
  const location = useLocation();
  const users = location.state?.users || [];  // Access passed state or fallback to empty array

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No users yet!</p>
      )}
    </div>
  );
}

export default UserList;
