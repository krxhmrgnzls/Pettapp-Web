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
import BusinessProfile from './pages/Business/BusinessProfile';
import BusinessMessages from './pages/Business/BusinessMessages';
import BusinessServices from './pages/Business/BusinessServices';
import BusinessSchedules from './pages/Business/BusinessSchedules';
import IncomeManagement from './pages/Business/IncomeManagement';
import FinancialSummary from './pages/Business/FinancialSummary';
 import AddNewService from './pages/Business/AddNewService';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') || localStorage.getItem('businessData');
  return isAuthenticated ? children : <Navigate to="/login" />;
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
        
        {/* Business Dashboard Routes */}
        <Route 
          path="/business/dashboard" 
          element={
            <ProtectedRoute>
              <BusinessDashboard />
            </ProtectedRoute>
          }
        />
        
        {/* Business Profile */}
        <Route 
          path="/business/profile" 
          element={
            <ProtectedRoute>
              <BusinessProfile />
            </ProtectedRoute>
          } 
        />
        
        <Route 
        path="/business/income-management" 
        element={
        <IncomeManagement />
        } />
        
        <Route 
        path="/business/financial-summary" 
        element={
        <FinancialSummary />
        } />
        
        {/* Business Messages */}
        <Route 
          path="/business/messages" 
          element={
            <ProtectedRoute>
              <BusinessMessages />
            </ProtectedRoute>
          } 
        />
        
        {/* Business Services */}
        <Route 
          path="/business/services" 
          element={
            <ProtectedRoute>
              <BusinessServices />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/business/services/new" 
          element={<AddNewService />
          } 
        />

        {/* Business Schedules */}
        <Route 
          path="/business/schedules" 
          element={
            <ProtectedRoute>
              <BusinessSchedules />
            </ProtectedRoute>
          } 
        />

        {/* Settings and Support - Optional, you can keep or remove these */}
        <Route 
          path="/business/settings" 
          element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="font-inter text-2xl font-bold mb-4">Settings Page</h1>
                <p>Settings functionality coming soon...</p>
              </div>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/business/support" 
          element={
            <ProtectedRoute>
              <div className="p-8 text-center">
                <h1 className="font-inter text-2xl font-bold mb-4">Help & Support</h1>
                <p>Support page coming soon...</p>
              </div>
            </ProtectedRoute>
          } 
        />

        {/* Catch all route - 404 */}
        <Route 
          path="*" 
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="font-inter text-center">
                <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Page not found</p>
                <a href="/" className="text-blue-500 hover:text-blue-600 font-medium">
                  Go back to home
                </a>
              </div>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;