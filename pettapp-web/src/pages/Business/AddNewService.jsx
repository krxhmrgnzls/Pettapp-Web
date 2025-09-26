import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessLayout from '../../component/layout/BusinessLayout';
import styles from './AddNewService.module.css';
import toast from 'react-hot-toast';

const AddNewService = () => {
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState({
    category: '',
    serviceName: '',
    minPrice: '',
    maxPrice: '',
    description: '',
    photo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload logic
      setServiceData(prev => ({
        ...prev,
        photo: file
      }));
      toast.success('Photo uploaded successfully');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!serviceData.category) {
      toast.error('Please select a service category');
      return;
    }
    
    if (!serviceData.serviceName) {
      toast.error('Please enter a service name');
      return;
    }
    
    if (!serviceData.minPrice || !serviceData.maxPrice) {
      toast.error('Please enter price range');
      return;
    }
    
    // Save service logic here
    console.log('Creating service:', serviceData);
    toast.success('Service created successfully!');
    
    // Navigate back to services page
    navigate('/business/services');
  };

  const handleCancel = () => {
    navigate('/business/services');
  };

  return (
    <BusinessLayout>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>My Services</h1>
        
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              {/* Left Column - Photo Upload */}
              <div className={styles.photoSection}>
                <div className={styles.photoUploadBox}>
                  {serviceData.photo ? (
                    <div className={styles.photoPreview}>
                      <img 
                        src={URL.createObjectURL(serviceData.photo)} 
                        alt="Service preview" 
                        className={styles.previewImage}
                      />
                      <button
                        type="button"
                        onClick={() => setServiceData(prev => ({ ...prev, photo: null }))}
                        className={styles.removePhotoBtn}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <label htmlFor="photo-upload" className={styles.photoUploadLabel}>
                      <div className={styles.uploadIcon}>+</div>
                      <span className={styles.uploadText}>Add Photo</span>
                      <input
                        type="file"
                        id="photo-upload"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className={styles.hiddenInput}
                      />
                    </label>
                  )}
                </div>
                
                <div className={styles.serviceDetailsSection}>
                  <h3 className={styles.sectionTitle}>Service Details</h3>
                  <textarea
                    name="description"
                    value={serviceData.description}
                    onChange={handleInputChange}
                    placeholder="Say something..."
                    className={styles.descriptionTextarea}
                    rows={6}
                  />
                </div>
              </div>

              {/* Right Column - Form Fields */}
              <div className={styles.formFields}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Service Category</label>
                  <select
                    name="category"
                    value={serviceData.category}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="grooming">Pet Grooming</option>
                    <option value="boarding">Pet Boarding</option>
                    <option value="training">Pet Training</option>
                    <option value="veterinary">Veterinary Services</option>
                    <option value="daycare">Pet Daycare</option>
                    <option value="walking">Dog Walking</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Service Name</label>
                  <input
                    type="text"
                    name="serviceName"
                    value={serviceData.serviceName}
                    onChange={handleInputChange}
                    placeholder="e.g., Pet Check-up, Dog Grooming, Pet Lodging"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Price Range</label>
                  <div className={styles.priceInputs}>
                    <input
                      type="number"
                      name="minPrice"
                      value={serviceData.minPrice}
                      onChange={handleInputChange}
                      placeholder="Min price (e.g., 500)"
                      className={styles.input}
                      min="0"
                      required
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      value={serviceData.maxPrice}
                      onChange={handleInputChange}
                      placeholder="Max price (e.g., 1200)"
                      className={styles.input}
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className={styles.formActions}>
              <button
                type="button"
                onClick={handleCancel}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.createButton}
              >
                Create Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default AddNewService;