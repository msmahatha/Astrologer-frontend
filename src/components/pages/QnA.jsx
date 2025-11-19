// // /* eslint-disable react-hooks/exhaustive-deps */
// // import React, { useEffect, useState, useRef } from "react";
// // import Footer from "../layout/Footer";
// // import Header from "../layout/Header";
// // import { Mic, Send, Settings, Loader2 } from "lucide-react";
// // import useAIStore from "../../stores/useAIStore";

// // const QNA = () => {
// //   const { fetchChats, chats, sendMessage } = useAIStore();
// //   const [field, setField] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const chatEndRef = useRef(null);

// //   useEffect(() => {
// //     fetchChats();
// //   }, []);

// //   useEffect(() => {
// //     if (chatEndRef.current) {
// //       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
// //     }
// //   }, [chats]);

// //   const handleSubmit = async () => {
// //     if (field.trim() === "" || isLoading) return;

// //     setIsLoading(true);
// //     const response = await sendMessage({ question: field });

// //     if (response && !response.success) {
// //       alert(response.message || "Failed to send message");
// //     } else {
// //       setField("");
// //     }
// //     setIsLoading(false);
// //   };

// //   return (
// //     <div className="min-h-screen font-sans flex flex-col">
// //       <Header />

// //       <main
// //         style={{
// //           backgroundImage: 'url("/Wheel2-1.png")',
// //           backgroundSize: "",
// //           backgroundPosition: "top left",
// //           backgroundRepeat: "no-repeat",
// //         }}
// //         className="flex-grow flex flex-col items-center px-4 py-8 bg-gray-50"
// //       >
// //         {chats.length > 0 ? (
// //           <>
// //             {/* Chat header */}
// //             <div className="w-full max-w-2xl bg-white rounded-t-xl shadow-md shadow-amber-200 flex items-center gap-3 p-3 border-b border-gray-100 sticky top-0 z-10">
// //               <img
// //                 src="/chat-logo.png"
// //                 alt="Astro AI"
// //                 className="w-10 h-10 rounded-full border border-amber-300 object-cover"
// //               />
// //               <div className="flex flex-col items-start">
// //                 <h2 className="text-gray-800 font-semibold text-base">
// //                   AI Astrologer
// //                 </h2>
// //               </div>
// //             </div>

// //             {/* Chat messages */}
// //             <div className="w-full max-w-2xl bg-white/30 backdrop-blur-md rounded-b-xl shadow-2xl p-4 flex flex-col space-y-4 overflow-y-auto max-h-[65vh] border border-amber-100">
// //               {chats.map((chat) => (
// //                 <div key={chat?._id} className="flex flex-col space-y-2">
// //                   <div className="flex justify-end">
// //                     <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl max-w-[75%] shadow-sm">
// //                       {chat?.question}
// //                     </div>
// //                   </div>

// //                   <div className="flex justify-start">
// //                     <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl max-w-[75%] shadow-sm">
// //                       {chat?.answer}
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //               <div ref={chatEndRef} />
// //             </div>

// //             {/* Input area */}
// //             <div className="w-full max-w-2xl flex items-center justify-between bg-amber-100 rounded-lg px-4 py-3 shadow-md mt-6">
// //               <textarea
// //                 rows="2"
// //                 placeholder="Ask a new question..."
// //                 value={field}
// //                 onChange={(e) => setField(e.target.value)}
// //                 className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 resize-none text-sm sm:text-base mr-3"
// //               />

// //               <div className="flex items-center gap-3 text-gray-600">
// //                 {isLoading ? (
// //                   <Loader2 className="w-5 h-5 text-amber-600 animate-spin" />
// //                 ) : (
// //                   <Send
// //                     onClick={handleSubmit}
// //                     className="w-5 h-5 cursor-pointer hover:text-amber-600 transition"
// //                   />
// //                 )}
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           // Empty state
// //           <>
// //             <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-amber-600 mb-2">
// //               Get your questions answered by AI
// //             </h1>
// //             <p className="text-gray-600 text-sm sm:text-base mb-6">
// //               Your first chat is on us!
// //             </p>

// //             <div className="flex flex-wrap gap-3 justify-center mb-8">
// //               {[
// //                 "Career",
// //                 "Health",
// //                 "Relationship",
// //                 "Marriage",
// //                 "Business",
// //                 "Professional",
// //               ].map((category) => (
// //                 <button
// //                   key={category}
// //                   className="px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full bg-amber-50 hover:bg-amber-100 text-gray-700 shadow-sm transition-colors"
// //                 >
// //                   {category}
// //                 </button>
// //               ))}
// //             </div>

// //             <div className="w-full max-w-2xl flex items-center justify-between bg-amber-100 rounded-lg px-4 py-3 shadow-md mt-6">
// //               <textarea
// //                 rows="2"
// //                 placeholder="Ask a new question..."
// //                 value={field}
// //                 onChange={(e) => setField(e.target.value)}
// //                 className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 resize-none text-sm sm:text-base mr-3"
// //               />

// //               <div className="flex items-center gap-3 text-gray-600">
// //                 {isLoading ? (
// //                   <Loader2 className="w-5 h-5 text-amber-600 animate-spin" />
// //                 ) : (
// //                   <Send
// //                     onClick={handleSubmit}
// //                     className="w-5 h-5 cursor-pointer hover:text-amber-600 transition"
// //                   />
// //                 )}
// //               </div>
// //             </div>
// //           </>
// //         )}
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default QNA;


// // import React, { useState, useRef, useEffect } from 'react';
// // import useAIStore from '../../stores/useAIStore';
// // import Header from '../layout/Header';
// // import Footer from '../layout/Footer';

// // const CATEGORIES = [
// //   'Career', 'Health', 'Marriage', 'Finance', 'Education',
// //   'Relationships', 'Travel', 'Spirituality', 'Property', 'Legal'
// // ];

// // const QNA = () => {
// //   const { fetchChats, chats, sendMessage } = useAIStore();
// //   const [userInfo, setUserInfo] = useState({
// //     name: '',
// //     birthDate: '',
// //     birthTime: '',
// //     birthPlace: '',
// //     selectedCategory: ''
// //   });
// //   const [question, setQuestion] = useState('');
// //   const [showForm, setShowForm] = useState(true);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const chatEndRef = useRef(null);

// //   useEffect(() => {
// //     fetchChats();
// //   }, []);

// //   useEffect(() => {
// //     chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   }, [chats]);

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     setShowForm(false);
// //   };

// //   const handleQuestionSubmit = async () => {
// //     if (!question.trim() || isLoading) return;

// //     setIsLoading(true);
// //     try {
// //       const context = `User Info: Name: ${userInfo.name}, Birth Date: ${userInfo.birthDate}, 
// //                       Birth Time: ${userInfo.birthTime}, Birth Place: ${userInfo.birthPlace}, 
// //                       Category: ${userInfo.selectedCategory}`;
      
// //       await sendMessage(question, context);
// //       setQuestion('');
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4">
// //       <Header/>
// //       {showForm ? (
// //         <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
// //           <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
// //           <form onSubmit={handleFormSubmit} className="space-y-4">
// //             <input
// //               type="text"
// //               placeholder="Your Name"
// //               value={userInfo.name}
// //               onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
// //               className="w-full p-2 border rounded"
// //               required
// //             />
// //             <input
// //               type="date"
// //               value={userInfo.birthDate}
// //               onChange={(e) => setUserInfo({...userInfo, birthDate: e.target.value})}
// //               className="w-full p-2 border rounded"
// //               required
// //             />
// //             <input
// //               type="time"
// //               value={userInfo.birthTime}
// //               onChange={(e) => setUserInfo({...userInfo, birthTime: e.target.value})}
// //               className="w-full p-2 border rounded"
// //               required
// //             />
// //             <input
// //               type="text"
// //               placeholder="Birth Place"
// //               value={userInfo.birthPlace}
// //               onChange={(e) => setUserInfo({...userInfo, birthPlace: e.target.value})}
// //               className="w-full p-2 border rounded"
// //               required
// //             />
// //             <select
// //               value={userInfo.selectedCategory}
// //               onChange={(e) => setUserInfo({...userInfo, selectedCategory: e.target.value})}
// //               className="w-full p-2 border rounded"
// //               required
// //             >
// //               <option value="">Select Category</option>
// //               {CATEGORIES.map(category => (
// //                 <option key={category} value={category}>{category}</option>
// //               ))}
// //             </select>
// //             <button
// //               type="submit"
// //               className="w-full bg-amber-500 text-white p-2 rounded hover:bg-amber-600"
// //             >
// //               Continue to Chat
// //             </button>
// //           </form>
// //         </div>
// //       ) : (
// //         <div className="max-w-4xl mx-auto">
// //           <div className="bg-white rounded-lg shadow mb-4 p-4 h-[600px] overflow-y-auto">
// //             {chats.map((chat, idx) => (
// //               <div key={idx} className={`mb-4 ${chat.role === 'user' ? 'text-right' : 'text-left'}`}>
// //                 <div className={`inline-block p-3 rounded-lg ${
// //                   chat.role === 'user' ? 'bg-amber-100' : 'bg-gray-100'
// //                 }`}>
// //                   {chat.content}
// //                 </div>
// //               </div>
// //             ))}
// //             <div ref={chatEndRef} />
// //           </div>
          
