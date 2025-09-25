import React, { useState, useEffect } from 'react';
import styles from './NotificationModal.module.css';

const NotificationModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'booking',
      title: 'New Booking Request',
      message: 'Sarah Johnson requested Dog Grooming for Sept 25, 2:00 PM',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      message: 'Mike Chen paid ₱3,600 for Pet Boarding service',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'message',
      title: 'New message from a potential client',
      message: '',
      time: 'Just now',
      read: true
    },
    {
      id: 4,
      type: 'rating',
      title: 'Your average rating increased to 4.8 stars',
      message: '',
      time: 'Just now',
      read: true
    },
    {
      id: 5,
      type: 'view',
      title: 'Someone viewed your Dog Grooming service',
      message: '',
      time: 'Just now',
      read: true
    }
  ]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setNotifications(prev => 
          prev.map(notif => ({ ...notif, read: true }))
        );
      }, 3000);
    }
  }, [isOpen]);

  const getFilteredNotifications = () => {
    switch (activeTab) {
      case 'unread':
        return notifications.filter(n => !n.read);
      case 'bookings':
        return notifications.filter(n => n.type === 'booking');
      default:
        return notifications;
    }
  };

  const handleNotificationClick = (notificationId) => {
    console.log('Notification clicked:', notificationId);
  };

  if (!isOpen) return null;

  const filteredNotifications = getFilteredNotifications();

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Notifications</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'unread' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('unread')}
          >
            Unread
            {notifications.filter(n => !n.read).length > 0 && (
              <span className={styles.badge}>
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'bookings' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            Bookings
          </button>
        </div>

        <div className={styles.notificationsList}>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map(notification => (
              <div
                key={notification.id}
                className={`${styles.notificationItem} ${!notification.read ? styles.unread : ''}`}
                onClick={() => handleNotificationClick(notification.id)}
              >
                <div className={styles.notificationIcon}>
                  {notification.type === 'booking' && '📅'}
                  {notification.type === 'payment' && '💰'}
                  {notification.type === 'message' && '💬'}
                  {notification.type === 'rating' && '⭐'}
                  {notification.type === 'view' && '👁️'}
                </div>
                <div className={styles.notificationContent}>
                  <h3 className={styles.notificationTitle}>{notification.title}</h3>
                  {notification.message && (
                    <p className={styles.notificationMessage}>{notification.message}</p>
                  )}
                  <span className={styles.notificationTime}>{notification.time}</span>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>No {activeTab !== 'all' ? activeTab : ''} notifications</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;