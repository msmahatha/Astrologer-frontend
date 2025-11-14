// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import { User, Calendar, Clock, MapPin } from "lucide-react";
// // // // import Header from "./../layout/Header";
// // // // import Footer from "./../layout/Footer";
// // // // import KundliModal from "../KundliModal";
// // // // import useKundliStore from "../../stores/useKundliStore";

// // // // export default function KundliForm() {
// // // //   const [display, setDisplay] = useState(false);
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     birth_date: "",
// // // //     birth_time: "",
// // // //     place: "",
// // // //     latitude: null,
// // // //     longitude: null,
// // // //     gender: "",
// // // //   });

// // // //   const placeInputRef = useRef(null);

// // // //   useEffect(() => {
// // // //     // Load Google Places script only if an API key is provided in env (Vite expects VITE_ prefix)
// // // //     const googleKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "AIzaSyAoBl7NNCqtw_7g9K7bWrPq1m3ZI6P2_g8";
// // // //     if (!googleKey) return; // no key, keep free-text input

// // // //     // if already loaded, initialize
// // // //     const initAutocomplete = () => {
// // // //       if (!window.google || !window.google.maps || !window.google.maps.places) return;
// // // //       const input = placeInputRef.current;
// // // //       if (!input) return;

// // // //       const autocomplete = new window.google.maps.places.Autocomplete(input, {
// // // //         // you can restrict by country or types if desired
// // // //         // componentRestrictions: { country: 'in' },
// // // //       });

// // // //       autocomplete.addListener("place_changed", () => {
// // // //         const place = autocomplete.getPlace();
// // // //         // formatted_address is usually available, fallback to name
// // // //         const formatted = place.formatted_address || place.name || input.value;
// // // //         const lat = place.geometry?.location?.lat?.() ?? null;
// // // //         const lng = place.geometry?.location?.lng?.() ?? null;

// // // //         setFormData(prev => ({ ...prev, place: formatted, latitude: lat, longitude: lng }));
// // // //       });
// // // //     };

// // // //     // If script already exists and google object ready
// // // //     if (window.google && window.google.maps && window.google.maps.places) {
// // // //       initAutocomplete();
// // // //       return;
// // // //     }

// // // //     // Inject script
// // // //     const scriptId = "gmaps-places-script";
// // // //     if (!document.getElementById(scriptId)) {
// // // //       const s = document.createElement("script");
// // // //       s.id = scriptId;
// // // //       s.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=places`;
// // // //       s.async = true;
// // // //       s.defer = true;
// // // //       s.onload = initAutocomplete;
// // // //       s.onerror = () => console.error("Failed to load Google Maps script");
// // // //       document.head.appendChild(s);
// // // //     } else {
// // // //       // script present but maybe not initialized yet
// // // //       const checkInterval = setInterval(() => {
// // // //         if (window.google && window.google.maps && window.google.maps.places) {
// // // //           clearInterval(checkInterval);
// // // //           initAutocomplete();
// // // //         }
// // // //       }, 200);
// // // //     }
// // // //   }, []);

// // // //   const {generateKundli,kundli,loading} = useKundliStore();

// // // //   const handleSubmit = async(e) => {
// // // //     e.preventDefault();
// // // //     console.log("Form Data:", formData);

// // // //     const { name, birth_date, birth_time, place, gender } = formData;

// // // //   if (!name || !birth_date || !birth_time || !place || !gender) {
// // // //     return alert("Please fill in all fields, including gender.");
// // // //   }

// // // //     try {
// // // //       await generateKundli(formData);
// // // //       setDisplay(true);
// // // //     } catch (error) {
// // // //       console.error("Error generating kundli:", error);
// // // //       alert("Failed to generate kundli. Please try again.");
// // // //       setDisplay(false);
// // // //     }
// // // //   }

// // // //   return (
// // // //     <>
// // // //       {/* ✅ Header at top */}
// // // //       <Header />

// // // //       {/* Main Content */}
// // // //       <div
// // // //         className="min-h-screen flex items-center justify-center md:justify-end p-4 sm:p-6 bg-gray-50 relative"
// // // //         style={{
// // // //           backgroundImage: "url('./Wheel2-1.png')",
// // // //           backgroundSize: "auto 100vh",
// // // //           backgroundPosition: "left top",
// // // //           backgroundRepeat: "no-repeat",
// // // //         }}
// // // //       >
// // // //         <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl z-10">
// // // //           <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center md:text-left">
// // // //             Your Bio Data
// // // //           </h2>

// // // //           {/* Name */}
// // // //           <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
// // // //             <User className="text-yellow-600 w-5 h-5 mr-2" />
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Enter name"
// // // //               value={formData.name}
// // // //               onChange={(e) =>
// // // //                 setFormData({ ...formData, name: e.target.value })
// // // //               }
// // // //               className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
// // // //             />
// // // //           </div>

// // // //           {/* DOB and Time */}
// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
// // // //             <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
// // // //               <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
// // // //               <input
// // // //                 type="date"
// // // //                 value={formData.birth_date}
// // // //                 onChange={(e) =>
// // // //                   setFormData({ ...formData, birth_date: e.target.value })
// // // //                 }
// // // //                 className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
// // // //               <Clock className="text-yellow-600 w-5 h-5 mr-2" />
// // // //               <input
// // // //                 type="time"
// // // //                 value={formData.birth_time}
// // // //                 onChange={(e) =>
// // // //                   setFormData({ ...formData, birth_time: e.target.value })
// // // //                 }
// // // //                 className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           {/* Location */}
// // // //           <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
// // // //             <MapPin className="text-yellow-600 w-5 h-5 mr-2" />
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Location"
// // // //               value={formData.place}
// // // //               onChange={(e) =>
// // // //                 setFormData({ ...formData, place: e.target.value })
// // // //               }
// // // //               className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
// // // //             />
// // // //           </div>

