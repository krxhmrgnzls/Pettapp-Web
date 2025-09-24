import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/layout/Header';
import styles from './AccountCreatedPage.module.css';

const AccountCreatedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/user-selection');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleContinue = () => {
    navigate('/user-selection');
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>

            <h1 className={styles.title}>Account Created!</h1>
            
            <p className={styles.subtitle}>
              Verify your account through the link<br />
              sent to your email.
            </p>

            <button onClick={handleContinue} className={styles.continueBtn}>
              Continue
            </button>

            <button onClick={handleContinue} className={styles.skipBtn}>
              Skip for now
            </button>

            <div className={styles.resendSection}>
              <p className={styles.resendText}>
                Didn't receive the email?{' '}
                <button
                  type="button"
                  onClick={() => {}}
                  className={styles.resendBtn}
                >
                  Resend
                </button>
              </p>
            </div>
          </div>

          <div className={styles.supportSection}>
            <p className={styles.supportText}>
              Need help?{' '}
              <a href="/contact" className={styles.link}>
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