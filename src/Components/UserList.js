import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>User List</h2>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item key={user.id}>
            {user.first_name} {user.last_name} - {user.email}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;