// // // //           {/* ✅ Gender Selection */}
// // // //           <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
// // // //             <button
// // // //               onClick={() => setFormData({ ...formData, gender: "Male" })}
// // // //               className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
// // // //                 formData.gender === "Male"
// // // //                   ? "bg-amber-500 text-white"
// // // //                   : "bg-white text-amber-500 border-yellow-400"
// // // //               }`}
// // // //             >
// // // //               Male
// // // //             </button>
// // // //             <button
// // // //               onClick={() => setFormData({ ...formData, gender: "Female" })}
// // // //               className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
// // // //                 formData.gender === "Female"
// // // //                   ? "bg-amber-500 text-white"
// // // //                   : "bg-white text-amber-500 border-amber-500"
// // // //               }`}
// // // //             >
// // // //               Female
// // // //             </button>
// // // //           </div>

// // // //           {/* Submit Button */}
// // // //           <div className="flex justify-center">
// // // //            <button
// // // //   onClick={handleSubmit}
// // // //   disabled={loading}
// // // //   className={`w-full sm:w-2/3 md:w-1/3 py-3 rounded-xl font-medium text-sm sm:text-base transition
// // // //     ${loading ? "bg-amber-400 cursor-not-allowed" : "bg-amber-500 hover:bg-yellow-700 text-white"}`}
// // // // >
// // // //   {loading ? "Generating..." : "Generate Your Kundli"}
// // // // </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Modal */}
// // // //         {display && kundli && (
// // // //   <KundliModal
// // // //     isOpen={display}
// // // //     onClose={() => setDisplay(false)}
// // // //     data={kundli}
// // // //     loading={loading}
// // // //   />
// // // // )}
// // // //       </div>

// // // //       {/* ✅ Footer */}
// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }






// // // import React, { useState, useEffect, useRef } from "react";
// // // import { User, Calendar, Clock, MapPin } from "lucide-react";
// // // import Header from "./../layout/Header";
// // // import Footer from "./../layout/Footer";
// // // import KundliModal from "../KundliModal";
// // // import useKundliStore from "../../stores/useKundliStore";

// // // export default function KundliForm() {
// // //   const [display, setDisplay] = useState(false);
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     birth_date: "",
// // //     birth_time: "",
// // //     place: "",
// // //     latitude: null,
// // //     longitude: null,
// // //     gender: "",
// // //   });

// // //   const [scriptLoaded, setScriptLoaded] = useState(false);
// // //   const placeInputRef = useRef(null);
// // //   const autocompleteRef = useRef(null);

// // //   // Your Google Maps API key
// // //   const googleKey = "AIzaSyAoBl7NNCqtw_7g9K7bWrPq1m3ZI6P2_g8";

// // //   useEffect(() => {
// // //     // Check if Google Maps API is already loaded
// // //     if (window.google && window.google.maps && window.google.maps.places) {
// // //       setScriptLoaded(true);
// // //       initializeAutocomplete();
// // //       return;
// // //     }

// // //     // Load Google Places script
// // //     const loadGoogleMapsScript = () => {
// // //       const scriptId = "google-maps-places-script";
      
// // //       // Don't reload if script already exists
// // //       if (document.getElementById(scriptId)) {
// // //         const checkGoogle = setInterval(() => {
// // //           if (window.google && window.google.maps && window.google.maps.places) {
// // //             clearInterval(checkGoogle);
// // //             setScriptLoaded(true);
// // //             initializeAutocomplete();
// // //           }
// // //         }, 100);
// // //         return;
// // //       }

// // //       // Create and load new script
// // //       const script = document.createElement("script");
// // //       script.id = scriptId;
// // //       script.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=places`;
// // //       script.async = true;
// // //       script.defer = true;
      
// // //       script.onload = () => {
// // //         setScriptLoaded(true);
// // //         initializeAutocomplete();
// // //       };
      
// // //       script.onerror = () => {
// // //         console.error("Failed to load Google Maps script");
// // //         setScriptLoaded(false);
// // //       };
      
// // //       document.head.appendChild(script);
// // //     };

// // //     loadGoogleMapsScript();
// // //   }, [googleKey]);

// // //   const initializeAutocomplete = () => {
// // //     if (!window.google || !window.google.maps || !window.google.maps.places) {
// // //       console.error("Google Maps API not available");
// // //       return;
// // //     }

// // //     if (!placeInputRef.current) {
// // //       console.error("Place input reference not available");
// // //       return;
// // //     }

// // //     // Initialize autocomplete
// // //     const autocomplete = new window.google.maps.places.Autocomplete(
// // //       placeInputRef.current,
// // //       {
// // //         types: ['(cities)'],
// // //         componentRestrictions: { country: 'in' }, // Restrict to India, remove if global needed
// // //       }
// // //     );

// // //     autocompleteRef.current = autocomplete;

// // //     autocomplete.addListener("place_changed", () => {
// // //       const place = autocomplete.getPlace();
      
// // //       if (!place.geometry) {
// // //         console.warn("No details available for input: '" + place.name + "'");
// // //         return;
// // //       }

// // //       const formattedAddress = place.formatted_address || place.name || "";
// // //       const lat = place.geometry.location.lat();
// // //       const lng = place.geometry.location.lng();

// // //       setFormData(prev => ({
// // //         ...prev,
// // //         place: formattedAddress,
// // //         latitude: lat,
// // //         longitude: lng
// // //       }));
// // //     });
// // //   };

// // //   const { generateKundli, kundli, loading } = useKundliStore();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     console.log("Form Data:", formData);

// // //     const { name, birth_date, birth_time, place, gender } = formData;

// // //     if (!name || !birth_date || !birth_time || !place || !gender) {
// // //       return alert("Please fill in all fields, including gender.");
// // //     }

// // //     try {
// // //       await generateKundli(formData);
// // //       setDisplay(true);
// // //     } catch (error) {
// // //       console.error("Error generating kundli:", error);
// // //       alert("Failed to generate kundli. Please try again.");
// // //       setDisplay(false);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <Header />

