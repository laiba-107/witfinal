import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';  // Importing necessary Bootstrap components
import './App.css';  // Import custom CSS for any additional styling

const App = () => {
  return (
    <div className="App">
      <header className="hero-section">
        <Container fluid="md">
          <Row className="align-items-center justify-content-center text-center">
            <Col>
              <h1 className="display-4 text-white mb-4">
                Your customers will love you one minute from now.
              </h1>
              <p className="lead text-white mb-4">
                See how your users experience your website in real-time or view trends to see any changes in performance over time.
              </p>
              <Button variant="primary" size="lg" className="mr-3">
                Get Started
              </Button>
              <Button variant="outline-light" size="lg">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default App;
