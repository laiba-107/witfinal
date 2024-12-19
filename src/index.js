import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18, use `createRoot` instead of `render`
import './index.css';  // Custom global styles (optional)
import App from './App';  // Import the App component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap's CSS

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root for rendering

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
