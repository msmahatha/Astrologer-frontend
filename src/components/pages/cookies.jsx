import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Cookies = () => {
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
              Cookies & Data Rights
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
              Understanding how we use cookies and your data protection rights
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column - Cookies & Third Party */}
              <div className="space-y-8">
                {/* Cookies Section */}
                <div className="rounded-lg p-8 border border-black">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Cookies
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🍪</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          What are Cookies?
                        </h3>
                        <p className="text-gray-600">
                          Small text files stored on your device to improve user experience, track preferences, and provide better services.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">⚙️</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Cookie Management
                        </h3>
                        <p className="text-gray-600">
                          You can choose to disable cookies in your browser, but some features may not work properly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third-Party Services */}
                <div className="rounded-lg p-8 border border-black">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Third-Party Services
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🔗</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Trusted Partners
                        </h3>
                        <p className="text-gray-600">
                          We may use trusted third-party tools (like analytics or payment gateways) to enhance our services.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🛡️</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Security Standards
                        </h3>
                        <p className="text-gray-600">
                          These third parties follow their own privacy policies, and we ensure they meet standard security requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Your Rights & Updates */}
              <div className="space-y-8">
                {/* Your Rights Section */}
                <div className="rounded-lg p-8 border border-black">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Your Rights
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📊</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Access Your Data
                        </h3>
                        <p className="text-gray-600">
                          You have the right to access your personal data and know how it's being used.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">✏️</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Correct Information
                        </h3>
                        <p className="text-gray-600">
                          Request correction of any incorrect or incomplete personal information.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🗑️</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Delete Your Data
                        </h3>
                        <p className="text-gray-600">
                          Ask us to delete your personal data where legally possible and applicable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Policy Updates */}
                <div className="rounded-lg p-8 border border-black">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Policy Updates
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🔄</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Regular Updates
                        </h3>
                        <p className="text-gray-600">
                          We may update this Privacy Policy from time to time to reflect changes in our practices.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📢</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Notification of Changes
                        </h3>
                        <p className="text-gray-600">
                          Any changes will be posted on this page with the "Last Updated" date for your review.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Cookie Types */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">
                    Types of Cookies We Use
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>🍪 Essential - Site functionality</p>
                    <p>📈 Analytics - Usage insights</p>
                    <p>🎯 Preference - Your settings</p>
                    <p>📱 Performance - Speed optimization</p>
                  </div>
                </div>

                {/* Your Control */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    Your Control Options
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>🔧 Browser settings</p>
                    <p>📧 Email preferences</p>
                    <p>📋 Data access requests</p>
                    <p>🗂️ Export your data</p>
                  </div>
                </div>

                {/* Contact Support */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    Need Help?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Contact our support team for any questions about cookies or your data rights.
                  </p>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full text-sm transition-colors">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="p-8 mb-16 mt-12">
              <h2 className="text-3xl font-semibold text-amber-600 text-center mb-12">
                Cookies & Rights FAQs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* FAQ 1 */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      How do I disable cookies?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      You can disable cookies through your browser settings. Check your browser's help section for specific instructions.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      What happens if I disable cookies?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Some features like personalized content and saved preferences may not work properly without cookies.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      How long does data deletion take?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Data deletion requests are typically processed within 30 days of verification.
                    </p>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Can I export my data?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Yes, you can request a copy of all your personal data in a readable format.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      How are policy updates communicated?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Major changes are communicated via email and always updated on this page with the revision date.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Are third-party services safe?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We only partner with reputable services that meet our security and privacy standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated Section */}
            <div className="text-center py-8 border-t border-gray-300">
              <p className="text-gray-600 mb-2">
                <strong>Last Updated:</strong> December 1, 2024
              </p>
              <p className="text-gray-500 text-sm">
                This policy was last updated on the above date. Please check back periodically for updates.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cookies;