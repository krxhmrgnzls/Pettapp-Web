import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/layout/Header';
import toast from 'react-hot-toast';
import styles from './BusinessInfoPage2.module.css';

const BusinessInfoPage2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    validId: null,
    birLicense: null,
    businessType: ''
  });

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
      toast.success(`${fieldName === 'validId' ? 'Valid ID' : 'BIR License'} uploaded successfully`);
    }
  };

  const handleBusinessTypeChange = (e) => {
    setFormData(prev => ({
      ...prev,
      businessType: e.target.value
    }));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    
    if (!formData.businessType) {
      toast.error('Please select a business type');
      return;
    }

    const step1Data = JSON.parse(localStorage.getItem('businessInfoStep1') || '{}');
    const completeBusinessData = {
      ...step1Data,
      validId: formData.validId?.name,
      birLicense: formData.birLicense?.name,
      businessType: formData.businessType
    };

    localStorage.setItem('businessData', JSON.stringify(completeBusinessData));
    localStorage.setItem('userType', 'business');
    navigate('/business/dashboard');
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <div className={styles.formContainer}>
          <div className={styles.formCard}>
            <div className={styles.titleSection}>
              <h1 className={styles.title}>Business Verification</h1>
              <p className={styles.subtitle}>Please upload required documents</p>
            </div>

            <form onSubmit={handleConfirm} className={styles.form}>
              <div>
                <label className={styles.label}>Valid Identification</label>
                <div className={styles.uploadContainer}>
                  <input
                    type="file"
                    id="validId"
                    className={styles.hiddenInput}
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileUpload(e, 'validId')}
                  />
                  <label htmlFor="validId" className={styles.uploadLabel}>
                    <svg className={styles.uploadIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className={styles.uploadText}>
                      {formData.validId ? formData.validId.name : 'Add File'}
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className={styles.label}>BIR License</label>
                <div className={styles.uploadContainer}>
                  <input
                    type="file"
                    id="birLicense"
                    className={styles.hiddenInput}
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileUpload(e, 'birLicense')}
                  />
                  <label htmlFor="birLicense" className={styles.uploadLabel}>
                    <svg className={styles.uploadIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className={styles.uploadText}>
                      {formData.birLicense ? formData.birLicense.name : 'Add File'}
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className={styles.label}>Business Type</label>
                <select
                  value={formData.businessType}
                  onChange={handleBusinessTypeChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select business type</option>
                  <option value="veterinary">Veterinary Clinic</option>
                  <option value="grooming">Pet Grooming</option>
                  <option value="petshop">Pet Shop</option>
                  <option value="boarding">Pet Boarding</option>
                  <option value="training">Pet Training</option>
                  <option value="other">Other Pet Services</option>
                </select>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoPage2;