// //           <div className="flex gap-2">
// //             <input
// //               type="text"
// //               value={question}
// //               onChange={(e) => setQuestion(e.target.value)}
// //               placeholder="Ask your question..."
// //               className="flex-1 p-2 border rounded"
// //             />
// //             <button
// //               onClick={handleQuestionSubmit}
// //               disabled={isLoading || !question.trim()}
// //               className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 disabled:opacity-50"
// //             >
// //               {isLoading ? 'Sending...' : 'Send'}
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //       <Footer/>
// //     </div>
// //   );
// // };

// // export default QNA;


// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useRef, useEffect } from "react";
// import useAIStore from "../../stores/useAIStore";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";
// import { Send, Loader2 } from "lucide-react";

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

// const QNA = () => {
//   const { fetchChats, chats, sendMessage } = useAIStore();
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     birthDate: "",
//     birthTime: "",
//     birthPlace: "",
//     selectedCategory: "",
//   });
//   const [question, setQuestion] = useState("");
//   const [showForm, setShowForm] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chats]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Proceed only if all required fields are filled
//     if (
//       !userInfo.name ||
//       !userInfo.birthDate ||
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
//       const context = `User Info:
//       Name: ${userInfo.name}
//       Birth Date: ${userInfo.birthDate}
//       Birth Time: ${userInfo.birthTime}
//       Birth Place: ${userInfo.birthPlace}
//       Category: ${userInfo.selectedCategory}`;

//       const response = await sendMessage({
//         question: `${context}\n\nUser Question: ${question}`,
//       });

//       if (!response?.success) {
//         alert(response?.message || "Failed to send message");
//       } else {
//         setQuestion("");
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
//       <Header />

//       <main className="flex-grow flex flex-col items-center px-4 py-8 bg-gray-50">
//         {showForm ? (
//           // ===== User Info Form =====
//           <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
//             <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
//               Fill Your Birth Details
//             </h2>
//             <form onSubmit={handleFormSubmit} className="space-y-4">
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
//               <div className="flex gap-3">
//                 <input
//                   type="date"
//                   value={userInfo.birthDate}
//                   onChange={(e) =>
//                     setUserInfo({ ...userInfo, birthDate: e.target.value })
//                   }
//                   className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
//                   required
//                 />
//                 <input
//                   type="time"
//                   value={userInfo.birthTime}
//                   onChange={(e) =>
//                     setUserInfo({ ...userInfo, birthTime: e.target.value })
//                   }
//                   className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
//                   required
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Birth Place"
//                 value={userInfo.birthPlace}
//                 onChange={(e) =>
//                   setUserInfo({ ...userInfo, birthPlace: e.target.value })
//                 }
//                 className="w-full p-3 border rounded-md focus:ring-amber-400"
//                 required
//               />
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
//                 chats.map((chat, idx) => (
//                   <div
//                     key={idx}
//                     className={`flex flex-col space-y-2 mb-4 ${
//                       chat?.question ? "text-right" : "text-left"
//                     }`}
//                   >
//                     {chat?.question && (
//                       <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block max-w-[75%] ml-auto shadow-sm">
//                         {chat.question}
//                       </div>
//                     )}
//                     {chat?.answer && (
//                       <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block max-w-[75%] shadow-sm">
//                         {chat.answer}
//                       </div>
//                     )}
//                   </div>
//                 ))
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
//   ? 'http://localhost:5000/api' 
//   : 'http://localhost:5000/api';

// const QNA = () => {
//   const { 
//     fetchChats, 
//     chats, 
//     sendMessage, 
//     userInfo: storedUserInfo, 
//     setUserInfo: storeUserInfo,
//     hasShownIntro,
//     setHasShownIntro
//   } = useAIStore();
  
//   const [localUserInfo, setLocalUserInfo] = useState({
//     name: "",
//     birthYear: "",
//     birthMonth: "",
//     birthDay: "",
//     birthTime: "",
//     currentLocation: "",
//     selectedLocation: "",
//     selectedCategory: "",
//   });
  
//   const [question, setQuestion] = useState("");
//   const [showForm, setShowForm] = useState(!storedUserInfo);
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

//   // Fetch chats when component mounts and show latest messages
//   useEffect(() => {
//     fetchChats();
//   }, []);

//   // Scroll to bottom when chats change
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
//             setLocalUserInfo(prev => ({
//               ...prev,
//               currentLocation: address,
//             }));
//           } else {
//             setLocationError("Could not retrieve address from coordinates.");
//           }
//         } catch (error) {
//           console.error("Error getting location:", error);
//           setLocationError("Failed to get location. Please search manually.");
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
//     alert("Map selection feature would open here.");
//     setLocalUserInfo(prev => ({
//       ...prev,
//       selectedLocation: "selection feature would open here"
//     }));
//     setShowMapOption(false);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (
//       !localUserInfo.name ||
//       !localUserInfo.birthYear ||
//       !localUserInfo.birthMonth ||
//       !localUserInfo.birthDay ||
//       !localUserInfo.birthTime ||
//       !localUserInfo.selectedLocation ||
//       !localUserInfo.selectedCategory
//     ) {
//       alert("Please fill all fields before continuing.");
//       return;
//     }
    
//     // Format birth date and store user info
//     const birthDate = `${localUserInfo.birthYear}-${localUserInfo.birthMonth}-${localUserInfo.birthDay}`;
//     const userInfoToStore = {
//       ...localUserInfo,
//       birthDate: birthDate,
//       displayBirthDate: `${localUserInfo.birthDay} ${getMonthName(localUserInfo.birthMonth)} ${localUserInfo.birthYear}`
//     };
    
//     // Store user info in the global store
//     storeUserInfo(userInfoToStore);
//     setShowForm(false);
//   };

//   // Updated handleQuestionSubmit with proper functionality
//   const handleQuestionSubmit = async () => {
//     if (!question.trim() || isLoading) return;

//     setIsLoading(true);
//     try {
//       // Get user info from store
//       const { userInfo: storedUserInfo, hasShownIntro } = useAIStore.getState();
      
//       // Prepare context with user info (similar to first code)
//       const context = `User Info:
//       Name: ${storedUserInfo.name}
//       Birth Date: ${storedUserInfo.displayBirthDate}
//       Birth Time: ${storedUserInfo.birthTime}
//       Birth Place: ${storedUserInfo.selectedLocation}
//       Category: ${storedUserInfo.selectedCategory}`;

//       // Combine context with user question
//       const fullQuestion = `${context}\n\nUser Question: ${question}`;

//       const response = await sendMessage({
//         question: fullQuestion,
//       });

