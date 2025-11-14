import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';

const SupportServices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('kundli');

  const services = {
    kundli: [
      {
        icon: '🧭',
        title: 'Life Path & Kundli Reading',
        description: 'See your karmic direction and destiny through detailed birth chart analysis',
        features: ['Complete birth chart analysis', 'Karmic direction insights', 'Life purpose guidance', 'Destiny mapping'],
        duration: '48 hours delivery'
      }
    ],
    love: [
      {
        icon: '💖',
        title: 'Love & Marriage Astrology',
        description: 'Relationship compatibility and marriage timing analysis',
        features: ['Relationship compatibility', 'Marriage timing', 'Partner analysis', 'Love life guidance'],
        duration: '24 hours delivery'
      }
    ],
    career: [
      {
        icon: '💼',
        title: 'Career & Business Astrology',
        description: 'Job success, business growth, and financial guidance',
        features: ['Career path analysis', 'Business opportunities', 'Financial guidance', 'Success timing'],
        duration: '24 hours delivery'
      }
    ],
    health: [
      {
        icon: '🌿',
        title: 'Health & Emotional Healing',
        description: 'Stress, health blocks, and remedies for balance',
        features: ['Health block analysis', 'Stress management', 'Emotional healing', 'Balance remedies'],
        duration: '24 hours delivery'
      }
    ],
    property: [
      {
        icon: '🏠',
        title: 'Property & Foreign Settlement',
        description: 'Right time for buying a house, relocation, or abroad move',
        features: ['Property timing', 'Relocation guidance', 'Abroad settlement', 'Location analysis'],
        duration: '48 hours delivery'
      }
    ]
  };

  const supportOptions = [
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Direct conversation with our astrological experts',
      availability: '9 AM - 8 PM, Mon-Sun',
      response: 'Immediate',
      contact: '+1 (555) 123-ASTRO'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Real-time chat with our support team',
      availability: '24/7',
      response: 'Within 5 minutes',
      contact: 'Start Chat Below'
    },
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Detailed written consultations and responses',
      availability: '24/7',
      response: 'Within 24 hours',
      contact: 'support@astrolozee.com'
    },
    {
      icon: '🎥',
      title: 'Video Consultation',
      description: 'Face-to-face virtual meetings with experts',
      availability: 'By appointment',
      response: 'Schedule in advance',
      contact: 'Book Session'
    }
  ];

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
              Free AI-powered astrological guidance for all aspects of your life
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-16">
            
            {/* Service Categories Tabs */}
            <div className="rounded-lg p-8 border border-black mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Choose Your Service
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('kundli')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'kundli'
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  🧭 Life Path & Kundli
                </button>
                <button
                  onClick={() => setActiveTab('love')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'love'
                      ? 'bg-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-pink-100'
                  }`}
                >
                  💖 Love & Marriage
                </button>
                <button
                  onClick={() => setActiveTab('career')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'career'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  💼 Career & Business
                </button>
                <button
                  onClick={() => setActiveTab('health')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'health'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  🌿 Health & Healing
                </button>
                <button
                  onClick={() => setActiveTab('property')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'property'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  🏠 Property & Settlement
                </button>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
                {services[activeTab].map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="text-center mb-4">
                      <div className="bg-green-100 text-green-800 py-2 px-4 rounded-full text-sm font-semibold inline-block">
                        🎉 Completely Free Service
                      </div>
                    </div>

                    <div className="text-center text-sm text-gray-500 mb-4">
                      {service.duration}
                    </div>

                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Get Free Service
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Channels */}
            <div className="rounded-lg p-8 border border-black mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Free Support Channels
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportOptions.map((option, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                    <div className="text-3xl mb-4">{option.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                    
                    <div className="space-y-2 text-xs text-gray-500 mb-4">
                      <div className="flex justify-between">
                        <span>Availability:</span>
                        <span className="font-semibold">{option.availability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Response Time:</span>
                        <span className="font-semibold text-green-600">{option.response}</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 border">
                      <p className="text-sm font-semibold text-amber-600">{option.contact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Disclaimer */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                📝 Important Service Disclaimer
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Astrolozee provides AI-powered astrology predictions, horoscope readings, and remedies based on your birth details.
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Our services are for guidance and self-awareness only. They are not a substitute for professional advice (medical, legal, or financial).
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  All services are provided free of charge for educational and self-development purposes.
                </p>
              </div>
            </div>

            {/* Why Choose Our Services */}
            <div className="rounded-lg p-8 border border-black mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Why Choose Astrolozee Services?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">
                    AI-Powered Accuracy
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Advanced AI algorithms combined with traditional Vedic astrology principles
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    Personalized Guidance
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Customized insights based on your unique birth chart and planetary positions
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    Completely Free
                  </h3>
                  <p className="text-gray-700 text-sm">
                    All services provided free of charge - no hidden costs or subscriptions
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">
                    Quick Delivery
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Most services delivered within 24-48 hours of your request
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <h3 className="text-lg font-semibold text-red-800 mb-3">
                    Expert Support
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Access to experienced astrological experts for personalized guidance
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">
                    Confidential & Secure
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Your personal information and consultations are kept completely private
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Section */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">
                Ready to Discover Your Path?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Get free personalized astrological guidance for your life path, relationships, career, health, and more. 
                Take the first step towards clarity and positive transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                </button>
                <button 
                  onClick={() => navigate("/qna")}
                  className="border border-amber-600 text-amber-600 hover:bg-amber-100 font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Chat with AI Astrologer
                </button>
                <button className="border border-gray-600 text-gray-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors">
                  Call Us: +1 (555) 123-ASTRO
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default SupportServices;