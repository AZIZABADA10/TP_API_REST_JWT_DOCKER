import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  return (
    <Router>
      <div>
        <h1 style={
          { textAlign: 'center', color: 'black', fontSize: '2em', marginTop: '20px'
          , marginBottom: '20px' }
          }>
          TP Mise en place une application avec une archtecture microservice 
         </h1>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/profile" /> : <Login onLogin={handleLogin} />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/profile" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/profile" /> : <Register />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        </Routes>
        {isLoggedIn && (
          <button onClick={handleLogout} style={
            {
                display: 'block',
                margin: '30px auto',
                padding: '10px 20px',
                backgroundColor: '#dc3545',
                color: 'white',
                fontSize: '1em',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
            }
          }>Logout</button>

        )}
      </div>
    </Router>
  );
}

export default App;
