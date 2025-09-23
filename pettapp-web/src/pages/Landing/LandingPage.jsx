import { useState } from 'react';
// For the new footer icons - make sure to run: npm install react-icons
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const LandingPage = () => {
  // In a real app, you'd use a library like React Router for navigation.
  const [, setCurrentPage] = useState('/');

  const navigate = (path) => {
    setCurrentPage(path);
    console.log(`Navigating to: ${path}`);
    // This is where router.push(path) would go.
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url("/images/PetTapp pattern.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header Component */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              {/* Using a more descriptive logo path */}
              <img 
                src="/images/PetTapp-Logo.png" 
                alt="PetTapp" 
                className="h-12" // Adjusted size for better proportion
              />
              <span className="text-xl font-bold text-gray-900">PetTapp</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-500 px-3 py-2 text-sm font-medium">Home</a>
              <a href="/services" className="text-gray-600 hover:text-blue-500 px-3 py-2 text-sm font-medium">Services</a>
              <a href="/about" className="text-gray-600 hover:text-blue-500 px-3 py-2 text-sm font-medium">About</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-500 px-3 py-2 text-sm font-medium">Contact</a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={() => navigate('/login')} className="text-blue-500 hover:text-blue-600 px-4 py-2 text-sm font-medium">
                Login
              </button>
              <button onClick={() => navigate('/signup')} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Pet Care Wellness, One Tap Away
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10">
              Connect with trusted pet care services near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>

        {/* Features Section */}
        <div className="py-20 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose PetTapp?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Services Near You</h3>
                <p className="text-gray-600">Locate trusted pet care providers in your area with our GPS-enabled search</p>
              </div>
              <div className="text-center group">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                <p className="text-gray-600">Schedule appointments with just a few taps and get instant confirmations</p>
              </div>
              <div className="text-center group">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Providers</h3>
                <p className="text-gray-600">All service providers are verified and trusted for your peace of mind</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pet Types Section */}
        <div className="py-16 bg-gray-50/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Services for All Pet Types</h3>
              <div className="flex justify-center flex-wrap gap-8">
                <div className="text-center"><div className="text-6xl mb-2">🐕</div><p className="text-gray-700">Dogs</p></div>
                <div className="text-center"><div className="text-6xl mb-2">🐈</div><p className="text-gray-700">Cats</p></div>
                <div className="text-center"><div className="text-6xl mb-2">🦜</div><p className="text-gray-700">Birds</p></div>
                <div className="text-center"><div className="text-6xl mb-2">🐰</div><p className="text-gray-700">Rabbits</p></div>
                <div className="text-center"><div className="text-6xl mb-2">🐹</div><p className="text-gray-700">Hamsters</p></div>
                <div className="text-center"><div className="text-6xl mb-2">🐢</div><p className="text-gray-700">Reptiles</p></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* === NEW CORRECTED FOOTER === */}
      <footer className="bg-sky-100 text-slate-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            
            {/* Column 1: Download App */}
            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold mb-3">Download App:</p>
              <div className="flex flex-col space-y-3">
                <a href="#" aria-label="Get it on Google Play">
                  <img src="/images/google-play-badge.png" alt="Get it on Google Play" className="h-12" />
                </a>
                <a href="#" aria-label="Download on the App Store">
                  <img src="/images/app-store-badge.png" alt="Download on the App Store" className="h-12" />
                </a>
              </div>
            </div>

            {/* Column 2: Logo and Navigation */}
            <div className="flex flex-col items-center">
              <img src="/images/PetTapp-Logo.png" alt="PetTapp Logo" className="h-12 mb-2" />
              <p className="text-slate-600 text-sm">Your trusted pet care companion in your area.</p>
              <div className="flex space-x-6 mt-6">
                <a href="/about" className="text-sm text-slate-600 hover:text-slate-900">About Us</a>
                <a href="/help" className="text-sm text-slate-600 hover:text-slate-900">Help Center</a>
                <a href="/terms" className="text-sm text-slate-600 hover:text-slate-900">Terms of Use</a>
                <a href="/privacy" className="text-sm text-slate-600 hover:text-slate-900">Privacy Policy</a>
              </div>
            </div>
            
            {/* Column 3: Contact Us */}
            <div className="flex flex-col items-center md:items-end">
              <p className="font-semibold mb-3">Contact Us:</p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Instagram" className="text-slate-700 hover:text-pink-500">
                  <FaInstagram size={24} />
                </a>
                <a href="#" aria-label="Facebook" className="text-slate-700 hover:text-blue-600">
                  <FaFacebook size={24} />
                </a>
                <a href="#" aria-label="Twitter" className="text-slate-700 hover:text-sky-500">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;