// // //       {/* Main Content */}
// // //       <div
// // //         className="min-h-screen flex items-center justify-center md:justify-end p-4 sm:p-6 bg-gray-50 relative"
// // //         style={{
// // //           backgroundImage: "url('./Wheel2-1.png')",
// // //           backgroundSize: "auto 100vh",
// // //           backgroundPosition: "left top",
// // //           backgroundRepeat: "no-repeat",
// // //         }}
// // //       >
// // //         <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl z-10">
// // //           <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center md:text-left">
// // //             Your Bio Data
// // //           </h2>

// // //           <form onSubmit={handleSubmit}>
// // //             {/* Name */}
// // //             <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
// // //               <User className="text-yellow-600 w-5 h-5 mr-2" />
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter name"
// // //                 value={formData.name}
// // //                 onChange={(e) =>
// // //                   setFormData({ ...formData, name: e.target.value })
// // //                 }
// // //                 className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* DOB and Time */}
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
// // //               <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
// // //                 <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
// // //                 <input
// // //                   type="date"
// // //                   value={formData.birth_date}
// // //                   onChange={(e) =>
// // //                     setFormData({ ...formData, birth_date: e.target.value })
// // //                   }
// // //                   className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
// // //                 <Clock className="text-yellow-600 w-5 h-5 mr-2" />
// // //                 <input
// // //                   type="time"
// // //                   value={formData.birth_time}
// // //                   onChange={(e) =>
// // //                     setFormData({ ...formData, birth_time: e.target.value })
// // //                   }
// // //                   className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
// // //                   required
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Location with Google Places Autocomplete */}
// // //             <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
// // //               <MapPin className="text-yellow-600 w-5 h-5 mr-2" />
// // //               <input
// // //                 ref={placeInputRef}
// // //                 type="text"
// // //                 placeholder="Enter location (city, place...)"
// // //                 value={formData.place}
// // //                 onChange={(e) =>
// // //                   setFormData({ ...formData, place: e.target.value })
// // //                 }
// // //                 className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
// // //                 required
// // //               />
// // //             </div>
            
// // //             {!scriptLoaded && (
// // //               <div className="text-xs text-gray-500 mb-2 text-center">
// // //                 Location autocomplete loading...
// // //               </div>
// // //             )}

// // //             {/* Gender Selection */}
// // //             <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
// // //               <button
// // //                 type="button"
// // //                 onClick={() => setFormData({ ...formData, gender: "Male" })}
// // //                 className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
// // //                   formData.gender === "Male"
// // //                     ? "bg-amber-500 text-white border-amber-500"
// // //                     : "bg-white text-amber-500 border-yellow-400 hover:bg-amber-50"
// // //                 }`}
// // //               >
// // //                 Male
// // //               </button>
// // //               <button
// // //                 type="button"
// // //                 onClick={() => setFormData({ ...formData, gender: "Female" })}
// // //                 className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
// // //                   formData.gender === "Female"
// // //                     ? "bg-amber-500 text-white border-amber-500"
// // //                     : "bg-white text-amber-500 border-yellow-400 hover:bg-amber-50"
// // //                 }`}
// // //               >
// // //                 Female
// // //               </button>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <div className="flex justify-center">
// // //               <button
// // //                 type="submit"
// // //                 disabled={loading}
// // //                 className={`w-full sm:w-2/3 md:w-1/3 py-3 rounded-xl font-medium text-sm sm:text-base transition
// // //                   ${loading 
// // //                     ? "bg-amber-400 cursor-not-allowed text-white" 
// // //                     : "bg-amber-500 hover:bg-amber-600 text-white"}`}
// // //               >
// // //                 {loading ? "Generating..." : "Generate Your Kundli"}
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>

// // //         {/* Modal */}
// // //         {display && kundli && (
// // //           <KundliModal
// // //             isOpen={display}
// // //             onClose={() => setDisplay(false)}
// // //             data={kundli}
// // //             loading={loading}
// // //           />
// // //         )}
// // //       </div>

// // //       <Footer />
// // //     </>
// // //   );
// // // }










// // import React, { useState, useEffect, useRef } from "react";
// // import { User, Calendar, Clock, MapPin, Navigation, Loader2 } from "lucide-react";
// // import Header from "./../layout/Header";
// // import Footer from "./../layout/Footer";
// // import KundliModal from "../KundliModal";
// // import useKundliStore from "../../stores/useKundliStore";

// // export default function KundliForm() {
// //   const [display, setDisplay] = useState(false);
// //   const [isGettingLocation, setIsGettingLocation] = useState(false);
// //   const [locationError, setLocationError] = useState("");
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     birth_date: "",
// //     birth_time: "",
// //     place: "",
// //     latitude: null,
// //     longitude: null,
// //     gender: "",
// //   });

// //   const placeInputRef = useRef(null);

// //   // Initialize Google Places Autocomplete when API is available
// //   const initializeAutocomplete = () => {
// //     try {
// //       if (!window.google || !window.google.maps || !window.google.maps.places) return;
// //       const input = placeInputRef.current;
// //       if (!input) return;

// //       const autocomplete = new window.google.maps.places.Autocomplete(input, {
// //         types: ['(cities)'],
// //         componentRestrictions: { country: 'in' },
// //       });

// //       autocomplete.addListener('place_changed', () => {
// //         const place = autocomplete.getPlace();
// //         if (!place || !place.geometry) {
// //           console.warn("No details available for selected place");
// //           return;
// //         }
// //         const formattedAddress = place.formatted_address || place.name || input.value;
// //         const lat = place.geometry.location.lat();
// //         const lng = place.geometry.location.lng();
// //         setFormData(prev => ({ ...prev, place: formattedAddress, latitude: lat, longitude: lng }));
// //       });
// //     } catch (err) {
// //       console.error('initializeAutocomplete error', err);
// //     }
// //   };

// //   // Function to get current location using Google Maps Geocoding API
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
          
// //           // Using Google Maps Geocoding API to get address from coordinates
// //           const response = await fetch(
// //             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAoBl7NNCqtw_7g9K7bWrPq1m3ZI6P2_g8`
// //           );
          
// //           const data = await response.json();
          
