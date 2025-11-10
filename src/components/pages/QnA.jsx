// // // /* eslint-disable react-hooks/exhaustive-deps */
// // // import React, { useEffect, useState, useRef } from "react";
// // // import Footer from "../layout/Footer";
// // // import Header from "../layout/Header";
// // // import { Mic, Send, Settings, Loader2 } from "lucide-react";
// // // import useAIStore from "../../stores/useAIStore";

// // // const QNA = () => {
// // //   const { fetchChats, chats, sendMessage } = useAIStore();
// // //   const [field, setField] = useState("");
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const chatEndRef = useRef(null);

// // //   useEffect(() => {
// // //     fetchChats();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (chatEndRef.current) {
// // //       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
// // //     }
// // //   }, [chats]);

// // //   const handleSubmit = async () => {
// // //     if (field.trim() === "" || isLoading) return;

// // //     setIsLoading(true);
// // //     const response = await sendMessage({ question: field });

// // //     if (response && !response.success) {
// // //       alert(response.message || "Failed to send message");
// // //     } else {
// // //       setField("");
// // //     }
// // //     setIsLoading(false);
// // //   };

// // //   return (
// // //     <div className="min-h-screen font-sans flex flex-col">
// // //       <Header />

// // //       <main
// // //         style={{
// // //           backgroundImage: 'url("/Wheel2-1.png")',
// // //           backgroundSize: "",
// // //           backgroundPosition: "top left",
// // //           backgroundRepeat: "no-repeat",
// // //         }}
// // //         className="flex-grow flex flex-col items-center px-4 py-8 bg-gray-50"
// // //       >
// // //         {chats.length > 0 ? (
// // //           <>
// // //             {/* Chat header */}
// // //             <div className="w-full max-w-2xl bg-white rounded-t-xl shadow-md shadow-amber-200 flex items-center gap-3 p-3 border-b border-gray-100 sticky top-0 z-10">
// // //               <img
// // //                 src="/chat-logo.png"
// // //                 alt="Astro AI"
// // //                 className="w-10 h-10 rounded-full border border-amber-300 object-cover"
// // //               />
// // //               <div className="flex flex-col items-start">
// // //                 <h2 className="text-gray-800 font-semibold text-base">
// // //                   AI Astrologer
// // //                 </h2>
// // //               </div>
// // //             </div>

// // //             {/* Chat messages */}
// // //             <div className="w-full max-w-2xl bg-white/30 backdrop-blur-md rounded-b-xl shadow-2xl p-4 flex flex-col space-y-4 overflow-y-auto max-h-[65vh] border border-amber-100">
// // //               {chats.map((chat) => (
// // //                 <div key={chat?._id} className="flex flex-col space-y-2">
// // //                   <div className="flex justify-end">
// // //                     <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl max-w-[75%] shadow-sm">
// // //                       {chat?.question}
// // //                     </div>
// // //                   </div>

// // //                   <div className="flex justify-start">
// // //                     <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl max-w-[75%] shadow-sm">
// // //                       {chat?.answer}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //               <div ref={chatEndRef} />
// // //             </div>

// // //             {/* Input area */}
// // //             <div className="w-full max-w-2xl flex items-center justify-between bg-amber-100 rounded-lg px-4 py-3 shadow-md mt-6">
// // //               <textarea
// // //                 rows="2"
// // //                 placeholder="Ask a new question..."
// // //                 value={field}
// // //                 onChange={(e) => setField(e.target.value)}
// // //                 className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 resize-none text-sm sm:text-base mr-3"
// // //               />

// // //               <div className="flex items-center gap-3 text-gray-600">
// // //                 {isLoading ? (
// // //                   <Loader2 className="w-5 h-5 text-amber-600 animate-spin" />
// // //                 ) : (
// // //                   <Send
// // //                     onClick={handleSubmit}
// // //                     className="w-5 h-5 cursor-pointer hover:text-amber-600 transition"
// // //                   />
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </>
// // //         ) : (
// // //           // Empty state
// // //           <>
// // //             <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-amber-600 mb-2">
// // //               Get your questions answered by AI
// // //             </h1>
// // //             <p className="text-gray-600 text-sm sm:text-base mb-6">
// // //               Your first chat is on us!
// // //             </p>

