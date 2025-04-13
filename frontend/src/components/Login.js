import React, { useState } from 'react';
import API from '../services/api';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Connexion réussie');
    } catch (err) {
      alert('Erreur : ' + err.response?.data?.message);
    }
  };

  return (
    <div>
        <h1>Connexion</h1>
        <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" onChange={(e) => setForm({...form, username: e.target.value})} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} />
        <button type="submit">Se connecter</button>
        <a href="/register">S'inscrire</a>
    </form>
    </div>
  );
};

export default Login;