// //           if (data.status === "OK" && data.results.length > 0) {
// //             const address = data.results[0].formatted_address;
// //             setFormData(prev => ({
// //               ...prev,
// //               place: address,
// //               latitude: latitude,
// //               longitude: longitude
// //             }));
// //           } else {
// //             setLocationError("Could not retrieve address from coordinates.");
// //           }
// //         } catch (error) {
// //           console.error("Error getting location:", error);
// //           setLocationError("Failed to get location. Please enter manually.");
// //         } finally {
// //           setIsGettingLocation(false);
// //         }
// //       },
// //       (error) => {
// //         setIsGettingLocation(false);
// //         switch (error.code) {
// //           case error.PERMISSION_DENIED:
// //             setLocationError("Location access denied. Please enable location permissions or enter manually.");
// //             break;
// //           case error.POSITION_UNAVAILABLE:
// //             setLocationError("Location information unavailable.");
// //             break;
// //           case error.TIMEOUT:
// //             setLocationError("Location request timed out.");
// //             break;
// //           default:
// //             // setLocationError("An unknown error occurred.");
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

// //   // Alternative: Simple location detection without detailed address
// //   const getSimpleLocation = () => {
// //     if (!navigator.geolocation) {
// //       setLocationError("Geolocation is not supported by this browser.");
// //       return;
// //     }

// //     setIsGettingLocation(true);
// //     setLocationError("");

// //     navigator.geolocation.getCurrentPosition(
// //       (position) => {
// //         const { latitude, longitude } = position.coords;
// //         // Display coordinates or use a simple reverse geocoding service
// //         const locationText = `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
// //         setFormData(prev => ({
// //           ...prev,
// //           place: locationText,
// //           latitude: latitude,
// //           longitude: longitude
// //         }));
// //         setIsGettingLocation(false);
// //       },
// //       (error) => {
// //         setIsGettingLocation(false);
// //         switch (error.code) {
// //           case error.PERMISSION_DENIED:
// //             setLocationError("Location access denied. Please enable location permissions.");
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
// //       }
// //     );
// //   };

// //   useEffect(() => {
// //     // Load Google Places script for autocomplete (optional enhancement)
// //     const googleKey = "AIzaSyAoBl7NNCqtw_7g9K7bWrPq1m3ZI6P2_g8";
    
// //     if (!window.google || !window.google.maps || !window.google.maps.places) {
// //       const scriptId = "google-maps-places-script";
// //       if (!document.getElementById(scriptId)) {
// //         const script = document.createElement("script");
// //         script.id = scriptId;
// //         // Add loading=async query param (recommended by Google) to avoid the "loaded directly without loading=async" warning
// //         script.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=places&loading=async&v=weekly`;
// //         script.async = true;
// //         script.defer = true;
// //         // When loaded, initialize autocomplete
// //         script.onload = () => {
// //           initializeAutocomplete();
// //         };
// //         script.onerror = () => {
// //           console.error("Failed to load Google Maps script");
// //         };
// //         document.head.appendChild(script);
// //       } else {
// //         // script exists but API might not be ready yet; try to init after short delay
// //         const check = setInterval(() => {
// //           if (window.google && window.google.maps && window.google.maps.places) {
// //             clearInterval(check);
// //             initializeAutocomplete();
// //           }
// //         }, 200);
// //       }
// //     } else {
// //       // already present
// //       initializeAutocomplete();
// //     }
// //   }, []);

// //   const { generateKundli, kundli, loading } = useKundliStore();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log("Form Data:", formData);

// //     const { name, birth_date, birth_time, place, gender, latitude, longitude } = formData;

// //     if (!name || !birth_date || !birth_time || !place || !gender) {
// //       return alert("Please fill in all fields, including gender.");
// //     }

// //     // If we don't have coordinates, ask the user to pick from autocomplete or use location detection.
// //     if ((latitude === null || longitude === null) || Number.isNaN(latitude) || Number.isNaN(longitude)) {
// //       // allow if place looks like a coordinate string (e.g., 'Lat: 22.1234, Lng: 88.1234' or contains a plus-code)
// //       const placeLower = (place || "").toLowerCase();
// //       const looksLikeCoords = /lat:\s*-?\d+(\.\d+)?[,\s]+lng:\s*-?\d+(\.\d+)?/.test(placeLower) || /\d+\.\d+[,\s]+-?\d+\.\d+/.test(placeLower) || /\+[0-9A-Z]{4}\+/.test(place);

// //       if (!looksLikeCoords) {
// //         // Try a simple client-side geocode using Nominatim (OpenStreetMap) as a fallback before failing.
// //         try {
// //           const geoUrl = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(place)}`;
// //           const geoResp = await fetch(geoUrl, {
// //             headers: {
// //               "Accept": "application/json",
// //             },
// //           });

// //           if (geoResp.ok) {
// //             const geoJson = await geoResp.json();
// //             if (Array.isArray(geoJson) && geoJson.length > 0) {
// //               const first = geoJson[0];
// //               const lat = parseFloat(first.lat);
// //               const lon = parseFloat(first.lon);
// //               if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
// //                 // update formData with coordinates and continue
// //                 setFormData(prev => ({ ...prev, latitude: lat, longitude: lon }));
// //                 // assign to local vars for later
// //                 // eslint-disable-next-line prefer-destructuring
// //                 formData.latitude = lat;
// //                 // eslint-disable-next-line prefer-destructuring
// //                 formData.longitude = lon;
// //               } else {
// //                 return alert("Could not determine coordinates from the provided place. Please use autocomplete or 'Get Current Location'.");
// //               }
// //             } else {
// //               return alert("No geocoding results found for this place. Please select from suggestions or use 'Get Current Location'.");
// //             }
// //           } else {
// //             // If nominatim fails, inform the user rather than silently failing
// //             console.warn("Nominatim geocode failed with status", geoResp.status);
// //             return alert("Unable to geocode the place automatically. Please select from suggestions or use 'Get Current Location'.");
// //           }
// //         } catch (err) {
// //           console.error("Client geocode error:", err);
// //           return alert("Error trying to geocode place locally. Please select from suggestions or use 'Get Current Location'.");
// //         }
// //       }
// //     }