// // //             <div className="flex flex-wrap gap-3 justify-center mb-8">
// // //               {[
// // //                 "Career",
// // //                 "Health",
// // //                 "Relationship",
// // //                 "Marriage",
// // //                 "Business",
// // //                 "Professional",
// // //               ].map((category) => (
// // //                 <button
// // //                   key={category}
// // //                   className="px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full bg-amber-50 hover:bg-amber-100 text-gray-700 shadow-sm transition-colors"
// // //                 >
// // //                   {category}
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             <div className="w-full max-w-2xl flex items-center justify-between bg-amber-100 rounded-lg px-4 py-3 shadow-md mt-6">
// // //               <textarea
// // //                 rows="2"
// // //                 placeholder="Ask a new question..."
// // //                 value={field}
// // //                 onChange={(e) => setField(e.target.value)}
// // //                 className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 resize-none text-sm sm:text-base mr-3"
// // //               />

// // //               <div className="flex items-center gap-3 text-gray-600">
// // //                 {isLoading ? (
// // //                   <Loader2 className="w-5 h-5 text-amber-600 animate-spin" />
// // //                 ) : (
// // //                   <Send
// // //                     onClick={handleSubmit}
// // //                     className="w-5 h-5 cursor-pointer hover:text-amber-600 transition"
// // //                   />
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </>
// // //         )}
// // //       </main>

// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default QNA;


// // // import React, { useState, useRef, useEffect } from 'react';
// // // import useAIStore from '../../stores/useAIStore';
// // // import Header from '../layout/Header';
// // // import Footer from '../layout/Footer';

// // // const CATEGORIES = [
// // //   'Career', 'Health', 'Marriage', 'Finance', 'Education',
// // //   'Relationships', 'Travel', 'Spirituality', 'Property', 'Legal'
// // // ];

// // // const QNA = () => {
// // //   const { fetchChats, chats, sendMessage } = useAIStore();
// // //   const [userInfo, setUserInfo] = useState({
// // //     name: '',
// // //     birthDate: '',
// // //     birthTime: '',
// // //     birthPlace: '',
// // //     selectedCategory: ''
// // //   });
// // //   const [question, setQuestion] = useState('');
// // //   const [showForm, setShowForm] = useState(true);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const chatEndRef = useRef(null);

// // //   useEffect(() => {
// // //     fetchChats();
// // //   }, []);

// // //   useEffect(() => {
// // //     chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // //   }, [chats]);

// // //   const handleFormSubmit = (e) => {
// // //     e.preventDefault();
// // //     setShowForm(false);
// // //   };

// // //   const handleQuestionSubmit = async () => {
// // //     if (!question.trim() || isLoading) return;

// // //     setIsLoading(true);
// // //     try {
// // //       const context = `User Info: Name: ${userInfo.name}, Birth Date: ${userInfo.birthDate}, 
// // //                       Birth Time: ${userInfo.birthTime}, Birth Place: ${userInfo.birthPlace}, 
// // //                       Category: ${userInfo.selectedCategory}`;
      
