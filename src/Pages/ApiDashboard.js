import React, { useState } from 'react';
import axios from 'axios';

const ApiDashboard = () => {
  const [endpoint, setEndpoint] = useState('/users'); // Default endpoint
  const [method, setMethod] = useState('GET'); // Default method
  const [requestData, setRequestData] = useState(''); // Request payload (for POST/PUT)
  const [response, setResponse] = useState(null); // API response
  const [error, setError] = useState(null); // Error message
  const [loading, setLoading] = useState(false); // Loading state

  const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

  const handleApiRequest = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const config = {
        url: `${API_BASE_URL}${endpoint}`,
        method: method.toLowerCase(),
        headers: { 'Content-Type': 'application/json' },
        data: requestData ? JSON.parse(requestData) : null,
      };

      const res = await axios(config);
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data || 'An error occurred while processing the request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>API Dashboard</h2>
      <p>Use this dashboard to send requests to the API and view responses.</p>

      <div className="mb-3">
        <label htmlFor="endpoint" className="form-label">Endpoint</label>
        <input
          type="text"
          id="endpoint"
          className="form-control"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          placeholder="e.g., /users, /posts"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="method" className="form-label">HTTP Method</label>
        <select
          id="method"
          className="form-select"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>

      {method !== 'GET' && (
        <div className="mb-3">
          <label htmlFor="requestData" className="form-label">Request Data</label>
          <textarea
            id="requestData"
            className="form-control"
            rows="5"
            value={requestData}
            onChange={(e) => setRequestData(e.target.value)}
            placeholder='e.g., {"name": "John Doe", "email": "john@example.com"}'
          ></textarea>
        </div>
      )}

      <button className="btn btn-primary" onClick={handleApiRequest}>
        {loading ? 'Sending...' : 'Send Request'}
      </button>

      {response && (
        <div className="mt-4">
          <h5>Response:</h5>
          <pre className="bg-light p-3 rounded">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-4">
          <strong>Error:</strong> {JSON.stringify(error, null, 2)}
        </div>
      )}
    </div>
  );
};

export default ApiDashboard;
