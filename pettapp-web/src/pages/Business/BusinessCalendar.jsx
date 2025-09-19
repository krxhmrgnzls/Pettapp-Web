// src/pages/Business/BusinessCalendar.jsx
import React, { useState } from 'react';
import BusinessLayout from '../../component/layout/BusinessLayout';

const BusinessCalendar = () => {
  const [viewType, setViewType] = useState('week');
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 8, 18)); // Sept 18, 2025
  const [filterService, setFilterService] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock calendar data
  const appointments = {
    15: [
      { time: '7 AM', status: 'closed' }
    ],
    16: [
      { time: '9 AM', name: 'Anna Martinez', service: 'Cat Grooming', duration: '9:00 AM - 10:00 AM', color: 'bg-blue-100 text-blue-700' }
    ],
    17: [
      { time: '11 AM', name: 'James Wilson', service: 'Dog Training', duration: '11:00 AM - 12:00 PM', color: 'bg-blue-100 text-blue-700' }
    ],
    18: [
      { time: '8 AM', name: 'Mike Chen', service: 'Pet Boarding Check-in', duration: '8:00 AM - 11:00 AM', color: 'bg-blue-100 text-blue-700' }
    ],
    19: [
      { time: '1 PM', name: 'Lisa Thompson', service: 'Pet Daycare', duration: '1:00 PM - 2:30 PM', color: 'bg-blue-100 text-blue-700' }
    ],
    20: [
      { time: '3 PM', name: 'Robert Kim', service: 'Vet Checkup', duration: '3:00 PM - 4:00 PM', color: 'bg-blue-100 text-blue-700' }
    ]
  };

  const weekDays = [
    { date: 15, day: 'SUN' },
    { date: 16, day: 'MON' },
    { date: 17, day: 'TUE' },
    { date: 18, day: 'WED' },
    { date: 19, day: 'THU' },
    { date: 20, day: 'FRI' },
    { date: 21, day: 'SAT' }
  ];

  const timeSlots = [
    '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
    '1 PM', '2 PM', '3 PM', '4 PM'
  ];

  return (
    <BusinessLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
          <div className="flex space-x-3">
            <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium">
              Block Time
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>New Appointment</span>
            </button>
          </div>
        </div>

        {/* Calendar Container */}
        <div className="bg-white rounded-lg shadow">
          {/* Calendar Controls */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h2 className="text-lg font-semibold text-blue-500">September 16-22, 2025</h2>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center space-x-3">
                {/* View Type Buttons */}
                <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
                  <button 
                    onClick={() => setViewType('day')}
                    className={`px-3 py-1 rounded ${viewType === 'day' ? 'bg-white shadow' : ''}`}
                  >
                    Day
                  </button>
                  <button 
                    onClick={() => setViewType('week')}
                    className={`px-3 py-1 rounded ${viewType === 'week' ? 'bg-white shadow' : ''}`}
                  >
                    Week
                  </button>
                  <button 
                    onClick={() => setViewType('month')}
                    className={`px-3 py-1 rounded ${viewType === 'month' ? 'bg-white shadow' : ''}`}
                  >
                    Month
                  </button>
                </div>

                {/* Filters */}
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="all">All Services</option>
                  <option value="grooming">Grooming</option>
                  <option value="boarding">Boarding</option>
                  <option value="training">Training</option>
                  <option value="daycare">Daycare</option>
                </select>

                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="all">All Status</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-4">
            <div className="grid grid-cols-8 gap-0">
              {/* Time Column */}
              <div className="border-r border-gray-200">
                <div className="h-10"></div>
                {timeSlots.map((time) => (
                  <div key={time} className="h-20 pr-2 text-right">
                    <span className="text-xs text-gray-500">{time}</span>
                  </div>
                ))}
              </div>

              {/* Day Columns */}
              {weekDays.map((day) => (
                <div key={day.date} className="border-r border-gray-200 last:border-r-0">
                  {/* Day Header */}
                  <div className="h-10 text-center border-b border-gray-200">
                    <div className="text-xs text-gray-500">{day.day}</div>
                    <div className="font-semibold">{day.date}</div>
                  </div>

                  {/* Time Slots */}
                  <div className="relative">
                    {timeSlots.map((time, index) => (
                      <div key={time} className="h-20 border-b border-gray-100"></div>
                    ))}

                    {/* Appointments */}
                    {appointments[day.date]?.map((apt, index) => {
                      if (apt.status === 'closed') {
                        return (
                          <div 
                            key={index} 
                            className="absolute top-0 left-0 right-0 h-20 bg-gray-100 flex items-center justify-center"
                            style={{ top: '0px' }}
                          >
                            <span className="text-gray-500 text-sm">Closed</span>
                          </div>
                        );
                      }
                      
                      const timeIndex = timeSlots.indexOf(apt.time);
                      const topPosition = timeIndex * 80; // 80px per slot (h-20)
                      
                      return (
                        <div 
                          key={index}
                          className={`absolute left-1 right-1 ${apt.color} rounded-lg p-2 cursor-pointer hover:shadow-lg transition-shadow`}
                          style={{ 
                            top: `${topPosition}px`,
                            minHeight: '75px'
                          }}
                        >
                          <div className="text-xs font-semibold">{apt.name}</div>
                          <div className="text-xs">{apt.service}</div>
                          <div className="text-xs opacity-75 mt-1">{apt.duration}</div>
                        </div>
                      );
                    })}
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

export default BusinessCalendar;