// // //       await sendMessage(question, context);
// // //       setQuestion('');
// // //     } catch (error) {
// // //       console.error('Error sending message:', error);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-4">
// // //       <Header/>
// // //       {showForm ? (
// // //         <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
// // //           <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
// // //           <form onSubmit={handleFormSubmit} className="space-y-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Your Name"
// // //               value={userInfo.name}
// // //               onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
// // //               className="w-full p-2 border rounded"
// // //               required
// // //             />
// // //             <input
// // //               type="date"
// // //               value={userInfo.birthDate}
// // //               onChange={(e) => setUserInfo({...userInfo, birthDate: e.target.value})}
// // //               className="w-full p-2 border rounded"
// // //               required
// // //             />
// // //             <input
// // //               type="time"
// // //               value={userInfo.birthTime}
// // //               onChange={(e) => setUserInfo({...userInfo, birthTime: e.target.value})}
// // //               className="w-full p-2 border rounded"
// // //               required
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="Birth Place"
// // //               value={userInfo.birthPlace}
// // //               onChange={(e) => setUserInfo({...userInfo, birthPlace: e.target.value})}
// // //               className="w-full p-2 border rounded"
// // //               required
// // //             />
// // //             <select
// // //               value={userInfo.selectedCategory}
// // //               onChange={(e) => setUserInfo({...userInfo, selectedCategory: e.target.value})}
// // //               className="w-full p-2 border rounded"
// // //               required
// // //             >
// // //               <option value="">Select Category</option>
// // //               {CATEGORIES.map(category => (
// // //                 <option key={category} value={category}>{category}</option>
// // //               ))}
// // //             </select>
// // //             <button
// // //               type="submit"
// // //               className="w-full bg-amber-500 text-white p-2 rounded hover:bg-amber-600"
// // //             >
// // //               Continue to Chat
// // //             </button>
// // //           </form>
// // //         </div>
// // //       ) : (
// // //         <div className="max-w-4xl mx-auto">
// // //           <div className="bg-white rounded-lg shadow mb-4 p-4 h-[600px] overflow-y-auto">
// // //             {chats.map((chat, idx) => (
// // //               <div key={idx} className={`mb-4 ${chat.role === 'user' ? 'text-right' : 'text-left'}`}>
// // //                 <div className={`inline-block p-3 rounded-lg ${
// // //                   chat.role === 'user' ? 'bg-amber-100' : 'bg-gray-100'
// // //                 }`}>
// // //                   {chat.content}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //             <div ref={chatEndRef} />
// // //           </div>
          
// // //           <div className="flex gap-2">
// // //             <input
// // //               type="text"
// // //               value={question}
// // //               onChange={(e) => setQuestion(e.target.value)}
// // //               placeholder="Ask your question..."
// // //               className="flex-1 p-2 border rounded"
// // //             />
// // //             <button
// // //               onClick={handleQuestionSubmit}
// // //               disabled={isLoading || !question.trim()}
// // //               className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 disabled:opacity-50"
// // //             >
// // //               {isLoading ? 'Sending...' : 'Send'}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //       <Footer/>
// // //     </div>
// // //   );
// // // };

// // // export default QNA;


// // /* eslint-disable react-hooks/exhaustive-deps */
// // import React, { useState, useRef, useEffect } from "react";
// // import useAIStore from "../../stores/useAIStore";
// // import Header from "../layout/Header";
// // import Footer from "../layout/Footer";
// // import { Send, Loader2 } from "lucide-react";

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

// // const QNA = () => {
// //   const { fetchChats, chats, sendMessage } = useAIStore();
// //   const [userInfo, setUserInfo] = useState({
// //     name: "",
// //     birthDate: "",
// //     birthTime: "",
// //     birthPlace: "",
// //     selectedCategory: "",
// //   });
// //   const [question, setQuestion] = useState("");
// //   const [showForm, setShowForm] = useState(true);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const chatEndRef = useRef(null);

// //   useEffect(() => {
// //     fetchChats();
// //   }, []);

// //   useEffect(() => {
// //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [chats]);

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     // Proceed only if all required fields are filled
// //     if (
// //       !userInfo.name ||
// //       !userInfo.birthDate ||
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
// //       const context = `User Info:
// //       Name: ${userInfo.name}
// //       Birth Date: ${userInfo.birthDate}
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

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
// //       <Header />

