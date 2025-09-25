import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessLayout from '../../component/layout/BusinessLayout';

const BusinessProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: 'Pet Care Professional',
    email: 'petcare@example.com',
    businessName: '',
    businessType: '',
    address: '',
    daysOpen: [],
    openingHours: '',
    closingHours: '',
    contactNumber: ''
  });

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDayToggle = (day) => {
    if (!isEditing) return;
    
    setProfileData(prev => ({
      ...prev,
      daysOpen: prev.daysOpen.includes(day)
        ? prev.daysOpen.filter(d => d !== day)
        : [...prev.daysOpen, day]
    }));
  };

  const handleEdit = () => {
    if (isEditing) {
      // logic here
      // TODO: Add API call to save profile data
      console.log('Saving profile data:', profileData);
    }
    setIsEditing(!isEditing);
  };

  const handleImageUpload = () => {
    // TODO: Implement image upload functionality
    console.log('Upload image clicked');
  };

  return (
    <BusinessLayout>
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Profile Header with Image */}
            <div className="flex items-start space-x-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {isEditing && (
                  <button 
                    onClick={handleImageUpload}
                    className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">Username</h2>
                <p className="text-blue-500">{profileData.username}</p>
                <p className="text-gray-500">Email Address</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Business Information Column */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={profileData.businessName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50"
                      placeholder="Enter business name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                    <input
                      type="text"
                      name="businessType"
                      value={profileData.businessType}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50"
                      placeholder="e.g., Pet Grooming, Veterinary Clinic"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50"
                      placeholder="Enter business address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Days Open</label>
                    <div className="flex flex-wrap gap-2">
                      {daysOfWeek.map((day) => (
                        <button
                          key={day}
                          onClick={() => handleDayToggle(day)}
                          disabled={!isEditing}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                            profileData.daysOpen.includes(day)
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-600'
                          } ${!isEditing ? 'cursor-not-allowed' : 'hover:bg-blue-600'}`}
                        >
                          {day.substring(0, 3)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Operating Hours</label>
                    <div className="flex space-x-2">
                      <input
                        type="time"
                        name="openingHours"
                        value={profileData.openingHours}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50"
                      />
                      <span className="flex items-center text-gray-500">-</span>
                      <input
                        type="time"
                        name="closingHours"
                        value={profileData.closingHours}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Information</label>
                    <input
                      type="text"
                      name="contactNumber"
                      value={profileData.contactNumber}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Income Management Column */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Income Management</h3>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-2">Current Balance</p>
                    <p className="text-3xl font-bold text-gray-800">PHP XXX,XXX.XX</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <p className="text-xs text-gray-600 mb-1">Monthly</p>
                      <p className="text-2xl font-bold text-red-500">-3.3%</p>
                      <p className="text-xs text-gray-500 mt-1">Compared to last month earnings</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <p className="text-xs text-gray-600 mb-1">Yearly</p>
                      <p className="text-2xl font-bold text-green-500">+0.4%</p>
                      <p className="text-xs text-gray-500 mt-1">Compared to last year earnings</p>
                    </div>
                  </div>

                  {/* Additional income details */}
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Today's Earnings</span>
                      <span className="text-sm font-semibold text-gray-800">PHP 0.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">This Week</span>
                      <span className="text-sm font-semibold text-gray-800">PHP 0.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="text-sm font-semibold text-gray-800">PHP 0.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Pending Withdrawals</span>
                      <span className="text-sm font-semibold text-gray-800">PHP 0.00</span>
                    </div>
                  </div>

                  {/* Add View Details Button HERE */}
                  <button 
                    onClick={() => navigate('/business/income-management')}
                    className="w-full mt-6 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    View Income Details
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleEdit}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
              >
                {isEditing ? 'SAVE' : 'EDIT'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default BusinessProfile;