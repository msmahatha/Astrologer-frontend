
// // // // /* eslint-disable react-hooks/exhaustive-deps */
// // // // import React, { useState, useRef, useEffect } from "react";
// // // // import useAIStore from "../../stores/useAIStore";
// // // // import Header from "../layout/Header";
// // // // import Footer from "../layout/Footer";
// // // // import { Send, Loader2, MapPin, Navigation, ChevronDown, Search } from "lucide-react";

// // // // const CATEGORIES = [
// // // //   "Career",
// // // //   "Health",
// // // //   "Marriage",
// // // //   "Finance",
// // // //   "Education",
// // // //   "Relationships",
// // // //   "Travel",
// // // //   "Spirituality",
// // // //   "Property",
// // // //   "Legal",
// // // // ];

// // // // const LOCATIONS = [
// // // //   "New York, USA",
// // // //   "Los Angeles, USA", 
// // // //   "Chicago, USA",
// // // //   "Houston, USA",
// // // //   "Phoenix, USA",
// // // //   "Philadelphia, USA",
// // // //   "San Antonio, USA",
// // // //   "San Diego, USA",
// // // //   "Dallas, USA",
// // // //   "San Jose, USA",
// // // //   "London, UK",
// // // //   "Manchester, UK",
// // // //   "Birmingham, UK",
// // // //   "Glasgow, UK",
// // // //   "Liverpool, UK",
// // // //   "Toronto, Canada",
// // // //   "Vancouver, Canada",
// // // //   "Montreal, Canada",
// // // //   "Calgary, Canada",
// // // //   "Ottawa, Canada",
// // // //   "Sydney, Australia",
// // // //   "Melbourne, Australia",
// // // //   "Brisbane, Australia",
// // // //   "Perth, Australia",
// // // //   "Adelaide, Australia",
// // // //   "Mumbai, India",
// // // //   "Delhi, India",
// // // //   "Bangalore, India",
// // // //   "Kolkata, India",
// // // //   "Chennai, India",
// // // //   "Tokyo, Japan",
// // // //   "Osaka, Japan",
// // // //   "Nagoya, Japan",
// // // //   "Yokohama, Japan",
// // // //   "Kyoto, Japan",
// // // //   "Berlin, Germany",
// // // //   "Munich, Germany",
// // // //   "Hamburg, Germany",
// // // //   "Cologne, Germany",
// // // //   "Frankfurt, Germany",
// // // //   "Paris, France",
// // // //   "Marseille, France",
// // // //   "Lyon, France",
// // // //   "Toulouse, France",
// // // //   "Nice, France"
// // // // ];

// // // // const QNA = () => {
// // // //   const { fetchChats, chats, sendMessage } = useAIStore();
// // // //   const [userInfo, setUserInfo] = useState({
// // // //     name: "",
// // // //     birthDate: "",
// // // //     birthTime: "",
// // // //     birthPlace: "",
// // // //     selectedCategory: "",
// // // //   });
// // // //   const [question, setQuestion] = useState("");
// // // //   const [showForm, setShowForm] = useState(true);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [isGettingLocation, setIsGettingLocation] = useState(false);
// // // //   const [locationError, setLocationError] = useState("");
// // // //   const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
// // // //   const [searchQuery, setSearchQuery] = useState("");
// // // //   const chatEndRef = useRef(null);
// // // //   const dropdownRef = useRef(null);

// // // //   useEffect(() => {
// // // //     fetchChats();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   }, [chats]);

