// src/pages/Auth/UserSelectionPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/layout/Header';

const UserSelectionPage = () => {
  const navigate = useNavigate();

  const handleUserTypeSelection = (userType) => {
    // Store user type in localStorage
    localStorage.setItem('userType', userType);
    
    if (userType === 'business') {
      navigate('/business-info');
    } else if (userType === 'pet-owner') {
      navigate('/dashboard'); // or pet owner specific dashboard
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            {/* Title */}
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-blue-500 mb-2">
                Continue as
              </h1>
              <p className="text-gray-600">
                Select a user profile to continue
              </p>
            </div>

            {/* User Type Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => handleUserTypeSelection('pet-owner')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Pet Owner
              </button>

              <button
                onClick={() => handleUserTypeSelection('business')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Business
              </button>
            </div>

            {/* Help Text */}
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500">
                Choose the account type that best describes you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelectionPage;