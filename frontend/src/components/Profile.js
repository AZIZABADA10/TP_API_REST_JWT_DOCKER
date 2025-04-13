import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get('/profile')
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  return user ? (
    <div>
      <h1>Profil</h1>
      <p>Nom d'utilisateur : {user.username}</p>
    </div>
  ) : (
    <p>Chargement...</p>
  );
};

export default Profile;
