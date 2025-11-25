// // App.jsx
// import React from "react";
// import Footer from "../layout/Footer";
// import MembershipPlans from "./Membership";
// import Header from "../layout/Header";

// export default function App() {
//   return (
//     <div className=" min-h-screen font-sans">
//       {/* Navbar */}
//       <Header/>

//       {/* Hero Section */}
//       <section className="bg-gray-50 flex items-center justify-center text-center gap-10 py-16 sm:px-6 px-2">
//         <img
//           src="/land5.jpeg"
//           alt="Astrology Wheel"
//           className=" sm:w-60 sm:h-60 w-28 h-28"
//         />
//         <div>
//           <h2 className="text-lg font-semibold text-amber-600 mb-2">
//             What is your sign ? 
//           </h2>
//         <h1 className="sm:text-5xl text-2xl font-semibold text-gray-800 mb-4">
//           Where Mystics Meet <br /> Logic
//         </h1>
//         <p className="text-gray-600 max-w-xl mx-auto text-sm">
//           Discover your cosmic path with celestial by your side.
//         </p>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="bg-gray-50 px-8 py-12">
//         <h2 className="text-center text-4xl font-semibold text-amber-600 mb-10">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           <div className="p-6 bg-gray-50 border-black border rounded-xl shadow-md hover:shadow-lg transition">
//             <img src="land1.jpeg" alt="Kundli" className="mx-auto w-60 h-60 mb-4" />
//             <h3 className="text-4xl mb-5 font-semibold text-gray-800 text-center">
//               Kundli Generation
//             </h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem animi velit. Illum sunt et iure, recusandae corrupti voluptas, in architecto autem consequatur aliquam non odio maiores itaque neque perferendis?</p>
//           </div>
//           <div className="p-6 bg-gray-50 border-black border rounded-xl shadow-md hover:shadow-lg transition">
//             <img src="land2.jpeg" alt="AI" className="mx-auto w-60 h-60 mb-4" />
//             <h3 className="text-4xl mb-5 font-semibold text-gray-800 text-center">
//               AI-Assisted Q&A
//             </h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem animi velit. Illum sunt et iure, recusandae corrupti voluptas, in architecto autem consequatur aliquam non odio maiores itaque neque perferendis?</p>
//           </div>
//           <div className="p-6 bg-gray-50 border-black border rounded-xl shadow-md hover:shadow-lg transition">
//             <img
//               src="land3.jpeg"
//               alt="Remedies"
//               className="mx-auto w-60 h-60 mb-4"
//             />
//             <h3 className="text-4xl mb-5 font-semibold text-gray-800 text-center">
//               Remedies Suggestions
//             </h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem animi velit. Illum sunt et iure, recusandae corrupti voluptas, in architecto autem consequatur aliquam non odio maiores itaque neque perferendis?</p>
//           </div>
//         </div>
//       </section>

//       {/* Membership Call-to-Action */}
//       <section className="text-center py-12 bg-gray-50 border border-amber-400">
//         <h2 className="text-4xl font-semibold text-gray-800">
//           Let’s Become Members
//         </h2>
//         <button className="mt-6 px-16 py-5 bg-amber-500 text-white font-semibold rounded-xl shadow hover:bg-amber-600">
//           Get Started
//         </button>
//       </section>

//       {/* Membership Plans */}
// <MembershipPlans/> 


//       {/* Astrology Signs */}
// <section className="px-8 py-12 bg-gray-50">
//   <div className="max-w-6xl mx-auto">
//     {/* Header */}
//     <div className="flex justify-between items-start mb-12">
//       <h2 className="text-3xl font-semibold max-w-md">
//         Understanding Science of Astrology
//       </h2>
//       <p className="text-sm text-gray-700 max-w-sm">
//         Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur sed
//         tellus ut vehicula eu consectetur elit sit. Nulla erat nunc nisi dui sed
//         cras semper vitae.
//       </p>
//     </div>

//     {/* Zodiac Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
//       {/* Left Column */}
//       <div className="space-y-10 relative mt-32">
//         {/* Aries */}
//         <div className="flex items-center space-x-6">
//           <img src="land13.jpeg" alt="" className="h-40 w-40" /> {/* Image placeholder */}
//           <div>
//             <h3 className="text-lg font-bold">ARIES</h3>
//             <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
//           </div>
//         </div>

//         {/* Taurus */}
//         <div className="flex items-center space-x-6">
//           <img src="land11.jpeg" alt="" className="h-40 w-40" />
//           <div>
//             <h3 className="text-lg font-bold">TAURUS</h3>
//             <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
//           </div>
//         </div>

//         {/* Gemini */}
//         <div className="flex items-center space-x-6">
//           <img src="land9.jpeg" alt="" className="h-40 w-40" />
//           <div>
//             <h3 className="text-lg font-bold">GEMINI</h3>
//             <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Column */}
//       <div className="space-y-10">
//         {/* Cancer */}
//         <div className="flex items-center space-x-6">
//           <img src="land7.jpeg" alt="" className="h-40 w-40" />
//           <div>
//             <h3 className="text-lg font-bold">CANCER</h3>
//             <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
//           </div>
//         </div>

