// src/pages/Business/BusinessSchedules.jsx
import React, { useState } from 'react';
import BusinessLayout from '../../component/layout/BusinessLayout';

const BusinessSchedules = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Mock schedule data
  const appointment = {
    id: '100001',
    clientName: 'Ding Dong Dauntless',
    service: 'Veterinary Appointment',
    bookingDate: 'Sept-25-2025',
    bookingTime: '14:30',
    paymentDate: 'Sept-24-2025',
    paymentTime: '10:15',
    duration: '1 hour 30 minutes',
    status: 'Scheduled',
    petName: 'Max',
    petType: 'Dog - Golden Retriever'
  };

  const handleChat = () => {
    // TODO: Navigate to chat with client
    console.log('Opening chat with client');
  };

  const handleCancel = () => {
    // TODO: Implement cancel functionality
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      console.log('Cancelling appointment');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <BusinessLayout>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Schedules List */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Schedules</h2>
                <p className="text-sm text-gray-600 mb-4">Manage your appointments</p>
                
                {/* Search Bar */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search schedules..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </form>
              </div>

              {/* Appointment Card */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-50 transition-colors"
                   onClick={() => setSelectedAppointment(appointment)}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">{appointment.clientName}</h3>
                    <p className="text-sm text-gray-600">{appointment.service}</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Scheduled
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Today | {appointment.bookingTime}</p>
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Empty state or more appointments */}
              <div className="text-center py-8 text-gray-500">
                {/* TODO: Add more appointments or empty state */}
                <p className="text-sm">No more appointments for today</p>
              </div>
            </div>

            {/* Right Column - Schedule Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Schedule Summary</h2>
                <p className="text-sm text-gray-600">View appointment details and manage bookings</p>
              </div>

              {selectedAppointment ? (
                <>
                  {/* Status Badge */}
                  <div className="flex justify-center mb-6">
                    <span className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg">
                      Scheduled
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="mb-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {selectedAppointment.clientName}
                    </h3>
                    <p className="text-gray-600">{selectedAppointment.service}</p>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Booking ID</span>
                      <span className="text-sm font-medium text-gray-800">{selectedAppointment.id}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Booking Time</span>
                      <span className="text-sm font-medium text-gray-800">
                        {selectedAppointment.bookingDate} {selectedAppointment.bookingTime}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Payment Time</span>
                      <span className="text-sm font-medium text-gray-800">
                        {selectedAppointment.paymentDate} {selectedAppointment.paymentTime}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Service Duration</span>
                      <span className="text-sm font-medium text-gray-800">{selectedAppointment.duration}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={handleChat}
                      className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                      CHAT
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                    >
                      CANCEL
                    </button>
                  </div>

                  {/* Additional Information */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Pet Information</h4>
                    <p className="text-sm text-gray-600">Name: {selectedAppointment.petName}</p>
                    <p className="text-sm text-gray-600">Type: {selectedAppointment.petType}</p>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500">Select an appointment to view details</p>
                </div>
              )}
            </div>
          </div>

          {/* Additional Statistics Section - Optional */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4 text-center">
              <p className="text-2xl font-bold text-blue-500">5</p>
              <p className="text-sm text-gray-600 mt-1">Today's Appointments</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center">
              <p className="text-2xl font-bold text-green-500">18</p>
              <p className="text-sm text-gray-600 mt-1">This Week</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center">
              <p className="text-2xl font-bold text-orange-500">72</p>
              <p className="text-sm text-gray-600 mt-1">This Month</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center">
              <p className="text-2xl font-bold text-purple-500">98%</p>
              <p className="text-sm text-gray-600 mt-1">Completion Rate</p>
            </div>
          </div>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default BusinessSchedules;