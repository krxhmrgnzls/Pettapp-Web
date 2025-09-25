import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessLayout from '../../component/layout/BusinessLayout';
import styles from './FinancialSummary.module.css';

const FinancialSummary = () => {
  const navigate = useNavigate();
  
  // Mock data for monthly earnings
  const [monthlyData] = useState([
    { month: 'Jan', earnings: 45000, percentage: 35 },
    { month: 'Feb', earnings: 62000, percentage: 48 },
    { month: 'March', earnings: 78000, percentage: 60 },
    { month: 'April', earnings: 92000, percentage: 71 },
    { month: 'May', earnings: 125000, percentage: 96 }
  ]);

  // Mock data for recent transactions
  const [recentTransactions] = useState([
    {
      id: 1,
      clientName: 'Sarah Johnson',
      service: 'Dog Grooming',
      amount: 1200,
      date: '2025-05-15',
      status: 'completed'
    },
    {
      id: 2,
      clientName: 'Mike Chen',
      service: 'Pet Boarding',
      amount: 3600,
      date: '2025-05-14',
      status: 'completed'
    },
    {
      id: 3,
      clientName: 'Lisa Thompson',
      service: 'Pet Check-up',
      amount: 800,
      date: '2025-05-13',
      status: 'completed'
    }
  ]);

  return (
    <BusinessLayout>
      <div className={styles.container}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <button 
            onClick={() => navigate('/business/income-management')} 
            className={styles.backButton}
          >
            ← Financial Summary
          </button>
        </div>

        {/* Monthly Earnings Chart */}
        <div className={styles.chartCard}>
          <div className={styles.chartContainer}>
            {monthlyData.map((data, index) => (
              <div key={index} className={styles.monthRow}>
                <div className={styles.monthLabel}>{data.month}</div>
                <div className={styles.barContainer}>
                  <div 
                    className={styles.bar}
                    style={{ width: `${data.percentage}%` }}
                  >
                    <span className={styles.barAmount}>
                      ₱{data.earnings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className={styles.transactionsSection}>
          <h2 className={styles.sectionTitle}>Recent Transactions</h2>
          <div className={styles.transactionsCard}>
            {recentTransactions.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No recent transactions</p>
              </div>
            ) : (
              <div className={styles.transactionsList}>
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className={styles.transactionItem}>
                    <div className={styles.transactionInfo}>
                      <p className={styles.clientName}>{transaction.clientName}</p>
                      <p className={styles.serviceName}>{transaction.service}</p>
                    </div>
                    <div className={styles.transactionDetails}>
                      <p className={styles.transactionAmount}>
                        +₱{transaction.amount.toLocaleString()}
                      </p>
                      <p className={styles.transactionDate}>
                        {new Date(transaction.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default FinancialSummary;