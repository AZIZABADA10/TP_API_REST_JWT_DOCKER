import React, { useState } from 'react';
import API from '../services/api';
import './styles/Register.css'; 

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/register', form);
      setMessage(res.data.message || 'Inscription réussie !');
    } catch (err) {
      setMessage(err.response?.data?.error || 'Erreur lors de l\'inscription.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>S'inscrire</h2>

      <label>Nom :</label>
      <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />

      <label>Mot de passe :</label>
      <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />

      <button type="submit">S'inscrire</button>

      {message && <p>{message}</p>}

      <a href="/login">Déjà inscrit ? Connectez-vous</a>
    </form>
  );
};

export default Register;
