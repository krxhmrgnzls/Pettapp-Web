// src/App.jsx
import React from 'react';
import { 
  BrowserRouter as Router, Routes, Route, Navigate 
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Import pages - Public
import LandingPage from './pages/Landing/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import AccountCreatedPage from './pages/Auth/AccountCreatedPage';
import ForgotPasswordPage from './pages/Auth/ForgotPasswordPage';
import UserSelectionPage from './pages/Auth/UserSelectionPage';

// Import pages - Business
import BusinessInfoPage from './pages/Business/BusinessInfoPage';
import BusinessInfoPage2 from './pages/Business/BusinessInfoPage2';
import BusinessDashboard from './pages/Business/BusinessDashboard';
import BusinessCalendar from './pages/Business/BusinessCalendar';
import BusinessBookings from './pages/Business/BusinessBookings';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') || localStorage.getItem('businessData');
    return isAuthenticated ? children : <Navigate to="/login" />
  };

function App() {
  return (
    <Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#10b981',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/account-created" element={<AccountCreatedPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* User Selection & Business Onboarding */}
        <Route path="/user-selection" element={<UserSelectionPage />} />
        <Route path="/business-info" element={<BusinessInfoPage />} />
        <Route path="/business-info-2" element={<BusinessInfoPage2 />} />
        
        {/* Business Dashboard */}
        <Route 
          path="/business/dashboard" 
          element={
            <ProtectedRoute>
              <BusinessDashboard />
            </ProtectedRoute>
          }
        />
        {/* Business Dashboard */}
        <Route 
          path="/business/calendar" 
          element={
            <ProtectedRoute>
              <BusinessCalendar />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/business/bookings" 
          element={
            <ProtectedRoute>
              <BusinessBookings />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}


export default App;