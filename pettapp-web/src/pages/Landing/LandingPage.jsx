import { useNavigate } from 'react-router-dom';
import Header from 'src/components/layout/Header.jsx';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pet Care Wellness, One Tap Away
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with trusted pet care services near you.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/signup')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="bg-white hover:bg-gray-50 text-blue-500 border-2 border-blue-500 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Pet Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Option 1: Use an actual image */}
              <img 
                src="/images/pets-hero.png" 
                alt="Happy pets" 
                className="w-full max-w-lg h-auto"
                onError={(e) => {
                  // If image doesn't load, show the fallback illustration
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              
              {/* Fallback illustration if no image */}
              <div className="hidden">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-70"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-70"></div>
                  
                  {/* Pet silhouettes */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="text-8xl">🐕</div>
                    <div className="text-7xl ml-4">🐈</div>
                  </div>
                  
                  {/* Additional decorative pets */}
                  <div className="absolute top-20 right-20 text-5xl animate-bounce">🦜</div>
                  <div className="absolute bottom-20 left-20 text-4xl animate-pulse">🐰</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose PetTapp?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Services Near You</h3>
              <p className="text-gray-600">Locate trusted pet care providers in your area with our GPS-enabled search</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Schedule appointments with just a few taps and get instant confirmations</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Providers</h3>
              <p className="text-gray-600">All service providers are verified and trusted for your peace of mind</p>
            </div>
          </div>
        </div>

        {/* Pet Types Section */}
        <div className="py-16 bg-white rounded-2xl shadow-lg mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Services for All Pet Types</h3>
          <div className="flex justify-center space-x-8 flex-wrap gap-4">
            <div className="text-center">
              <div className="text-6xl mb-2">🐕</div>
              <p className="text-gray-700">Dogs</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🐈</div>
              <p className="text-gray-700">Cats</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🦜</div>
              <p className="text-gray-700">Birds</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🐰</div>
              <p className="text-gray-700">Rabbits</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🐹</div>
              <p className="text-gray-700">Hamsters</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🐢</div>
              <p className="text-gray-700">Reptiles</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <img 
                  src="/images/logo.png" 
                  alt="PetTapp" 
                  className="h-8 w-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center space-x-2">
                  <div className="bg-blue-500 p-1.5 rounded">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.5 10.5C4.5 12.9853 6.51472 15 9 15C11.4853 15 13.5 12.9853 13.5 10.5C13.5 8.01472 11.4853 6 9 6C6.51472 6 4.5 8.01472 4.5 10.5Z"/>
                      <path d="M10.5 10.5C10.5 12.9853 12.5147 15 15 15C17.4853 15 19.5 12.9853 19.5 10.5C19.5 8.01472 17.4853 6 15 6C12.5147 6 10.5 8.01472 10.5 10.5Z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">PetTapp</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Your trusted pet care companion in your area.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="/about" className="text-gray-600 hover:text-blue-500 text-sm">About Us</a>
              <a href="/help" className="text-gray-600 hover:text-blue-500 text-sm">Help Center</a>
              <a href="/terms" className="text-gray-600 hover:text-blue-500 text-sm">Terms of Use</a>
              <a href="/privacy" className="text-gray-600 hover:text-blue-500 text-sm">Privacy Policy</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 PetTapp. All rights reserved.
              </p>
              
              {/* App Download Buttons */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="text-xs">Download on the<br/>App Store</span>
                </a>
                <a 
                  href="#" 
                  className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35l13.18 8.5-13.18 8.5c-.5-.24-.84-.76-.84-1.35zm14.96-8.49L5.21 3.77v16.46l12.75-8.22zm1.77-1.14l3.21 2.07c.8.52.8 1.6 0 2.12l-3.21 2.07-2.22-1.43 2.22-1.43-2.22-1.43 2.22-1.43v.04z"/>
                  </svg>
                  <span className="text-xs">Get it on<br/>Google Play</span>
                </a>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center mt-8 space-x-6">
              <span className="text-gray-500 text-sm">Contact Us:</span>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;