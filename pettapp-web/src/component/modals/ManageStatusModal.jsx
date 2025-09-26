import React, { useState, useEffect } from 'react';
import styles from './ManageStatusModal.module.css';
import toast from 'react-hot-toast';

const ManageStatusModal = ({ isOpen, onClose, services = [], onUpdate }) => {
  const [localServices, setLocalServices] = useState([]);
  //const [bulkAction, setBulkAction] = useState('');

  useEffect(() => {
    if (isOpen && services) {
      // Initialize local state with services
      setLocalServices(services.map(service => ({
        ...service,
        isActive: service.status === 'active',
        selectedStatus: service.status || 'active'
      })));
    }
  }, [isOpen, services]);

  const handleToggleService = (serviceId) => {
    setLocalServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, isActive: !service.isActive }
          : service
      )
    );
  };

  const handleStatusChange = (serviceId, newStatus) => {
    setLocalServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, selectedStatus: newStatus }
          : service
      )
    );
  };

  const handleBulkAction = (action) => {
    switch(action) {
      case 'activate':
        setLocalServices(prev => 
          prev.map(service => ({ ...service, isActive: true, selectedStatus: 'active' }))
        );
        toast.success('All services activated');
        break;
      case 'pause':
        setLocalServices(prev => 
          prev.map(service => ({ ...service, isActive: false, selectedStatus: 'paused' }))
        );
        toast.success('All services paused');
        break;
      case 'deactivate':
        setLocalServices(prev => 
          prev.map(service => ({ ...service, isActive: false, selectedStatus: 'inactive' }))
        );
        toast.success('All services deactivated');
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    // Call parent update function with updated services
    const updatedServices = localServices.map(service => ({
      ...service,
      status: service.isActive ? service.selectedStatus : 'inactive'
    }));
    
    onUpdate(updatedServices);
    toast.success('Service statuses updated successfully');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Manage Service Status</h2>
          <p className={styles.modalSubtitle}>Control the availability and visibility of your services.</p>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>

        <div className={styles.modalBody}>
          {/* Bulk Actions */}
          <div className={styles.bulkActions}>
            <span className={styles.bulkLabel}>Bulk Actions:</span>
            <button 
              className={styles.bulkBtn} 
              onClick={() => handleBulkAction('activate')}
            >
              Activate All
            </button>
            <button 
              className={`${styles.bulkBtn} ${styles.pauseBtn}`}
              onClick={() => handleBulkAction('pause')}
            >
              Pause All
            </button>
            <button 
              className={`${styles.bulkBtn} ${styles.deactivateBtn}`}
              onClick={() => handleBulkAction('deactivate')}
            >
              Deactivate All
            </button>
          </div>

          {/* Services List */}
          <div className={styles.servicesList}>
            {localServices.map((service) => (
              <div key={service.id} className={styles.serviceItem}>
                <div className={styles.serviceIcon}></div>
                
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <p className={styles.servicePrice}>{service.price}</p>
                  <p className={styles.serviceBookings}>
                    {service.bookings || '0'} bookings this month
                  </p>
                  {service.development && (
                    <p className={styles.serviceDevelopment}>{service.development}</p>
                  )}
                </div>

                <div className={styles.serviceControls}>
                  <label className={styles.toggleSwitch}>
                    <input
                      type="checkbox"
                      checked={service.isActive}
                      onChange={() => handleToggleService(service.id)}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>

                  <select
                    value={service.selectedStatus}
                    onChange={(e) => handleStatusChange(service.id, e.target.value)}
                    className={styles.statusSelect}
                    disabled={!service.isActive}
                  >
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="draft">Draft</option>
                  </select>

                  <button 
                    className={`${styles.statusBtn} ${
                      service.selectedStatus === 'active' ? styles.activeBtn :
                      service.selectedStatus === 'paused' ? styles.pausedBtn :
                      styles.draftBtn
                    }`}
                  >
                    {service.selectedStatus === 'active' ? 'Active' :
                     service.selectedStatus === 'paused' ? 'Paused' :
                     'Draft'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={handleSave} className={styles.saveButton}>
            Create Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageStatusModal;