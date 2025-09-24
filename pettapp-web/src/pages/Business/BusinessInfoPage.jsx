import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/layout/Header';
import styles from './BusinessInfoPage.module.css';

const BusinessInfoPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    address: '',
    contactInfo: '',
    openingHours: '',
    closingHours: '',
    availableDays: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter(d => d !== day)
        : [...prev.availableDays, day]
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.availableDays.length === 0) {
      alert('Please select at least one business day');
      return;
    }
    localStorage.setItem('businessInfoStep1', JSON.stringify(formData));
    navigate('/business-info-2');
  };

  const handleImageUpload = () => {
    console.log('Image upload clicked');
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <div className={styles.formContainer}>
          <div className={styles.formCard}>
            <div className={styles.titleSection}>
              <h1 className={styles.title}>Business Information</h1>
              <p className={styles.subtitle}>Please provide your business details</p>
            </div>

            <div className={styles.imageUploadSection}>
              <button onClick={handleImageUpload} className={styles.imageUploadBtn}>
                <svg className={styles.uploadIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleNext} className={styles.form}>
              <div>
                <label className={styles.label}>Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your business name"
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your business address"
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Contact Information</label>
                <input
                  type="text"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Phone number or email"
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Business Availability</label>
                <div className={styles.daysGrid}>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayToggle(day)}
                      className={`${styles.dayBtn} ${formData.availableDays.includes(day) ? styles.dayBtnActive : ''}`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
                <label className={styles.label}>Operating Hours</label>
                <div className={styles.timeInputs}>
                  <input
                    type="time"
                    name="openingHours"
                    value={formData.openingHours}
                    onChange={handleChange}
                    className={styles.timeInput}
                    required
                  />
                  <span className={styles.timeSeparator}>to</span>
                  <input
                    type="time"
                    name="closingHours"
                    value={formData.closingHours}
                    onChange={handleChange}
                    className={styles.timeInput}
                    required
                  />
                </div>
                <p className={styles.helpText}>Select the days your business is open and set operating hours</p>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoPage;