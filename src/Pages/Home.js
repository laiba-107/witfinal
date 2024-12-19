import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/unknown/1');  // Example API request
        setMessage(response.data.data.name);  // Adjust based on API response structure
      } catch (error) {
        setMessage('Error fetching data');
        console.error('Error fetching message:', error);
      }
    };
    fetchMessage();
  }, []);

  const handleLoginRedirect = () => {
    window.location.href = '/login'; // Axios-based navigation by updating the window location
  };

  const handleRegisterRedirect = () => {
    window.location.href = '/register'; // Axios-based navigation by updating the window location
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
          <h2>Welcome to the Home Page</h2>
          <p>{message ? `Message from API: ${message}` : 'Loading message from API...'}</p>
          <Button variant="primary" onClick={handleLoginRedirect} className="m-2">
            Go to Login
          </Button>
          <Button variant="secondary" onClick={handleRegisterRedirect} className="m-2">
            Go to Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