// // // //   // Close dropdown when clicking outside
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event) => {
// // // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // // //         setIsLocationDropdownOpen(false);
// // // //       }
// // // //     };

// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => {
// // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // //     };
// // // //   }, []);

// // // //   // Filter locations based on search query
// // // //   const filteredLocations = LOCATIONS.filter(location =>
// // // //     location.toLowerCase().includes(searchQuery.toLowerCase())
// // // //   );

// // // //   // Function to get current location using Google Maps Geocoding API
// // // //   const getCurrentLocation = () => {
// // // //     if (!navigator.geolocation) {
// // // //       setLocationError("Geolocation is not supported by this browser.");
// // // //       return;
// // // //     }

// // // //     setIsGettingLocation(true);
// // // //     setLocationError("");

// // // //     navigator.geolocation.getCurrentPosition(
// // // //       async (position) => {
// // // //         try {
// // // //           const { latitude, longitude } = position.coords;
          
// // // //           // Using Google Maps Geocoding API to get address from coordinates
// // // //           const response = await fetch(
// // // //             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAoBl7NNCqtw_7g9K7bWrPq1m3ZI6P2_g8`
// // // //           );
          
// // // //           const data = await response.json();
          
// // // //           if (data.status === "OK" && data.results.length > 0) {
// // // //             const address = data.results[0].formatted_address;
// // // //             setUserInfo(prev => ({
// // // //               ...prev,
// // // //               birthPlace: address
// // // //             }));
// // // //           } else {
// // // //             setLocationError("Could not retrieve address from coordinates.");
// // // //           }
// // // //         } catch (error) {
// // // //           console.error("Error getting location:", error);
// // // //           setLocationError("Failed to get location. Please select from dropdown.");
// // // //         } finally {
// // // //           setIsGettingLocation(false);
// // // //         }
// // // //       },
// // // //       (error) => {
// // // //         setIsGettingLocation(false);
// // // //         switch (error.code) {
// // // //           case error.PERMISSION_DENIED:
// // // //             setLocationError("Location access denied. Please select from dropdown.");
// // // //             break;
// // // //           case error.POSITION_UNAVAILABLE:
// // // //             setLocationError("Location information unavailable.");
// // // //             break;
// // // //           case error.TIMEOUT:
// // // //             setLocationError("Location request timed out.");
// // // //             break;
// // // //           default:
// // // //             setLocationError("An unknown error occurred.");
// // // //             break;
// // // //         }
// // // //       },
// // // //       {
// // // //         enableHighAccuracy: true,
// // // //         timeout: 10000,
// // // //         maximumAge: 60000
// // // //       }
// // // //     );
// // // //   };

// // // //   // Alternative: Simple location detection without Google Maps API
// // // //   const getSimpleLocation = () => {
// // // //     if (!navigator.geolocation) {
// // // //       setLocationError("Geolocation is not supported by this browser.");
// // // //       return;
// // // //     }

// // // //     setIsGettingLocation(true);
// // // //     setLocationError("");

// // // //     navigator.geolocation.getCurrentPosition(
// // // //       (position) => {
// // // //         const { latitude, longitude } = position.coords;
// // // //         // Display coordinates or use a simple reverse geocoding service
// // // //         const locationText = `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
// // // //         setUserInfo(prev => ({
// // // //           ...prev,
// // // //           birthPlace: locationText
// // // //         }));
// // // //         setIsGettingLocation(false);
// // // //       },
// // // //       (error) => {
// // // //         setIsGettingLocation(false);
// // // //         switch (error.code) {
// // // //           case error.PERMISSION_DENIED:
// // // //             setLocationError("Location access denied. Please select from dropdown.");
// // // //             break;
// // // //           case error.POSITION_UNAVAILABLE:
// // // //             setLocationError("Location information unavailable.");
// // // //             break;
// // // //           case error.TIMEOUT:
// // // //             setLocationError("Location request timed out.");
// // // //             break;
// // // //           default:
// // // //             // setLocationError("An unknown error occurred.");
// // // //             break;
// // // //         }
// // // //       }
// // // //     );
// // // //   };

// // // //   const handleFormSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (
// // // //       !userInfo.name ||
// // // //       !userInfo.birthDate ||
// // // //       !userInfo.birthTime ||
// // // //       !userInfo.birthPlace ||
// // // //       !userInfo.selectedCategory
// // // //     ) {
// // // //       alert("Please fill all fields before continuing.");
// // // //       return;
// // // //     }
// // // //     setShowForm(false);
// // // //   };

// // // //   const handleQuestionSubmit = async () => {
// // // //     if (!question.trim() || isLoading) return;

// // // //     setIsLoading(true);
// // // //     try {
// // // //       const context = `User Info:
// // // //       Name: ${userInfo.name}
// // // //       Birth Date: ${userInfo.birthDate}
// // // //       Birth Time: ${userInfo.birthTime}
// // // //       Birth Place: ${userInfo.birthPlace}
// // // //       Category: ${userInfo.selectedCategory}`;

// // // //       const response = await sendMessage({
// // // //         question: `${context}\n\nUser Question: ${question}`,
// // // //       });

// // // //       if (!response?.success) {
// // // //         alert(response?.message || "Failed to send message");
// // // //       } else {
// // // //         setQuestion("");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error sending message:", error);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleLocationSelect = (location) => {
// // // //     setUserInfo(prev => ({
// // // //       ...prev,
// // // //       birthPlace: location
// // // //     }));
// // // //     setIsLocationDropdownOpen(false);
// // // //     setSearchQuery("");
// // // //     setLocationError("");
// // // //   };

// // // //   const handleDropdownToggle = () => {
// // // //     setIsLocationDropdownOpen(!isLocationDropdownOpen);
// // // //     setSearchQuery("");
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
// // // //       <Header />

// // // //       <main className="flex-grow flex flex-col items-center px-4 py-8 bg-gray-50">
// // // //         {showForm ? (
// // // //           // ===== User Info Form =====
// // // //           <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
// // // //             <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
// // // //               Fill Your Birth Details
// // // //             </h2>
// // // //             <form onSubmit={handleFormSubmit} className="space-y-4">
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Your Name"
// // // //                 value={userInfo.name}
// // // //                 onChange={(e) =>
// // // //                   setUserInfo({ ...userInfo, name: e.target.value })
// // // //                 }
// // // //                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
// // // //                 required
// // // //               />
// // // //               <div className="flex gap-3">
// // // //                 <input
// // // //                   type="date"
// // // //                   value={userInfo.birthDate}
// // // //                   onChange={(e) =>
// // // //                     setUserInfo({ ...userInfo, birthDate: e.target.value })
// // // //                   }
// // // //                   className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
// // // //                   required
// // // //                 />
// // // //                 <input
// // // //                   type="time"
// // // //                   value={userInfo.birthTime}
// // // //                   onChange={(e) =>
// // // //                     setUserInfo({ ...userInfo, birthTime: e.target.value })
// // // //                   }
// // // //                   className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
// // // //                   required
// // // //                 />
// // // //               </div>
              
// // // //               {/* Birth Place with Dropdown and Location Detection */}
// // // //               <div className="space-y-2">
// // // //                 <div className="flex items-center gap-2">
// // // //                   <label className="text-sm font-medium text-gray-700">
// // // //                     Birth Place
// // // //                   </label>
// // // //                   <button
// // // //                     type="button"
// // // //                     onClick={getSimpleLocation}
// // // //                     disabled={isGettingLocation}
// // // //                     className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
// // // //                   >
// // // //                     {isGettingLocation ? (
// // // //                       <Loader2 className="w-3 h-3 animate-spin" />
// // // //                     ) : (
// // // //                       <Navigation className="w-3 h-3" />
// // // //                     )}
// // // //                     Get Current Location
// // // //                   </button>
// // // //                 </div>
                
// // // //                 <div className="relative" ref={dropdownRef}>
// // // //                   <button
// // // //                     type="button"
// // // //                     onClick={handleDropdownToggle}
// // // //                     className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
// // // //                   >
// // // //                     <span className={userInfo.birthPlace ? "text-gray-800" : "text-gray-500"}>
// // // //                       {userInfo.birthPlace || "Select your birth place"}
// // // //                     </span>
// // // //                     <ChevronDown className={`w-4 h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
// // // //                   </button>
                  
// // // //                   {isLocationDropdownOpen && (
// // // //                     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-hidden">
// // // //                       {/* Search Input */}
// // // //                       <div className="p-2 border-b">
// // // //                         <div className="relative">
// // // //                           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
// // // //                           <input
// // // //                             type="text"
// // // //                             placeholder="Search locations..."
// // // //                             value={searchQuery}
// // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // //                             className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
// // // //                             onClick={(e) => e.stopPropagation()}
// // // //                           />
// // // //                         </div>
// // // //                       </div>
                      
// // // //                       {/* Locations List */}
// // // //                       <div className="max-h-48 overflow-y-auto">
// // // //                         {filteredLocations.length > 0 ? (
// // // //                           filteredLocations.map((location) => (
// // // //                             <button
// // // //                               key={location}
// // // //                               type="button"
// // // //                               onClick={() => handleLocationSelect(location)}
// // // //                               className="w-full px-4 py-2 text-left hover:bg-amber-50 focus:bg-amber-50 focus:outline-none border-b border-gray-100 last:border-b-0"
// // // //                             >
// // // //                               {location}
// // // //                             </button>
// // // //                           ))
// // // //                         ) : (
// // // //                           <div className="px-4 py-3 text-center text-gray-500">
// // // //                             No locations found
// // // //                           </div>
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
                
// // // //                 {locationError && (
// // // //                   <p className="text-red-500 text-sm flex items-center gap-1">
// // // //                     <MapPin className="w-4 h-4" />
// // // //                     {locationError}
// // // //                   </p>
// // // //                 )}
                
// // // //                 {userInfo.birthPlace && !locationError && (
// // // //                   <p className="text-green-600 text-sm flex items-center gap-1">
// // // //                     <MapPin className="w-4 h-4" />
// // // //                     Location selected: {userInfo.birthPlace}
// // // //                   </p>
// // // //                 )}
// // // //               </div>

// // // //               <select
// // // //                 value={userInfo.selectedCategory}
// // // //                 onChange={(e) =>
// // // //                   setUserInfo({ ...userInfo, selectedCategory: e.target.value })
// // // //                 }
// // // //                 className="w-full p-3 border rounded-md focus:ring-amber-400"
// // // //                 required
// // // //               >
// // // //                 <option value="">Select Category</option>
// // // //                 {CATEGORIES.map((category) => (
// // // //                   <option key={category} value={category}>
// // // //                     {category}
// // // //                   </option>
// // // //                 ))}
// // // //               </select>
              
// // // //               <button
// // // //                 type="submit"
// // // //                 className="w-full bg-amber-500 text-white py-3 rounded-md font-semibold hover:bg-amber-600 transition-all"
// // // //               >
// // // //                 Continue to Chat
// // // //               </button>
// // // //             </form>
// // // //           </div>
// // // //         ) : (
// // // //           // ===== Chat Section =====
// // // //           <div className="w-full max-w-3xl">
// // // //             <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
// // // //               {chats.length > 0 ? (
// // // //                 chats.map((chat, idx) => {
// // // //                   // If the backend stored the whole user context (User Info: ... User Question: ...)
// // // //                   // extract only the actual user question text to avoid showing personal info in UI.
// // // //                   const isUser = Boolean(chat?.question);
// // // //                   let displayQuestion = "";
// // // //                   if (isUser && typeof chat.question === "string") {
// // // //                     if (chat.question.includes("User Question:")) {
// // // //                       displayQuestion = chat.question.split("User Question:").pop().trim();
// // // //                     } else {
// // // //                       // Fallback: try to remove the 'User Info:' prefix if present
// // // //                       displayQuestion = chat.question.replace(/User Info:\s*.*$/s, "").trim() || chat.question;
// // // //                     }
// // // //                   }

// // // //                   return (
// // // //                     <div
// // // //                       key={idx}
// // // //                       className={`flex flex-col space-y-2 mb-4 ${
// // // //                         isUser ? "text-right" : "text-left"
// // // //                       }`}
// // // //                     >
// // // //                       {isUser && (
// // // //                         <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block max-w-[75%] ml-auto shadow-sm">
// // // //                           <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
// // // //                           <div>{displayQuestion}</div>
// // // //                         </div>
// // // //                       )}
// // // //                       {chat?.answer && (
// // // //                         <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block max-w-[75%] shadow-sm">
// // // //                           {chat.answer}
// // // //                         </div>
// // // //                       )}
// // // //                     </div>
// // // //                   );
// // // //                 })
// // // //               ) : (
// // // //                 <p className="text-gray-600 text-center mt-24">
// // // //                   No chats yet. Ask your first question below 👇
// // // //                 </p>
// // // //               )}
// // // //               <div ref={chatEndRef} />
// // // //             </div>

// // // //             <div className="flex items-center gap-2">
// // // //               <input
// // // //                 type="text"
// // // //                 value={question}
// // // //                 onChange={(e) => setQuestion(e.target.value)}
// // // //                 placeholder="Ask your question..."
// // // //                 className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
// // // //                 onKeyPress={(e) => {
// // // //                   if (e.key === 'Enter' && !e.shiftKey) {
// // // //                     e.preventDefault();
// // // //                     handleQuestionSubmit();
// // // //                   }
// // // //                 }}
// // // //               />
// // // //               <button
// // // //                 onClick={handleQuestionSubmit}
// // // //                 disabled={isLoading || !question.trim()}
// // // //                 className="bg-amber-500 text-white px-4 py-3 rounded-md hover:bg-amber-600 transition disabled:opacity-50 flex items-center justify-center"
// // // //               >
// // // //                 {isLoading ? (
// // // //                   <Loader2 className="w-5 h-5 animate-spin" />
// // // //                 ) : (
// // // //                   <Send className="w-5 h-5" />
// // // //                 )}
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </main>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default QNA;


// // // /* eslint-disable react-hooks/exhaustive-deps */
// // // import React, { useState, useRef, useEffect } from "react";
// // // import useAIStore from "../../stores/useAIStore";
// // // import Header from "../layout/Header";
// // // import Footer from "../layout/Footer";
// // // import { Send, Loader2, MapPin, Navigation, ChevronDown, Search } from "lucide-react";

// // // const CATEGORIES = [
// // //   "Career",
// // //   "Health",
// // //   "Marriage",
// // //   "Finance",
// // //   "Education",
// // //   "Relationships",
// // //   "Travel",
// // //   "Spirituality",
// // //   "Property",
// // //   "Legal",
// // // ];

// // // // Use absolute URL for production, relative for development
// // // const API_BASE_URL = window.location.hostname === 'localhost' 
// // //   ? 'https://demoastrobackend.onrender.comapi' 
// // //   : 'https://demoastrobackend.onrender.com/api'; // Replace with your actual backend domain

// // // const QNA = () => {
// // //   const { fetchChats, chats, sendMessage } = useAIStore();
// // //   const [userInfo, setUserInfo] = useState({
// // //     name: "",
// // //     birthDate: "",
// // //     birthTime: "",
// // //     birthPlace: "",
// // //     selectedCategory: "",
// // //   });
// // //   const [question, setQuestion] = useState("");
// // //   const [showForm, setShowForm] = useState(true);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [isGettingLocation, setIsGettingLocation] = useState(false);
// // //   const [locationError, setLocationError] = useState("");
// // //   const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [filteredLocations, setFilteredLocations] = useState([]);
// // //   const [isSearching, setIsSearching] = useState(false);
// // //   const chatEndRef = useRef(null);
// // //   const dropdownRef = useRef(null);
// // //   const searchTimeoutRef = useRef(null);

// // //   useEffect(() => {
// // //     fetchChats();
// // //   }, []);

// // //   useEffect(() => {
// // //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [chats]);

// // //   // Close dropdown when clicking outside
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // //         setIsLocationDropdownOpen(false);
// // //       }
// // //     };

// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => {
// // //       document.removeEventListener("mousedown", handleClickOutside);
// // //     };
// // //   }, []);

// // //   // Fetch locations from Google Places API via Node.js proxy
// // //   useEffect(() => {
// // //     if (searchQuery.length < 2) {
// // //       setFilteredLocations([]);
// // //       return;
// // //     }

// // //     if (searchTimeoutRef.current) {
// // //       clearTimeout(searchTimeoutRef.current);
// // //     }

// // //     searchTimeoutRef.current = setTimeout(async () => {
// // //       setIsSearching(true);
// // //       try {
// // //         const response = await fetch(`${API_BASE_URL}/places-autocomplete`, {
// // //           method: 'POST',
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify({ input: searchQuery })
// // //         });
        
// // //         if (!response.ok) {
// // //           throw new Error('Network response was not ok');
// // //         }
        
// // //         const data = await response.json();
        
// // //         if (data.status === 'OK' && data.predictions) {
// // //           const locations = data.predictions.map(prediction => prediction.description);
// // //           setFilteredLocations(locations);
// // //         } else {
// // //           setFilteredLocations([]);
// // //           console.log('API returned no results:', data.status);
// // //         }
// // //       } catch (error) {
// // //         console.error("Error fetching locations:", error);
// // //         setFilteredLocations([]);
// // //         setLocationError("Failed to fetch locations. Please try again.");
// // //       } finally {
// // //         setIsSearching(false);
// // //       }
// // //     }, 300);

// // //     return () => {
// // //       if (searchTimeoutRef.current) {
// // //         clearTimeout(searchTimeoutRef.current);
// // //       }
// // //     };
// // //   }, [searchQuery]);

// // //   // Function to get current location using Node.js proxy
// // //   const getCurrentLocation = () => {
// // //     if (!navigator.geolocation) {
// // //       setLocationError("Geolocation is not supported by this browser.");
// // //       return;
// // //     }

// // //     setIsGettingLocation(true);
// // //     setLocationError("");

// // //     navigator.geolocation.getCurrentPosition(
// // //       async (position) => {
// // //         try {
// // //           const { latitude, longitude } = position.coords;
          
// // //           // Use Node.js proxy for reverse geocoding
// // //           const response = await fetch(`${API_BASE_URL}/reverse-geocode`, {
// // //             method: 'POST',
// // //             headers: {
// // //               'Content-Type': 'application/json',
// // //             },
// // //             body: JSON.stringify({ latitude, longitude })
// // //           });
          
// // //           if (!response.ok) {
// // //             throw new Error('Network response was not ok');
// // //           }
          
// // //           const data = await response.json();
          
// // //           if (data.status === 'OK' && data.results && data.results.length > 0) {
// // //             const address = data.results[0].formatted_address;
// // //             setUserInfo(prev => ({
// // //               ...prev,
// // //               birthPlace: address
// // //             }));
// // //           } else {
// // //             setLocationError("Could not retrieve address from coordinates.");
// // //           }
// // //         } catch (error) {
// // //           console.error("Error getting location:", error);
// // //           setLocationError("Failed to get location. Please search manually.");
// // //         } finally {
// // //           setIsGettingLocation(false);
// // //         }
// // //       },
// // //       (error) => {
// // //         setIsGettingLocation(false);
// // //         switch (error.code) {
// // //           case error.PERMISSION_DENIED:
// // //             setLocationError("Location access denied. Please search manually.");
// // //             break;
// // //           case error.POSITION_UNAVAILABLE:
// // //             setLocationError("Location information unavailable.");
// // //             break;
// // //           case error.TIMEOUT:
// // //             setLocationError("Location request timed out.");
// // //             break;
// // //           default:
// // //             setLocationError("An unknown error occurred.");
// // //             break;
// // //         }
// // //       },
// // //       {
// // //         enableHighAccuracy: true,
// // //         timeout: 10000,
// // //         maximumAge: 60000
// // //       }
// // //     );
// // //   };

// // //   const handleFormSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (
// // //       !userInfo.name ||
// // //       !userInfo.birthDate ||
// // //       !userInfo.birthTime ||
// // //       !userInfo.birthPlace ||
// // //       !userInfo.selectedCategory
// // //     ) {
// // //       alert("Please fill all fields before continuing.");
// // //       return;
// // //     }
// // //     setShowForm(false);
// // //   };

// // //   const handleQuestionSubmit = async () => {
// // //     if (!question.trim() || isLoading) return;

// // //     setIsLoading(true);
// // //     try {
// // //       const context = `User Info:
// // //       Name: ${userInfo.name}
// // //       Birth Date: ${userInfo.birthDate}
// // //       Birth Time: ${userInfo.birthTime}
// // //       Birth Place: ${userInfo.birthPlace}
// // //       Category: ${userInfo.selectedCategory}`;

// // //       const response = await sendMessage({
// // //         question: `${context}\n\nUser Question: ${question}`,
// // //       });

// // //       if (!response?.success) {
// // //         alert(response?.message || "Failed to send message");
// // //       } else {
// // //         setQuestion("");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error sending message:", error);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleLocationSelect = (location) => {
// // //     setUserInfo(prev => ({
// // //       ...prev,
// // //       birthPlace: location
// // //     }));
// // //     setIsLocationDropdownOpen(false);
// // //     setSearchQuery("");
// // //     setLocationError("");
// // //   };

// // //   const handleDropdownToggle = () => {
// // //     setIsLocationDropdownOpen(!isLocationDropdownOpen);
// // //     setSearchQuery("");
// // //     setFilteredLocations([]);
// // //   };

// // //   const handleSearchChange = (e) => {
// // //     setSearchQuery(e.target.value);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
// // //       <Header />

// // //       <main className="flex-grow flex flex-col items-center px-4 py-8 bg-gray-50">
// // //         {showForm ? (
// // //           // ===== User Info Form =====
// // //           <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
// // //             <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
// // //               Fill Your Birth Details
// // //             </h2>
// // //             <form onSubmit={handleFormSubmit} className="space-y-4">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Your Name"
// // //                 value={userInfo.name}
// // //                 onChange={(e) =>
// // //                   setUserInfo({ ...userInfo, name: e.target.value })
// // //                 }
// // //                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
// // //                 required
// // //               />
// // //               <div className="flex gap-3">
// // //                 <input
// // //                   type="date"
// // //                   value={userInfo.birthDate}
// // //                   onChange={(e) =>
// // //                     setUserInfo({ ...userInfo, birthDate: e.target.value })
// // //                   }
// // //                   className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
// // //                   required
// // //                 />
// // //                 <input
// // //                   type="time"
// // //                   value={userInfo.birthTime}
// // //                   onChange={(e) =>
// // //                     setUserInfo({ ...userInfo, birthTime: e.target.value })
// // //                   }
// // //                   className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
// // //                   required
// // //                 />
// // //               </div>
              
// // //               {/* Birth Place with Dropdown and Location Detection */}
// // //               <div className="space-y-2">
// // //                 <div className="flex items-center gap-2">
// // //                   <label className="text-sm font-medium text-gray-700">
// // //                     Birth Place
// // //                   </label>
// // //                   <button
// // //                     type="button"
// // //                     onClick={getCurrentLocation}
// // //                     disabled={isGettingLocation}
// // //                     className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
// // //                   >
// // //                     {isGettingLocation ? (
// // //                       <Loader2 className="w-3 h-3 animate-spin" />
// // //                     ) : (
// // //                       <Navigation className="w-3 h-3" />
// // //                     )}
// // //                     Get Current Location
// // //                   </button>
// // //                 </div>
                
// // //                 <div className="relative" ref={dropdownRef}>
// // //                   <button
// // //                     type="button"
// // //                     onClick={handleDropdownToggle}
// // //                     className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
// // //                   >
// // //                     <span className={userInfo.birthPlace ? "text-gray-800" : "text-gray-500"}>
// // //                       {userInfo.birthPlace || "Select your birth place"}
// // //                     </span>
// // //                     <ChevronDown className={`w-4 h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
// // //                   </button>
                  
// // //                   {isLocationDropdownOpen && (
// // //                     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-hidden">
// // //                       {/* Search Input */}
// // //                       <div className="p-2 border-b">
// // //                         <div className="relative">
// // //                           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
// // //                           <input
// // //                             type="text"
// // //                             placeholder="Type 2+ letters to search real locations..."
// // //                             value={searchQuery}
// // //                             onChange={handleSearchChange}
// // //                             className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
// // //                             onClick={(e) => e.stopPropagation()}
// // //                           />
// // //                         </div>
// // //                       </div>
                      
// // //                       {/* Locations List */}
// // //                       <div className="max-h-48 overflow-y-auto">
// // //                         {isSearching ? (
// // //                           <div className="px-4 py-3 text-center text-gray-500">
// // //                             <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
// // //                             Searching real locations...
// // //                           </div>
// // //                         ) : filteredLocations.length > 0 ? (
// // //                           filteredLocations.map((location) => (
// // //                             <button
// // //                               key={location}
// // //                               type="button"
// // //                               onClick={() => handleLocationSelect(location)}
// // //                               className="w-full px-4 py-2 text-left hover:bg-amber-50 focus:bg-amber-50 focus:outline-none border-b border-gray-100 last:border-b-0"
// // //                             >
// // //                               {location}
// // //                             </button>
// // //                           ))
// // //                         ) : searchQuery.length > 0 ? (
// // //                           <div className="px-4 py-3 text-center text-gray-500">
// // //                             {searchQuery.length < 2 ? "Type at least 2 characters" : "No locations found"}
// // //                           </div>
// // //                         ) : (
// // //                           <div className="px-4 py-3 text-center text-gray-500">
// // //                             Start typing to search real locations from Google Maps
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>
                
// // //                 {locationError && (
// // //                   <p className="text-red-500 text-sm flex items-center gap-1">
// // //                     <MapPin className="w-4 h-4" />
// // //                     {locationError}
// // //                   </p>
// // //                 )}
                
// // //                 {userInfo.birthPlace && !locationError && (
// // //                   <p className="text-green-600 text-sm flex items-center gap-1">
// // //                     <MapPin className="w-4 h-4" />
// // //                     Location selected: {userInfo.birthPlace}
// // //                   </p>
// // //                 )}
// // //               </div>

// // //               <select
// // //                 value={userInfo.selectedCategory}
// // //                 onChange={(e) =>
// // //                   setUserInfo({ ...userInfo, selectedCategory: e.target.value })
// // //                 }
// // //                 className="w-full p-3 border rounded-md focus:ring-amber-400"
// // //                 required
// // //               >
// // //                 <option value="">Select Category</option>
// // //                 {CATEGORIES.map((category) => (
// // //                   <option key={category} value={category}>
// // //                     {category}
// // //                   </option>
// // //                 ))}
// // //               </select>
              
// // //               <button
// // //                 type="submit"
// // //                 className="w-full bg-amber-500 text-white py-3 rounded-md font-semibold hover:bg-amber-600 transition-all"
// // //               >
// // //                 Continue to Chat
// // //               </button>
// // //             </form>
// // //           </div>
// // //         ) : (
// // //           // ===== Chat Section =====
// // //           <div className="w-full max-w-3xl">
// // //             <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
// // //               {chats.length > 0 ? (
// // //                 chats.map((chat, idx) => {
// // //                   const isUser = Boolean(chat?.question);
// // //                   let displayQuestion = "";
// // //                   if (isUser && typeof chat.question === "string") {
// // //                     if (chat.question.includes("User Question:")) {
// // //                       displayQuestion = chat.question.split("User Question:").pop().trim();
// // //                     } else {
// // //                       displayQuestion = chat.question.replace(/User Info:\s*.*$/s, "").trim() || chat.question;
// // //                     }
// // //                   }

// // //                   return (
// // //                     <div
// // //                       key={idx}
// // //                       className={`flex flex-col space-y-2 mb-4 ${
// // //                         isUser ? "text-right" : "text-left"
// // //                       }`}
// // //                     >
// // //                       {isUser && (
// // //                         <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block max-w-[75%] ml-auto shadow-sm">
// // //                           <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
// // //                           <div>{displayQuestion}</div>
// // //                         </div>
// // //                       )}
// // //                       {chat?.answer && (
// // //                         <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block max-w-[75%] shadow-sm">
// // //                           {chat.answer}
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <p className="text-gray-600 text-center mt-24">
// // //                   No chats yet. Ask your first question below 👇
// // //                 </p>
// // //               )}
// // //               <div ref={chatEndRef} />
// // //             </div>

// // //             <div className="flex items-center gap-2">
// // //               <input
// // //                 type="text"
// // //                 value={question}
// // //                 onChange={(e) => setQuestion(e.target.value)}
// // //                 placeholder="Ask your question..."
// // //                 className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
// // //                 onKeyPress={(e) => {
// // //                   if (e.key === 'Enter' && !e.shiftKey) {
// // //                     e.preventDefault();
// // //                     handleQuestionSubmit();
// // //                   }
// // //                 }}
// // //               />
// // //               <button
// // //                 onClick={handleQuestionSubmit}
// // //                 disabled={isLoading || !question.trim()}
// // //                 className="bg-amber-500 text-white px-4 py-3 rounded-md hover:bg-amber-600 transition disabled:opacity-50 flex items-center justify-center"
// // //               >
// // //                 {isLoading ? (
// // //                   <Loader2 className="w-5 h-5 animate-spin" />
// // //                 ) : (
// // //                   <Send className="w-5 h-5" />
// // //                 )}
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </main>

// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default QNA;






// // /* eslint-disable react-hooks/exhaustive-deps */
// // import React, { useState, useRef, useEffect } from "react";
// // import useAIStore from "../../stores/useAIStore";
// // import Header from "../layout/Header";
// // import Footer from "../layout/Footer";
// // import { Send, Loader2, MapPin, Navigation, ChevronDown, Search, Map, Calendar } from "lucide-react";

// // const CATEGORIES = [
// //   "Career",
// //   "Health",
// //   "Marriage",
// //   "Finance",
// //   "Education",
// //   "Relationships",
// //   "Travel",
// //   "Spirituality",
// //   "Property",
// //   "Legal",
// // ];

// // // Months array for dropdown
// // const MONTHS = [
// //   { value: "01", label: "January" },
// //   { value: "02", label: "February" },
// //   { value: "03", label: "March" },
// //   { value: "04", label: "April" },
// //   { value: "05", label: "May" },
// //   { value: "06", label: "June" },
// //   { value: "07", label: "July" },
// //   { value: "08", label: "August" },
// //   { value: "09", label: "September" },
// //   { value: "10", label: "October" },
// //   { value: "11", label: "November" },
// //   { value: "12", label: "December" }
// // ];

// // // Generate years (from 1900 to current year)
// // const currentYear = new Date().getFullYear();
// // const YEARS = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => (currentYear - i).toString());

// // // Generate days (1-31)
// // const DAYS = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

// // // Use absolute URL for production, relative for development
// // const API_BASE_URL = window.location.hostname === 'localhost' 
// //   ? 'https://demoastrobackend.onrender.comapi' 
// //   : 'https://demoastrobackend.onrender.com/api';

// // const QNA = () => {
// //   const { fetchChats, chats, sendMessage } = useAIStore();
// //   const [userInfo, setUserInfo] = useState({
// //     name: "",
// //     birthYear: "",
// //     birthMonth: "",
// //     birthDay: "",
// //     birthTime: "",
// //     birthPlace: "",
// //     selectedCategory: "",
// //   });
// //   const [question, setQuestion] = useState("");
// //   const [showForm, setShowForm] = useState(true);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [isGettingLocation, setIsGettingLocation] = useState(false);
// //   const [locationError, setLocationError] = useState("");
// //   const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [filteredLocations, setFilteredLocations] = useState([]);
// //   const [isSearching, setIsSearching] = useState(false);
// //   const [showMapOption, setShowMapOption] = useState(false);
// //   const chatEndRef = useRef(null);
// //   const dropdownRef = useRef(null);
// //   const searchTimeoutRef = useRef(null);

// //   useEffect(() => {
// //     fetchChats();
// //   }, []);

// //   useEffect(() => {
// //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [chats]);

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsLocationDropdownOpen(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   // Fetch locations from Google Places API via Node.js proxy
// //   useEffect(() => {
// //     if (searchQuery.length < 2) {
// //       setFilteredLocations([]);
// //       return;
// //     }

// //     if (searchTimeoutRef.current) {
// //       clearTimeout(searchTimeoutRef.current);
// //     }

// //     searchTimeoutRef.current = setTimeout(async () => {
// //       setIsSearching(true);
// //       try {
// //         const response = await fetch(`${API_BASE_URL}/places-autocomplete`, {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({ input: searchQuery })
// //         });
        
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
        
// //         const data = await response.json();
        
// //         if (data.status === 'OK' && data.predictions) {
// //           const locations = data.predictions.map(prediction => prediction.description);
// //           setFilteredLocations(locations);
// //         } else {
// //           setFilteredLocations([]);
// //           console.log('API returned no results:', data.status);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching locations:", error);
// //         setFilteredLocations([]);
// //         setLocationError("Failed to fetch locations. Please try again.");
// //       } finally {
// //         setIsSearching(false);
// //       }
// //     }, 300);

// //     return () => {
// //       if (searchTimeoutRef.current) {
// //         clearTimeout(searchTimeoutRef.current);
// //       }
// //     };
// //   }, [searchQuery]);

// //   // Function to get current location and current date
// //   const getCurrentLocation = () => {
// //     if (!navigator.geolocation) {
// //       setLocationError("Geolocation is not supported by this browser.");
// //       return;
// //     }

// //     setIsGettingLocation(true);
// //     setLocationError("");

// //     navigator.geolocation.getCurrentPosition(
// //       async (position) => {
// //         try {
// //           const { latitude, longitude } = position.coords;
          
// //           // Get current date
// //           const now = new Date();
// //           const currentYear = now.getFullYear().toString();
// //           const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
// //           const currentDay = now.getDate().toString().padStart(2, '0');
// //           const currentTime = now.toTimeString().split(' ')[0].substring(0, 5); // HH:MM format

// //           // Use Node.js proxy for reverse geocoding
// //           const response = await fetch(`${API_BASE_URL}/reverse-geocode`, {
// //             method: 'POST',
// //             headers: {
// //               'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify({ latitude, longitude })
// //           });
          
// //           if (!response.ok) {
// //             throw new Error('Network response was not ok');
// //           }
          
// //           const data = await response.json();
          
// //           if (data.status === 'OK' && data.results && data.results.length > 0) {
// //             const address = data.results[0].formatted_address;
// //             setUserInfo(prev => ({
// //               ...prev,
// //               birthPlace: address,
// //               birthYear: currentYear,
// //               birthMonth: currentMonth,
// //               birthDay: currentDay,
// //               birthTime: currentTime
// //             }));
// //           } else {
// //             setLocationError("Could not retrieve address from coordinates.");
// //             // Still set the date even if location fails
// //             setUserInfo(prev => ({
// //               ...prev,
// //               birthYear: currentYear,
// //               birthMonth: currentMonth,
// //               birthDay: currentDay,
// //               birthTime: currentTime
// //             }));
// //           }
// //         } catch (error) {
// //           console.error("Error getting location:", error);
// //           setLocationError("Failed to get location. Please search manually.");
// //           // Still set the current date even if location fails
// //           const now = new Date();
// //           const currentYear = now.getFullYear().toString();
// //           const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
// //           const currentDay = now.getDate().toString().padStart(2, '0');
// //           const currentTime = now.toTimeString().split(' ')[0].substring(0, 5);
          
// //           setUserInfo(prev => ({
// //             ...prev,
// //             birthYear: currentYear,
// //             birthMonth: currentMonth,
// //             birthDay: currentDay,
// //             birthTime: currentTime
// //           }));
// //         } finally {
// //           setIsGettingLocation(false);
// //         }
// //       },
// //       (error) => {
// //         setIsGettingLocation(false);
// //         switch (error.code) {
// //           case error.PERMISSION_DENIED:
// //             setLocationError("Location access denied. Please search manually.");
// //             break;
// //           case error.POSITION_UNAVAILABLE:
// //             setLocationError("Location information unavailable.");
// //             break;
// //           case error.TIMEOUT:
// //             setLocationError("Location request timed out.");
// //             break;
// //           default:
// //             setLocationError("An unknown error occurred.");
// //             break;
// //         }
// //       },
// //       {
// //         enableHighAccuracy: true,
// //         timeout: 10000,
// //         maximumAge: 60000
// //       }
// //     );
// //   };

// //   // Function to handle map selection
// //   const handleMapSelection = () => {
// //     setShowMapOption(true);
// //     alert("Map selection feature would open here. For now, please use search or current location.");
// //     setUserInfo(prev => ({
// //       ...prev,
// //       birthPlace: "Selected from map (feature to be implemented)"
// //     }));
// //     setShowMapOption(false);
// //   };

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     if (
// //       !userInfo.name ||
// //       !userInfo.birthYear ||
// //       !userInfo.birthMonth ||
// //       !userInfo.birthDay ||
// //       !userInfo.birthTime ||
// //       !userInfo.birthPlace ||
// //       !userInfo.selectedCategory
// //     ) {
// //       alert("Please fill all fields before continuing.");
// //       return;
// //     }
// //     setShowForm(false);
// //   };

// //   const handleQuestionSubmit = async () => {
// //     if (!question.trim() || isLoading) return;

// //     setIsLoading(true);
// //     try {
// //       // Format the birth date from separate fields
// //       const birthDate = `${userInfo.birthYear}-${userInfo.birthMonth}-${userInfo.birthDay}`;
      
// //       const context = `User Info:
// //       Name: ${userInfo.name}
// //       Birth Date: ${birthDate}
// //       Birth Time: ${userInfo.birthTime}
// //       Birth Place: ${userInfo.birthPlace}
// //       Category: ${userInfo.selectedCategory}`;

// //       const response = await sendMessage({
// //         question: `${context}\n\nUser Question: ${question}`,
// //       });

// //       if (!response?.success) {
// //         alert(response?.message || "Failed to send message");
// //       } else {
// //         setQuestion("");
// //       }
// //     } catch (error) {
// //       console.error("Error sending message:", error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleLocationSelect = (location) => {
// //     setUserInfo(prev => ({
// //       ...prev,
// //       birthPlace: location
// //     }));
// //     setIsLocationDropdownOpen(false);
// //     setSearchQuery("");
// //     setLocationError("");
// //   };

// //   const handleDropdownToggle = () => {
// //     setIsLocationDropdownOpen(!isLocationDropdownOpen);
// //     setSearchQuery("");
// //     setFilteredLocations([]);
// //   };

// //   const handleSearchChange = (e) => {
// //     setSearchQuery(e.target.value);
// //   };

// //   // Handle individual date field changes
// //   const handleDateChange = (field, value) => {
// //     setUserInfo(prev => ({
// //       ...prev,
// //       [field]: value
// //     }));
// //   };

// //   // Typing indicator component
// //   const TypingIndicator = () => (
// //     <div className="flex flex-col space-y-2 mb-4 text-left">
// //       <div className=" text-black rounded-2xl inline-block ">
// //         <div className="flex items-center space-x-2">
// //           <span className="text-sm font-bold">Typing</span>
// //           <div className="flex space-x-1">
// //             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
// //             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
// //             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
// //           </div>
          
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
// //       <Header />

// //       <main className=" flex flex-col items-center px-4 py-8 bg-gray-50">
// //         {showForm ? (
// //           // ===== User Info Form =====
// //           <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
// //             <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
// //               Fill Your Birth Details
// //             </h2>
// //             <form onSubmit={handleFormSubmit} className="space-y-4">
// //               {/* Name Field */}
// //               <input
// //                 type="text"
// //                 placeholder="Your Name"
// //                 value={userInfo.name}
// //                 onChange={(e) =>
// //                   setUserInfo({ ...userInfo, name: e.target.value })
// //                 }
// //                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
// //                 required
// //               />
              
// //               {/* Birth Date Fields - Split into 3 */}
// //               <div className="space-y-2">
// //                 <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
// //                   <Calendar className="w-4 h-4" />
// //                   Birth Date
// //                 </label>
// //                 <div className="grid grid-cols-3 gap-3">
// //                   {/* Year Dropdown */}
// //                   <select
// //                     value={userInfo.birthYear}
// //                     onChange={(e) => handleDateChange('birthYear', e.target.value)}
// //                     className="p-3 border rounded-md focus:ring-amber-400"
// //                     required
// //                   >
// //                     <option value="">Year</option>
// //                     {YEARS.map((year) => (
// //                       <option key={year} value={year}>
// //                         {year}
// //                       </option>
// //                     ))}
// //                   </select>

// //                   {/* Month Dropdown */}
// //                   <select
// //                     value={userInfo.birthMonth}
// //                     onChange={(e) => handleDateChange('birthMonth', e.target.value)}
// //                     className="p-3 border rounded-md focus:ring-amber-400"
// //                     required
// //                   >
// //                     <option value="">Month</option>
// //                     {MONTHS.map((month) => (
// //                       <option key={month.value} value={month.value}>
// //                         {month.label}
// //                       </option>
// //                     ))}
// //                   </select>

// //                   {/* Day Dropdown */}
// //                   <select
// //                     value={userInfo.birthDay}
// //                     onChange={(e) => handleDateChange('birthDay', e.target.value)}
// //                     className="p-3 border rounded-md focus:ring-amber-400"
// //                     required
// //                   >
// //                     <option value="">Day</option>
// //                     {DAYS.map((day) => (
// //                       <option key={day} value={day}>
// //                         {day}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>

// //               {/* Birth Time */}
// //               <div className="space-y-2">
// //                 <label className="text-sm font-medium text-gray-700">
// //                   Birth Time
// //                 </label>
// //                 <input
// //                   type="time"
// //                   value={userInfo.birthTime}
// //                   onChange={(e) =>
// //                     setUserInfo({ ...userInfo, birthTime: e.target.value })
// //                   }
// //                   className="w-full p-3 border rounded-md focus:ring-amber-400"
// //                   required
// //                 />
// //               </div>
              
// //               {/* Birth Place with Dropdown and Location Detection */}
// //               <div className="space-y-2">
// //                 <div className="flex items-center gap-2 flex-wrap">
// //                   <label className="text-sm font-medium text-gray-700">
// //                     Birth Place
// //                   </label>
// //                   <div className="flex gap-2">
// //                     <button
// //                       type="button"
// //                       onClick={getCurrentLocation}
// //                       disabled={isGettingLocation}
// //                       className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
// //                     >
// //                       {isGettingLocation ? (
// //                         <Loader2 className="w-3 h-3 animate-spin" />
// //                       ) : (
// //                         <Navigation className="w-3 h-3" />
// //                       )}
// //                       Current Location & Date
// //                     </button>
// //                     {/* <button
// //                       type="button"
// //                       onClick={handleMapSelection}
// //                       className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition"
// //                     >
// //                       <Map className="w-3 h-3" />
// //                       Choose from Map
// //                     </button> */}
// //                   </div>
// //                 </div>
                
// //                 <div className="relative" ref={dropdownRef}>
// //                   <button
// //                     type="button"
// //                     onClick={handleDropdownToggle}
// //                     className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
// //                   >
// //                     <span className={userInfo.birthPlace ? "text-gray-800" : "text-gray-500"}>
// //                       {userInfo.birthPlace || "Select your birth place"}
// //                     </span>
// //                     <ChevronDown className={`w-4 h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
// //                   </button>
                  
// //                   {isLocationDropdownOpen && (
// //                     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-hidden">
// //                       {/* Search Input */}
// //                       <div className="p-2 border-b">
// //                         <div className="relative">
// //                           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
// //                           <input
// //                             type="text"
// //                             placeholder="Type 2+ letters to search real locations..."
// //                             value={searchQuery}
// //                             onChange={handleSearchChange}
// //                             className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
// //                             onClick={(e) => e.stopPropagation()}
// //                           />
// //                         </div>
// //                       </div>
                      
// //                       {/* Locations List */}
// //                       <div className="max-h-48 overflow-y-auto">
// //                         {isSearching ? (
// //                           <div className="px-4 py-3 text-center text-gray-500">
// //                             <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
// //                             Searching real locations...
// //                           </div>
// //                         ) : filteredLocations.length > 0 ? (
// //                           filteredLocations.map((location) => (
// //                             <button
// //                               key={location}
// //                               type="button"
// //                               onClick={() => handleLocationSelect(location)}
// //                               className="w-full px-4 py-2 text-left hover:bg-amber-50 focus:bg-amber-50 focus:outline-none border-b border-gray-100 last:border-b-0"
// //                             >
// //                               {location}
// //                             </button>
// //                           ))
// //                         ) : searchQuery.length > 0 ? (
// //                           <div className="px-4 py-3 text-center text-gray-500">
// //                             {searchQuery.length < 2 ? "Type at least 2 characters" : "No locations found"}
// //                           </div>
// //                         ) : (
// //                           <div className="px-4 py-3 text-center text-gray-500">
// //                             Start typing to search real locations from Google Maps
// //                           </div>
// //                         )}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
                
// //                 {locationError && (
// //                   <p className="text-red-500 text-sm flex items-center gap-1">
// //                     <MapPin className="w-4 h-4" />
// //                     {locationError}
// //                   </p>
// //                 )}
                
// //                 {userInfo.birthPlace && !locationError && (
// //                   <p className="text-green-600 text-sm flex items-center gap-1">
// //                     <MapPin className="w-4 h-4" />
// //                     Location selected: {userInfo.birthPlace}
// //                   </p>
// //                 )}
// //               </div>

// //               {/* Category */}
// //               <select
// //                 value={userInfo.selectedCategory}
// //                 onChange={(e) =>
// //                   setUserInfo({ ...userInfo, selectedCategory: e.target.value })
// //                 }
// //                 className="w-full p-3 border rounded-md focus:ring-amber-400"
// //                 required
// //               >
// //                 <option value="">Select Category</option>
// //                 {CATEGORIES.map((category) => (
// //                   <option key={category} value={category}>
// //                     {category}
// //                   </option>
// //                 ))}
// //               </select>
              
// //               <button
// //                 type="submit"
// //                 className="w-full bg-amber-500 text-white py-3 rounded-md font-semibold hover:bg-amber-600 transition-all"
// //               >
// //                 Continue to Chat
// //               </button>
// //             </form>
// //           </div>
// //         ) : (
// //           // ===== Chat Section =====
// //           <div className="w-full max-w-3xl">
// //             <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
// //               {chats.length > 0 ? (
// //                 <>
// //                   {chats.map((chat, idx) => {
// //                     const isUser = Boolean(chat?.question);
// //                     let displayQuestion = "";
// //                     if (isUser && typeof chat.question === "string") {
// //                       if (chat.question.includes("User Question:")) {
// //                         displayQuestion = chat.question.split("User Question:").pop().trim();
// //                       } else {
// //                         displayQuestion = chat.question.replace(/User Info:\s*.*$/s, "").trim() || chat.question;
// //                       }
// //                     }

// //                     return (
// //                       <div
// //                         key={idx}
// //                         className={`flex flex-col space-y-2 mb-4 ${
// //                           isUser ? "text-right" : "text-left"
// //                         }`}
// //                       >
// //                         {isUser && (
// //                           <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block max-w-[75%] ml-auto shadow-sm">
// //                             <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
// //                             <div>{displayQuestion}</div>
// //                           </div>
// //                         )}
// //                         {chat?.answer && (
// //                           <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block max-w-[75%] shadow-sm text-left">
// //                             {chat.answer}
// //                           </div>
// //                         )}
// //                       </div>
// //                     );
// //                   })}
// //                   {/* Show typing indicator when loading */}
// //                   {isLoading && <TypingIndicator />}
// //                 </>
// //               ) : (
// //                 <p className="text-gray-600 text-center mt-24">
// //                   No chats yet. Ask your first question below 👇
// //                 </p>
// //               )}
// //               <div ref={chatEndRef} />
// //             </div>

// //             <div className="flex items-center gap-2">
// //               <input
// //                 type="text"
// //                 value={question}
// //                 onChange={(e) => setQuestion(e.target.value)}
// //                 placeholder="Ask your question..."
// //                 className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
// //                 onKeyPress={(e) => {
// //                   if (e.key === 'Enter' && !e.shiftKey) {
// //                     e.preventDefault();
// //                     handleQuestionSubmit();
// //                   }
// //                 }}
// //               />
// //               <button
// //                 onClick={handleQuestionSubmit}
// //                 disabled={isLoading || !question.trim()}
// //                 className="bg-amber-500 text-white px-4 py-3 rounded-md hover:bg-amber-600 transition disabled:opacity-50 flex items-center justify-center"
// //               >
// //                 {isLoading ? (
// //                   <Loader2 className="w-5 h-5 animate-spin" />
// //                 ) : (
// //                   <Send className="w-5 h-5" />
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default QNA;



// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useRef, useEffect } from "react";
// import useAIStore from "../../stores/useAIStore";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";
// import { Send, Loader2, MapPin, Navigation, ChevronDown, Search, Map, Calendar } from "lucide-react";

// const CATEGORIES = [
//   "Career",
//   "Health",
//   "Marriage",
//   "Finance",
//   "Education",
//   "Relationships",
//   "Travel",
//   "Spirituality",
//   "Property",
//   "Legal",
// ];

// // Months array for dropdown
// const MONTHS = [
//   { value: "01", label: "January" },
//   { value: "02", label: "February" },
//   { value: "03", label: "March" },
//   { value: "04", label: "April" },
//   { value: "05", label: "May" },
//   { value: "06", label: "June" },
//   { value: "07", label: "July" },
//   { value: "08", label: "August" },
//   { value: "09", label: "September" },
//   { value: "10", label: "October" },
//   { value: "11", label: "November" },
//   { value: "12", label: "December" }
// ];

// // Generate years (from 1900 to current year)
// const currentYear = new Date().getFullYear();
// const YEARS = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => (currentYear - i).toString());

// // Generate days (1-31)
// const DAYS = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

// // Use absolute URL for production, relative for development
// const API_BASE_URL = window.location.hostname === 'localhost' 
//   ? 'https://demoastrobackend.onrender.comapi' 
//   : 'https://demoastrobackend.onrender.com/api';

// const QNA = () => {
//   const { fetchChats, chats, sendMessage } = useAIStore();
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     birthYear: "",
//     birthMonth: "",
//     birthDay: "",
//     birthTime: "",
//     birthPlace: "",
//     selectedCategory: "",
//   });
//   const [question, setQuestion] = useState("");
//   const [showForm, setShowForm] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isGettingLocation, setIsGettingLocation] = useState(false);
//   const [locationError, setLocationError] = useState("");
//   const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredLocations, setFilteredLocations] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [showMapOption, setShowMapOption] = useState(false);
//   const chatEndRef = useRef(null);
//   const dropdownRef = useRef(null);
//   const searchTimeoutRef = useRef(null);

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chats]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsLocationDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Fetch locations from Google Places API via Node.js proxy
//   useEffect(() => {
//     if (searchQuery.length < 2) {
//       setFilteredLocations([]);
//       return;
//     }

//     if (searchTimeoutRef.current) {
//       clearTimeout(searchTimeoutRef.current);
//     }

//     searchTimeoutRef.current = setTimeout(async () => {
//       setIsSearching(true);
//       try {
//         const response = await fetch(`${API_BASE_URL}/places-autocomplete`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ input: searchQuery })
//         });
        
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();
        
//         if (data.status === 'OK' && data.predictions) {
//           const locations = data.predictions.map(prediction => prediction.description);
//           setFilteredLocations(locations);
//         } else {
//           setFilteredLocations([]);
//           console.log('API returned no results:', data.status);
//         }
//       } catch (error) {
//         console.error("Error fetching locations:", error);
//         setFilteredLocations([]);
//         setLocationError("Failed to fetch locations. Please try again.");
//       } finally {
//         setIsSearching(false);
//       }
//     }, 300);

//     return () => {
//       if (searchTimeoutRef.current) {
//         clearTimeout(searchTimeoutRef.current);
//       }
//     };
//   }, [searchQuery]);

//   // Function to get current location and current date
//   const getCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       setLocationError("Geolocation is not supported by this browser.");
//       return;
//     }

//     setIsGettingLocation(true);
//     setLocationError("");

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         try {
//           const { latitude, longitude } = position.coords;
          
//           // Get current date
//           const now = new Date();
//           const currentYear = now.getFullYear().toString();
//           const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
//           const currentDay = now.getDate().toString().padStart(2, '0');
//           const currentTime = now.toTimeString().split(' ')[0].substring(0, 5); // HH:MM format

//           // Use Node.js proxy for reverse geocoding
//           const response = await fetch(`${API_BASE_URL}/reverse-geocode`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ latitude, longitude })
//           });
          
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
          
//           const data = await response.json();
          
//           if (data.status === 'OK' && data.results && data.results.length > 0) {
//             const address = data.results[0].formatted_address;
//             setUserInfo(prev => ({
//               ...prev,
//               birthPlace: address,
//               birthYear: currentYear,
//               birthMonth: currentMonth,
//               birthDay: currentDay,
//               birthTime: currentTime
//             }));
//           } else {
//             setLocationError("Could not retrieve address from coordinates.");
//             // Still set the date even if location fails
//             setUserInfo(prev => ({
//               ...prev,
//               birthYear: currentYear,
//               birthMonth: currentMonth,
//               birthDay: currentDay,
//               birthTime: currentTime
//             }));
//           }
//         } catch (error) {
//           console.error("Error getting location:", error);
//           setLocationError("Failed to get location. Please search manually.");
//           // Still set the current date even if location fails
//           const now = new Date();
//           const currentYear = now.getFullYear().toString();
//           const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
//           const currentDay = now.getDate().toString().padStart(2, '0');
//           const currentTime = now.toTimeString().split(' ')[0].substring(0, 5);
          
//           setUserInfo(prev => ({
//             ...prev,
//             birthYear: currentYear,
//             birthMonth: currentMonth,
//             birthDay: currentDay,
//             birthTime: currentTime
//           }));
//         } finally {
//           setIsGettingLocation(false);
//         }
//       },
//       (error) => {
//         setIsGettingLocation(false);
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             setLocationError("Location access denied. Please search manually.");
//             break;
//           case error.POSITION_UNAVAILABLE:
//             setLocationError("Location information unavailable.");
//             break;
//           case error.TIMEOUT:
//             setLocationError("Location request timed out.");
//             break;
//           default:
//             setLocationError("An unknown error occurred.");
//             break;
//         }
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 60000
//       }
//     );
//   };

//   // Function to handle map selection
//   const handleMapSelection = () => {
//     setShowMapOption(true);
//     alert("Map selection feature would open here. For now, please use search or current location.");
//     setUserInfo(prev => ({
//       ...prev,
//       birthPlace: "Selected from map (feature to be implemented)"
//     }));
//     setShowMapOption(false);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (
//       !userInfo.name ||
//       !userInfo.birthYear ||
//       !userInfo.birthMonth ||
//       !userInfo.birthDay ||
//       !userInfo.birthTime ||
//       !userInfo.birthPlace ||
//       !userInfo.selectedCategory
//     ) {
//       alert("Please fill all fields before continuing.");
//       return;
//     }
//     setShowForm(false);
//   };

//   const handleQuestionSubmit = async () => {
//     if (!question.trim() || isLoading) return;

//     setIsLoading(true);
//     try {
//       // Format the birth date from separate fields
//       const birthDate = `${userInfo.birthYear}-${userInfo.birthMonth}-${userInfo.birthDay}`;
      
//       const context = `User Info:
//       Name: ${userInfo.name}
//       Birth Date: ${birthDate}
//       Birth Time: ${userInfo.birthTime}
//       Birth Place: ${userInfo.birthPlace}
//       Category: ${userInfo.selectedCategory}`;

//       const response = await sendMessage({
//         question: `${context}\n\nUser Question: ${question}`,
//       });

//       if (!response?.success) {
//         alert(response?.message || "Failed to send message");
//       }
      
//       // Clear input in all cases
//       setQuestion("");
      
//     } catch (error) {
//       console.error("Error sending message:", error);
//       // Also clear input on error
//       setQuestion("");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLocationSelect = (location) => {
//     setUserInfo(prev => ({
//       ...prev,
//       birthPlace: location
//     }));
//     setIsLocationDropdownOpen(false);
//     setSearchQuery("");
//     setLocationError("");
//   };

//   const handleDropdownToggle = () => {
//     setIsLocationDropdownOpen(!isLocationDropdownOpen);
//     setSearchQuery("");
//     setFilteredLocations([]);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Handle individual date field changes
//   const handleDateChange = (field, value) => {
//     setUserInfo(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Typing indicator component
//   const TypingIndicator = () => (
//     <div className="flex flex-col space-y-2 mb-4 text-left">
//       <div className=" text-black rounded-2xl inline-block ">
//         <div className="flex items-center space-x-2">
//           <span className="text-sm font-bold">Typing</span>
//           <div className="flex space-x-1">
//             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
//       <Header />

//       <main className=" flex flex-col items-center px-4 py-8 bg-gray-50">
//         {showForm ? (
//           // ===== User Info Form =====
//           <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
//             <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
//               Fill Your Birth Details
//             </h2>
//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               {/* Name Field */}
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={userInfo.name}
//                 onChange={(e) =>
//                   setUserInfo({ ...userInfo, name: e.target.value })
//                 }
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
//                 required
//               />
              
//               {/* Birth Date Fields - Split into 3 */}
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                   <Calendar className="w-4 h-4" />
//                   Birth Date
//                 </label>
//                 <div className="grid grid-cols-3 gap-3">
//                   {/* Year Dropdown */}
//                   <select
//                     value={userInfo.birthYear}
//                     onChange={(e) => handleDateChange('birthYear', e.target.value)}
//                     className="p-3 border rounded-md focus:ring-amber-400"
//                     required
//                   >
//                     <option value="">Year</option>
//                     {YEARS.map((year) => (
//                       <option key={year} value={year}>
//                         {year}
//                       </option>
//                     ))}
//                   </select>

//                   {/* Month Dropdown */}
//                   <select
//                     value={userInfo.birthMonth}
//                     onChange={(e) => handleDateChange('birthMonth', e.target.value)}
//                     className="p-3 border rounded-md focus:ring-amber-400"
//                     required
//                   >
//                     <option value="">Month</option>
//                     {MONTHS.map((month) => (
//                       <option key={month.value} value={month.value}>
//                         {month.label}
//                       </option>
//                     ))}
//                   </select>

//                   {/* Day Dropdown */}
//                   <select
//                     value={userInfo.birthDay}
//                     onChange={(e) => handleDateChange('birthDay', e.target.value)}
//                     className="p-3 border rounded-md focus:ring-amber-400"
//                     required
//                   >
//                     <option value="">Day</option>
//                     {DAYS.map((day) => (
//                       <option key={day} value={day}>
//                         {day}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Birth Time */}
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">
//                   Birth Time
//                 </label>
//                 <input
//                   type="time"
//                   value={userInfo.birthTime}
//                   onChange={(e) =>
//                     setUserInfo({ ...userInfo, birthTime: e.target.value })
//                   }
//                   className="w-full p-3 border rounded-md focus:ring-amber-400"
//                   required
//                 />
//               </div>
              
//               {/* Birth Place with Dropdown and Location Detection */}
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <label className="text-sm font-medium text-gray-700">
//                     Birth Place
//                   </label>
//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={getCurrentLocation}
//                       disabled={isGettingLocation}
//                       className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
//                     >
//                       {isGettingLocation ? (
//                         <Loader2 className="w-3 h-3 animate-spin" />
//                       ) : (
//                         <Navigation className="w-3 h-3" />
//                       )}
//                       Current Location & Date
//                     </button>
//                     {/* <button
//                       type="button"
//                       onClick={handleMapSelection}
//                       className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition"
//                     >
//                       <Map className="w-3 h-3" />
//                       Choose from Map
//                     </button> */}
//                   </div>
//                 </div>
                
//                 <div className="relative" ref={dropdownRef}>
//                   <button
//                     type="button"
//                     onClick={handleDropdownToggle}
//                     className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
//                   >
//                     <span className={userInfo.birthPlace ? "text-gray-800" : "text-gray-500"}>
//                       {userInfo.birthPlace || "Select your birth place"}
//                     </span>
//                     <ChevronDown className={`w-4 h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
//                   </button>
                  
//                   {isLocationDropdownOpen && (
//                     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-hidden">
//                       {/* Search Input */}
//                       <div className="p-2 border-b">
//                         <div className="relative">
//                           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                           <input
//                             type="text"
//                             placeholder="Type 2+ letters to search real locations..."
//                             value={searchQuery}
//                             onChange={handleSearchChange}
//                             className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
//                             onClick={(e) => e.stopPropagation()}
//                           />
//                         </div>
//                       </div>
                      
//                       {/* Locations List */}
//                       <div className="max-h-48 overflow-y-auto">
//                         {isSearching ? (
//                           <div className="px-4 py-3 text-center text-gray-500">
//                             <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
//                             Searching real locations...
//                           </div>
//                         ) : filteredLocations.length > 0 ? (
//                           filteredLocations.map((location) => (
//                             <button
//                               key={location}
//                               type="button"
//                               onClick={() => handleLocationSelect(location)}
//                               className="w-full px-4 py-2 text-left hover:bg-amber-50 focus:bg-amber-50 focus:outline-none border-b border-gray-100 last:border-b-0"
//                             >
//                               {location}
//                             </button>
//                           ))
//                         ) : searchQuery.length > 0 ? (
//                           <div className="px-4 py-3 text-center text-gray-500">
//                             {searchQuery.length < 2 ? "Type at least 2 characters" : "No locations found"}
//                           </div>
//                         ) : (
//                           <div className="px-4 py-3 text-center text-gray-500">
//                             Start typing to search real locations from Google Maps
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
                
//                 {locationError && (
//                   <p className="text-red-500 text-sm flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     {locationError}
//                   </p>
//                 )}
                
//                 {userInfo.birthPlace && !locationError && (
//                   <p className="text-green-600 text-sm flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     Location selected: {userInfo.birthPlace}
//                   </p>
//                 )}
//               </div>

//               {/* Category */}
//               <select
//                 value={userInfo.selectedCategory}
//                 onChange={(e) =>
//                   setUserInfo({ ...userInfo, selectedCategory: e.target.value })
//                 }
//                 className="w-full p-3 border rounded-md focus:ring-amber-400"
//                 required
//               >
//                 <option value="">Select Category</option>
//                 {CATEGORIES.map((category) => (
//                   <option key={category} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
              
//               <button
//                 type="submit"
//                 className="w-full bg-amber-500 text-white py-3 rounded-md font-semibold hover:bg-amber-600 transition-all"
//               >
//                 Continue to Chat
//               </button>
//             </form>
//           </div>
//         ) : (
//           // ===== Chat Section =====
//           <div className="w-full max-w-3xl">
//             <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
//               {chats.length > 0 ? (
//                 <>
//                   {chats.map((chat, idx) => {
//                     const isUser = Boolean(chat?.question);
//                     let displayQuestion = "";
//                     if (isUser && typeof chat.question === "string") {
//                       if (chat.question.includes("User Question:")) {
//                         displayQuestion = chat.question.split("User Question:").pop().trim();
//                       } else {
//                         displayQuestion = chat.question.replace(/User Info:\s*.*$/s, "").trim() || chat.question;
//                       }
//                     }

//                     return (
//                       <div
//                         key={idx}
//                         className={`flex flex-col space-y-2 mb-4 ${
//                           isUser ? "text-right" : "text-left"
//                         }`}
//                       >
//                         {isUser && (
//                           <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block max-w-[75%] ml-auto shadow-sm">
//                             <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
//                             <div>{displayQuestion}</div>
//                           </div>
//                         )}
//                         {chat?.answer && (
//                           <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block max-w-[75%] shadow-sm text-left">
//                             {chat.answer}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                   {/* Show typing indicator when loading */}
//                   {isLoading && <TypingIndicator />}
//                 </>
//               ) : (
//                 <p className="text-gray-600 text-center mt-24">
//                   No chats yet. Ask your first question below 👇
//                 </p>
//               )}
//               <div ref={chatEndRef} />
//             </div>

//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 placeholder="Ask your question..."
//                 className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
//                 onKeyPress={(e) => {
//                   if (e.key === 'Enter' && !e.shiftKey) {
//                     e.preventDefault();
//                     handleQuestionSubmit();
//                   }
//                 }}
//               />
//               <button
//                 onClick={handleQuestionSubmit}
//                 disabled={isLoading || !question.trim()}
//                 className="bg-amber-500 text-white px-4 py-3 rounded-md hover:bg-amber-600 transition disabled:opacity-50 flex items-center justify-center"
//               >
//                 {isLoading ? (
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                 ) : (
//                   <Send className="w-5 h-5" />
//                 )}
//               </button>
//             </div>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default QNA;






/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
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
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'https://demoastrobackend.onrender.com/api' 
  : 'https://demoastrobackend.onrender.com/api';

const QNA = () => {
  const { fetchChats, chats, sendMessage } = useAIStore();
  const [userInfo, setUserInfo] = useState({
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    birthTime: "",
    birthPlace: "",
    selectedCategory: "",
  });
  const [question, setQuestion] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showMapOption, setShowMapOption] = useState(false);
  const chatEndRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchTimeoutRef = useRef(null);

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

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
            setUserInfo(prev => ({
              ...prev,
              birthPlace: address,
              birthYear: currentYear,
              birthMonth: currentMonth,
              birthDay: currentDay,
              birthTime: currentTime
            }));
          } else {
            setLocationError("Could not retrieve address from coordinates.");
            // Still set the date even if location fails
            setUserInfo(prev => ({
              ...prev,
              birthYear: currentYear,
              birthMonth: currentMonth,
              birthDay: currentDay,
              birthTime: currentTime
            }));
          }
        } catch (error) {
          console.error("Error getting location:", error);
          setLocationError("Failed to get location. Please search manually.");
          // Still set the current date even if location fails
          const now = new Date();
          const currentYear = now.getFullYear().toString();
          const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
          const currentDay = now.getDate().toString().padStart(2, '0');
          const currentTime = now.toTimeString().split(' ')[0].substring(0, 5);
          
          setUserInfo(prev => ({
            ...prev,
            birthYear: currentYear,
            birthMonth: currentMonth,
            birthDay: currentDay,
            birthTime: currentTime
          }));
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
            // setLocationError("An unknown error occurred.");
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
    alert("Map selection feature would open here. For now, please use search or current location.");
    setUserInfo(prev => ({
      ...prev,
      birthPlace: "Selected from map (feature to be implemented)"
    }));
    setShowMapOption(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !userInfo.name ||
      !userInfo.birthYear ||
      !userInfo.birthMonth ||
      !userInfo.birthDay ||
      !userInfo.birthTime ||
      !userInfo.birthPlace ||
      !userInfo.selectedCategory
    ) {
      alert("Please fill all fields before continuing.");
      return;
    }
    setShowForm(false);
  };

  const handleQuestionSubmit = async () => {
    if (!question.trim() || isLoading) return;

    // Store the question and clear input immediately
    const currentQuestion = question.trim();
    setQuestion(""); // Clear input immediately
    setIsLoading(true);
    
    try {
      // Format the birth date from separate fields
      const birthDate = `${userInfo.birthYear}-${userInfo.birthMonth}-${userInfo.birthDay}`;
      
      const context = `User Info:
      Name: ${userInfo.name}
      Birth Date: ${birthDate}
      Birth Time: ${userInfo.birthTime}
      Birth Place: ${userInfo.birthPlace}
      Category: ${userInfo.selectedCategory}`;

      const response = await sendMessage({
        question: `${context}\n\nUser Question: ${currentQuestion}`,
      });

      if (!response?.success) {
        alert(response?.message || "Failed to send message");
      }
      
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocationSelect = (location) => {
    setUserInfo(prev => ({
      ...prev,
      birthPlace: location
    }));
    setIsLocationDropdownOpen(false);
    setSearchQuery("");
    setLocationError("");
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
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Typing indicator component
  const TypingIndicator = () => (
    <div className="flex flex-col space-y-2 mb-4 text-left">
      <div className=" text-black rounded-2xl inline-block ">
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
                value={userInfo.name}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
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
                    value={userInfo.birthYear}
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
                    value={userInfo.birthMonth}
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
                    value={userInfo.birthDay}
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
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Birth Time
                </label>
                <input
                  type="time"
                  value={userInfo.birthTime}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, birthTime: e.target.value })
                  }
                  className="w-full p-3 border rounded-md focus:ring-amber-400"
                  required
                />
              </div>
              
              {/* Birth Place with Dropdown and Location Detection */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <label className="text-sm font-medium text-gray-700">
                    Birth Place
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
                      Current Location & Date
                    </button>
                    {/* <button
                      type="button"
                      onClick={handleMapSelection}
                      className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition"
                    >
                      <Map className="w-3 h-3" />
                      Choose from Map
                    </button> */}
                  </div>
                </div>
                
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={handleDropdownToggle}
                    className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
                  >
                    <span className={userInfo.birthPlace ? "text-gray-800" : "text-gray-500"}>
                      {userInfo.birthPlace || "Select your birth place"}
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
                
                {locationError && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {locationError}
                  </p>
                )}
                
                {userInfo.birthPlace && !locationError && (
                  <p className="text-green-600 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Location selected: {userInfo.birthPlace}
                  </p>
                )}
              </div>

              {/* Category */}
              <select
                value={userInfo.selectedCategory}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, selectedCategory: e.target.value })
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
          // ===== Chat Section =====
          <div className="w-full max-w-3xl">
            <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
              {chats.length > 0 ? (
                <>
                  {chats.map((chat, idx) => {
                    const isUser = Boolean(chat?.question);
                    let displayQuestion = "";
                    if (isUser && typeof chat.question === "string") {
                      if (chat.question.includes("User Question:")) {
                        displayQuestion = chat.question.split("User Question:").pop().trim();
                      } else {
                        displayQuestion = chat.question.replace(/User Info:\s*.*$/s, "").trim() || chat.question;
                      }
                    }

                    return (
                      <div
                        key={idx}
                        className={`flex flex-col space-y-2 mb-4 ${
                          isUser ? "text-right" : "text-left"
                        }`}
                      >
                        {isUser && (
                          <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block max-w-[75%] ml-auto shadow-sm">
                            <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
                            <div>{displayQuestion}</div>
                          </div>
                        )}
                        {chat?.answer && (
                          <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block max-w-[75%] shadow-sm text-left">
                            {chat.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {/* Show typing indicator when loading */}
                  {isLoading && <TypingIndicator />}
                </>
              ) : (
                <p className="text-gray-600 text-center mt-24">
                  No chats yet. Ask your first question below 👇
                </p>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your question..."
                className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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