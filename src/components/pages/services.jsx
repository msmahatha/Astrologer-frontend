import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';

const Services = () => {
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
              Our Services
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
              AI-powered Vedic astrology services for personalized cosmic guidance and life transformation
            </p>
          </div>

          {/* Services Section */}
          <div className="px-4 sm:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-auto mx-auto">
              
              {/* Service 1: Life Path & Kundli Reading */}
              <div className="p-6  border border-black  transition ">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🧭</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Life Path & Kundli Reading
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      See your karmic direction and destiny through detailed birth chart analysis. 
                      Understand your life purpose, strengths, and challenges based on planetary positions 
                      and nakshatras for informed life decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2: Love & Marriage Astrology */}
              <div className="p-6  border border-black  transition">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💖</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Love & Marriage Astrology
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      Relationship compatibility and marriage timing analysis. Find your perfect match, 
                      understand relationship dynamics, and discover the ideal time for marriage based 
                      on planetary influences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3: Career & Business Astrology */}
              <div className="p-6  border border-black  transition ">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Career & Business Astrology
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      Job success, business growth, and financial guidance. Identify your ideal career path, 
                      favorable business timing, and wealth opportunities through planetary analysis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4: Health & Emotional Healing */}
              <div className="p-6  border border-black  transition">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Health & Emotional Healing
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      Stress, health blocks, and remedies for balance. Understand health predispositions, 
                      emotional patterns, and receive personalized remedies for physical and mental well-being.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 5: Property & Foreign Settlement */}
              <div className="p-6  border border-black  transition ">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏠</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Property & Foreign Settlement
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      Right time for buying a house, relocation, or abroad move. Get guidance on property 
                      investments, favorable locations, and timing for domestic or international relocation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why People Trust Astrolozee Section */}
          <div className="p-6  border-b border-[#FCD977]  transition">
            <h2 className="text-3xl font-semibold text-amber-600 text-center mb-12">
              Why People Trust Astrolozee
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              
              {/* Trust Point 1 */}
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  Accurate Predictions
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Online Horoscope predictions that match your real life experiences with precise timing and outcomes
                </p>
              </div>

              {/* Trust Point 2 */}
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  AI-Powered Platform
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  AI Astrology Platform that gives results faster and deeper than traditional manual methods
                </p>
              </div>

              {/* Trust Point 3 */}
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Honest Guidance
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  No fake hope, only truth from your stars. Transparent insights for realistic life planning
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center py-16 bg-amber-50 border-b border-amber-200  ">
            <div className="max-w-2xl mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
                Your future is already written in your stars.
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Let Astrolozee – the AI Astrology Platform help you read it clearly and plan your life with confidence.
              </p>
              <button 
                onClick={() => navigate("/qna")}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-12 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
              >
                Book Your AI Astrology Reading Now
              </button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;