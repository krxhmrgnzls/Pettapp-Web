import React, { useState } from 'react';
import BusinessLayout from '../../component/layout/BusinessLayout';
import styles from './BusinessDashboard.module.css';

const BusinessDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('all');

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
      type: 'Golden Retriever - Max',
      date: 'Sept 20, 2025',
      time: '2:00 PM'
    },
    {
      id: 2,
      name: 'Mike Chen',
      service: 'Pet Boarding',
      type: 'Persian Cat - Luna',
      date: 'Sept 22, 2025',
      time: '10:00 AM'
    }
  ];

  const todaySchedule = [
    { time: '9:00 AM', name: 'Anna Martinez', service: 'Cat Grooming', status: 'completed' },
    { time: '11:00 AM', name: 'James Wilson', service: 'Dog Training', status: 'in-progress' },
    { time: '2:30 PM', name: 'Lisa Thompson', service: 'Pet Daycare', status: 'upcoming' },
    { time: '4:00 PM', name: 'Robert Kim', service: 'Veterinary Checkup', status: 'upcoming' },
    { time: '6:00 PM', name: 'Maria Santos', service: 'Pet Pickup', status: 'upcoming' }
  ];

  const recentActivity = [
    { message: 'New message from a potential client', time: 'Just now' },
    { message: 'Your average rating increased to 4.8 stars', time: 'Just now' },
    { message: 'Someone viewed your Dog Grooming service', time: 'Just now' }
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'completed': return styles.statusCompleted;
      case 'in-progress': return styles.statusInProgress;
      case 'upcoming': return styles.statusUpcoming;
      default: return styles.statusDefault;
    }
  };

  return (
    <BusinessLayout>
      <div className={styles.dashboardContainer}>
        <h1 className={styles.dashboardTitle}>Dashboard</h1>

        {/* Stats Cards */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Today's Bookings</p>
            <p className={styles.statValue}>{stats.todayBookings}</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Today's Revenue</p>
            <p className={styles.statValue}>
              {stats.todayRevenue.toLocaleString()}
            </p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Monthly Bookings</p>
            <p className={styles.statValue}>{stats.monthlyBookings}</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Monthly Revenue</p>
            <p className={styles.statValue}>
              {stats.monthlyRevenue.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          {/* Pending Booking Requests */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardHeaderContent}>
                <h2 className={styles.cardTitle}>Pending Booking Requests</h2>
              </div>
              <div className={styles.tabButtons}>
                <button 
                  onClick={() => setSelectedTab('all')}
                  className={`${styles.tabButton} ${selectedTab === 'all' ? styles.tabActive : ''}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setSelectedTab('urgent')}
                  className={`${styles.tabButton} ${selectedTab === 'urgent' ? styles.tabUrgent : ''}`}
                >
                  Urgent
                </button>
                <button 
                  onClick={() => setSelectedTab('pending')}
                  className={`${styles.tabButton} ${selectedTab === 'pending' ? styles.tabPending : ''}`}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className={styles.cardBody}>
              {pendingBookings.map((booking) => (
                <div key={booking.id} className={styles.bookingCard}>
                  <div className={styles.bookingHeader}>
                    <div>
                      <h3 className={styles.bookingName}>{booking.name}</h3>
                      <p className={styles.bookingService}>{booking.service}</p>
                      <p className={styles.bookingType}>• {booking.type}</p>
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
              <button className={styles.linkButton}>Full Calendar</button>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.scheduleList}>
                {todaySchedule.map((appointment, index) => (
                  <div key={index} className={styles.scheduleItem}>
                    <span className={styles.scheduleTime}>{appointment.time}</span>
                    <div className={styles.scheduleDetails}>
                      <p className={styles.scheduleName}>{appointment.name}</p>
                      <p className={styles.scheduleService}>{appointment.service}</p>
                    </div>
                    <span className={getStatusClass(appointment.status)}>
                      {appointment.status === 'completed' ? 'Completed' : 
                       appointment.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className={`${styles.card} ${styles.activityCard}`}>
          <div className={styles.cardHeaderWithLink}>
            <h2 className={styles.cardTitle}>Recent Activity Feed</h2>
            <button className={styles.linkButton}>View All</button>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.activityList}>
              {recentActivity.map((activity, index) => (
                <div key={index} className={styles.activityItem}>
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