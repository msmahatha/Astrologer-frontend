import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
              Your privacy and data security are our top priorities at Astrolozee
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column - Information We Collect */}
              <div className="space-y-8">
                <div className="rounded-lg p-8 border border-black">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Information We Collect
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Personal Details */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">👤</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Personal Details
                        </h3>
                        <p className="text-gray-600">Name, email, contact number – if you provide them</p>
                      </div>
                    </div>

                    {/* Birth Details */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📅</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Birth Details
                        </h3>
                        <p className="text-gray-600">Date, time, and place of birth – needed for horoscope reading</p>
                      </div>
                    </div>

                    {/* Payment Details */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💳</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Payment Details
                        </h3>
                        <p className="text-gray-600">Processed securely through third-party payment gateways</p>
                      </div>
                    </div>

                    {/* Usage Data */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🌐</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Website Usage Data
                        </h3>
                        <p className="text-gray-600">IP address, browser type, cookies, and device information</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Protection Card */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">
                    Your Data is Protected
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We implement industry-standard security measures to keep your information safe.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>🔒 Encrypted data storage</p>
                    <p>🛡️ Secure payment processing</p>
                    <p>📊 Anonymous analytics only</p>
                  </div>
                </div>
              </div>

              {/* Right Column - How We Use Information */}
              <div className="space-y-8">
                <div className="rounded-lg p-8 border border-black">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    How We Use Your Information
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Horoscope Creation */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🔮</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Personalized Horoscope
                        </h3>
                        <p className="text-gray-600">Create your personalized horoscope and astrology reports</p>
                      </div>
                    </div>

                    {/* AI Predictions */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🤖</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          AI Astrology Predictions
                        </h3>
                        <p className="text-gray-600">Provide accurate AI astrology predictions</p>
                      </div>
                    </div>

                    {/* Platform Improvement */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Improve Our Platform
                        </h3>
                        <p className="text-gray-600">Enhance our platform and services</p>
                      </div>
                    </div>

                    {/* Communication */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📧</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Service Communication
                        </h3>
                        <p className="text-gray-600">Send updates, offers, or service-related communication</p>
                      </div>
                    </div>

                    {/* Security */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🛡️</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Security & Safety
                        </h3>
                        <p className="text-gray-600">Keep our website safe and secure</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Protection Commitment */}
                <div className="rounded-lg p-6 border border-black">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Data Protection & Security
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      We do not sell or rent your personal information to anyone.
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Your data is stored securely and only used for astrology-related services.
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Payment details are handled through trusted third-party payment providers.
                    </p>
                    <p className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      You can request data deletion at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="p-8 mb-16 mt-12">
              <h2 className="text-3xl font-semibold text-amber-600 text-center mb-12">
                Privacy FAQs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* FAQ 1 */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Is my birth data safe?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Yes, we encrypt all birth data and use it solely for generating your personalized astrological reports.
                    </p>
                  </div>

                  {/* FAQ 2 */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Can I delete my data?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Absolutely. You can request complete data deletion by contacting our support team at any time.
                    </p>
                  </div>

                  {/* FAQ 3 */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Do you share data with third parties?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We only share necessary data with payment processors for transactions. No astrological data is shared.
                    </p>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      How long do you keep my data?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We retain your data only as long as necessary to provide our services or as required by law.
                    </p>
                  </div>

                  {/* FAQ 5 */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Can I opt-out of communications?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Yes, you can unsubscribe from marketing emails at any time while still receiving service updates.
                    </p>
                  </div>

                  {/* FAQ 6 */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Who has access to my data?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Only authorized personnel and our AI systems have access, strictly for service delivery purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Have Privacy Concerns?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                If you have any questions about our privacy practices or how we handle your data, 
                please don't hesitate to reach out to our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Contact Privacy Team
                </button>
                <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold py-3 px-8 rounded-full transition-colors">
                  Email Support
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

export default Privacy;