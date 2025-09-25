import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './BusinessLayout.module.css';
import logoImage from '../../assets/pettapp-logo-inverted.png';
import ServiceModal from '../modals/ServiceModal';
import NotificationModal from '../modals/NotificationModal';

const BusinessLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  
  const businessData = JSON.parse(localStorage.getItem('businessData') || '{}');
  const businessName = businessData.businessName || 'Pet Hotel';

  
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const sidebarItems = [
    { name: 'Dashboard', path: '/business/dashboard', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> },
    { name: 'Profile', path: '/business/profile', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { name: 'Messages', path: '/business/messages', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> },
    { name: 'Services', path: '/business/services', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
    { name: 'Schedules', path: '/business/schedules', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
  ];

  const bottomItems = [
    { name: 'Settings', path: '/business/settings', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
    { name: 'Help & Support', path: '/business/help', icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  ];

  const handleServiceSubmit = (serviceData) => {
    console.log('New service data:', serviceData);
    // TODO: Make an API call to save the service
    // For now, save to localStorage or state
    
    // const services = JSON.parse(localStorage.getItem('services') || '[]');
    // services.push({ ...serviceData, id: Date.now() });
    // localStorage.setItem('services', JSON.stringify(services));
  };

  return (
    <div className={styles.layoutContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            {}
           <img 
            src={logoImage} 
            alt="PetTapp Logo" 
            className={styles.logoImage}
                         />
            <div>
              <div className={styles.logoTitle}>PetTapp</div>
              <div className={styles.logoSubtitle}>Business Owner Centre</div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={styles.mainNav}>
          {sidebarItems.map((item) => (
            <Link key={item.path} to={item.path} className={`${styles.navLink} ${isActive(item.path) ? styles.activeLink : ''}`}>
              {item.icon}
              <span className={styles.navText}>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom Navigation */}
        <div className={styles.bottomNav}>
          {bottomItems.map((item) => (
            <Link key={item.path} to={item.path} className={`${styles.navLink} ${isActive(item.path) ? styles.activeLink : ''}`}>
              {item.icon}
              <span className={styles.navText}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContentArea}>
        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.headerWrapper}>
            {/* Left side - empty or can add breadcrumbs later */}
            <div className={styles.headerLeft}>
              {}
            </div>

            <div className={styles.headerRightSection}>
              {/* Search Bar */}
              <div className={styles.searchContainer}>
                <input type="text" placeholder="Search clients, bookings..." className={styles.searchInput} />
                <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>

              {}
              <button 
                className={styles.notificationButton}
                onClick={() => setIsNotificationModalOpen(true)}
              >
                <svg className={styles.notificationIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className={styles.notificationDot}></span>
              </button>

              {/* Add Services Button - Updated with onClick handler */}
              <button 
                onClick={() => setIsServiceModalOpen(true)} 
                className={styles.addServiceButton}
              >
                + Add Services
              </button>

              {/* Profile Dropdown */}
              <div className={styles.profileDropdownContainer}>
                <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className={styles.profileButton}>
                  <div className={styles.profileAvatar}>
                    <svg className={styles.profileAvatarIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <span className={styles.profileName}>{businessName}</span>
                  <svg className={styles.profileCaret} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>

                {profileMenuOpen && (
                  <div className={styles.dropdownMenu}>
                    <Link to="/business/profile" className={styles.dropdownItem}>Profile Settings</Link>
                    <hr className={styles.dropdownDivider} />
                    <button onClick={handleLogout} className={styles.dropdownButton}>Logout</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className={styles.pageContent}>
          {children}
        </main>
      </div>

      {}
      <ServiceModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        onSubmit={handleServiceSubmit}
      />

      <NotificationModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
      />
    </div>
  );
};

export default BusinessLayout;