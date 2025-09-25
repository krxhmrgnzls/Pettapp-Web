import React, { useState, useEffect } from 'react';
import styles from './ServiceModal.module.css';
import toast from 'react-hot-toast';

const ServiceModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    serviceName: '',
    minPrice: '',
    maxPrice: '',
    description: ''
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        category: '',
        serviceName: '',
        minPrice: '',
        maxPrice: '',
        description: ''
      });
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.category) {
      toast.error('Please select a service category');
      return;
    }
    
    if (!formData.serviceName) {
      toast.error('Please enter a service name');
      return;
    }
    
    if (!formData.minPrice || !formData.maxPrice) {
      toast.error('Please enter price range');
      return;
    }
    
    if (parseFloat(formData.minPrice) > parseFloat(formData.maxPrice)) {
      toast.error('Minimum price cannot be greater than maximum price');
      return;
    }

    onSubmit(formData);
    toast.success('Service created successfully!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>Add New Service</h2>
            <p className={styles.modalSubtitle}>Create a service for your business</p>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.modalBody}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Service Category</label>
            <select
              name="category"
              value={formData.category}
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
              value={formData.serviceName}
              onChange={handleInputChange}
              placeholder="e.g., Pet Check-up, Dog Grooming, Pet Lodging"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Price Range (₱)</label>
            <div className={styles.priceInputs}>
              <div className={styles.priceInputWrapper}>
                <input
                  type="number"
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleInputChange}
                  placeholder="Min price (e.g., 500)"
                  className={styles.input}
                  min="0"
                  required
                />
                <span className={styles.priceLabel}>Minimum price</span>
              </div>
              <div className={styles.priceInputWrapper}>
                <input
                  type="number"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleInputChange}
                  placeholder="Max price (e.g., 1200)"
                  className={styles.input}
                  min="0"
                  required
                />
                <span className={styles.priceLabel}>Maximum price</span>
              </div>
            </div>
            <p className={styles.priceNote}>
              Price will be displayed "₱{formData.minPrice || '000'} - ₱{formData.maxPrice || '000'}" on your service card
            </p>
          </div>

          <div className={styles.quickSetupBox}>
            <h3 className={styles.quickSetupTitle}>Quick Set up</h3>
            <p className={styles.quickSetupText}>
              You can add detailed descriptions, photos, and availability settings after creating the service.
            </p>
          </div>

          <div className={styles.modalFooter}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              Create Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceModal;