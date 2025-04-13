import React, { useEffect, useState } from 'react';
import API from '../services/api';
import './styles/Profile.css'; 

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get('/profile')
      .then(res => setProfile(res.data))
      .catch(err => console.error('Erreur chargement du profil', err));
  }, []);

  if (!profile) return <p style={{ textAlign: 'center' }}>Chargement...</p>;

  return (
    <div className="profile-container">
      <h2>La page de Profil</h2>
      <h2 className="welcome">Bienvenue {profile.username}</h2>
    </div>
  );
};

export default Profile;
