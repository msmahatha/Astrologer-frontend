import React, { useState, useCallback } from 'react';
import { User, Calendar, Clock, MapPin, Heart, BookOpen } from 'lucide-react';

// Move these components outside the main component to prevent recreation
const SelectField = ({ icon: Icon, label, value, onChange, options }) => (
  <div className="space-y-2">
    <label className="flex items-center text-gray-700 font-medium">
      <Icon className="w-4 h-4 mr-2 text-amber-600" />
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white/80 border border-amber-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

const InputField = ({ icon: Icon, label, type = "text", value, onChange, placeholder }) => (
  <div className="space-y-2">
    <label className="flex items-center text-gray-700 font-medium">
      <Icon className="w-4 h-4 mr-2 text-amber-600" />
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white/80 border border-amber-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
    />
  </div>
);

export default function CompleteProfilePage() {
  const [formData, setFormData] = useState({
    gender: 'male',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    currentLocation: '',
    maritalStatus: 'single',
    religion: 'hindu',
    focusArea: [],
    purposeOfVisit: 'other'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  }, []);

  const handleFocusAreaToggle = (area) => {
    setFormData(prev => ({
      ...prev,
      focusArea: prev.focusArea.includes(area)
        ? prev.focusArea.filter(item => item !== area)
        : [...prev.focusArea, area]
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.dateOfBirth ||
      !formData.timeOfBirth ||
      !formData.placeOfBirth ||
      !formData.currentLocation ||
      formData.focusArea.length === 0
    ) {
      setError('Please fill all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://astrolozee-backend.vercel.app/api/auth/complete-profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Profile completed:', data);
        window.location.href = '/';
      } else {
        setError(data.message || 'Failed to complete profile');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Complete profile error:', err);
    } finally {
      setLoading(false);
    }
  };

  const focusAreas = [
    "relationship", "career", "business", "health & fitness",
    "family & children", "spiritual growth", "foreign settlement",
    "life purpose", "marital status"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-amber-200">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Complete Your Profile</h1>
            <p className="text-gray-600">Help us personalize your experience by providing a few more details</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <SelectField
                icon={User}
                label="Gender"
                value={formData.gender}
                onChange={(value) => handleInputChange('gender', value)}
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' },
                  { value: 'none', label: 'Prefer not to say' }
                ]}
              />

              <SelectField
                icon={Heart}
                label="Marital Status"
                value={formData.maritalStatus}
                onChange={(value) => handleInputChange('maritalStatus', value)}
                options={[
                  { value: 'single', label: 'Single' },
                  { value: 'married', label: 'Married' },
                  { value: 'divorced', label: 'Divorced' },
                  { value: 'widowed', label: 'Widowed' },
                  { value: 'separated', label: 'Separated' },
                  { value: 'none', label: 'Prefer not to say' }
                ]}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <InputField
                icon={Calendar}
                label="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(value) => handleInputChange('dateOfBirth', value)}
              />

              <InputField
                icon={Clock}
                label="Time of Birth"
                type="time"
                value={formData.timeOfBirth}
                onChange={(value) => handleInputChange('timeOfBirth', value)}
              />
            </div>

            <InputField
              icon={MapPin}
              label="Place of Birth"
              value={formData.placeOfBirth}
              onChange={(value) => handleInputChange('placeOfBirth', value)}
              placeholder="City, Country"
            />

            <InputField
              icon={MapPin}
              label="Current Location"
              value={formData.currentLocation}
              onChange={(value) => handleInputChange('currentLocation', value)}
              placeholder="City, Country"
            />

            <SelectField
              icon={BookOpen}
              label="Religion"
              value={formData.religion}
              onChange={(value) => handleInputChange('religion', value)}
              options={[
                { value: 'hindu', label: 'Hindu' },
                { value: 'muslim', label: 'Muslim' },
                { value: 'christian', label: 'Christian' },
                { value: 'sikh', label: 'Sikh' },
                { value: 'jain', label: 'Jain' },
                { value: 'buddhist', label: 'Buddhist' },
                { value: 'none', label: 'None' }
              ]}
            />

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Focus Areas (Select multiple)</label>
              <div className="grid grid-cols-3 gap-3">
                {focusAreas.map(area => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => handleFocusAreaToggle(area)}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      formData.focusArea.includes(area)
                        ? 'bg-amber-500 text-white'
                        : 'bg-white border border-amber-200 text-gray-700 hover:bg-amber-50'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            <SelectField
              icon={Heart}
              label="Purpose of Visit"
              value={formData.purposeOfVisit}
              onChange={(value) => handleInputChange('purposeOfVisit', value)}
              options={[
                { value: 'love', label: 'Love' },
                { value: 'marriage', label: 'Marriage' },
                { value: 'career', label: 'Career' },
                { value: 'health', label: 'Health' },
                { value: 'wealth', label: 'Wealth' },
                { value: 'peace of mind', label: 'Peace of Mind' },
                { value: 'family', label: 'Family' },
                { value: 'other', label: 'Other' }
              ]}
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-colors duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Completing Profile...' : 'Complete Profile'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}