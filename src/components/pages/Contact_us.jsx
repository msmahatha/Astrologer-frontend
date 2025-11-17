import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (you can add a toast notification here)
    alert('Thank you for your message! We will get back to you soon.');
  };

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
              Contact Us
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
              We're Here to Help You 💬<br />
              Need help with your personalized astrology report or have questions about your kundli reading? Our support team is ready to assist you.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="rounded-lg p-8 border border-black">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Get in Touch
                  </h2>
                  
                  {/* Contact Methods */}
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📧</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Email Us
                        </h3>
                        <p className="text-gray-600">info@astrolozee.com</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Call / WhatsApp
                        </h3>
                        <p className="text-gray-600">+91-79826 98147</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Our Location
                        </h3>
                        <p className="text-gray-600">
                          Astrolozee<br />
                          Delhi, India
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Support Hours
                        </h3>
                        <p className="text-gray-600">
                          Monday to Saturday<br />
                          10:00 AM – 6:00 PM (IST)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Support */}
                <div className="bg-amber-50 border border-black rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">
                    Need Immediate Astrological Guidance?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Connect with our AI astrologer for instant answers to your questions.
                  </p>
                  <button 
                    onClick={() => navigate("/qna")}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Chat with AI Astrologer
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 border rounded-lg border-black">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="kundli-reading">Kundli Reading</option>
                      <option value="love-marriage">Love & Marriage</option>
                      <option value="career-guidance">Career Guidance</option>
                      <option value="health-issues">Health Issues</option>
                      <option value="remedies">Astrological Remedies</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-vertical"
                      placeholder="Tell us about your astrological concerns or questions..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-8 mb-16">
            <h2 className="text-3xl font-semibold text-amber-600 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* FAQ 1 */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How accurate are AI astrology predictions?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our AI combines Vedic astrology principles with advanced algorithms to provide highly accurate predictions that match real-life experiences.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What information do I need for a reading?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We need your birth date, time, and place for precise kundli analysis. The more accurate the information, the better the prediction.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How long does it take to get a response?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    AI responses are instant. For personalized consultations, our experts typically respond within 24-48 hours during support hours.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Can I get remedies for specific problems?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes, we provide personalized remedies including gemstones, mantras, and rituals based on your specific planetary positions.
                  </p>
                </div>

                {/* FAQ 5 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Is my personal information safe?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Absolutely. We maintain strict confidentiality and never share your personal or astrological data with third parties.
                  </p>
                </div>

                {/* FAQ 6 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Do you offer emergency consultations?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes, we offer priority consultations for urgent matters. Please mention "URGENT" in your message subject.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;