// //     // Compose payload including both snake_case and camelCase variants to match possible backend expectations
// //     const payload = {
// //       name,
// //       birth_date,
// //       birthDate: birth_date,
// //       birth_time,
// //       birthTime: birth_time,
// //       place,
// //       latitude,
// //       longitude,
// //       gender,
// //     };

// //     try {
// //       const result = await generateKundli(payload);
// //       if (result && result.success === false) {
// //         // show backend message if provided
// //         alert(result.message || "Failed to generate kundli. See console for details.");
// //         setDisplay(false);
// //         return;
// //       }
// //       setDisplay(true);
// //     } catch (error) {
// //       console.error("Error generating kundli:", error);
// //       alert("Failed to generate kundli. Please try again.");
// //       setDisplay(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <Header />

// //       {/* Main Content */}
// //       <div
// //         className="min-h-screen flex items-center justify-center md:justify-end p-4 sm:p-6 bg-[#F9F9EF] relative"
// //         style={{
// //           backgroundImage: "url('./Wheel2-1.png')",
// //           backgroundSize: "auto 100vh",
// //           backgroundPosition: "left top",
// //           backgroundRepeat: "no-repeat",
// //         }}
// //       >
// //         <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl z-10">
// //           <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center md:text-left">
// //             Your Bio Data
// //           </h2>

// //           <form onSubmit={handleSubmit}>
// //             {/* Name */}
// //             <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
// //               <User className="text-yellow-600 w-5 h-5 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="Enter name"
// //                 value={formData.name}
// //                 onChange={(e) =>
// //                   setFormData({ ...formData, name: e.target.value })
// //                 }
// //                 className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
// //                 required
// //               />
// //             </div>

// //             {/* DOB and Time */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
// //               <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
// //                 <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
// //                 <input
// //                   type="date"
// //                   value={formData.birth_date}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, birth_date: e.target.value })
// //                   }
// //                   className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
// //                   required
// //                 />
// //               </div>
// //               <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
// //                 <Clock className="text-yellow-600 w-5 h-5 mr-2" />
// //                 <input
// //                   type="time"
// //                   value={formData.birth_time}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, birth_time: e.target.value })
// //                   }
// //                   className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             {/* Location with Detection */}
// //             <div className="mb-4">
// //               <div className="flex items-center justify-between mb-2">
// //                 <label className="text-sm font-medium text-gray-700 flex items-center">
// //                   <MapPin className="w-4 h-4 mr-1" />
// //                   Birth Place
// //                 </label>
// //                 <button
// //                   type="button"
// //                   onClick={getCurrentLocation}
// //                   disabled={isGettingLocation}
// //                   className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-lg hover:bg-amber-200 transition disabled:opacity-50"
// //                 >
// //                   {isGettingLocation ? (
// //                     <Loader2 className="w-3 h-3 animate-spin" />
// //                   ) : (
// //                     <Navigation className="w-3 h-3" />
// //                   )}
// //                   Get Current Location
// //                 </button>
// //               </div>

// //               <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
// //                 <MapPin className="text-yellow-600 w-5 h-5 mr-2" />
// //                 <input
// //                   ref={placeInputRef}
// //                   type="text"
// //                   placeholder="Enter location or use location detection"
// //                   value={formData.place}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, place: e.target.value })
// //                   }
// //                   className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
// //                   required
// //                 />
// //               </div>

// //               {/* Location Status Messages */}
// //               {locationError && (
// //                 <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
// //                   <MapPin className="w-4 h-4" />
// //                   {locationError}
// //                 </p>
// //               )}
              
// //               {formData.place && !locationError && (
// //                 <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
// //                   <MapPin className="w-4 h-4" />
// //                   Location set: {formData.place}
// //                 </p>
// //               )}
// //               {formData.latitude && formData.longitude && (
// //                 <p className="text-gray-700 text-sm mt-1">
// //                   Coordinates: {Number(formData.latitude).toFixed(5)}, {Number(formData.longitude).toFixed(5)}
// //                 </p>
// //               )}
// //               {/* Warn if coordinates are not set - backend needs lat/lng to compute kundli reliably */}
// //               {/* {(!formData.latitude || !formData.longitude) && (
// //                 <p className="text-yellow-700 text-sm mt-2">
// //                   Please select a suggestion from the autocomplete or click "Get Current Location" so latitude & longitude are set. Submitting without coordinates may fail.
// //                 </p>
// //               )} */}
// //             </div>

// //             {/* Gender Selection */}
// //             <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
// //               <button
// //                 type="button"
// //                 onClick={() => setFormData({ ...formData, gender: "Male" })}
// //                 className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
// //                   formData.gender === "Male"
// //                     ? "bg-amber-500 text-white border-amber-500"
// //                     : "bg-white text-amber-500 border-yellow-400 hover:bg-amber-50"
// //                 }`}
// //               >
// //                 Male
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={() => setFormData({ ...formData, gender: "Female" })}
// //                 className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
// //                   formData.gender === "Female"
// //                     ? "bg-amber-500 text-white border-amber-500"
// //                     : "bg-white text-amber-500 border-yellow-400 hover:bg-amber-50"
// //                 }`}
// //               >
// //                 Female
// //               </button>
// //             </div>

// //             {/* Submit Button */}
// //             <div className="flex justify-center">
// //               <button
// //                 type="submit"
// //                 disabled={loading || !formData.latitude || !formData.longitude}
// //                 title={(!formData.latitude || !formData.longitude) ? "Set latitude & longitude before submitting" : ""}
// //                 className={`w-full sm:w-2/3 md:w-1/3 py-3 rounded-xl font-medium text-sm sm:text-base transition
// //                   ${loading || !formData.latitude || !formData.longitude
// //                     ? "bg-amber-400 cursor-not-allowed text-white"
// //                     : "bg-amber-500 hover:bg-amber-600 text-white"}`}
// //               >
// //                 {loading ? "Generating..." : "Generate Your Kundli"}
// //               </button>
// //             </div>
// //           </form>
// //         </div>

