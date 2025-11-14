import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');

  const helpCategories = {
    general: [
      {
        question: "How do I get started with Astrolozee?",
        answer: "Simply create an account, provide your birth details (date, time, and place), and our AI will generate your personalized kundli and astrological insights."
      },
      {
        question: "Is my personal information secure?",
        answer: "Yes, we use industry-standard encryption and never share your personal data with third parties without your consent."
      },
      {
        question: "Can I use Astrolozee on mobile?",
        answer: "Yes, our platform is fully responsive and works perfectly on all mobile devices, tablets, and desktops."
      }
    ],
    astrology: [
      {
        question: "What information do I need for an accurate reading?",
        answer: "For the most accurate reading, we need your exact birth date, time, and place. The more precise the information, the better the predictions."
      },
      {
        question: "How accurate are AI astrology predictions?",
        answer: "Our AI combines Vedic astrology principles with advanced algorithms to provide highly accurate predictions that match real-life experiences."
      },
      {
        question: "Can I get remedies for specific problems?",
        answer: "Yes, we provide personalized remedies including gemstones, mantras, and rituals based on your specific planetary positions."
      }
    ],
    technical: [
      {
        question: "The website is not loading properly",
        answer: "Try clearing your browser cache and cookies, or try using a different browser. If the issue persists, contact our support team."
      },
      {
        question: "I forgot my password",
        answer: "Click on 'Forgot Password' on the login page and follow the instructions to reset your password via email."
      },
      {
        question: "How do I update my birth details?",
        answer: "Go to your profile settings, click on 'Edit Profile', and update your birth information in the designated section."
      }
    ],
    payments: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, PayPal, and other popular payment methods in your region."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, we use secure payment gateways and never store your complete payment details on our servers."
      },
      {
        question: "Can I get a refund?",
        answer: "Refund policies vary by service. Please check our refund policy or contact support for specific cases."
      }
    ]
  };

  const filteredQuestions = helpCategories[activeCategory].filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Help & Support
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
              Find answers to common questions and get the support you need
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column - Categories & Quick Help */}
              <div className="space-y-8">
                {/* Categories */}
                <div className="rounded-lg p-8 border border-black">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Help Categories
                  </h2>
                  
                  <div className="space-y-4">
                    <button
                      onClick={() => setActiveCategory('general')}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        activeCategory === 'general' ? 'bg-amber-100 border border-amber-300' : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">🌟</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">General</h3>
                          <p className="text-sm text-gray-600">Getting started & basics</p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveCategory('astrology')}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        activeCategory === 'astrology' ? 'bg-blue-100 border border-blue-300' : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">🔮</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Astrology</h3>
                          <p className="text-sm text-gray-600">Readings & predictions</p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveCategory('technical')}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        activeCategory === 'technical' ? 'bg-green-100 border border-green-300' : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">💻</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Technical</h3>
                          <p className="text-sm text-gray-600">Website & app issues</p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveCategory('payments')}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        activeCategory === 'payments' ? 'bg-purple-100 border border-purple-300' : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">💳</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Payments</h3>
                          <p className="text-sm text-gray-600">Billing & subscriptions</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Quick Support */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">
                    Need Immediate Help?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                      Contact Support
                    </button>
                    <button 
                      onClick={() => navigate("/qna")}
                      className="w-full border border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold py-3 px-6 rounded-full transition-colors"
                    >
                      Chat with AI Astrologer
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Questions & Search */}
              <div className="lg:col-span-2 space-y-8">
                {/* Search Bar */}
                <div className="rounded-lg p-6 border border-black">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Search Help Articles
                  </h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for questions or topics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <span className="text-gray-400 text-xl">🔍</span>
                    </div>
                  </div>
                </div>

                {/* Questions List */}
                <div className="rounded-lg p-8 border border-black">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Questions
                    </h2>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {filteredQuestions.length} articles
                    </span>
                  </div>

                  <div className="space-y-6">
                    {filteredQuestions.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          {item.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>

                  {filteredQuestions.length === 0 && (
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">🤔</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        No results found
                      </h3>
                      <p className="text-gray-600">
                        Try searching with different keywords or browse other categories.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Methods Section */}
            <div className="mt-12">
              <div className="rounded-lg p-8 border border-black">
                <h2 className="text-3xl font-semibold text-amber-600 text-center mb-12">
                  Other Ways to Get Help
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Email Support */}
                  <div className="text-center">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📧</span>
                    </div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-3">
                      Email Support
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Send us a detailed message and we'll respond within 24 hours
                    </p>
                    <p className="text-amber-600 font-semibold">support@astrolozee.com</p>
                  </div>

                  {/* Live Chat */}
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                      Live Chat
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Chat with our support team during business hours
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">
                      Start Chat
                    </button>
                  </div>

                  {/* Community */}
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">👥</span>
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                      Community Forum
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Get help from other Astrolozee users and experts
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">
                      Visit Forum
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Help;