//       if (!response?.success) {
//         alert(response?.message || "Failed to send message");
//       } else {
//         setQuestion("");
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLocationSelect = (location) => {
//     setLocalUserInfo(prev => ({
//       ...prev,
//       selectedLocation: location
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
//     setLocalUserInfo(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Format month name from month number
//   const getMonthName = (monthValue) => {
//     const month = MONTHS.find(m => m.value === monthValue);
//     return month ? month.label : monthValue;
//   };

//   // Format time for display (convert 24h to 12h format)
//   const formatTimeForDisplay = (timeString) => {
//     if (!timeString) return '';
    
//     const [hours, minutes] = timeString.split(':');
//     const hour = parseInt(hours);
//     const ampm = hour >= 12 ? 'PM' : 'AM';
//     const displayHour = hour % 12 || 12;
    
//     return `${displayHour}:${minutes} ${ampm}`;
//   };

//   // Typing indicator component
//   const TypingIndicator = () => (
//     <div className="flex flex-col text-left">
//       <div className="text-black inline-block">
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

//       <main className="flex flex-col items-center px-4 py-8 bg-gray-50">
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
//                 value={localUserInfo.name}
//                 onChange={(e) =>
//                   setLocalUserInfo({ ...localUserInfo, name: e.target.value })
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
//                     value={localUserInfo.birthYear}
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
//                     value={localUserInfo.birthMonth}
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
//                     value={localUserInfo.birthDay}
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
//               <div className="space-y-2 ">
//                 <label className="text-sm font-medium text-gray-700">
//                   Birth Time
//                 </label>
//                 <input
//                   type="time"
//                   value={localUserInfo.birthTime}
//                   onChange={(e) =>
//                     setLocalUserInfo({ ...localUserInfo, birthTime: e.target.value })
//                   }
//                   className="w-full p-3 border rounded-md focus:ring-amber-400"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Selected Location (Birth Place) */}
//               <div className="space-y-2 pt-0.5">
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <label className="text-sm font-medium text-gray-700">
//                     Select Birth Place 
//                   </label>
                  
//                 </div>
                
//                 <div className="relative" ref={dropdownRef}>
//                   <button
//                     type="button"
//                     onClick={handleDropdownToggle}
//                     className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
//                   >
//                     <span className={localUserInfo.selectedLocation ? "text-gray-800" : "text-gray-500"}>
//                       {localUserInfo.selectedLocation || "Select your birth place"}
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
                
//                 {localUserInfo.selectedLocation && (
//                   <p className="text-green-600 text-sm flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     Birth place selected: {localUserInfo.selectedLocation}
//                   </p>
//                 )}
//               </div>
//               {/* Current Location */}
//               <div className="space-y-2 pt-0">
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <label className="text-sm font-medium text-gray-700">
//                     Current Location 
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
//                       Fetch Current Location
//                     </button>
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={localUserInfo.currentLocation || ""}
//                     readOnly
//                     placeholder="Your current location will appear here"
//                     className="w-full p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
//                   />
//                 </div>

//                 {locationError && (
//                   <p className="text-red-500 text-sm flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     {locationError}
//                   </p>
//                 )}

//                 {localUserInfo.currentLocation && !locationError && (
//                   <p className="text-green-600 text-sm flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     Current location fetched: {localUserInfo.currentLocation}
//                   </p>
//                 )}
//               </div>
// </div>
//               </div>

//               {/* Category */}
//               <select
//                 value={localUserInfo.selectedCategory}
//                 onChange={(e) =>
//                   setLocalUserInfo({ ...localUserInfo, selectedCategory: e.target.value })
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
//           <div className="w-full max-w-auto">
//             <header className="w-full bg-[#FBAB26] px-4 py-3 flex items-center gap-3">
//               <img
//                 src="ailogo.png"
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div className="flex flex-col leading-tight">
//                 <span className="text-white md:text-lg text-sm font-medium">
//                   Astrologer
//                 </span>
//                 <span className="text-white text-xs font-medium">
//                   🟢 online
//                 </span>
//               </div>
//               <button
//                 onClick={() => (window.location.href = "/")}
//                 className="ml-auto p-2 rounded-md cursor-pointer"
//                 aria-label="Close"
//               >
//                 <p className="text-white font-bold">X</p>
//               </button>
//             </header>

// <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
//   {chats.length > 0 ? (
//     <>
//       {/* Show all chats - latest messages at bottom */}
//       {chats.map((chat, idx) => (
//         <div
//           key={idx}
//           className={`flex flex-col space-y-2 mb-4 ${
//             chat.question && !chat.answer ? "text-right" : "text-left"
//           }`}
//         >
//           {/* User Message - only show if there's a question */}
//           {chat.question && (
//             <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] ml-auto shadow-sm">
//               <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
//               <div>{chat.question}</div>
//             </div>
//           )}
          
//           {/* Bot Message - show if there's an answer */}
//           {chat.answer && (
//             <div className="flex flex-col space-y-2">
//               {/* Answer Bubble */}
//               <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[70%] max-w-[85%] shadow-sm text-left">
//                 <div>{chat.answer}</div>

//                 {/* Display retrieved sources */}
//                 {chat.retrievedSources && chat.retrievedSources.length > 0 && (
//                   <div className="mt-2 text-xs text-amber-200">
//                     <div>Sources: {chat.retrievedSources.length} references</div>
//                   </div>
//                 )}
//               </div>

//               {/* Remedy as NEW Separate SMS Bubble */}
//               {chat.remedy && chat.remedy.trim() !== "" && (
//                 <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[70%] max-w-[85%] shadow-sm text-left">
//                   <div className="text-sm font-semibold mb-1"> Remedy:</div>
//                   <div>{chat.remedy}</div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
      
//       {/* Show typing indicator when loading */}
//       {isLoading && <TypingIndicator />}
//     </>
//   ) : (
//     <p className="text-gray-600 text-center mt-24">
//       No chats yet. Ask your first question below 👇
//     </p>
//   )}
//   <div ref={chatEndRef} />
// </div>

//             <div className="flex items-center gap-8">
//               <input
//                 type="text"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 placeholder="Ask your question..."
//                 className="flex-1 p-3 pl-8 pb-10 bg-[#f5e9d6] rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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






























// // // // /* eslint-disable react-hooks/exhaustive-deps */
// // // // import React, { useState, useRef, useEffect } from "react";
// // // // import useAIStore from "../../stores/useAIStore";
// // // // import Header from "../layout/Header";
// // // // import Footer from "../layout/Footer";
// // // // import { Send, Loader2, MapPin, Navigation, ChevronDown, Search, Map, Calendar } from "lucide-react";

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

// // // // // Months array for dropdown
// // // // const MONTHS = [
// // // //   { value: "01", label: "January" },
// // // //   { value: "02", label: "February" },
// // // //   { value: "03", label: "March" },
// // // //   { value: "04", label: "April" },
// // // //   { value: "05", label: "May" },
// // // //   { value: "06", label: "June" },
// // // //   { value: "07", label: "July" },
// // // //   { value: "08", label: "August" },
// // // //   { value: "09", label: "September" },
// // // //   { value: "10", label: "October" },
// // // //   { value: "11", label: "November" },
// // // //   { value: "12", label: "December" }
// // // // ];

// // // // // Generate years (from 1900 to current year)
// // // // const currentYear = new Date().getFullYear();
// // // // const YEARS = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => (currentYear - i).toString());

// // // // // Generate days (1-31)
// // // // const DAYS = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

// // // // // Use absolute URL for production, relative for development
// // // // const API_BASE_URL = window.location.hostname === 'localhost' 
// // // //   ? 'http://localhost:5000/api' 
// // // //   : 'http://localhost:5000/api';

// // // // const QNA = () => {
// // // //   const { fetchChats, chats, sendMessage } = useAIStore();
// // // //   const [userInfo, setUserInfo] = useState({
// // // //     name: "",
// // // //     birthYear: "",
// // // //     birthMonth: "",
// // // //     birthDay: "",
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
// // // //   const [filteredLocations, setFilteredLocations] = useState([]);
// // // //   const [isSearching, setIsSearching] = useState(false);
// // // //   const [showMapOption, setShowMapOption] = useState(false);
// // // //   const chatEndRef = useRef(null);
// // // //   const dropdownRef = useRef(null);
// // // //   const searchTimeoutRef = useRef(null);

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

// // // //   // Fetch locations from Google Places API via Node.js proxy
// // // //   useEffect(() => {
// // // //     if (searchQuery.length < 2) {
// // // //       setFilteredLocations([]);
// // // //       return;
// // // //     }

// // // //     if (searchTimeoutRef.current) {
// // // //       clearTimeout(searchTimeoutRef.current);
// // // //     }

// // // //     searchTimeoutRef.current = setTimeout(async () => {
// // // //       setIsSearching(true);
// // // //       try {
// // // //         const response = await fetch(`${API_BASE_URL}/places-autocomplete`, {
// // // //           method: 'POST',
// // // //           headers: {
// // // //             'Content-Type': 'application/json',
// // // //           },
// // // //           body: JSON.stringify({ input: searchQuery })
// // // //         });
        
// // // //         if (!response.ok) {
// // // //           throw new Error('Network response was not ok');
// // // //         }
        
// // // //         const data = await response.json();
        
// // // //         if (data.status === 'OK' && data.predictions) {
// // // //           const locations = data.predictions.map(prediction => prediction.description);
// // // //           setFilteredLocations(locations);
// // // //         } else {
// // // //           setFilteredLocations([]);
// // // //           console.log('API returned no results:', data.status);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error fetching locations:", error);
// // // //         setFilteredLocations([]);
// // // //         setLocationError("Failed to fetch locations. Please try again.");
// // // //       } finally {
// // // //         setIsSearching(false);
// // // //       }
// // // //     }, 300);

// // // //     return () => {
// // // //       if (searchTimeoutRef.current) {
// // // //         clearTimeout(searchTimeoutRef.current);
// // // //       }
// // // //     };
// // // //   }, [searchQuery]);

// // // //   // Function to get current location and current date
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
          
// // // //           // Get current date
// // // //           const now = new Date();
// // // //           const currentYear = now.getFullYear().toString();
// // // //           const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
// // // //           const currentDay = now.getDate().toString().padStart(2, '0');
// // // //           const currentTime = now.toTimeString().split(' ')[0].substring(0, 5); // HH:MM format

// // // //           // Use Node.js proxy for reverse geocoding
// // // //           const response = await fetch(`${API_BASE_URL}/reverse-geocode`, {
// // // //             method: 'POST',
// // // //             headers: {
// // // //               'Content-Type': 'application/json',
// // // //             },
// // // //             body: JSON.stringify({ latitude, longitude })
// // // //           });
          
// // // //           if (!response.ok) {
// // // //             throw new Error('Network response was not ok');
// // // //           }
          
// // // //           const data = await response.json();
          
// // // //           if (data.status === 'OK' && data.results && data.results.length > 0) {
// // // //             const address = data.results[0].formatted_address;
// // // //             setUserInfo(prev => ({
// // // //               ...prev,
// // // //               birthPlace: address,
// // // //               birthYear: currentYear,
// // // //               birthMonth: currentMonth,
// // // //               birthDay: currentDay,
// // // //               birthTime: currentTime
// // // //             }));
// // // //           } else {
// // // //             setLocationError("Could not retrieve address from coordinates.");
// // // //             // Still set the date even if location fails
// // // //             setUserInfo(prev => ({
// // // //               ...prev,
// // // //               birthYear: currentYear,
// // // //               birthMonth: currentMonth,
// // // //               birthDay: currentDay,
// // // //               birthTime: currentTime
// // // //             }));
// // // //           }
// // // //         } catch (error) {
// // // //           console.error("Error getting location:", error);
// // // //           setLocationError("Failed to get location. Please search manually.");
// // // //           // Still set the current date even if location fails
// // // //           const now = new Date();
// // // //           const currentYear = now.getFullYear().toString();
// // // //           const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
// // // //           const currentDay = now.getDate().toString().padStart(2, '0');
// // // //           const currentTime = now.toTimeString().split(' ')[0].substring(0, 5);
          
// // // //           setUserInfo(prev => ({
// // // //             ...prev,
// // // //             birthYear: currentYear,
// // // //             birthMonth: currentMonth,
// // // //             birthDay: currentDay,
// // // //             birthTime: currentTime
// // // //           }));
// // // //         } finally {
// // // //           setIsGettingLocation(false);
// // // //         }
// // // //       },
// // // //       (error) => {
// // // //         setIsGettingLocation(false);
// // // //         switch (error.code) {
// // // //           case error.PERMISSION_DENIED:
// // // //             setLocationError("Location access denied. Please search manually.");
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
// // // //       },
// // // //       {
// // // //         enableHighAccuracy: true,
// // // //         timeout: 10000,
// // // //         maximumAge: 60000
// // // //       }
// // // //     );
// // // //   };

// // // //   // Function to handle map selection
// // // //   const handleMapSelection = () => {
// // // //     setShowMapOption(true);
// // // //     alert("Map selection feature would open here. For now, please use search or current location.");
// // // //     setUserInfo(prev => ({
// // // //       ...prev,
// // // //       birthPlace: "Selected from map (feature to be implemented)"
// // // //     }));
// // // //     setShowMapOption(false);
// // // //   };

// // // //   const handleFormSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (
// // // //       !userInfo.name ||
// // // //       !userInfo.birthYear ||
// // // //       !userInfo.birthMonth ||
// // // //       !userInfo.birthDay ||
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

// // // //     // Store the question and clear input immediately
// // // //     const currentQuestion = question.trim();
// // // //     setQuestion(""); // Clear input immediately
// // // //     setIsLoading(true);
    
// // // //     try {
// // // //       // Format the birth date from separate fields
// // // //       const birthDate = `${userInfo.birthYear}-${userInfo.birthMonth}-${userInfo.birthDay}`;
      
// // // //       const context = `User Info:
// // // //       Name: ${userInfo.name}
// // // //       Birth Date: ${birthDate}
// // // //       Birth Time: ${userInfo.birthTime}
// // // //       Birth Place: ${userInfo.birthPlace}
// // // //       Category: ${userInfo.selectedCategory}`;

// // // //       const response = await sendMessage({
// // // //         question: `${context}\n\nUser Question: ${currentQuestion}`,
// // // //       });

// // // //       if (!response?.success) {
// // // //         alert(response?.message || "Failed to send message");
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
// // // //     setFilteredLocations([]);
// // // //   };

// // // //   const handleSearchChange = (e) => {
// // // //     setSearchQuery(e.target.value);
// // // //   };

// // // //   // Handle individual date field changes
// // // //   const handleDateChange = (field, value) => {
// // // //     setUserInfo(prev => ({
// // // //       ...prev,
// // // //       [field]: value
// // // //     }));
// // // //   };

// // // //   // Typing indicator component
// // // //   const TypingIndicator = () => (
// // // //     <div className="flex flex-col space-y-2 mb-4 text-left">
// // // //       <div className=" text-black rounded-2xl inline-block ">
// // // //         <div className="flex items-center space-x-2">
// // // //           <span className="text-sm font-bold">Typing</span>
// // // //           <div className="flex space-x-1">
// // // //             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
// // // //             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
// // // //             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
// // // //           </div>
          
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
// // // //       <Header />

// // // //       <main className=" flex flex-col items-center px-4 py-8 bg-gray-50">
// // // //         {showForm ? (
// // // //           // ===== User Info Form =====
// // // //           <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
// // // //             <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
// // // //               Fill Your Birth Details
// // // //             </h2>
// // // //             <form onSubmit={handleFormSubmit} className="space-y-4">
// // // //               {/* Name Field */}
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
              
// // // //               {/* Birth Date Fields - Split into 3 */}
// // // //               <div className="space-y-2">
// // // //                 <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
// // // //                   <Calendar className="w-4 h-4" />
// // // //                   Birth Date
// // // //                 </label>
// // // //                 <div className="grid grid-cols-3 gap-3">
// // // //                   {/* Year Dropdown */}
// // // //                   <select
// // // //                     value={userInfo.birthYear}
// // // //                     onChange={(e) => handleDateChange('birthYear', e.target.value)}
// // // //                     className="p-3 border rounded-md focus:ring-amber-400"
// // // //                     required
// // // //                   >
// // // //                     <option value="">Year</option>
// // // //                     {YEARS.map((year) => (
// // // //                       <option key={year} value={year}>
// // // //                         {year}
// // // //                       </option>
// // // //                     ))}
// // // //                   </select>

// // // //                   {/* Month Dropdown */}
// // // //                   <select
// // // //                     value={userInfo.birthMonth}
// // // //                     onChange={(e) => handleDateChange('birthMonth', e.target.value)}
// // // //                     className="p-3 border rounded-md focus:ring-amber-400"
// // // //                     required
// // // //                   >
// // // //                     <option value="">Month</option>
// // // //                     {MONTHS.map((month) => (
// // // //                       <option key={month.value} value={month.value}>
// // // //                         {month.label}
// // // //                       </option>
// // // //                     ))}
// // // //                   </select>

// // // //                   {/* Day Dropdown */}
// // // //                   <select
// // // //                     value={userInfo.birthDay}
// // // //                     onChange={(e) => handleDateChange('birthDay', e.target.value)}
// // // //                     className="p-3 border rounded-md focus:ring-amber-400"
// // // //                     required
// // // //                   >
// // // //                     <option value="">Day</option>
// // // //                     {DAYS.map((day) => (
// // // //                       <option key={day} value={day}>
// // // //                         {day}
// // // //                       </option>
// // // //                     ))}
// // // //                   </select>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Birth Time */}
// // // //               <div className="space-y-2">
// // // //                 <label className="text-sm font-medium text-gray-700">
// // // //                   Birth Time
// // // //                 </label>
// // // //                 <input
// // // //                   type="time"
// // // //                   value={userInfo.birthTime}
// // // //                   onChange={(e) =>
// // // //                     setUserInfo({ ...userInfo, birthTime: e.target.value })
// // // //                   }
// // // //                   className="w-full p-3 border rounded-md focus:ring-amber-400"
// // // //                   required
// // // //                 />
// // // //               </div>
              
// // // //               {/* Birth Place with Dropdown and Location Detection */}
// // // //               <div className="space-y-2">
// // // //                 <div className="flex items-center gap-2 flex-wrap">
// // // //                   <label className="text-sm font-medium text-gray-700">
// // // //                     Birth Place
// // // //                   </label>
// // // //                   <div className="flex gap-2">
// // // //                     {/* <button
// // // //                       type="button"
// // // //                       onClick={getCurrentLocation}
// // // //                       disabled={isGettingLocation}
// // // //                       className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
// // // //                     >
// // // //                       {isGettingLocation ? (
// // // //                         <Loader2 className="w-3 h-3 animate-spin" />
// // // //                       ) : (
// // // //                         <Navigation className="w-3 h-3" />
// // // //                       )}
// // // //                       Current Location & Date
// // // //                     </button> */}
// // // //                     {/* <button
// // // //                       type="button"
// // // //                       onClick={handleMapSelection}
// // // //                       className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition"
// // // //                     >
// // // //                       <Map className="w-3 h-3" />
// // // //                       Choose from Map
// // // //                     </button> */}
// // // //                   </div>
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
// // // //                             placeholder="Type 2+ letters to search real locations..."
// // // //                             value={searchQuery}
// // // //                             onChange={handleSearchChange}
// // // //                             className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
// // // //                             onClick={(e) => e.stopPropagation()}
// // // //                           />
// // // //                         </div>
// // // //                       </div>
                      
// // // //                       {/* Locations List */}
// // // //                       <div className="max-h-48 overflow-y-auto">
// // // //                         {isSearching ? (
// // // //                           <div className="px-4 py-3 text-center text-gray-500">
// // // //                             <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
// // // //                             Searching real locations...
// // // //                           </div>
// // // //                         ) : filteredLocations.length > 0 ? (
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
// // // //                         ) : searchQuery.length > 0 ? (
// // // //                           <div className="px-4 py-3 text-center text-gray-500">
// // // //                             {searchQuery.length < 2 ? "Type at least 2 characters" : "No locations found"}
// // // //                           </div>
// // // //                         ) : (
// // // //                           <div className="px-4 py-3 text-center text-gray-500">
// // // //                             Start typing to search real locations from Google Maps
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
// // // //               <div className="space-y-2">
// // // //   <div className="flex items-center gap-2 flex-wrap">
// // // //     <label className="text-sm font-medium text-gray-700">
// // // //       Current location
// // // //     </label>
// // // //     <div className="flex gap-2">
// // // //       <button
// // // //         type="button"
// // // //         onClick={getCurrentLocation}
// // // //         disabled={isGettingLocation}
// // // //         className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
// // // //       >
// // // //         {isGettingLocation ? (
// // // //           <Loader2 className="w-3 h-3 animate-spin" />
// // // //         ) : (
// // // //           <Navigation className="w-3 h-3" />
// // // //         )}
// // // //         Fetch Current Location
// // // //       </button>
// // // //     </div>
// // // //   </div>

// // // //   {/* Replaced dropdown with read-only input */}
// // // //   <div className="relative">
// // // //     <input
// // // //       type="text"
// // // //       value={userInfo.birthPlace || ""}
// // // //       readOnly
// // // //       placeholder="Your current location will appear here"
// // // //       className="w-full p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
// // // //     />
// // // //   </div>

// // // //   {/* Location messages */}
// // // //   {locationError && (
// // // //     <p className="text-red-500 text-sm flex items-center gap-1">
// // // //       <MapPin className="w-4 h-4" />
// // // //       {locationError}
// // // //     </p>
// // // //   )}

// // // //   {userInfo.birthPlace && !locationError && (
// // // //     <p className="text-green-600 text-sm flex items-center gap-1">
// // // //       <MapPin className="w-4 h-4" />
// // // //       Location fetched: {userInfo.birthPlace}
// // // //     </p>
// // // //   )}
// // // // </div>


// // // //               {/* Category */}
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
// // // //           <div className="w-full max-w-auto  ">
// // // //             <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
// // // //               {chats.length > 0 ? (
// // // //                 <>
// // // //                   {chats.map((chat, idx) => {
// // // //                     const isUser = Boolean(chat?.question);
// // // //                     let displayQuestion = "";
// // // //                     if (isUser && typeof chat.question === "string") {
// // // //                       if (chat.question.includes("User Question:")) {
// // // //                         displayQuestion = chat.question.split("User Question:").pop().trim();
// // // //                       } else {
// // // //                         displayQuestion = chat.question.replace(/User Info:\s*.*$/s, "").trim() || chat.question;
// // // //                       }
// // // //                     }

// // // //                     return (
// // // //                       <div
// // // //                         key={idx}
// // // //                         className={`flex flex-col space-y-2 mb-4 ${
// // // //                           isUser ? "text-right" : "text-left"
// // // //                         }`}
// // // //                       >
// // // //                         {isUser && (
// // // //                           <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] ml-auto shadow-sm">
// // // //                             <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
// // // //                             <div>{displayQuestion}</div>
// // // //                           </div>
// // // //                         )}
// // // //                         {chat?.answer && (
// // // //                           <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] max-w-[85%] shadow-sm text-left">
// // // //                             {chat.answer}
// // // //                           </div>
// // // //                         )}
// // // //                       </div>
// // // //                     );
// // // //                   })}
// // // //                   {/* Show typing indicator when loading */}
// // // //                   {isLoading && <TypingIndicator />}
// // // //                 </>
// // // //               ) : (
// // // //                 <p className="text-gray-600 text-center mt-24">
// // // //                   No chats yet. Ask your first question below 👇
// // // //                 </p>
// // // //               )}
// // // //               <div ref={chatEndRef} />
// // // //             </div>

// // // //             <div className="flex items-center gap-8">
// // // //               <input
// // // //                 type="text"
// // // //                 value={question}
// // // //                 onChange={(e) => setQuestion(e.target.value)}
// // // //                 placeholder="Ask your question..."
// // // //                 className="flex-1 p-3 pl-8 pb-10 bg-[#f5e9d6] rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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
// // // import { Send, Loader2, MapPin, Navigation, ChevronDown, Search, Map, Calendar } from "lucide-react";

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

// // // // Months array for dropdown
// // // const MONTHS = [
// // //   { value: "01", label: "January" },
// // //   { value: "02", label: "February" },
// // //   { value: "03", label: "March" },
// // //   { value: "04", label: "April" },
// // //   { value: "05", label: "May" },
// // //   { value: "06", label: "June" },
// // //   { value: "07", label: "July" },
// // //   { value: "08", label: "August" },
// // //   { value: "09", label: "September" },
// // //   { value: "10", label: "October" },
// // //   { value: "11", label: "November" },
// // //   { value: "12", label: "December" }
// // // ];

// // // // Generate years (from 1900 to current year)
// // // const currentYear = new Date().getFullYear();
// // // const YEARS = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => (currentYear - i).toString());

// // // // Generate days (1-31)
// // // const DAYS = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

// // // // Use absolute URL for production, relative for development
// // // const API_BASE_URL = window.location.hostname === 'localhost' 
// // //   ? 'http://localhost:5000/api' 
// // //   : 'http://localhost:5000/api';

// // // const QNA = () => {
// // //   const { fetchChats, chats, sendMessage } = useAIStore();
// // //   const [userInfo, setUserInfo] = useState({
// // //     name: "",
// // //     birthYear: "",
// // //     birthMonth: "",
// // //     birthDay: "",
// // //     birthTime: "",
// // //     currentLocation: "",
// // //     selectedLocation: "",
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
// // //   const [showMapOption, setShowMapOption] = useState(false);
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

// // //   // Function to get current location and current date
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
          
// // //           // Get current date
// // //           const now = new Date();
// // //           const currentYear = now.getFullYear().toString();
// // //           const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
// // //           const currentDay = now.getDate().toString().padStart(2, '0');
// // //           const currentTime = now.toTimeString().split(' ')[0].substring(0, 5); // HH:MM format

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
// // //               currentLocation: address,
// // //               birthYear: currentYear,
// // //               birthMonth: currentMonth,
// // //               birthDay: currentDay,
// // //               birthTime: currentTime
// // //             }));
// // //           } else {
// // //             setLocationError("Could not retrieve address from coordinates.");
// // //             // Still set the date even if location fails
// // //             setUserInfo(prev => ({
// // //               ...prev,
// // //               birthYear: currentYear,
// // //               birthMonth: currentMonth,
// // //               birthDay: currentDay,
// // //               birthTime: currentTime
// // //             }));
// // //           }
// // //         } catch (error) {
// // //           console.error("Error getting location:", error);
// // //           setLocationError("Failed to get location. Please search manually.");
// // //           // Still set the current date even if location fails
// // //           const now = new Date();
// // //           const currentYear = now.getFullYear().toString();
// // //           const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
// // //           const currentDay = now.getDate().toString().padStart(2, '0');
// // //           const currentTime = now.toTimeString().split(' ')[0].substring(0, 5);
          
// // //           setUserInfo(prev => ({
// // //             ...prev,
// // //             birthYear: currentYear,
// // //             birthMonth: currentMonth,
// // //             birthDay: currentDay,
// // //             birthTime: currentTime
// // //           }));
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

// // //   // Function to handle map selection
// // //   const handleMapSelection = () => {
// // //     setShowMapOption(true);
// // //     alert("Map selection feature would open here.");
// // //     setUserInfo(prev => ({
// // //       ...prev,
// // //       selectedLocation: "selection feature would open here"
// // //     }));
// // //     setShowMapOption(false);
// // //   };

// // //   const handleFormSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (
// // //       !userInfo.name ||
// // //       !userInfo.birthYear ||
// // //       !userInfo.birthMonth ||
// // //       !userInfo.birthDay ||
// // //       !userInfo.birthTime ||
// // //       !userInfo.selectedLocation ||
// // //       !userInfo.selectedCategory
// // //     ) {
// // //       alert("Please fill all fields before continuing.");
// // //       return;
// // //     }
// // //     setShowForm(false);
// // //   };

// // //   const handleQuestionSubmit = async () => {
// // //     if (!question.trim() || isLoading) return;

// // //     // Store the question and clear input immediately
// // //     const currentQuestion = question.trim();
// // //     setQuestion(""); // Clear input immediately
// // //     setIsLoading(true);
    
// // //     try {
// // //       // Format the birth date from separate fields
// // //       const birthDate = `${userInfo.birthYear}-${userInfo.birthMonth}-${userInfo.birthDay}`;
      
// // //       const context = `User Info:
// // //       Name: ${userInfo.name}
// // //       Birth Date: ${birthDate}
// // //       Birth Time: ${userInfo.birthTime}
// // //       Current Location: ${userInfo.currentLocation || 'Not provided'}
// // //       Selected Location: ${userInfo.selectedLocation}
// // //       Category: ${userInfo.selectedCategory}`;

// // //       const response = await sendMessage({
// // //         question: `${context}\n\nUser Question: ${currentQuestion}`,
// // //       });

// // //       if (!response?.success) {
// // //         alert(response?.message || "Failed to send message");
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
// // //       selectedLocation: location
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

// // //   // Handle individual date field changes
// // //   const handleDateChange = (field, value) => {
// // //     setUserInfo(prev => ({
// // //       ...prev,
// // //       [field]: value
// // //     }));
// // //   };

// // //   // Typing indicator component
// // //   const TypingIndicator = () => (
// // //     <div className="flex flex-col space-y-2 mb-4 text-left">
// // //       <div className=" text-black rounded-2xl inline-block ">
// // //         <div className="flex items-center space-x-2">
// // //           <span className="text-sm font-bold">Typing</span>
// // //           <div className="flex space-x-1">
// // //             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
// // //             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
// // //             <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
// // //           </div>
          
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
// // //       <Header />

// // //       <main className=" flex flex-col items-center px-4 py-8 bg-gray-50">
// // //         {showForm ? (
// // //           // ===== User Info Form =====
// // //           <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
// // //             <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
// // //               Fill Your Birth Details
// // //             </h2>
// // //             <form onSubmit={handleFormSubmit} className="space-y-4">
// // //               {/* Name Field */}
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
              
// // //               {/* Birth Date Fields - Split into 3 */}
// // //               <div className="space-y-2">
// // //                 <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
// // //                   <Calendar className="w-4 h-4" />
// // //                   Birth Date
// // //                 </label>
// // //                 <div className="grid grid-cols-3 gap-3">
// // //                   {/* Year Dropdown */}
// // //                   <select
// // //                     value={userInfo.birthYear}
// // //                     onChange={(e) => handleDateChange('birthYear', e.target.value)}
// // //                     className="p-3 border rounded-md focus:ring-amber-400"
// // //                     required
// // //                   >
// // //                     <option value="">Year</option>
// // //                     {YEARS.map((year) => (
// // //                       <option key={year} value={year}>
// // //                         {year}
// // //                       </option>
// // //                     ))}
// // //                   </select>

// // //                   {/* Month Dropdown */}
// // //                   <select
// // //                     value={userInfo.birthMonth}
// // //                     onChange={(e) => handleDateChange('birthMonth', e.target.value)}
// // //                     className="p-3 border rounded-md focus:ring-amber-400"
// // //                     required
// // //                   >
// // //                     <option value="">Month</option>
// // //                     {MONTHS.map((month) => (
// // //                       <option key={month.value} value={month.value}>
// // //                         {month.label}
// // //                       </option>
// // //                     ))}
// // //                   </select>

// // //                   {/* Day Dropdown */}
// // //                   <select
// // //                     value={userInfo.birthDay}
// // //                     onChange={(e) => handleDateChange('birthDay', e.target.value)}
// // //                     className="p-3 border rounded-md focus:ring-amber-400"
// // //                     required
// // //                   >
// // //                     <option value="">Day</option>
// // //                     {DAYS.map((day) => (
// // //                       <option key={day} value={day}>
// // //                         {day}
// // //                       </option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               {/* Birth Time */}
// // //               <div className="space-y-2 ">
// // //                 <label className="text-sm font-medium text-gray-700">
// // //                   Birth Time
// // //                 </label>
// // //                 <input
// // //                   type="time"
// // //                   value={userInfo.birthTime}
// // //                   onChange={(e) =>
// // //                     setUserInfo({ ...userInfo, birthTime: e.target.value })
// // //                   }
// // //                   className="w-full p-3 border rounded-md focus:ring-amber-400"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex flex-col space-y-4">
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {/* Selected Location (Birth Place) */}
// // //               <div className="space-y-2 pt-0.5">
// // //                 <div className="flex items-center gap-2 flex-wrap">
// // //                   <label className="text-sm font-medium text-gray-700">
// // //                     Select Birth Place 
// // //                   </label>
                  
// // //                 </div>
                
// // //                 <div className="relative" ref={dropdownRef}>
// // //                   <button
// // //                     type="button"
// // //                     onClick={handleDropdownToggle}
// // //                     className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
// // //                   >
// // //                     <span className={userInfo.selectedLocation ? "text-gray-800" : "text-gray-500"}>
// // //                       {userInfo.selectedLocation || "Select your birth place"}
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
                
// // //                 {userInfo.selectedLocation && (
// // //                   <p className="text-green-600 text-sm flex items-center gap-1">
// // //                     <MapPin className="w-4 h-4" />
// // //                     Birth place selected: {userInfo.selectedLocation}
// // //                   </p>
// // //                 )}
// // //               </div>
// // //               {/* Current Location */}
// // //               <div className="space-y-2 pt-0">
// // //                 <div className="flex items-center gap-2 flex-wrap">
// // //                   <label className="text-sm font-medium text-gray-700">
// // //                     Current Location 
// // //                   </label>
// // //                   <div className="flex gap-2">
// // //                     <button
// // //                       type="button"
// // //                       onClick={getCurrentLocation}
// // //                       disabled={isGettingLocation}
// // //                       className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
// // //                     >
// // //                       {isGettingLocation ? (
// // //                         <Loader2 className="w-3 h-3 animate-spin" />
// // //                       ) : (
// // //                         <Navigation className="w-3 h-3" />
// // //                       )}
// // //                       Fetch Current Location
// // //                     </button>
// // //                   </div>
// // //                 </div>

// // //                 <div className="relative">
// // //                   <input
// // //                     type="text"
// // //                     value={userInfo.currentLocation || ""}
// // //                     readOnly
// // //                     placeholder="Your current location will appear here"
// // //                     className="w-full p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
// // //                   />
// // //                 </div>

// // //                 {locationError && (
// // //                   <p className="text-red-500 text-sm flex items-center gap-1">
// // //                     <MapPin className="w-4 h-4" />
// // //                     {locationError}
// // //                   </p>
// // //                 )}

// // //                 {userInfo.currentLocation && !locationError && (
// // //                   <p className="text-green-600 text-sm flex items-center gap-1">
// // //                     <MapPin className="w-4 h-4" />
// // //                     Current location fetched: {userInfo.currentLocation}
// // //                   </p>
// // //                 )}
// // //               </div>
// // // </div>
// // //               </div>

// // //               {/* Category */}
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
// // //           <div className="w-full max-w-auto  ">
// // //             <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
// // //               {chats.length > 0 ? (
// // //                 <>
// // //                   {chats.map((chat, idx) => {
// // //                     const isUser = Boolean(chat?.question);
// // //                     let displayQuestion = "";
// // //                     if (isUser && typeof chat.question === "string") {
// // //                       if (chat.question.includes("User Question:")) {
// // //                         displayQuestion = chat.question.split("User Question:").pop().trim();
// // //                       } else {
// // //                         displayQuestion = chat.question.replace(/User Info:\s*.*$/s, "").trim() || chat.question;
// // //                       }
// // //                     }

// // //                     return (
// // //                       <div
// // //                         key={idx}
// // //                         className={`flex flex-col space-y-2 mb-4 ${
// // //                           isUser ? "text-right" : "text-left"
// // //                         }`}
// // //                       >
// // //                         {isUser && (
// // //                           <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] ml-auto shadow-sm">
// // //                             <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
// // //                             <div>{displayQuestion}</div>
// // //                           </div>
// // //                         )}
// // //                         {chat?.answer && (
// // //                           <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] max-w-[85%] shadow-sm text-left">
// // //                             {chat.answer}
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     );
// // //                   })}
// // //                   {/* Show typing indicator when loading */}
// // //                   {isLoading && <TypingIndicator />}
// // //                 </>
// // //               ) : (
// // //                 <p className="text-gray-600 text-center mt-24">
// // //                   No chats yet. Ask your first question below 👇
// // //                 </p>
// // //               )}
// // //               <div ref={chatEndRef} />
// // //             </div>

