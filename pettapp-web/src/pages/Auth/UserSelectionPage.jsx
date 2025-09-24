import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/layout/Header';
import styles from './UserSelectionPage.module.css';

const UserSelectionPage = () => {
  const navigate = useNavigate();

  const handleUserTypeSelection = (userType) => {
    localStorage.setItem('userType', userType);
    
    if (userType === 'business') {
      navigate('/business-info');
    } else if (userType === 'pet-owner') {
      navigate('/dashboard');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.titleSection}>
              <h1 className={styles.title}>Continue as</h1>
              <p className={styles.subtitle}>
                Select a user profile to continue
              </p>
            </div>

            <div className={styles.buttonSection}>
              <button
                onClick={() => handleUserTypeSelection('pet-owner')}
                className={styles.userTypeBtn}
              >
                Pet Owner
              </button>

              <button
                onClick={() => handleUserTypeSelection('business')}
                className={styles.userTypeBtn}
              >
                Business
              </button>
            </div>

            <div className={styles.helpSection}>
              <p className={styles.helpText}>
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