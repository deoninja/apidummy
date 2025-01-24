import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/dashboard'
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Routes>
    </Router>
  );
}

export default App;