// // //             <div className="flex items-center gap-8">
// // //               <input
// // //                 type="text"
// // //                 value={question}
// // //                 onChange={(e) => setQuestion(e.target.value)}
// // //                 placeholder="Ask your question..."
// // //                 className="flex-1 p-3 pl-8 pb-10 bg-[#f5e9d6] rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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
// //   ? 'http://localhost:5000/api' 
// //   : 'http://localhost:5000/api';

// // const QNA = () => {
// //   const { fetchChats, chats, sendMessage } = useAIStore();
// //   const [userInfo, setUserInfo] = useState({
// //     name: "",
// //     birthYear: "",
// //     birthMonth: "",
// //     birthDay: "",
// //     birthTime: "",
// //     currentLocation: "",
// //     selectedLocation: "",
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
// //   const [showUserInfo, setShowUserInfo] = useState(false);
// //   const [tempQuestion, setTempQuestion] = useState("");
// //   const chatEndRef = useRef(null);
// //   const dropdownRef = useRef(null);
// //   const searchTimeoutRef = useRef(null);

// //   useEffect(() => {
// //     fetchChats();
// //   }, []);

// //   useEffect(() => {
// //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [chats, showUserInfo]);

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
// //               currentLocation: address,
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
// //     alert("Map selection feature would open here.");
// //     setUserInfo(prev => ({
// //       ...prev,
// //       selectedLocation: "selection feature would open here"
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
// //       !userInfo.selectedLocation ||
// //       !userInfo.selectedCategory
// //     ) {
// //       alert("Please fill all fields before continuing.");
// //       return;
// //     }
// //     setShowForm(false);
// //   };

