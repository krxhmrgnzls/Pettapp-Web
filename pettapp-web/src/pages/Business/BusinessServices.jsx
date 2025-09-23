// src/pages/Business/BusinessServices.jsx
import React, { useState } from 'react';
import BusinessLayout from '../../component/layout/BusinessLayout';
import { useNavigate } from 'react-router-dom';

const BusinessServices = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Pet Check-up',
      price: 'PHP 800 - PHP 1,200',
      rating: 5,
      status: 'active'
    },
    {
      id: 2,
      name: 'Pet Lodging',
      price: 'PHP 500 - PHP 800/day',
      rating: 4,
      status: 'active'
    }
  ]);

  const handleManageStatus = () => {
    // TODO: Implement status management
    console.log('Manage status clicked');
  };

  const handleCreateService = () => {
    // Navigate to create service page or open modal
    navigate('/business/services/new');
  };

  const handleEditService = (serviceId) => {
    // TODO: Navigate to edit service page
    console.log('Edit service:', serviceId);
  };

  const handleViewDetails = (serviceId) => {
    // TODO: Navigate to service details page
    console.log('View details:', serviceId);
  };

  const handleDeleteService = (serviceId) => {
    // TODO: Implement delete functionality
    if (window.confirm('Are you sure you want to delete this service?')) {
      console.log('Delete service:', serviceId);
      setServices(services.filter(s => s.id !== serviceId));
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <BusinessLayout>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with buttons */}
          <div className="flex justify-end items-center mb-6 space-x-3">
            <button 
              onClick={handleManageStatus}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Manage Status
            </button>
            <button 
              onClick={handleCreateService}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Service
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add New Service Card */}
            <div 
              onClick={handleCreateService}
              className="bg-white rounded-lg shadow-sm border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors min-h-[250px]"
            >
              <div className="text-blue-500 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-blue-500 font-medium">Add New Service</p>
              <p className="text-gray-500 text-sm mt-2">Create service for your clients</p>
            </div>

            {/* Existing Services */}
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm p-6">
                {/* Service Image Placeholder */}
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Service Details */}
                <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{service.price}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(service.rating)}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditService(service.id)}
                    className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleViewDetails(service.id)}
                    className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {/* Empty state placeholder cards - for demonstration */}
            {services.length < 2 && (
              <>
                {/* You can add more placeholder cards here if needed */}
              </>
            )}
          </div>

          {/* Services Summary Section - Optional */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Services Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-500">{services.length}</p>
                <p className="text-sm text-gray-600 mt-1">Active Services</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-green-500">4.5</p>
                <p className="text-sm text-gray-600 mt-1">Average Rating</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-500">127</p>
                <p className="text-sm text-gray-600 mt-1">Total Bookings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default BusinessServices;