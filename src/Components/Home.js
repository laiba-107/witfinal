import React, { useState } from 'react';
import { sendApiRequest } from '../services/api';

const Home = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleApiAction = async (endpoint, method, data = null) => {
    try {
      const res = await sendApiRequest(endpoint, method, data);
      setResponse(res);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">API Actions</h3>
      <div className="row gy-3">
        <div className="col-md-6">
          <button
            className="btn btn-primary w-100"
            onClick={() => handleApiAction('/users/2', 'PUT', { name: 'morpheus', job: 'zion resident' })}
          >
            Update User (PUT)
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleApiAction('/users/2', 'PATCH', { job: 'leader' })}
          >
            Update Job (PATCH)
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-danger w-100"
            onClick={() => handleApiAction('/users/2', 'DELETE')}
          >
            Delete User (DELETE)
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-success w-100"
            onClick={() => handleApiAction('/register', 'POST', { email: 'eve.holt@reqres.in', password: 'pistol' })}
          >
            Register - Successful (POST)
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-warning w-100"
            onClick={() => handleApiAction('/register', 'POST', { email: 'sydney@fife' })}
          >
            Register - Unsuccessful (POST)
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-info w-100"
            onClick={() => handleApiAction('/login', 'POST', { email: 'eve.holt@reqres.in', password: 'cityslicka' })}
          >
            Login - Successful (POST)
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-dark w-100"
            onClick={() => handleApiAction('/login', 'POST', { email: 'peter@klaven' })}
          >
            Login - Unsuccessful (POST)
          </button>
        </div>
      </div>

      {/* Response Display */}
      <div className="mt-4">
        <h5>Response:</h5>
        {response && (
          <pre className="p-3 bg-light border">
            {JSON.stringify(response, null, 2)}
          </pre>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Home;
