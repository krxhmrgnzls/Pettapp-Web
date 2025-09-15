import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';

const AccountCreatedPage = () => {
  const navigate = useNavigate();

  // Optional: Auto-redirect to login after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Uncomment if you want auto-redirect
      // navigate('/login');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 rounded-full p-6">
                <svg 
                  className="w-16 h-16 text-blue-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="3" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold text-blue-500 mb-4">
              Account Created!
            </h1>
            
            <p className="text-gray-600 mb-8">
              Verify your account through the link<br />
              sent to your email.
            </p>

            {/* Continue Button */}
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Continue to Login
            </button>

            {/* Optional: Resend Email Link */}
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Didn't receive the email?{' '}
                <button 
                  onClick={() => {
                    // TODO: Implement resend email functionality
                    console.log('Resend email clicked');
                  }}
                  className="text-blue-500 hover:text-blue-600 font-medium hover:underline"
                >
                  Resend
                </button>
              </p>
            </div>
          </div>

          {/* Help Text */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Need help?{' '}
              <a href="/contact" className="text-blue-500 hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreatedPage;