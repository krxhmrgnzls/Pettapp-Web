import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../component/layout/Header';
import toast from 'react-hot-toast';
import styles from './LoginPage.module.css';
import logoImage from '../../assets/pettapp-logo-inverted.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    try {
      toast.success('Login successful!');
      navigate('/app');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid credentials. Please try again.');
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
                src={logoImage} 
                alt="PetTapp Logo"
                className={styles.logo}
              />
            </div>
            <h2 className={styles.title}>Login</h2>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label className={styles.label}>Username / Email</label>
              <input
                type="text"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleChange}
                placeholder="Enter username or email"
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
                  placeholder="Enter your password"
                  className={styles.passwordInput}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.toggleBtn}
                >
                  {showPassword ? (
                    <svg className={styles.toggleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    </svg>
                  ) : (
                    <svg className={styles.toggleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className={styles.forgotSection}>
              <Link to="/forgot-password" className={styles.forgotLink}>
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>Or continue with</span>
            <div className={styles.dividerLine}></div>
          </div>

          <div className={styles.socialSection}>
            <button onClick={handleGoogleSignIn} className={styles.googleBtn}>
              <svg className={styles.googleIcon} viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className={styles.googleText}>Sign in with Google</span>
            </button>
          </div>

          <div className={styles.signupSection}>
            <p className={styles.signupText}>
              Don't have an account?{' '}
              <Link to="/signup" className={styles.signupLink}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;