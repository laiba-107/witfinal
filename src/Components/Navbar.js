import React from 'react';

const Navbar = ({ mode, setMode, isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" style={{cursor: 'pointer'}} onClick={() => setMode('home')}>
          React App
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span
                className={`nav-link ${mode === 'home' ? 'active' : ''}`}
                style={{cursor: 'pointer'}}
                onClick={() => setMode('home')}
              >Home</span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${mode === 'users' ? 'active' : ''}`}
                style={{cursor: 'pointer'}}
                onClick={() => setMode('users')}
              >Users</span>
            </li>
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <span
                    className={`nav-link ${mode === 'login' ? 'active' : ''}`}
                    style={{cursor: 'pointer'}}
                    onClick={() => setMode('login')}
                  >Login</span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link ${mode === 'register' ? 'active' : ''}`}
                    style={{cursor: 'pointer'}}
                    onClick={() => setMode('register')}
                  >Register</span>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <button className="btn btn-outline-danger nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
