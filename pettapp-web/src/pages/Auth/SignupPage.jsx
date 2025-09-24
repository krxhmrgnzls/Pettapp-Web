import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../component/layout/Header';
import toast from 'react-hot-toast';
import styles from './SignupPage.module.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and policy');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      localStorage.setItem('tempUser', JSON.stringify({
        username: formData.username,
        email: formData.email
      }));
      
      toast.success('Account created successfully!');
      navigate('/account-created');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    toast.info('Google sign in coming soon!');
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <div className={styles.formCard}>
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <img 
                src="/images/PetTapp Logo Inverted.png" 
                alt="PetTapp" 
                className={styles.logo}
              />
            </div>
            <h2 className={styles.title}>Sign Up</h2>
            <p className={styles.subtitle}>Create your PetTapp account</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label className={styles.label}>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className={styles.input}
                required
              />
            </div>

            <div>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={styles.input}
                required
              />
            </div>

            <div>
              <label className={styles.label}>Password</label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className={styles.passwordInput}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.toggleBtn}
                >
                  {/* Eye icons here */}
                </button>
              </div>
            </div>

            <div>
              <label className={styles.label}>Confirm Password</label>
              <div className={styles.passwordContainer}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={styles.passwordInput}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={styles.toggleBtn}
                >
                  {/* Eye icons here */}
                </button>
              </div>
            </div>

            <div className={styles.termsContainer}>
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className={styles.checkbox}
              />
              <label className={styles.termsText}>
                I agree to the{' '}
                <Link to="/terms" className={styles.termsLink}>
                  terms & policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
            >
              {loading ? 'Creating Account...' : 'Confirm'}
            </button>
          </form>

          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>Or</span>
            <div className={styles.dividerLine}></div>
          </div>

          <div className={styles.socialSection}>
            <button onClick={handleGoogleSignIn} className={styles.googleBtn}>
              {/* Google icon SVG here */}
              <span>Sign up with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;