// //   const handleQuestionSubmit = async () => {
// //     if (!question.trim() || isLoading) return;

// //     // Store the question and clear input immediately
// //     const currentQuestion = question.trim();
// //     setTempQuestion(currentQuestion); // Store the question temporarily
// //     setQuestion(""); // Clear input immediately
// //     setIsLoading(true);
// //     setShowUserInfo(true); // Show user info first
    
// //     try {
// //       // Format the birth date from separate fields
// //       const birthDate = `${userInfo.birthYear}-${userInfo.birthMonth}-${userInfo.birthDay}`;
      
// //       const context = `User Info:
// //       Name: ${userInfo.name}
// //       Birth Date: ${birthDate}
// //       Birth Time: ${userInfo.birthTime}
// //       Current Location: ${userInfo.currentLocation || 'Not provided'}
// //       Selected Location: ${userInfo.selectedLocation}
// //       Category: ${userInfo.selectedCategory}`;

// //       // Wait for 1 second before sending the actual message
// //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// //       const response = await sendMessage({
// //         question: `${context}\n\nUser Question: ${currentQuestion}`,
// //       });

// //       if (!response?.success) {
// //         alert(response?.message || "Failed to send message");
// //       }
      
// //     } catch (error) {
// //       console.error("Error sending message:", error);
// //     } finally {
// //       setIsLoading(false);
// //       setShowUserInfo(false); // Hide user info display after loading
// //     }
// //   };

