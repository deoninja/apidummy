import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/login');
  };

  return <button onClick={handleLogout}>logout</button>;
};

export default Logout;
