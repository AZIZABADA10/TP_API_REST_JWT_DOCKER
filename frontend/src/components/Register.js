import React, { useState } from 'react';
import API from '../services/api';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/register', form);
      alert('Inscription réussie');
    } catch (err) {
      alert('Erreur : ' + err.response?.data?.message);
    }
  };

  return (
    <div>
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e) => setForm({...form, username: e.target.value})} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} />
        <button type="submit">S'inscrire</button>
        <a href="/">Se connecter</a>
    </form>
    </div>
  );
};

export default Register;