// //   const handleLocationSelect = (location) => {
// //     setUserInfo(prev => ({
// //       ...prev,
// //       selectedLocation: location
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

// //   // Format month name from month number
// //   const getMonthName = (monthValue) => {
// //     const month = MONTHS.find(m => m.value === monthValue);
// //     return month ? month.label : monthValue;
// //   };

// //   // Format time for display (convert 24h to 12h format)
// //   const formatTimeForDisplay = (timeString) => {
// //     if (!timeString) return '';
    
// //     const [hours, minutes] = timeString.split(':');
// //     const hour = parseInt(hours);
// //     const ampm = hour >= 12 ? 'PM' : 'AM';
// //     const displayHour = hour % 12 || 12;
    
// //     return `${displayHour}:${minutes} ${ampm}`;
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

// //   // User info display component
// //   const UserInfoDisplay = () => (
// //     <div className="flex flex-col space-y-2 mb-4 text-right">
// //       <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] ml-auto shadow-sm">
// //         <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
// //         <div>{tempQuestion}</div>
// //       </div>
      
// //       {/* User Details Display */}
// //       <div className="bg-[#FE9A00] text-white px-4 py-3 rounded-2xl inline-block sm:max-w-[70%] max-w-[90%] shadow-sm text-left border border-blue-100">
        
