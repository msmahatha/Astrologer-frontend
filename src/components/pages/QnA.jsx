/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect, useMemo } from "react";
import useAIStore from "../../stores/useAIStore";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Send, Loader2, MapPin, Navigation, ChevronDown, Search, Map, Calendar } from "lucide-react";

const CATEGORIES = [
  "Career",
  "Health",
  "Marriage",
  "Finance",
  "Education",
  "Relationships",
  "Travel",
  "Spirituality",
  "Property",
  "Legal",
];

// Months array for dropdown
const MONTHS = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" }
];

// Generate years (from 1900 to current year)
const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => (currentYear - i).toString());

// Generate days (1-31)
const DAYS = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

// Use absolute URL for production, relative for development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  ? `${import.meta.env.VITE_API_BASE_URL}/api`
  : 'http://localhost:5001/api';

const QNA = () => {
  const { 
    fetchChats, 
    chats, 
    sendMessage, 
    userInfo: storedUserInfo, 
    setUserInfo: storeUserInfo,
    hasShownIntro 
  } = useAIStore();
  
  const [localUserInfo, setLocalUserInfo] = useState({
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    birthTime: "",
    currentLocation: "",
    selectedLocation: "",
    selectedCategory: "",
    religion: "",
    language: "",
    // coordinates
    birthLatitude: null,
    birthLongitude: null,
    currentLatitude: null,
    currentLongitude: null,
  });
  
  const [question, setQuestion] = useState("");
  const [showForm, setShowForm] = useState(!storedUserInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showMapOption, setShowMapOption] = useState(false);
  const [showTypingEffect, setShowTypingEffect] = useState(false);
  
  const chatEndRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchTimeoutRef = useRef(null);

  useEffect(() => {
    fetchChats();
  }, []);

  // Remove consecutive duplicate assistant messages (same answer text)
  const dedupedChats = useMemo(() => {
    if (!Array.isArray(chats) || chats.length === 0) return chats;
    const out = [];
    for (let i = 0; i < chats.length; i++) {
      const curr = chats[i];
      const prev = out.length ? out[out.length - 1] : null;

      // If current is an assistant message (no question) and identical to previous assistant answer, skip it
      if (!curr.question && curr.answer && prev && !prev.question && prev.answer === curr.answer) {
        continue; // drop duplicate assistant message
      }

      out.push(curr);
    }
    return out;
  }, [chats]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dedupedChats, showTypingEffect]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch locations from Google Places API via Node.js proxy
  useEffect(() => {
    if (searchQuery.length < 2) {
      setFilteredLocations([]);
      return;
    }

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(`${API_BASE_URL}/places-autocomplete`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: searchQuery })
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.status === 'OK' && data.predictions) {
          const locations = data.predictions.map(prediction => prediction.description);
          setFilteredLocations(locations);
        } else {
          setFilteredLocations([]);
          console.log('API returned no results:', data.status);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
        setFilteredLocations([]);
        setLocationError("Failed to fetch locations. Please try again.");
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  // Function to get current location and current date
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      return;
    }

    setIsGettingLocation(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          // Get current date
          const now = new Date();
          const currentYear = now.getFullYear().toString();
          const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
          const currentDay = now.getDate().toString().padStart(2, '0');
          const currentTime = now.toTimeString().split(' ')[0].substring(0, 5); // HH:MM format

          // Use Node.js proxy for reverse geocoding
          const response = await fetch(`${API_BASE_URL}/reverse-geocode`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ latitude, longitude })
          });
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json();
          
          if (data.status === 'OK' && data.results && data.results.length > 0) {
            const address = data.results[0].formatted_address;
            setLocalUserInfo(prev => ({
              ...prev,
              currentLocation: address,
              // store coordinates for sending to backend
              currentLatitude: latitude,
              currentLongitude: longitude
            }));
          } else {
            setLocationError("Could not retrieve address from coordinates.");
          }
        } catch (error) {
          console.error("Error getting location:", error);
          setLocationError("Failed to get location. Please search manually.");
        } finally {
          setIsGettingLocation(false);
        }
      },
      (error) => {
        setIsGettingLocation(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Location access denied. Please search manually.");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information unavailable.");
            break;
          case error.TIMEOUT:
            setLocationError("Location request timed out.");
            break;
          default:
            setLocationError("An unknown error occurred.");
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // Function to handle map selection
  const handleMapSelection = () => {
    setShowMapOption(true);
    alert("Map selection feature would open here.");
    setLocalUserInfo(prev => ({
      ...prev,
      selectedLocation: "selection feature would open here"
    }));
    setShowMapOption(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !localUserInfo.name ||
      !localUserInfo.birthYear ||
      !localUserInfo.birthMonth ||
      !localUserInfo.birthDay ||
      !localUserInfo.birthTime ||
      !localUserInfo.selectedLocation ||
      !localUserInfo.selectedCategory
    ) {
      alert("Please fill all fields before continuing.");
      return;
    }
    
    // Format birth date and store user info
    const birthDate = `${localUserInfo.birthYear}-${localUserInfo.birthMonth}-${localUserInfo.birthDay}`;
    const userInfoToStore = {
      ...localUserInfo,
      birthDate: birthDate,
      displayBirthDate: `${localUserInfo.birthDay} ${getMonthName(localUserInfo.birthMonth)} ${localUserInfo.birthYear}`
    };
    
    // Store user info in the global store
    storeUserInfo(userInfoToStore);
    setShowForm(false);
  };

const handleQuestionSubmit = async (userQuestion = null) => {
  // Allow passing a custom question (used for remedy requests)
  const currentQuestion = userQuestion || question.trim();
  
  if (!currentQuestion || isLoading) return;

  setQuestion(""); // Clear input field if not using custom question
  setIsLoading(true);

  try {
    // Get user info from store
    const { userInfo: storedUserInfo, hasShownIntro } = useAIStore.getState();
    
    // Prepare data for backend
    // Always include userInfo (when available) so backend/service can use religion/language and other fields
    // Helper: normalize religion to one of allowed tokens
    const normalizeReligion = (r) => {
      if (!r) return '';
      const v = String(r).trim().toLowerCase();
      const map = {
        hindu: 'hindu',
        hindoo: 'hindu',
        hinduism: 'hindu',
        christian: 'christian',
        christianity: 'christian',
        muslim: 'muslim',
        islam: 'muslim',
        buddhist: 'buddhist',
        buddhism: 'buddhist',
        jain: 'jain',
        jainism: 'jain',
        sikh: 'sikh',
        sikhism: 'sikh',
        secular: 'secular'
      };
      // try exact match or prefix match
      if (map[v]) return map[v];
      for (const k of Object.keys(map)) {
        if (v.includes(k)) return map[k];
      }
      return ''; // unknown -> send empty so backend doesn't reject
    };

    const normalizedReligion = normalizeReligion(storedUserInfo?.religion);

    const messageData = {
      question: currentQuestion,
      context: '',
      ragWithContext: true,
      user_name: storedUserInfo ? storedUserInfo.name : null,
      // Always include a userInfo object so backend receives expected keys
      userInfo: {
        name: storedUserInfo?.name || '',
        birthDate: storedUserInfo?.displayBirthDate || storedUserInfo?.birthDate || '',
        birthTime: storedUserInfo?.birthTime || '',
        birthPlace: storedUserInfo?.selectedLocation || storedUserInfo?.birthPlace || '',
        // Explicitly pass latitude/longitude as null when unavailable
        birthLatitude: (storedUserInfo && (storedUserInfo.birthLatitude ?? storedUserInfo.latitude)) ?? null,
        birthLongitude: (storedUserInfo && (storedUserInfo.birthLongitude ?? storedUserInfo.longitude)) ?? null,
        // Also include current location coordinates if available
        currentLocation: storedUserInfo?.currentLocation || '',
        currentLatitude: (storedUserInfo && (storedUserInfo.currentLatitude ?? storedUserInfo.latitude)) ?? null,
        currentLongitude: (storedUserInfo && (storedUserInfo.currentLongitude ?? storedUserInfo.longitude)) ?? null,
        selectedCategory: storedUserInfo?.selectedCategory || '',
        displayBirthDate: storedUserInfo?.displayBirthDate || '',
        // send normalized religion token (empty if unknown)
        religion: normalizedReligion || '',
        language: storedUserInfo?.language || ''
      }
    };

    console.log('Sending message with userInfo:', messageData.userInfo);
    console.log('Sending user_name:', messageData.user_name);

    // Send to backend API
    const response = await sendMessage(messageData);

    if (!response?.success) {
      alert(response?.message || "Failed to send message");
    }
    
  } catch (error) {
    console.error("Error sending message:", error);
  } finally {
    setIsLoading(false);
  }
};
  const handleLocationSelect = async (location) => {
    // When a user selects a location from autocomplete, fetch coordinates from backend geocode proxy
    setIsLocationDropdownOpen(false);
    setSearchQuery("");
    setLocationError("");

    try {
      // optimistic update for UI
      setLocalUserInfo(prev => ({
        ...prev,
        selectedLocation: location
      }));

      const response = await fetch(`${API_BASE_URL}/geocode`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: location })
      });

      if (!response.ok) {
        throw new Error('Failed to geocode address');
      }

      const data = await response.json();

      // Google Geocode response: results[0].geometry.location -> { lat, lng }
      if (data && data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
        const { lat, lng } = data.results[0].geometry.location;
        setLocalUserInfo(prev => ({
          ...prev,
          selectedLocation: location,
          birthLatitude: lat,
          birthLongitude: lng
        }));
      } else {
        // If no coords returned, keep the selected location but warn user
        setLocationError('Could not resolve coordinates for selected place.');
      }
    } catch (err) {
      console.error('Error resolving place coordinates:', err);
      setLocationError('Failed to resolve coordinates. Please try again or use map selection.');
    }
  };

  const handleDropdownToggle = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
    setSearchQuery("");
    setFilteredLocations([]);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle individual date field changes
  const handleDateChange = (field, value) => {
    setLocalUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Format month name from month number
  const getMonthName = (monthValue) => {
    const month = MONTHS.find(m => m.value === monthValue);
    return month ? month.label : monthValue;
  };

  // Format time for display (convert 24h to 12h format)
  const formatTimeForDisplay = (timeString) => {
    if (!timeString) return '';
    
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Check if we should show intro (only once when user starts first chat)
  const shouldShowIntro = !hasShownIntro && storedUserInfo && chats.length === 0;

  // Typing indicator component
  const TypingIndicator = () => (
    <div className="flex flex-col  text-left">
      <div className=" text-black  inline-block ">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold">Typing</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
          </div>
          
        </div>
      </div>
    </div>
  );

  // User info display component
  const UserInfoDisplay = () => (
    <div className="flex flex-col space-y-2 mb-4 text-right">
      <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] ml-auto shadow-sm">
        <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
        <div>{tempQuestion}</div>
      </div>
      
      {/* User Details Display */}
      <div className="bg-[#FE9A00] text-white px-4 py-3 rounded-2xl inline-block sm:max-w-[70%] max-w-[90%] shadow-sm text-left border border-blue-100">
        
        <div className="space-y-1 text-sm">
          <div><span className="font-medium">Hi {storedUserInfo.name}</span> </div>
          <div>
            <span className="font-medium">Date of Birth:</span> {storedUserInfo.birthDay} {getMonthName(storedUserInfo.birthMonth)} {storedUserInfo.birthYear}
          </div>
          <div><span className="font-medium">Birth Time:</span> {formatTimeForDisplay(storedUserInfo.birthTime)}</div>
          <div><span className="font-medium">Birth Place:</span> {storedUserInfo.selectedLocation}</div>
          {storedUserInfo.currentLocation && (
            <div><span className="font-medium">Current Location:</span> {storedUserInfo.currentLocation}</div>
          )}
          
        </div>
      </div>
    </div>
  );

  // Intro message component - only shown once
  const IntroMessageDisplay = () => {
    if (!shouldShowIntro || !storedUserInfo) return null;
    
    const introText = `Hi ${storedUserInfo.name}. I find this is your birth date: ${storedUserInfo.displayBirthDate}, birth place: ${storedUserInfo.selectedLocation}, birth time: ${formatTimeForDisplay(storedUserInfo.birthTime)}. Let me briefly solve your questions...`;
    
    return (
      <div className="flex flex-col space-y-2 mb-4 text-left">
        <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[70%] max-w-[85%] shadow-sm">
          {introText}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className=" flex flex-col items-center px-4 py-8 bg-gray-50">
        {showForm ? (
          // ===== User Info Form =====
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
            <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
              Fill Your Birth Details
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name Field */}
              <input
                type="text"
                placeholder="Your Name"
                value={localUserInfo.name}
                onChange={(e) =>
                  setLocalUserInfo({ ...localUserInfo, name: e.target.value })
                }
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              
              {/* Birth Date Fields - Split into 3 */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Birth Date
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {/* Year Dropdown */}
                  <select
                    value={localUserInfo.birthYear}
                    onChange={(e) => handleDateChange('birthYear', e.target.value)}
                    className="p-3 border rounded-md focus:ring-amber-400"
                    required
                  >
                    <option value="">Year</option>
                    {YEARS.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>

                  {/* Month Dropdown */}
                  <select
                    value={localUserInfo.birthMonth}
                    onChange={(e) => handleDateChange('birthMonth', e.target.value)}
                    className="p-3 border rounded-md focus:ring-amber-400"
                    required
                  >
                    <option value="">Month</option>
                    {MONTHS.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>

                  {/* Day Dropdown */}
                  <select
                    value={localUserInfo.birthDay}
                    onChange={(e) => handleDateChange('birthDay', e.target.value)}
                    className="p-3 border rounded-md focus:ring-amber-400"
                    required
                  >
                    <option value="">Day</option>
                    {DAYS.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Birth Time */}
              <div className="space-y-2 ">
                <label className="text-sm font-medium text-gray-700">
                  Birth Time
                </label>
                <input
                  type="time"
                  value={localUserInfo.birthTime}
                  onChange={(e) =>
                    setLocalUserInfo({ ...localUserInfo, birthTime: e.target.value })
                  }
                  className="w-full p-3 border rounded-md focus:ring-amber-400"
                  required
                />
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Selected Location (Birth Place) */}
              <div className="space-y-2 pt-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <label className="text-sm font-medium text-gray-700">
                    Select Birth Place 
                  </label>
                  
                </div>
                
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={handleDropdownToggle}
                    className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
                  >
                    <span className={localUserInfo.selectedLocation ? "text-gray-800" : "text-gray-500"}>
                      {localUserInfo.selectedLocation || "Select your birth place"}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isLocationDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-hidden">
                      {/* Search Input */}
                      <div className="p-2 border-b">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            placeholder="Type 2+ letters to search real locations..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                      
                      {/* Locations List */}
                      <div className="max-h-48 overflow-y-auto">
                        {isSearching ? (
                          <div className="px-4 py-3 text-center text-gray-500">
                            <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
                            Searching real locations...
                          </div>
                        ) : filteredLocations.length > 0 ? (
                          filteredLocations.map((location) => (
                            <button
                              key={location}
                              type="button"
                              onClick={() => handleLocationSelect(location)}
                              className="w-full px-4 py-2 text-left hover:bg-amber-50 focus:bg-amber-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                            >
                              {location}
                            </button>
                          ))
                        ) : searchQuery.length > 0 ? (
                          <div className="px-4 py-3 text-center text-gray-500">
                            {searchQuery.length < 2 ? "Type at least 2 characters" : "No locations found"}
                          </div>
                        ) : (
                          <div className="px-4 py-3 text-center text-gray-500">
                            Start typing to search real locations from Google Maps
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                {localUserInfo.selectedLocation && (
                  <p className="text-green-600 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Birth place selected: {localUserInfo.selectedLocation}
                  </p>
                )}
              </div>
              {/* Current Location */}
              <div className="space-y-2 pt-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <label className="text-sm font-medium text-gray-700">
                    Current Location 
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={getCurrentLocation}
                      disabled={isGettingLocation}
                      className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
                    >
                      {isGettingLocation ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Navigation className="w-3 h-3" />
                      )}
                      Fetch Current Location
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={localUserInfo.currentLocation || ""}
                    readOnly
                    placeholder="Your current location will appear here"
                    className="w-full p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                {locationError && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {locationError}
                  </p>
                )}

                {localUserInfo.currentLocation && !locationError && (
                  <p className="text-green-600 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Current location fetched: {localUserInfo.currentLocation}
                  </p>
                )}
              </div>
</div>
              </div>

              {/* Religion and Language Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Religion"
                  value={localUserInfo.religion}
                  onChange={(e) =>
                    setLocalUserInfo({ ...localUserInfo, religion: e.target.value })
                  }
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Language"
                  value={localUserInfo.language}
                  onChange={(e) =>
                    setLocalUserInfo({ ...localUserInfo, language: e.target.value })
                  }
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>

              {/* Category */}
              <select
                value={localUserInfo.selectedCategory}
                onChange={(e) =>
                  setLocalUserInfo({ ...localUserInfo, selectedCategory: e.target.value })
                }
                className="w-full p-3 border rounded-md focus:ring-amber-400"
                required
              >
                <option value="">Select Category</option>
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              
              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 rounded-md font-semibold hover:bg-amber-600 transition-all"
              >
                Continue to Chat
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-auto">
            <header className="w-full bg-[#FBAB26] px-4 py-3 flex items-center gap-3">
              <img
                src="ailogo.png"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white md:text-lg text-sm font-medium">
                Rohit
                </span>
                <span className="text-white text-xs font-medium">
                  🟢 online
                </span>
              </div>
              <button
                onClick={() => (window.location.href = "/")}
                className="ml-auto p-2 rounded-md cursor-pointer"
                aria-label="Close"
              >
                <p className="text-white font-bold">X</p>
              </button>
            </header>

<div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
  {dedupedChats && dedupedChats.length > 0 ? (
    <>
      {/* Show all chats */}
      {dedupedChats.map((chat, idx) => (
        <div
          key={idx}
          className={`flex flex-col space-y-2 mb-4 ${
            chat.question && !chat.answer ? "text-right" : "text-left"
          }`}
        >
          {/* User Message - only show if there's a question */}
          {chat.question && (
            <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] ml-auto shadow-sm">
              <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
              <div>{chat.question}</div>
            </div>
          )}
          
          {/* Bot Message - show if there's an answer */}
          {chat.answer && (
            <div className="flex flex-col space-y-2">
              {/* Answer Bubble */}
              <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[70%] max-w-[85%] shadow-sm text-left">
                <div>{chat.answer}</div>

                {/* Display retrieved sources */}
                {chat.retrievedSources && chat.retrievedSources.length > 0 && (
                  <div className="mt-2 text-xs text-amber-200">
                    <div>Sources: {chat.retrievedSources.length} references</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Remedy Bubble - Only show if user explicitly asked for remedies */}
          {chat.remedy && typeof chat.remedy === 'string' && chat.remedy.trim() !== "" && (
            <div className="flex flex-col space-y-2">
              <div className="bg-[#FE9A00] text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[70%] max-w-[85%] shadow-sm text-left">
                <div className="text-sm font-semibold mb-1"> Remedy:</div>
                <div className="text-sm">{chat.remedy}</div>
              </div>
            </div>
          )}

          

        </div>
      ))}
      
      {/* Show typing indicator when loading */}
      {isLoading && (
        // <div className="flex flex-col space-y-2 mb-4 text-left">
        //   <div className="text-black px-4 py-2 rounded-2xl inline-block shadow-sm">
        //     <div className="flex items-center space-x-2">
        //       <span className="text-sm font-bold">Typing</span>
        //       <div className="flex space-x-1">
        //         <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        //         <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        //         <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className="flex flex-col  text-left">
      <div className=" text-black  inline-block ">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold">Typing</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
          </div>
          
        </div>
      </div>
    </div>
      )}
    </>
  ) : (
    <p className="text-gray-600 text-center mt-24">
      No chats yet. Ask your first question below 👇
    </p>
  )}
  <div ref={chatEndRef} />
</div>      <div className="flex items-center gap-8">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your question..."
                className="flex-1 p-3 pl-8 pb-10 bg-[#f5e9d6] rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleQuestionSubmit();
                  }
                }}
              />
              <button
                onClick={handleQuestionSubmit}
                disabled={isLoading || !question.trim()}
                className="bg-amber-500 text-white px-4 py-3 rounded-md hover:bg-amber-600 transition disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default QNA;