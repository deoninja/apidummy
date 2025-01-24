import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';
import ProductTable from './ProductTable'

function Dashboard() {
  const nanigate = useNavigate();
  

  const handleLogout = () => {
    logout();
    nanigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard content</p>
      <p>Welcome to my dashboard</p>
      <ProductTable />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