// //         <div className="space-y-1 text-sm">
// //           <div><span className="font-medium">Hi {userInfo.name}</span> </div>
// //           <div>
// //             <span className="font-medium">Date of Birth:</span> {userInfo.birthDay} {getMonthName(userInfo.birthMonth)} {userInfo.birthYear}
// //           </div>
// //           <div><span className="font-medium">Birth Time:</span> {formatTimeForDisplay(userInfo.birthTime)}</div>
// //           <div><span className="font-medium">Birth Place:</span> {userInfo.selectedLocation}</div>
// //           {userInfo.currentLocation && (
// //             <div><span className="font-medium">Current Location:</span> {userInfo.currentLocation}</div>
// //           )}
          
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
// //               <div className="space-y-2 ">
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
// //               <div className="flex flex-col space-y-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {/* Selected Location (Birth Place) */}
// //               <div className="space-y-2 pt-0.5">
// //                 <div className="flex items-center gap-2 flex-wrap">
// //                   <label className="text-sm font-medium text-gray-700">
// //                     Select Birth Place 
// //                   </label>
                  
// //                 </div>
                
// //                 <div className="relative" ref={dropdownRef}>
// //                   <button
// //                     type="button"
// //                     onClick={handleDropdownToggle}
// //                     className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
// //                   >
// //                     <span className={userInfo.selectedLocation ? "text-gray-800" : "text-gray-500"}>
// //                       {userInfo.selectedLocation || "Select your birth place"}
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
                
// //                 {userInfo.selectedLocation && (
// //                   <p className="text-green-600 text-sm flex items-center gap-1">
// //                     <MapPin className="w-4 h-4" />
// //                     Birth place selected: {userInfo.selectedLocation}
// //                   </p>
// //                 )}
// //               </div>
// //               {/* Current Location */}
// //               <div className="space-y-2 pt-0">
// //                 <div className="flex items-center gap-2 flex-wrap">
// //                   <label className="text-sm font-medium text-gray-700">
// //                     Current Location 
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
// //                       Fetch Current Location
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="relative">
// //                   <input
// //                     type="text"
// //                     value={userInfo.currentLocation || ""}
// //                     readOnly
// //                     placeholder="Your current location will appear here"
// //                     className="w-full p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
// //                   />
// //                 </div>

// //                 {locationError && (
// //                   <p className="text-red-500 text-sm flex items-center gap-1">
// //                     <MapPin className="w-4 h-4" />
// //                     {locationError}
// //                   </p>
// //                 )}

// //                 {userInfo.currentLocation && !locationError && (
// //                   <p className="text-green-600 text-sm flex items-center gap-1">
// //                     <MapPin className="w-4 h-4" />
// //                     Current location fetched: {userInfo.currentLocation}
// //                   </p>
// //                 )}
// //               </div>
// // </div>
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
// //           <div className="w-full max-w-auto  ">
// //             <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
// //               {chats.length > 0 || showUserInfo ? (
// //                 <>
// //                   {/* Show existing chats */}
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
// //                           <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] ml-auto shadow-sm">
// //                             <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
// //                             <div>{displayQuestion}</div>
// //                           </div>
// //                         )}
// //                         {chat?.answer && (
// //                           <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] max-w-[85%] shadow-sm text-left">
// //                             {chat.answer}
// //                           </div>
// //                         )}
// //                       </div>
// //                     );
// //                   })}
                  
// //                   {/* Show user info and question when loading */}
// //                   {showUserInfo && <UserInfoDisplay />}
                  
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

// //             <div className="flex items-center gap-8">
// //               <input
// //                 type="text"
// //                 value={question}
// //                 onChange={(e) => setQuestion(e.target.value)}
// //                 placeholder="Ask your question..."
// //                 className="flex-1 p-3 pl-8 pb-10 bg-[#f5e9d6] rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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
//   ? 'http://localhost:5000/api' 
//   : 'http://localhost:5000/api';

// const QNA = () => {
//   const { fetchChats, chats, sendMessage } = useAIStore();
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     birthYear: "",
//     birthMonth: "",
//     birthDay: "",
//     birthTime: "",
//     currentLocation: "",
//     selectedLocation: "",
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
//   const [showUserInfo, setShowUserInfo] = useState(false);
//   const [tempQuestion, setTempQuestion] = useState("");
//   const [showTypingEffect, setShowTypingEffect] = useState(false);
//   const [introMessage, setIntroMessage] = useState("");
//   const chatEndRef = useRef(null);
//   const dropdownRef = useRef(null);
//   const searchTimeoutRef = useRef(null);

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chats, showUserInfo, introMessage]);

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
//               currentLocation: address,
//               // birthYear: currentYear,
//               // birthMonth: currentMonth,
//               // birthDay: currentDay,
//               // birthTime: currentTime
//             }));
//           } else {
//             setLocationError("Could not retrieve address from coordinates.");
//             // Still set the date even if location fails
//             // setUserInfo(prev => ({
//             //   ...prev,
//             //   // birthYear: currentYear,
//             //   // birthMonth: currentMonth,
//             //   // birthDay: currentDay,
//             //   // birthTime: currentTime
//             // }));
//           }
//         } catch (error) {
//           console.error("Error getting location:", error);
//           setLocationError("Failed to get location. Please search manually.");
//           // Still set the current date even if location fails
//           // const now = new Date();
//           // const currentYear = now.getFullYear().toString();
//           // const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
//           // const currentDay = now.getDate().toString().padStart(2, '0');
//           // const currentTime = now.toTimeString().split(' ')[0].substring(0, 5);
          
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
//     alert("Map selection feature would open here.");
//     setUserInfo(prev => ({
//       ...prev,
//       selectedLocation: "selection feature would open here"
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
//       !userInfo.selectedLocation ||
//       !userInfo.selectedCategory
//     ) {
//       alert("Please fill all fields before continuing.");
//       return;
//     }
//     setShowForm(false);
//   };

  
// const handleQuestionSubmit = async () => {
//   if (!question.trim() || isLoading) return;

//   // Store the question and clear input immediately
//   const currentQuestion = question.trim();
//   setTempQuestion(currentQuestion); // Store the question temporarily
//   setQuestion(""); // Clear input immediately
//   setIsLoading(true);
//   setShowUserInfo(true); // Show user info first
  
//   try {
//     // Format the birth date from separate fields
//     const birthDate = `${userInfo.birthYear}-${userInfo.birthMonth}-${userInfo.birthDay}`;
    
//     const context = `User Info:
//     Name: ${userInfo.name}
//     Birth Date: ${birthDate}
//     Birth Time: ${userInfo.birthTime}
//     Current Location: ${userInfo.currentLocation || 'Not provided'}
//     Selected Location: ${userInfo.selectedLocation}
//     Category: ${userInfo.selectedCategory}`;

//     // Step 1: Show user info and typing effect for 2 seconds
//     setShowTypingEffect(true);
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setShowTypingEffect(false);
    
//     // Step 2: Show intro message
//     const introText = `Hi ${userInfo.name}. I find this is your birth date: ${userInfo.birthDay} ${getMonthName(userInfo.birthMonth)} ${userInfo.birthYear}, birth place: ${userInfo.selectedLocation}, birth time: ${formatTimeForDisplay(userInfo.birthTime)}. Let me briefly solve your questions...`;
//     setIntroMessage(introText);
    
//     // Step 3: Wait 2 seconds with intro message visible
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     // Step 4: Show typing effect again while waiting for API response
//     setShowTypingEffect(true);
    
//     // Now send the actual message to API
//     const response = await sendMessage({
//       question: `${context}\n\nUser Question: ${currentQuestion}`,
//     });

//     // Hide typing effect when response is received
//     setShowTypingEffect(false);
    
//     if (!response?.success) {
//       alert(response?.message || "Failed to send message");
//     }
    
