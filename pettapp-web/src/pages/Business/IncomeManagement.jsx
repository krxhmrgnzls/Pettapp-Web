import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessLayout from '../../component/layout/BusinessLayout';
import styles from './IncomeManagement.module.css';

const IncomeManagement = () => {
  const navigate = useNavigate();
  const [currentBalance] = useState('XXX,XXX.XX');
  const [monthlyChange] = useState(-3.3);
  const [yearlyChange] = useState(-0.4);

  // Mock data for upcoming payments
  const [upcomingPayments] = useState([
    // Empty for now, as shown in the image
  ]);

  // Mock data for recent transactions
  const [recentTransactions] = useState([
    // Empty for now, as shown in the image
  ]);

  const handleViewFinancialSummary = () => {
    navigate('/business/financial-summary');
  };

  return (
    <BusinessLayout>
      <div className={styles.container}>
        {/* Page Header with Back Button */}
        <div className={styles.pageHeader}>
          <button 
            onClick={() => navigate('/business/profile')} 
            className={styles.backButton}
          >
            ← Income Management
          </button>
        </div>

        {/* Current Balance Card */}
        <div className={styles.balanceCard}>
          <div className={styles.balanceContent}>
            <div className={styles.balanceInfo}>
              <p className={styles.balanceLabel}>Current Balance</p>
              <h1 className={styles.balanceAmount}>PHP {currentBalance}</h1>
            </div>
            
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Monthly</span>
                <span className={`${styles.statValue} ${monthlyChange < 0 ? styles.negative : styles.positive}`}>
                  {monthlyChange > 0 ? '+' : ''}{monthlyChange}%
                </span>
                <span className={styles.statDescription}>Compared to last month earnings</span>
              </div>
              
              <div className={styles.statDivider}></div>
              
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Yearly</span>
                <span className={`${styles.statValue} ${yearlyChange < 0 ? styles.negative : styles.positive}`}>
                  {yearlyChange > 0 ? '+' : ''}{yearlyChange}%
                </span>
                <span className={styles.statDescription}>Compared to last year earnings</span>
              </div>
            </div>
          </div>
        </div>

        {/* View Financial Summary Button */}
        <button 
          onClick={handleViewFinancialSummary}
          className={styles.viewSummaryButton}
        >
          View Financial Summary →
        </button>

        {/* Two Column Layout */}
        <div className={styles.columnsContainer}>
          {/* Upcoming Payments */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Upcoming Payments</h2>
            <div className={styles.emptyCard}>
              {upcomingPayments.length === 0 ? (
                <div className={styles.emptyState}>
                  <p className={styles.emptyText}>No upcoming payments</p>
                </div>
              ) : (
                <div className={styles.paymentsList}>
                  {upcomingPayments.map((payment, index) => (
                    <div key={index} className={styles.paymentItem}>
                      {/* Payment item content */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Recent Transactions</h2>
            <div className={styles.emptyCard}>
              {recentTransactions.length === 0 ? (
                <div className={styles.emptyState}>
                  <p className={styles.emptyText}>No recent transactions</p>
                </div>
              ) : (
                <div className={styles.transactionsList}>
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className={styles.transactionItem}>
                      {/* Transaction item content */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default IncomeManagement;