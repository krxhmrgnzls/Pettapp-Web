import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <Link to="/" className={styles.logoLink}>
              <img 
                src="/images/PetTapp Logo Inverted.png" 
                alt="PetTapp" 
                className={styles.logoImage}
              />
              <span className={styles.logoText}>PetTapp</span>
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className={styles.desktopNav}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/services" className={styles.navLink}>Services</Link>
            <Link to="/about" className={styles.navLink}>About</Link>
            <Link to="/contact" className={styles.navLink}>Contact</Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className={styles.authButtons}>
            <button onClick={() => navigate('/login')} className={styles.loginBtn}>
              Login
            </button>
            <button onClick={() => navigate('/signup')} className={styles.signupBtn}>
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuBtn}>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.hamburgerBtn}
            >
              <svg className={styles.hamburgerIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              <Link to="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link to="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className={styles.mobileAuthSection}>
                <button 
                  onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
                  className={styles.mobileLoginBtn}
                >
                  Login
                </button>
                <button 
                  onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }}
                  className={styles.mobileSignupBtn}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;