//   } catch (error) {
//     console.error("Error sending message:", error);
//     setShowTypingEffect(false); // Ensure typing indicator is hidden on error
//   } finally {
//     setIsLoading(false);
//     setShowUserInfo(false); // Hide user info display after loading
//     setIntroMessage(""); // Clear intro message
//   }
// };


//   const handleLocationSelect = (location) => {
//     setUserInfo(prev => ({
//       ...prev,
//       selectedLocation: location
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

//   // Format month name from month number
//   const getMonthName = (monthValue) => {
//     const month = MONTHS.find(m => m.value === monthValue);
//     return month ? month.label : monthValue;
//   };

//   // Format time for display (convert 24h to 12h format)
//   const formatTimeForDisplay = (timeString) => {
//     if (!timeString) return '';
    
//     const [hours, minutes] = timeString.split(':');
//     const hour = parseInt(hours);
//     const ampm = hour >= 12 ? 'PM' : 'AM';
//     const displayHour = hour % 12 || 12;
    
//     return `${displayHour}:${minutes} ${ampm}`;
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

//   // User info display component
//   const UserInfoDisplay = () => (
//     <div className="flex flex-col space-y-2 mb-4 text-right">
//       <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] ml-auto shadow-sm">
//         <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
//         <div>{tempQuestion}</div>
//       </div>
      
//       {/* User Details Display */}
//       {/* <div className="bg-[#FE9A00] text-white px-4 py-3 rounded-2xl inline-block sm:max-w-[70%] max-w-[90%] shadow-sm text-left border border-blue-100">
        
//         <div className="space-y-1 text-sm">
//           <div><span className="font-medium">Hi {userInfo.name}</span> </div>
//           <div>
//             <span className="font-medium">Date of Birth:</span> {userInfo.birthDay} {getMonthName(userInfo.birthMonth)} {userInfo.birthYear}
//           </div>
//           <div><span className="font-medium">Birth Time:</span> {formatTimeForDisplay(userInfo.birthTime)}</div>
//           <div><span className="font-medium">Birth Place:</span> {userInfo.selectedLocation}</div>
//           {userInfo.currentLocation && (
//             <div><span className="font-medium">Current Location:</span> {userInfo.currentLocation}</div>
//           )}
          
//         </div>
//       </div> */}
//     </div>
//   );

//   // Intro message display component
//   const IntroMessageDisplay = () => (
//     <div className="flex flex-col space-y-2 mb-4 text-left">
//       <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[70%] max-w-[85%] shadow-sm">
//         {introMessage}
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
//               <div className="space-y-2 ">
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
//               <div className="flex flex-col space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Selected Location (Birth Place) */}
//               <div className="space-y-2 pt-0.5">
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <label className="text-sm font-medium text-gray-700">
//                     Select Birth Place 
//                   </label>
                  
//                 </div>
                
//                 <div className="relative" ref={dropdownRef}>
//                   <button
//                     type="button"
//                     onClick={handleDropdownToggle}
//                     className="w-full flex items-center justify-between p-3 border rounded-md focus:ring-amber-400 bg-white text-left"
//                   >
//                     <span className={userInfo.selectedLocation ? "text-gray-800" : "text-gray-500"}>
//                       {userInfo.selectedLocation || "Select your birth place"}
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
                
//                 {userInfo.selectedLocation && (
//                   <p className="text-green-600 text-sm flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     Birth place selected: {userInfo.selectedLocation}
//                   </p>
//                 )}
//               </div>
//               {/* Current Location */}
//               <div className="space-y-2 pt-0">
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <label className="text-sm font-medium text-gray-700">
//                     Current Location 
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
//                       Fetch Current Location
//                     </button>
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={userInfo.currentLocation || ""}
//                     readOnly
//                     placeholder="Your current location will appear here"
//                     className="w-full p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
//                   />
//                 </div>

//                 {locationError && (
//                   <p className="text-red-500 text-sm flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     {locationError}
//                   </p>
//                 )}

//                 {userInfo.currentLocation && !locationError && (
//                   <p className="text-green-600 text-sm flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     Current location fetched: {userInfo.currentLocation}
//                   </p>
//                 )}
//               </div>
// </div>
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
        
         
// <div className="w-full max-w-auto">
//   <header className="w-full bg-[#FBAB26] px-4 py-3 flex items-center gap-3">
//   <img
//     src="ailogo.png"
//     alt="Profile"
//     className="w-10 h-10 rounded-full object-cover"
//   />

//   <div className="flex flex-col leading-tight">
//     <span className="text-white md:text-lg text-sm font-medium">
//       Astrologer
//     </span>
//     <span className="text-white text-xs font-medium">
//       🟢 online
//     </span>
//   </div>

//   <button
//     onClick={() => (window.location.href = "/")}
//     className="ml-auto p-2 rounded-md cursor-pointer"
//     aria-label="Close"
//   >
//     <p className="text-white font-bold">X</p>
//   </button>
// </header>

//   <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-4 mb-4 h-[65vh] overflow-y-auto">
//     {chats.length > 0 || showUserInfo || introMessage ? (
//       <>
//         {/* Show existing chats */}
//         {chats.map((chat, idx) => {
//           const isUser = Boolean(chat?.question);
//           let displayQuestion = "";
//           if (isUser && typeof chat.question === "string") {
//             if (chat.question.includes("User Question:")) {
//               displayQuestion = chat.question.split("User Question:").pop().trim();
//             } else {
//               displayQuestion = chat.question.replace(/User Info:\s*.*$/s, "").trim() || chat.question;
//             }
//           }

//           return (
//             <div
//               key={idx}
//               className={`flex flex-col space-y-2 mb-4 ${
//                 isUser ? "text-right" : "text-left"
//               }`}
//             >
//               {isUser && (
//                 <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] ml-auto shadow-sm">
//                   <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
//                   <div>{displayQuestion}</div>
//                 </div>
//               )}
//               {chat?.answer && (
//                 <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block sm:max-w-[50%] max-w-[85%] shadow-sm text-left">
//                   {chat.answer}
//                 </div>
//               )}
//             </div>
//           );
//         })}
        
       
//         {showUserInfo && <UserInfoDisplay />}
        
//         {introMessage && <IntroMessageDisplay />}
//         {showTypingEffect && <TypingIndicator />}
//       </>
//     ) : (
//       <p className="text-gray-600 text-center mt-24">
//         No chats yet. Ask your first question below 👇
//       </p>
//     )}
//     <div ref={chatEndRef} />
//   </div>

//   <div className="flex items-center gap-8">
//     <input
//       type="text"
//       value={question}
//       onChange={(e) => setQuestion(e.target.value)}
//       placeholder="Ask your question..."
//       className="flex-1 p-3 pl-8 pb-10 bg-[#f5e9d6] rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
//       onKeyPress={(e) => {
//         if (e.key === 'Enter' && !e.shiftKey) {
//           e.preventDefault();
//           handleQuestionSubmit();
//         }
//       }}
//     />
//     <button
//       onClick={handleQuestionSubmit}
//       disabled={isLoading || !question.trim()}
//       className="bg-amber-500 text-white px-4 py-3 rounded-md hover:bg-amber-600 transition disabled:opacity-50 flex items-center justify-center"
//     >
//       {isLoading ? (
//         <Loader2 className="w-5 h-5 animate-spin" />
//       ) : (
//         <Send className="w-5 h-5" />
//       )}
//     </button>
//   </div>
// </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default QNA;









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

// const handleQuestionSubmit = async () => {
//   if (!question.trim() || isLoading) return;

//   const currentQuestion = question.trim();
//   setQuestion("");
//   setIsLoading(true);
//   setShowTypingEffect(true);

//   try {
//     // Get user info from store - this is crucial
//     const { userInfo: storedUserInfo, hasShownIntro } = useAIStore.getState();
    
//     // Prepare the data to send to backend
//     const messageData = {
//       question: currentQuestion,
//       context: '', // You can add context if needed
//       ragWithContext: true,
//       // Send userInfo only if it's the first message and not shown yet
//       userInfo: storedUserInfo && !hasShownIntro ? {
//         name: storedUserInfo.name,
//         birthDate: storedUserInfo.displayBirthDate,
//         birthTime: storedUserInfo.birthTime,
//         birthPlace: storedUserInfo.selectedLocation
//       } : null
//     };

//     console.log('Sending message with userInfo:', messageData.userInfo);

//     // The store will handle whether to include user info or not
//     const response = await sendMessage(messageData);

//     if (!response?.success) {
//       alert(response?.message || "Failed to send message");
//     }
    
//   } catch (error) {
//     console.error("Error sending message:", error);
//   } finally {
//     setIsLoading(false);
//     setShowTypingEffect(false);
//   }
// };
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
    const messageData = {
      question: currentQuestion,
      context: '',
      ragWithContext: true,
      // Send user name for greeting personalization
      user_name: storedUserInfo ? storedUserInfo.name : null,
      // Only send userInfo for the first message when intro hasn't been shown
      userInfo: storedUserInfo && !hasShownIntro ? {
        name: storedUserInfo.name,
        birthDate: storedUserInfo.displayBirthDate,
        birthTime: storedUserInfo.birthTime,
        birthPlace: storedUserInfo.selectedLocation
      } : null
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
  const handleLocationSelect = (location) => {
    setLocalUserInfo(prev => ({
      ...prev,
      selectedLocation: location
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
                  Astrologer
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