// //       <main className="flex-grow flex flex-col items-center px-4 py-8 bg-gray-50">
// //         {showForm ? (
// //           // ===== User Info Form =====
// //           <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
// //             <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
// //               Fill Your Birth Details
// //             </h2>
// //             <form onSubmit={handleFormSubmit} className="space-y-4">
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
// //               <div className="flex gap-3">
// //                 <input
// //                   type="date"
// //                   value={userInfo.birthDate}
// //                   onChange={(e) =>
// //                     setUserInfo({ ...userInfo, birthDate: e.target.value })
// //                   }
// //                   className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
// //                   required
// //                 />
// //                 <input
// //                   type="time"
// //                   value={userInfo.birthTime}
// //                   onChange={(e) =>
// //                     setUserInfo({ ...userInfo, birthTime: e.target.value })
// //                   }
// //                   className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
// //                   required
// //                 />
// //               </div>
// //               <input
// //                 type="text"
// //                 placeholder="Birth Place"
// //                 value={userInfo.birthPlace}
// //                 onChange={(e) =>
// //                   setUserInfo({ ...userInfo, birthPlace: e.target.value })
// //                 }
// //                 className="w-full p-3 border rounded-md focus:ring-amber-400"
// //                 required
// //               />
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
// //                 chats.map((chat, idx) => (
// //                   <div
// //                     key={idx}
// //                     className={`flex flex-col space-y-2 mb-4 ${
// //                       chat?.question ? "text-right" : "text-left"
// //                     }`}
// //                   >
// //                     {chat?.question && (
// //                       <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block max-w-[75%] ml-auto shadow-sm">
// //                         {chat.question}
// //                       </div>
// //                     )}
// //                     {chat?.answer && (
// //                       <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block max-w-[75%] shadow-sm">
// //                         {chat.answer}
// //                       </div>
// //                     )}
// //                   </div>
// //                 ))
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
// import { Send, Loader2, MapPin, Navigation } from "lucide-react";

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
//   const [isGettingLocation, setIsGettingLocation] = useState(false);
//   const [locationError, setLocationError] = useState("");
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chats]);

//   // Function to get current location using Google Maps Geocoding API
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
          
//           // Using Google Maps Geocoding API to get address from coordinates
//           const response = await fetch(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAoBl7NNCqtw_7g9K7bWrPq1m3ZI6P2_g8`
//           );
          
//           const data = await response.json();
          
//           if (data.status === "OK" && data.results.length > 0) {
//             const address = data.results[0].formatted_address;
//             setUserInfo(prev => ({
//               ...prev,
//               birthPlace: address
//             }));
//           } else {
//             setLocationError("Could not retrieve address from coordinates.");
//           }
//         } catch (error) {
//           console.error("Error getting location:", error);
//           setLocationError("Failed to get location. Please enter manually.");
//         } finally {
//           setIsGettingLocation(false);
//         }
//       },
//       (error) => {
//         setIsGettingLocation(false);
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             setLocationError("Location access denied. Please enable location permissions or enter manually.");
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

//   // Alternative: Simple location detection without Google Maps API
//   const getSimpleLocation = () => {
//     if (!navigator.geolocation) {
//       setLocationError("Geolocation is not supported by this browser.");
//       return;
//     }

//     setIsGettingLocation(true);
//     setLocationError("");

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         // Display coordinates or use a simple reverse geocoding service
//         const locationText = `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
//         setUserInfo(prev => ({
//           ...prev,
//           birthPlace: locationText
//         }));
//         setIsGettingLocation(false);
//       },
//       (error) => {
//         setIsGettingLocation(false);
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             setLocationError("Location access denied. Please enable location permissions.");
//             break;
//           case error.POSITION_UNAVAILABLE:
//             setLocationError("Location information unavailable.");
//             break;
//           case error.TIMEOUT:
//             setLocationError("Location request timed out.");
//             break;
//           default:
//             // setLocationError("An unknown error occurred.");
//             break;
//         }
//       }
//     );
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
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
              