//         {/* Leo */}
//         <div className="flex items-center space-x-6">
//           <img src="land4.jpeg" alt="" className="h-40 w-40" />
//           <div>
//             <h3 className="text-lg font-bold">LEO</h3>
//             <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
//           </div>
//         </div>

//         {/* Virgo */}
//         <div className="flex items-center space-x-6">
//           <img src="land8.jpeg" alt="" className="h-40 w-40" />
//           <div>
//             <h3 className="text-lg font-bold">VIRGO</h3>
//             <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Button */}
//     <div className="flex justify-center mt-12">
//       <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">
//         See More
//       </button>
//     </div>
//   </div>
// </section>

// <Footer/>
//     </div>
//   );
// }




// LandingPage.jsx
import React from "react";
import Footer from "../layout/Footer";
import MembershipPlans from "./Membership";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";
import DailyHoroscopeSection from "./DailyHoroscopeSection";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="bg-[#F9F9EF] flex flex-col sm:flex-row items-center justify-center text-center sm:text-left lg:gap-25 gap-10 py-16 sm:px-10 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <img
            src="/hero.png"
            alt="Astrology Wheel"
            className="sm:w-72 sm:h-72 w-32 h-32 mx-auto sm:mx-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="max-w-xl">
          <h2 className="text-base sm:text-lg font-semibold text-amber-600 mb-2">
            Astrolozee
          </h2>
          <h1 className="text-3xl sm:text-5xl font-semibold text-gray-800 mb-4 leading-tight">
            AI Astrology with
            <br className="hidden sm:block" /> Real Vedic Accuracy
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Get accurate astrology predictions powered by Artificial Intelligence and
            authentic Vedic astrology principles. Your <strong>Kundli</strong>,
            <strong> Nakshatras</strong>, and <strong>Karmic Path</strong> decoded
            within seconds — bringing clarity and balance to your journey.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center sm:justify-start">
            <a
            onClick={() => navigate("/qna")}
              href="#get-reading"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Chat with Astrologer
            </a>
          </div>
        </div>

        </div>

        {/* Centered Q&A Button */}
        {/* <button
          onClick={() => navigate("/qna")}
          className="mt-10 px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          Go to Q&A
        </button> */}
      </section>

      {/* Services */}
      <section className="bg-[#F9F9EF] px-8 py-12">
        <h2 className="text-center text-4xl font-semibold text-amber-600 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Service 1: Life Path & Kundli Reading */}
          <div className="p-6 bg-[#F9F9EF] border-black border rounded-xl shadow-md hover:shadow-lg transition">
            <img src="land1.jpeg" alt="Kundli" className="mx-auto w-60 h-60 mb-4" />
            <h3 className="text-4xl mb-5 font-semibold text-gray-800 text-center">
              Life Path & Kundli Reading
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Discover the blueprint of your destiny through our detailed Kundli and life path analysis.
              We interpret planetary alignments and astrological houses to reveal insights about your
              career, relationships, health, and spiritual purpose — helping you make informed decisions
              and align your actions with your true life path.
            </p>
          </div>

          {/* Service 2: AI-Assisted Q&A */}
          <div className="p-6 bg-[#F9F9EF] border-black border rounded-xl shadow-md hover:shadow-lg transition">
            <img src="aiassisted.png" alt="AI" className="mx-auto w-60 h-60 mb-4" />
            <h3 className="text-4xl mb-5 font-semibold text-gray-800 text-center">
              AI-Assisted Q&A
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Get instant, personalized astrological guidance with our AI-powered question and answer system.
              Simply ask about your love life, career, or future, and receive intelligent insights grounded in
              Vedic astrology — blended with modern AI interpretation for clarity and accuracy.
            </p>
          </div>

          {/* Service 3: Remedies Suggestions */}
          <div className="p-6 bg-[#F9F9EF] border-black border rounded-xl shadow-md hover:shadow-lg transition">
            <img src="aihelp.png" alt="Remedies" className="mx-auto w-60 h-60 mb-4" />
            <h3 className="text-4xl mb-5 font-semibold text-gray-800 text-center">
              Remedies Suggestions
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Balance your planetary influences with customized astrological remedies.
              We provide gemstone recommendations, mantra chanting guidance, yantra placements,
              and spiritual rituals designed to reduce negative effects and amplify positive energies
              in your chart — bringing harmony, prosperity, and peace into your life.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Call-to-Action */}
      <section className="text-center py-12 bg-[#F9F9EF] border border-amber-400">
        <h2 className="text-4xl font-semibold text-gray-800">
          Let’s Become Members
        </h2>
        <button className="mt-6 px-16 py-5 bg-amber-500 text-white font-semibold rounded-xl shadow hover:bg-amber-600">
          Get Started
        </button>
      </section>

      {/* Membership Plans */}
      <MembershipPlans />


<DailyHoroscopeSection/>


      <Footer />
    </div>
  );
}