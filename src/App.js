import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Login from './Components/Login';
import Register from './Components/Register';
import UserList from './Components/UserList';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'userlist':
        return <UserList />;
      default:
        return (
          <Container>
            <h2>Welcome</h2>
            <Button onClick={() => setPage('login')}>Go to Login</Button>
            <Button onClick={() => setPage('register')}>Go to Register</Button>
          </Container>
        );
    }
  };

  return <div>{renderPage()}</div>;
};

export default App;