//               {/* Birth Place with Location Detection */}
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2">
//                   <label className="text-sm font-medium text-gray-700">
//                     Birth Place
//                   </label>
//                   <button
//                     type="button"
//                     onClick={getSimpleLocation}
//                     disabled={isGettingLocation}
//                     className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
//                   >
//                     {isGettingLocation ? (
//                       <Loader2 className="w-3 h-3 animate-spin" />
//                     ) : (
//                       <Navigation className="w-3 h-3" />
//                     )}
//                     Get Current Location
//                   </button>
//                 </div>
                
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     placeholder="Enter birth place or use location detection"
//                     value={userInfo.birthPlace}
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, birthPlace: e.target.value })
//                     }
//                     className="flex-1 p-3 border rounded-md focus:ring-amber-400"
//                     required
//                   />
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
//                     Location set: {userInfo.birthPlace}
//                   </p>
//                 )}
//               </div>

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
//                 chats.map((chat, idx) => {
//                   // If the backend stored the whole user context (User Info: ... User Question: ...)
//                   // extract only the actual user question text to avoid showing personal info in UI.
//                   const isUser = Boolean(chat?.question);
//                   let displayQuestion = "";
//                   if (isUser && typeof chat.question === "string") {
//                     if (chat.question.includes("User Question:")) {
//                       displayQuestion = chat.question.split("User Question:").pop().trim();
//                     } else {
//                       // Fallback: try to remove the 'User Info:' prefix if present
//                       displayQuestion = chat.question.replace(/User Info:\s*.*$/s, "").trim() || chat.question;
//                     }
//                   }

//                   return (
//                     <div
//                       key={idx}
//                       className={`flex flex-col space-y-2 mb-4 ${
//                         isUser ? "text-right" : "text-left"
//                       }`}
//                     >
//                       {isUser && (
//                         <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl inline-block max-w-[75%] ml-auto shadow-sm">
//                           <div className="text-xs font-semibold text-amber-700 mb-1">You</div>
//                           <div>{displayQuestion}</div>
//                         </div>
//                       )}
//                       {chat?.answer && (
//                         <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block max-w-[75%] shadow-sm">
//                           {chat.answer}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })
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
import { Send, Loader2, MapPin, Navigation, ChevronDown, Search } from "lucide-react";

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

const LOCATIONS = [
  "New York, USA",
  "Los Angeles, USA", 
  "Chicago, USA",
  "Houston, USA",
  "Phoenix, USA",
  "Philadelphia, USA",
  "San Antonio, USA",
  "San Diego, USA",
  "Dallas, USA",
  "San Jose, USA",
  "London, UK",
  "Manchester, UK",
  "Birmingham, UK",
  "Glasgow, UK",
  "Liverpool, UK",
  "Toronto, Canada",
  "Vancouver, Canada",
  "Montreal, Canada",
  "Calgary, Canada",
  "Ottawa, Canada",
  "Sydney, Australia",
  "Melbourne, Australia",
  "Brisbane, Australia",
  "Perth, Australia",
  "Adelaide, Australia",
  "Mumbai, India",
  "Delhi, India",
  "Bangalore, India",
  "Kolkata, India",
  "Chennai, India",
  "Tokyo, Japan",
  "Osaka, Japan",
  "Nagoya, Japan",
  "Yokohama, Japan",
  "Kyoto, Japan",
  "Berlin, Germany",
  "Munich, Germany",
  "Hamburg, Germany",
  "Cologne, Germany",
  "Frankfurt, Germany",
  "Paris, France",
  "Marseille, France",
  "Lyon, France",
  "Toulouse, France",
  "Nice, France"
];

