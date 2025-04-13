import React, { useState } from 'react';
import API from '../services/api';
import './styles/login.css';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      localStorage.setItem('token', res.data.token);
      onLogin(); 
    } catch (err) {
      setError('Identifiants invalides');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Page de connexion</h2>

      <label>Nom :</label>
      <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} />

      <label>Mot de passe :</label>
      <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} />

      <button type="submit">Se connecter</button>

      {error && <p>{error}</p>}

      <a href="/register">Pas encore inscrit ?</a>
    </form>
  );
};

export default Login;
