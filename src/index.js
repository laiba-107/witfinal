import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Render the App inside the root element
root.render(
  <App />
);
