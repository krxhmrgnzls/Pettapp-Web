// src/pages/Business/BusinessInfoPage2.jsx
// This should show: Valid ID, BIR License, and Business Type dropdown

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/layout/Header';
import toast from 'react-hot-toast';

const BusinessInfoPage2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    validId: null,
    birLicense: null,
    businessType: ''
  });

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
      toast.success(`${fieldName === 'validId' ? 'Valid ID' : 'BIR License'} uploaded successfully`);
    }
  };

  const handleBusinessTypeChange = (e) => {
    setFormData(prev => ({
      ...prev,
      businessType: e.target.value
    }));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    
    if (!formData.businessType) {
      toast.error('Please select a business type');
      return;
    }

    // Get previous form data
    const step1Data = JSON.parse(localStorage.getItem('businessInfoStep1') || '{}');
    
    // Combine all business data
    const completeBusinessData = {
      ...step1Data,
      validId: formData.validId?.name,
      birLicense: formData.birLicense?.name,
      businessType: formData.businessType
    };

    // Store complete business data
    localStorage.setItem('businessData', JSON.stringify(completeBusinessData));
    localStorage.setItem('userType', 'business');
    
    // Navigate to business dashboard
    navigate('/business/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-blue-500 mb-2">
                Business Verification
              </h1>
              <p className="text-gray-600">Please upload required documents</p>
            </div>
            {/* Form */}
            <form onSubmit={handleConfirm} className="space-y-6">
              {/* Valid ID Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Valid Identification
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="validId"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileUpload(e, 'validId')}
                  />
                  <label
                    htmlFor="validId"
                    className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-blue-500">
                      {formData.validId ? formData.validId.name : 'Add File'}
                    </span>
                  </label>
                </div>
              </div>

              {/* BIR License Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  BIR License
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="birLicense"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileUpload(e, 'birLicense')}
                  />
                  <label
                    htmlFor="birLicense"
                    className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-blue-500">
                      {formData.birLicense ? formData.birLicense.name : 'Add File'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Business Type Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <select
                  value={formData.businessType}
                  onChange={handleBusinessTypeChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none bg-white"
                  required
                >
                  <option value="">Select business type</option>
                  <option value="veterinary">Veterinary Clinic</option>
                  <option value="grooming">Pet Grooming</option>
                  <option value="petshop">Pet Shop</option>
                  <option value="boarding">Pet Boarding</option>
                  <option value="training">Pet Training</option>
                  <option value="other">Other Pet Services</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-lg transition-colors"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoPage2;