// //         {/* Modal */}
// //         {display && kundli && (
// //           <KundliModal
// //             isOpen={display}
// //             onClose={() => setDisplay(false)}
// //             data={kundli}
// //             loading={loading}
// //           />
// //         )}
// //       </div>

// //       <Footer />
// //     </>
// //   );
// // }



// import React, { useState, useEffect, useRef } from "react";
// import { User, Calendar, Clock, MapPin, Navigation, Loader2, ChevronDown, Search } from "lucide-react";
// import Header from "./../layout/Header";
// import Footer from "./../layout/Footer";
// import KundliModal from "../KundliModal";
// import useKundliStore from "../../stores/useKundliStore";

// export default function KundliForm() {
//   const [display, setDisplay] = useState(false);
//   const [isGettingLocation, setIsGettingLocation] = useState(false);
//   const [locationError, setLocationError] = useState("");
//   const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredLocations, setFilteredLocations] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
  
//   const [formData, setFormData] = useState({
//     name: "",
//     birth_date: "",
//     birth_time: "",
//     place: "",
//     latitude: null,
//     longitude: null,
//     gender: "",
//   });

//   const dropdownRef = useRef(null);
//   const searchTimeoutRef = useRef(null);

//   // Base URL for your Node.js backend
//   const API_BASE_URL = window.location.hostname === 'localhost' 
//     ? 'http://localhost:5000/api' 
//     : 'http://localhost:5000/api'; // Replace with your actual backend domain

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

//   // Function to get current location using Node.js proxy
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
//             setFormData(prev => ({
//               ...prev,
//               place: address,
//               latitude: latitude,
//               longitude: longitude
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
//             // setLocationError("An unknown error occurred.");
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

//   const handleLocationSelect = (location) => {
//     setFormData(prev => ({
//       ...prev,
//       place: location
//     }));
//     setIsLocationDropdownOpen(false);
//     setSearchQuery("");
//     setLocationError("");
    
//     // Note: For exact coordinates, you might want to geocode the selected location
//     // This is a simplified version - you might want to add geocoding for selected locations
//   };

//   const handleDropdownToggle = () => {
//     setIsLocationDropdownOpen(!isLocationDropdownOpen);
//     setSearchQuery("");
//     setFilteredLocations([]);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const { generateKundli, kundli, loading } = useKundliStore();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);

//     const { name, birth_date, birth_time, place, gender, latitude, longitude } = formData;

//     if (!name || !birth_date || !birth_time || !place || !gender) {
//       return alert("Please fill in all fields, including gender.");
//     }

//     // If we don't have coordinates, try to geocode the selected place
//     if ((latitude === null || longitude === null) || Number.isNaN(latitude) || Number.isNaN(longitude)) {
//       try {
//         // Use your proxy for geocoding
//         const response = await fetch(`${API_BASE_URL}/reverse-geocode`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ address: place })
//         });
        
//         if (response.ok) {
//           const data = await response.json();
//           if (data.status === 'OK' && data.results && data.results.length > 0) {
//             const location = data.results[0].geometry.location;
//             const lat = location.lat;
//             const lng = location.lng;
            
//             setFormData(prev => ({ ...prev, latitude: lat, longitude: lng }));
//             formData.latitude = lat;
//             formData.longitude = lng;
//           } else {
//             return alert("Could not determine coordinates from the provided place. Please select from suggestions or use 'Get Current Location'.");
//           }
//         }
//         //  else {
//         //   return alert("Unable to geocode the place automatically. Please select from suggestions or use 'Get Current Location'.");
//         // }
//       } catch (err) {
//         console.error("Client geocode error:", err);
//         return alert("Error trying to geocode place. Please select from suggestions or use 'Get Current Location'.");
//       }
//     }

//     // Compose payload including both snake_case and camelCase variants to match possible backend expectations
//     const payload = {
//       name,
//       birth_date,
//       birthDate: birth_date,
//       birth_time,
//       birthTime: birth_time,
//       place,
//       latitude,
//       longitude,
//       gender,
//     };

//     try {
//       const result = await generateKundli(payload);
//       if (result && result.success === false) {
//         // show backend message if provided
//         alert(result.message || "Failed to generate kundli. See console for details.");
//         setDisplay(false);
//         return;
//       }
//       setDisplay(true);
//     } catch (error) {
//       console.error("Error generating kundli:", error);
//       alert("Failed to generate kundli. Please try again.");
//       setDisplay(false);
//     }
//   };

//   return (
//     <>
//       <Header />

//       {/* Main Content */}
//       <div
//         className="min-h-screen flex items-center justify-center md:justify-end p-4 sm:p-6 bg-[#F9F9EF] relative"
//         style={{
//           backgroundImage: "url('./Wheel2-1.png')",
//           backgroundSize: "auto 100vh",
//           backgroundPosition: "left top",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl z-10">
//           <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center md:text-left">
//             Your Bio Data
//           </h2>

//           <form onSubmit={handleSubmit}>
//             {/* Name */}
//             <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
//               <User className="text-yellow-600 w-5 h-5 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
//                 required
//               />
//             </div>

//             {/* DOB and Time */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
//                 <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
//                 <input
//                   type="date"
//                   value={formData.birth_date}
//                   onChange={(e) =>
//                     setFormData({ ...formData, birth_date: e.target.value })
//                   }
//                   className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
//                   required
//                 />
//               </div>
//               <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
//                 <Clock className="text-yellow-600 w-5 h-5 mr-2" />
//                 <input
//                   type="time"
//                   value={formData.birth_time}
//                   onChange={(e) =>
//                     setFormData({ ...formData, birth_time: e.target.value })
//                   }
//                   className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Location with Dropdown and Location Detection */}
//             <div className="mb-4">
//               <div className="flex items-center justify-between mb-2">
//                 <label className="text-sm font-medium text-gray-700 flex items-center">
//                   <MapPin className="w-4 h-4 mr-1" />
//                   Birth Place
//                 </label>
//                 <button
//                   type="button"
//                   onClick={getCurrentLocation}
//                   disabled={isGettingLocation}
//                   className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-lg hover:bg-amber-200 transition disabled:opacity-50"
//                 >
//                   {isGettingLocation ? (
//                     <Loader2 className="w-3 h-3 animate-spin" />
//                   ) : (
//                     <Navigation className="w-3 h-3" />
//                   )}
//                   Get Current Location
//                 </button>
//               </div>