const QNA = () => {
  const { fetchChats, chats, sendMessage } = useAIStore();
  const [userInfo, setUserInfo] = useState({
    name: "",
    birthDate: "",
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
  const chatEndRef = useRef(null);
  const dropdownRef = useRef(null);

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

  // Filter locations based on search query
  const filteredLocations = LOCATIONS.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to get current location using Google Maps Geocoding API
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
          
          // Using Google Maps Geocoding API to get address from coordinates
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAoBl7NNCqtw_7g9K7bWrPq1m3ZI6P2_g8`
          );
          
          const data = await response.json();
          
          if (data.status === "OK" && data.results.length > 0) {
            const address = data.results[0].formatted_address;
            setUserInfo(prev => ({
              ...prev,
              birthPlace: address
            }));
          } else {
            setLocationError("Could not retrieve address from coordinates.");
          }
        } catch (error) {
          console.error("Error getting location:", error);
          setLocationError("Failed to get location. Please select from dropdown.");
        } finally {
          setIsGettingLocation(false);
        }
      },
      (error) => {
        setIsGettingLocation(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Location access denied. Please select from dropdown.");
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

  // Alternative: Simple location detection without Google Maps API
  const getSimpleLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      return;
    }

    setIsGettingLocation(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Display coordinates or use a simple reverse geocoding service
        const locationText = `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
        setUserInfo(prev => ({
          ...prev,
          birthPlace: locationText
        }));
        setIsGettingLocation(false);
      },
      (error) => {
        setIsGettingLocation(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Location access denied. Please select from dropdown.");
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
      }
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !userInfo.name ||
      !userInfo.birthDate ||
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

    setIsLoading(true);
    try {
      const context = `User Info:
      Name: ${userInfo.name}
      Birth Date: ${userInfo.birthDate}
      Birth Time: ${userInfo.birthTime}
      Birth Place: ${userInfo.birthPlace}
      Category: ${userInfo.selectedCategory}`;

      const response = await sendMessage({
        question: `${context}\n\nUser Question: ${question}`,
      });

      if (!response?.success) {
        alert(response?.message || "Failed to send message");
      } else {
        setQuestion("");
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
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow flex flex-col items-center px-4 py-8 bg-gray-50">
        {showForm ? (
          // ===== User Info Form =====
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
            <h2 className="text-3xl font-semibold text-amber-600 mb-6 text-center">
              Fill Your Birth Details
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
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
              <div className="flex gap-3">
                <input
                  type="date"
                  value={userInfo.birthDate}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, birthDate: e.target.value })
                  }
                  className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
                  required
                />
                <input
                  type="time"
                  value={userInfo.birthTime}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, birthTime: e.target.value })
                  }
                  className="w-1/2 p-3 border rounded-md focus:ring-amber-400"
                  required
                />
              </div>
              
              {/* Birth Place with Dropdown and Location Detection */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Birth Place
                  </label>
                  <button
                    type="button"
                    onClick={getSimpleLocation}
                    disabled={isGettingLocation}
                    className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200 transition disabled:opacity-50"
                  >
                    {isGettingLocation ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <Navigation className="w-3 h-3" />
                    )}
                    Get Current Location
                  </button>
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
                            placeholder="Search locations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                      
                      {/* Locations List */}
                      <div className="max-h-48 overflow-y-auto">
                        {filteredLocations.length > 0 ? (
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
                        ) : (
                          <div className="px-4 py-3 text-center text-gray-500">
                            No locations found
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
                chats.map((chat, idx) => {
                  // If the backend stored the whole user context (User Info: ... User Question: ...)
                  // extract only the actual user question text to avoid showing personal info in UI.
                  const isUser = Boolean(chat?.question);
                  let displayQuestion = "";
                  if (isUser && typeof chat.question === "string") {
                    if (chat.question.includes("User Question:")) {
                      displayQuestion = chat.question.split("User Question:").pop().trim();
                    } else {
                      // Fallback: try to remove the 'User Info:' prefix if present
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
                        <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl inline-block max-w-[75%] shadow-sm">
                          {chat.answer}
                        </div>
                      )}
                    </div>
                  );
                })
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