// src/pages/Business/BusinessDashboard.jsx
import React, { useState } from 'react';
import BusinessLayout from '../../component/layout/BusinessLayout';

const BusinessDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  // Mock data - replace with API calls
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

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-500 text-white';
      case 'in-progress': return 'bg-blue-500 text-white';
      case 'upcoming': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <BusinessLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Dashboard Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 text-sm mb-2">Today's Bookings</p>
            <p className="text-4xl font-bold text-orange-400">{stats.todayBookings}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 text-sm mb-2">Today's Revenue</p>
            <p className="text-4xl font-bold text-orange-400">
              {stats.todayRevenue.toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 text-sm mb-2">Monthly Bookings</p>
            <p className="text-4xl font-bold text-orange-400">{stats.monthlyBookings}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 text-sm mb-2">Monthly Revenue</p>
            <p className="text-4xl font-bold text-orange-400">
              {stats.monthlyRevenue.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Booking Requests */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Pending Booking Requests</h2>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedTab('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTab === 'all' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button 
                  onClick={() => setSelectedTab('urgent')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTab === 'urgent' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Urgent
                </button>
                <button 
                  onClick={() => setSelectedTab('pending')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTab === 'pending' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {pendingBookings.map((booking) => (
                <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800">{booking.name}</h3>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                      <p className="text-sm text-gray-500">• {booking.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-800">{booking.date}</p>
                      <p className="text-sm text-gray-600">{booking.time}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors">
                      Accept
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50 transition-colors">
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Today's Schedule</h2>
              <button className="text-blue-500 text-sm hover:underline">Full Calendar</button>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {todaySchedule.map((appointment, index) => (
                  <div key={index} className="flex items-center space-x-4 py-2">
                    <span className="text-sm font-medium text-gray-600 w-20">{appointment.time}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{appointment.name}</p>
                      <p className="text-sm text-gray-600">{appointment.service}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
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
        <div className="mt-6 bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity Feed</h2>
            <button className="text-blue-500 text-sm hover:underline">View All</button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-800">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
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