//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   type="button"
//                   onClick={handleDropdownToggle}
//                   className="w-full flex items-center justify-between p-3 border border-yellow-400 rounded-md bg-white text-left"
//                 >
//                   <span className={formData.place ? "text-gray-800" : "text-gray-500"}>
//                     {formData.place || "Select your birth place"}
//                   </span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {isLocationDropdownOpen && (
//                   <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-hidden">
//                     {/* Search Input */}
//                     <div className="p-2 border-b">
//                       <div className="relative">
//                         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                         <input
//                           type="text"
//                           placeholder="Type 2+ letters to search real locations..."
//                           value={searchQuery}
//                           onChange={handleSearchChange}
//                           className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
//                           onClick={(e) => e.stopPropagation()}
//                         />
//                       </div>
//                     </div>
                    
//                     {/* Locations List */}
//                     <div className="max-h-48 overflow-y-auto">
//                       {isSearching ? (
//                         <div className="px-4 py-3 text-center text-gray-500">
//                           <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
//                           Searching real locations...
//                         </div>
//                       ) : filteredLocations.length > 0 ? (
//                         filteredLocations.map((location) => (
//                           <button
//                             key={location}
//                             type="button"
//                             onClick={() => handleLocationSelect(location)}
//                             className="w-full px-4 py-2 text-left hover:bg-amber-50 focus:bg-amber-50 focus:outline-none border-b border-gray-100 last:border-b-0"
//                           >
//                             {location}
//                           </button>
//                         ))
//                       ) : searchQuery.length > 0 ? (
//                         <div className="px-4 py-3 text-center text-gray-500">
//                           {searchQuery.length < 2 ? "Type at least 2 characters" : "No locations found"}
//                         </div>
//                       ) : (
//                         <div className="px-4 py-3 text-center text-gray-500">
//                           Start typing to search real locations from Google Maps
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Location Status Messages */}
//               {locationError && (
//                 <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
//                   <MapPin className="w-4 h-4" />
//                   {locationError}
//                 </p>
//               )}
              
//               {formData.place && !locationError && (
//                 <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
//                   <MapPin className="w-4 h-4" />
//                   Location selected: {formData.place}
//                 </p>
//               )}
//               {formData.latitude && formData.longitude && (
//                 <p className="text-gray-700 text-sm mt-1">
//                   Coordinates: {Number(formData.latitude).toFixed(5)}, {Number(formData.longitude).toFixed(5)}
//                 </p>
//               )}
//               {/* {(!formData.latitude || !formData.longitude) && formData.place && (
//                 <p className="text-yellow-700 text-sm mt-2">
//                   Coordinates will be automatically determined when you submit the form.
//                 </p>
//               )} */}
//             </div>

//             {/* Gender Selection */}
//             <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
//               <button
//                 type="button"
//                 onClick={() => setFormData({ ...formData, gender: "Male" })}
//                 className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
//                   formData.gender === "Male"
//                     ? "bg-amber-500 text-white border-amber-500"
//                     : "bg-white text-amber-500 border-yellow-400 hover:bg-amber-50"
//                 }`}
//               >
//                 Male
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setFormData({ ...formData, gender: "Female" })}
//                 className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
//                   formData.gender === "Female"
//                     ? "bg-amber-500 text-white border-amber-500"
//                     : "bg-white text-amber-500 border-yellow-400 hover:bg-amber-50"
//                 }`}
//               >
//                 Female
//               </button>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full sm:w-2/3 md:w-1/3 py-3 rounded-xl font-medium text-sm sm:text-base transition
//                   ${loading
//                     ? "bg-amber-400 cursor-not-allowed text-white"
//                     : "bg-amber-500 hover:bg-amber-600 text-white"}`}
//               >
//                 {loading ? "Generating..." : "Generate Your Kundli"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Modal */}
//         {display && kundli && (
//           <KundliModal
//             isOpen={display}
//             onClose={() => setDisplay(false)}
//             data={kundli}
//             loading={loading}
//           />
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// }
















import React, { useState, useEffect, useRef } from "react";
import { User, Calendar, Clock, MapPin, Navigation, Loader2, ChevronDown, Search } from "lucide-react";
import Header from "./../layout/Header";
import Footer from "./../layout/Footer";
import KundliModal from "../KundliModal";
import useKundliStore from "../../stores/useKundliStore";

