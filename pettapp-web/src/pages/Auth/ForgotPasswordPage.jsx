import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/layout/Header';
import toast from 'react-hot-toast';
import styles from './ForgotPasswordPage.module.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setEmailSent(true);
      toast.success('Password reset link sent to your email!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Reset link resent to your email!');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Failed to resend email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <div className={styles.formContainer}>
          <div className={styles.formCard}>
            <div className={styles.titleSection}>
              <h1 className={styles.title}>Forgot Password</h1>
              <p className={styles.subtitle}>
                {emailSent 
                  ? "We've sent a password reset link to your email"
                  : "Fill in your email and we'll send a link to reset your password"
                }
              </p>
            </div>

            {!emailSent ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={styles.input}
                    required
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={styles.submitBtn}
                >
                  {loading ? 'Sending...' : 'Send Code'}
                </button>

                <Link to="/login" className={styles.backBtn}>
                  Back to Login
                </Link>
              </form>
            ) : (
              <div className={styles.successSection}>
                <div className={styles.successMessage}>
                  <div className={styles.successContent}>
                    <svg className={styles.successIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className={styles.successText}>
                      Check your email for the reset link
                    </p>
                  </div>
                </div>

                <div className={styles.resendSection}>
                  <p className={styles.resendText}>Didn't receive the email?</p>
                  <button
                    onClick={handleResendEmail}
                    disabled={loading}
                    className={styles.resendBtn}
                  >
                    {loading ? 'Resending...' : 'Resend Email'}
                  </button>
                </div>

                <Link to="/login" className={styles.primaryBtn}>
                  Back to Login
                </Link>
              </div>
            )}

            <div className={styles.helpSection}>
              <p className={styles.helpText}>
                Remember your password?{' '}
                <Link to="/login" className={styles.link}>Login</Link>
              </p>
            </div>
          </div>

          <div className={styles.supportSection}>
            <p className={styles.supportText}>
              Need help?{' '}
              <a href="/contact" className={styles.link}>Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;