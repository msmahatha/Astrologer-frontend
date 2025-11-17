import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F9F9EF] font-sans">
        <div className="w-full">

          {/* Header Section */}
          <div className="text-center mb-16 pt-8">
            <h2 className="text-base sm:text-lg font-semibold text-amber-600 mb-2">
              Astrolozee
            </h2>
            <h1 className="text-3xl sm:text-5xl font-semibold text-gray-800 mb-4">
              About Astrolozee
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
              Revolutionizing astrology with AI-powered Vedic wisdom for personalized cosmic guidance
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white w-auto border-t border-[#FBAB26]  p-0 sm:p-10  mb-12">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl mb-5 font-semibold text-gray-800">
                Beyond Ordinary Horoscope Apps
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                Astrolozee is an advanced AI astrology platform that transcends traditional horoscope applications. 
                We harness cutting-edge artificial intelligence technology, meticulously trained in Vedic astrology, 
                to analyze your kundli (birth chart), planetary positions, and nakshatras with unprecedented detail and speed.
              </p>
            </div>

            {/* Karmic GPS Method */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl mb-5 font-semibold text-gray-800">
                Our Unique Karmic GPS Method
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base mb-6">
                This exclusive methodology provides you with precise cosmic navigation through:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Life Phase Card */}
                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Your Life Phase</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Identify whether you're in a <span className="font-medium">pause, battle, cleansing, or final</span> phase of your journey
                  </p>
                </div>

                {/* Current Environment Card */}
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Current Environment</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Understand your surroundings: <span className="font-medium">city zone, home type, and lifestyle energy</span>
                  </p>
                </div>

                {/* Next Shift Card */}
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Next Shift</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Prepare for upcoming changes: <span className="font-medium">timing, direction, and type of place</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Differentiation */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">
                What Makes Us Different
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Unlike generic astrology apps that provide identical predictions to everyone, 
                Astrolozee delivers truly personalized insights based on your unique astrological blueprint.
              </p>
            </div>
          </div>

          {/* Why Choose Astrolozee Section */}
          <div className="bg-white  p-6 sm:p-8 mb-12">
            <h2 className="text-3xl font-semibold text-amber-600 text-center mb-12">
              Why Choose Astrolozee?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">
                  AI + Vedic Astrology
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Modern technology seamlessly integrated with ancient wisdom for accurate insights
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Personalized Predictions
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Tailored guidance based on your unique kundli, not generic copy-paste horoscopes
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧭</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Karmic GPS Reading
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Exclusive feature available only at Astrolozee for precise life navigation
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  Accurate Remedies
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Get personalized Rudraksha, gemstones, and mantras specifically for your chart
                </p>
              </div>

              {/* Feature 5 */}
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-3">
                  Fast & Reliable
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Instant AI-powered reports with deep, meaningful insights delivered promptly
                </p>
              </div>

              {/* Feature 6 */}
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                  Deep Insights
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Comprehensive analysis of planets and nakshatras for complete astrological understanding
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 pb-12">
            <button 
              onClick={() => navigate("/qna")}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Discover Your Cosmic Path
            </button>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              Join thousands who have found clarity and direction through Astrolozee
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;