export default function KundliForm() {
  const [display, setDisplay] = useState(false);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    birth_year: "",
    birth_month: "",
    birth_day: "",
    birth_time: "",
    place: "",
    latitude: null,
    longitude: null,
    gender: "",
  });

  const dropdownRef = useRef(null);
  const searchTimeoutRef = useRef(null);

  // Base URL for your Node.js backend
  const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'https://demoastrobackend.onrender.com/api' 
    : 'https://demoastrobackend.onrender.com/api';

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

  // Function to get current location using Node.js proxy
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
            setFormData(prev => ({
              ...prev,
              place: address,
              latitude: latitude,
              longitude: longitude
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

  const handleLocationSelect = (location) => {
    setFormData(prev => ({
      ...prev,
      place: location
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

  const { generateKundli, kundli, loading } = useKundliStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const { name, birth_year, birth_month, birth_day, birth_time, place, gender, latitude, longitude } = formData;

    if (!name || !birth_year || !birth_month || !birth_day || !birth_time || !place || !gender) {
      return alert("Please fill in all fields, including gender.");
    }

    // Format the date as YYYY-MM-DD for backend
    const formattedDate = `${birth_year}-${birth_month.padStart(2, '0')}-${birth_day.padStart(2, '0')}`;

    // If we don't have coordinates, try to geocode the selected place
    if ((latitude === null || longitude === null) || Number.isNaN(latitude) || Number.isNaN(longitude)) {
      try {
        const response = await fetch(`${API_BASE_URL}/reverse-geocode`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ address: place })
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'OK' && data.results && data.results.length > 0) {
            const location = data.results[0].geometry.location;
            const lat = location.lat;
            const lng = location.lng;
            
            setFormData(prev => ({ ...prev, latitude: lat, longitude: lng }));
            formData.latitude = lat;
            formData.longitude = lng;
          } else {
            return alert("Could not determine coordinates from the provided place. Please select from suggestions or use 'Get Current Location'.");
          }
        }
      } catch (err) {
        console.error("Client geocode error:", err);
        return alert("Error trying to geocode place. Please select from suggestions or use 'Get Current Location'.");
      }
    }

    // Compose payload with separate date fields and formatted date
    const payload = {
      name,
      birth_year,
      birth_month,
      birth_day,
      birth_date: formattedDate, // Send both formats for compatibility
      birthDate: formattedDate,
      birth_time,
      birthTime: birth_time,
      place,
      latitude,
      longitude,
      gender,
    };

    try {
      const result = await generateKundli(payload);
      if (result && result.success === false) {
        alert(result.message || "Failed to generate kundli. See console for details.");
        setDisplay(false);
        return;
      }
      setDisplay(true);
    } catch (error) {
      console.error("Error generating kundli:", error);
      alert("Failed to generate kundli. Please try again.");
      setDisplay(false);
    }
  };

  // Generate years, months, and days for dropdowns
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = [
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
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

  return (
    <>
      <Header />

      {/* Main Content */}
      <div
        className="min-h-screen flex items-center justify-center md:justify-end p-4 sm:p-6 bg-[#F9F9EF] relative"
        style={{
          backgroundImage: "url('./Wheel2-1.png')",
          backgroundSize: "auto 100vh",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl z-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center md:text-left">
            Your Bio Data
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2 mb-4">
              <User className="text-yellow-600 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-transparent outline-none flex-1 text-black placeholder:text-yellow-600 text-sm sm:text-base"
                required
              />
            </div>

            {/* DOB - Split into Year, Month, Day and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
              {/* Year */}
              <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
                <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
                <select
                  value={formData.birth_year}
                  onChange={(e) =>
                    setFormData({ ...formData, birth_year: e.target.value })
                  }
                  className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base w-full"
                  required
                >
                  <option value="">Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Month */}
              <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
                <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
                <select
                  value={formData.birth_month}
                  onChange={(e) =>
                    setFormData({ ...formData, birth_month: e.target.value })
                  }
                  className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base w-full"
                  required
                >
                  <option value="">Month</option>
                  {months.map(month => (
                    <option key={month.value} value={month.value}>{month.label}</option>
                  ))}
                </select>
              </div>

              {/* Day */}
              <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
                <Calendar className="text-yellow-600 w-5 h-5 mr-2" />
                <select
                  value={formData.birth_day}
                  onChange={(e) =>
                    setFormData({ ...formData, birth_day: e.target.value })
                  }
                  className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base w-full"
                  required
                >
                  <option value="">Day</option>
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>

              {/* Time */}
              <div className="flex items-center border border-yellow-400 rounded-md px-3 py-2">
                <Clock className="text-yellow-600 w-5 h-5 mr-2" />
                <input
                  type="time"
                  value={formData.birth_time}
                  onChange={(e) =>
                    setFormData({ ...formData, birth_time: e.target.value })
                  }
                  className="bg-transparent outline-none flex-1 text-black text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Location with Dropdown and Location Detection */}
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
          className="w-full flex items-center justify-between p-3 border border-yellow-400 rounded-md focus:ring-amber-400 bg-white text-left"
        >
          <span className={formData.place ? "text-gray-800" : "text-gray-500"}>
            {formData.place || "Select your birth place"}
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
      
      {formData.place && !locationError && (
        <p className="text-green-600 text-sm flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          Birth place selected: {formData.place}
        </p>
      )}
    </div>

    {/* Current Location */}
    <div className="space-y-2 pb-10">
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
          value={
            formData.latitude && formData.longitude
              ? `${Number(formData.latitude).toFixed(5)}, ${Number(formData.longitude).toFixed(5)}`
              : ""
          }
          readOnly
          placeholder="Your current location coordinates will appear here"
          className="w-full p-3 border border-[#fadb69] rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {locationError && (
        <p className="text-red-500 text-sm flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {locationError}
        </p>
      )}

      {formData.latitude && formData.longitude && !locationError && (
        <p className="text-green-600 text-sm flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          Current location fetched successfully!
        </p>
      )}
    </div>

  </div>
</div>


            {/* Gender Selection */}
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: "Male" })}
                className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
                  formData.gender === "Male"
                    ? "bg-amber-500 text-white border-amber-500"
                    : "bg-white text-amber-500 border-yellow-400 hover:bg-amber-50"
                }`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: "Female" })}
                className={`px-6 py-2 rounded-xl border text-sm sm:text-base transition ${
                  formData.gender === "Female"
                    ? "bg-amber-500 text-white border-amber-500"
                    : "bg-white text-amber-500 border-yellow-400 hover:bg-amber-50"
                }`}
              >
                Female
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-full sm:w-2/3 md:w-1/3 py-3 rounded-xl font-medium text-sm sm:text-base transition
                  ${loading
                    ? "bg-amber-400 cursor-not-allowed text-white"
                    : "bg-amber-500 hover:bg-amber-600 text-white"}`}
              >
                {loading ? "Generating..." : "Generate Your Kundli"}
              </button>
            </div>
          </form>
        </div>

        {/* Modal */}
        {display && kundli && (
          <KundliModal
            isOpen={display}
            onClose={() => setDisplay(false)}
            data={kundli}
            loading={loading}
          />
        )}
      </div>

      <Footer />
    </>
  );
}