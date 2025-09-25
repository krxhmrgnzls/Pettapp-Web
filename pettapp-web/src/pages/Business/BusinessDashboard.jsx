import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessLayout from '../../component/layout/BusinessLayout';
import styles from './BusinessDashboard.module.css';

const BusinessDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const goToSchedules = () => {
    navigate('/business/schedules');
  };

  const stats = {
    todayBookings: 20,
    todayRevenue: 9000,
    monthlyBookings: 96,
    monthlyRevenue: 250000
  };

  const pendingBookings = [
    {
      id: 1,
      name: 'Sarah Johnson',
      service: 'Dog Grooming',
      petType: 'Golden Retriever - Max',
      date: 'Sept 20, 2025',
      time: '2:00 PM'
    },
    {
      id: 2,
      name: 'Mike Chen',
      service: 'Pet Boarding',
      petType: 'Persian Cat - Luna',
      date: 'Sept 22, 2025',
      time: '10:00 AM'
    }
  ];

  const todaySchedule = [
    { id: 1, time: '9:00 AM', client: 'Anna Martinez', service: 'Cat Grooming', status: 'completed' },
    { id: 2, time: '11:00 AM', client: 'James Wilson', service: 'Dog Training', status: 'in-progress' },
    { id: 3, time: '2:30 PM', client: 'Lisa Thompson', service: 'Pet Daycare', status: 'upcoming' },
    { id: 4, time: '4:00 PM', client: 'Robert Kim', service: 'Veterinary Checkup', status: 'upcoming' },
    { id: 5, time: '5:00 PM', client: 'Maria Santos', service: 'Pet Grooming', status: 'upcoming' }
  ];

  const recentActivity = [
    { id: 1, message: 'New booking request from Sarah Johnson', time: '5 minutes ago' },
    { id: 2, message: 'James Wilson checked in for appointment', time: '1 hour ago' },
    { id: 3, message: 'Payment received from Lisa Thompson', time: '2 hours ago' },
    { id: 4, message: 'Service completed for Anna Martinez', time: '3 hours ago' }
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'completed':
        return styles.statusCompleted;
      case 'in-progress':
        return styles.statusInProgress;
      case 'upcoming':
        return styles.statusUpcoming;
      default:
        return '';
    }
  };

  return (
    <BusinessLayout>
      <div className={styles.dashboardContainer}>
        {/* Page Title */}
        <h1 className={styles.dashboardTitle}>Dashboard</h1>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Today's Bookings</p>
            <p className={styles.statValue}>{stats.todayBookings}</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Today's Revenue</p>
            <p className={styles.statValue}>{stats.todayRevenue.toLocaleString()}</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Monthly Bookings</p>
            <p className={styles.statValue}>{stats.monthlyBookings}</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Monthly Revenue</p>
            <p className={styles.statValue}>{stats.monthlyRevenue.toLocaleString()}</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className={styles.mainGrid}>
          {/* Pending Booking Requests */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderContent}>
                <h2 className={styles.cardTitle}>Pending Booking Requests</h2>
              </div>
              <div className={styles.tabButtons}>
                <button 
                  className={`${styles.tabButton} ${activeTab === 'all' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  All
                </button>
                <button 
                  className={`${styles.tabButton} ${activeTab === 'urgent' ? styles.tabUrgent : ''}`}
                  onClick={() => setActiveTab('urgent')}
                >
                  Urgent
                </button>
                <button 
                  className={`${styles.tabButton} ${activeTab === 'pending' ? styles.tabPending : ''}`}
                  onClick={() => setActiveTab('pending')}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className={styles.cardBody}>
              {pendingBookings.map(booking => (
                <div key={booking.id} className={styles.bookingCard}>
                  <div className={styles.bookingHeader}>
                    <div>
                      <p className={styles.bookingName}>{booking.name}</p>
                      <p className={styles.bookingService}>{booking.service}</p>
                      <p className={styles.bookingType}>• {booking.petType}</p>
                    </div>
                    <div className={styles.bookingTimeInfo}>
                      <p className={styles.bookingDate}>{booking.date}</p>
                      <p className={styles.bookingTime}>{booking.time}</p>
                    </div>
                  </div>
                  <div className={styles.bookingActions}>
                    <button className={styles.acceptBtn}>Accept</button>
                    <button className={styles.declineBtn}>Decline</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Schedule */}
          <div className={styles.card}>
            <div className={styles.cardHeaderWithLink}>
              <h2 className={styles.cardTitle}>Today's Schedule</h2>
              <button onClick={goToSchedules} className={styles.linkButton}>
                Full Calendar
              </button>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.scheduleList}>
                {todaySchedule.map(appointment => (
                  <div key={appointment.id} className={styles.scheduleItem}>
                    <div className={styles.scheduleTime}>{appointment.time}</div>
                    <div className={styles.scheduleInfo}>
                      <p className={styles.scheduleName}>{appointment.client}</p>
                      <p className={styles.scheduleService}>{appointment.service}</p>
                    </div>
                    <span className={`${styles.statusBadge} ${getStatusClass(appointment.status)}`}>
                      {appointment.status === 'completed' ? 'Completed' : 
                       appointment.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {}
        <div className={`${styles.card} ${styles.activityCard}`}>
          <div className={styles.cardHeaderWithLink}>
            <h2 className={styles.cardTitle}>Recent Activity Feed</h2>
            <button className={styles.linkButton}>View All</button>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.activityList}>
              {recentActivity.map((activity) => (
                <div key={activity.id} className={styles.activityItem}>
                  <div className={styles.activityAvatar}></div>
                  <div className={styles.activityContent}>
                    <p className={styles.activityMessage}>{activity.message}</p>
                    <p className={styles.activityTime}>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default BusinessDashboard;