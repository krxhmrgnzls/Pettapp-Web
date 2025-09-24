import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const navigate = useNavigate(); // Use React Router's navigate hook

  return (
    <div className={styles.pageContainer}>
      {/* Header Component */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.logoSection}>
              <img 
                src="/images/PetTapp-Logo.png" 
                alt="PetTapp" 
                className={styles.logo}
              />
              <span className={styles.logoText}>PetTapp</span>
            </div>
            <nav className={styles.nav}>
              <Link to="/" className={styles.navLink}>Home</Link>
              <Link to="/services" className={styles.navLink}>Services</Link>
              <Link to="/about" className={styles.navLink}>About</Link>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
            </nav>
            <div className={styles.authButtons}>
              <button onClick={() => navigate('/login')} className={styles.loginBtn}>
                Login
              </button>
              <button onClick={() => navigate('/signup')} className={styles.signupBtn}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Pet Care Wellness, One Tap Away
            </h1>
            <p className={styles.heroSubtitle}>
              Connect with trusted pet care services near you.
            </p>
            <div className={styles.heroButtons}>
              <button 
                onClick={() => navigate('/signup')}
                className={styles.primaryBtn}
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate('/about')}
                className={styles.secondaryBtn}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              Why Choose PetTapp?
            </h2>
            <div className={styles.featuresGrid}>
              <div className={`group ${styles.featureCard}`}>
                <div className={styles.featureIconBlue}>
                  <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Find Services Near You</h3>
                <p className={styles.featureDescription}>Locate trusted pet care providers in your area with our GPS-enabled search</p>
              </div>
              <div className={`group ${styles.featureCard}`}>
                <div className={styles.featureIconGreen}>
                  <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Easy Booking</h3>
                <p className={styles.featureDescription}>Schedule appointments with just a few taps and get instant confirmations</p>
              </div>
              <div className={`group ${styles.featureCard}`}>
                <div className={styles.featureIconPurple}>
                  <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Verified Providers</h3>
                <p className={styles.featureDescription}>All service providers are verified and trusted for your peace of mind</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pet Types Section */}
        <div className={styles.petTypesSection}>
          <div className={styles.petTypesContainer}>
            <div className={styles.petTypesCard}>
              <h3 className={styles.petTypesTitle}>Services for All Pet Types</h3>
              <div className={styles.petTypesGrid}>
                <div className={styles.petType}>
                  <div className={styles.petEmoji}>🐕</div>
                  <p className={styles.petName}>Dogs</p>
                </div>
                <div className={styles.petType}>
                  <div className={styles.petEmoji}>🐈</div>
                  <p className={styles.petName}>Cats</p>
                </div>
                <div className={styles.petType}>
                  <div className={styles.petEmoji}>🦜</div>
                  <p className={styles.petName}>Birds</p>
                </div>
                <div className={styles.petType}>
                  <div className={styles.petEmoji}>🐰</div>
                  <p className={styles.petName}>Rabbits</p>
                </div>
                <div className={styles.petType}>
                  <div className={styles.petEmoji}>🐹</div>
                  <p className={styles.petName}>Hamsters</p>
                </div>
                <div className={styles.petType}>
                  <div className={styles.petEmoji}>🐢</div>
                  <p className={styles.petName}>Reptiles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            
            {/* Column 1: Download App */}
            <div className={styles.footerColumn}>
              <p className={styles.footerTitle}>Download App:</p>
              <div className={styles.appButtons}>
                <a href="#" aria-label="Get it on Google Play">
                  <img src="/images/google-play-badge.png" alt="Get it on Google Play" className={styles.appBadge} />
                </a>
                <a href="#" aria-label="Download on the App Store">
                  <img src="/images/app-store-badge.png" alt="Download on the App Store" className={styles.appBadge} />
                </a>
              </div>
            </div>

            {/* Column 2: Logo and Navigation */}
            <div className={styles.footerColumnCenter}>
              <img src="/images/PetTapp-Logo.png" alt="PetTapp Logo" className={styles.footerLogo} />
              <p className={styles.footerTagline}>Your trusted pet care companion in your area.</p>
              <div className={styles.footerLinks}>
                <a href="/about" className={styles.footerLink}>About Us</a>
                <a href="/help" className={styles.footerLink}>Help Center</a>
                <a href="/terms" className={styles.footerLink}>Terms of Use</a>
                <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
              </div>
            </div>
            
            {/* Column 3: Contact Us */}
            <div className={styles.footerColumnRight}>
              <p className={styles.footerTitle}>Contact Us:</p>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="Instagram" className={styles.socialLink}>
                  <FaInstagram size={24} />
                </a>
                <a href="#" aria-label="Facebook" className={styles.socialLink}>
                  <FaFacebook size={24} />
                </a>
                <a href="#" aria-label="Twitter" className={styles.socialLink}>
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