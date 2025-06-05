// App.js
import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import WelcomePage from './components/WelcomePage/WelcomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import AccountSettings from './components/AccountSettings/AccountSettings';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>

    </UserProvider>
    
  );
}

export default App;
