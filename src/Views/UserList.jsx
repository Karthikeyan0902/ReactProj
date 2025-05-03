import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/SideBar';
import FindingBar from '../Components/FindingBar';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      <FindingBar />
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
      <Sidebar />
    </div>
  );
}

export default UserList;
