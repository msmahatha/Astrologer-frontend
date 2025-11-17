// MembershipPlans.jsx
import React from "react";

export default function MembershipPlans() {
  return (
<section className="px-8 py-12 bg-gray-50">
  <h2 className="text-3xl font-semibold text-center mb-10">Check Our Membership Plan</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
    {/* Celestial Seeker */}
    <div className="rounded-2xl h-[400px] border p-8 shadow-sm flex flex-col items-center text-center">
      <h3 className="text-3xl font-bold">Celestial Seeker</h3>
      <p className="text-sm font-bold mt-1 mb-4 text-gray-600">Basic Membership</p>
      <ul className="list-disc list-inside text-left space-y-2 text-gray-700 mb-6">
        <li>Basic natal chart analysis</li>
        <li>Monthly newsletter with celestial insights</li>
        <li>Member-only discounts on special readings and services</li>
      </ul>
      <p className="text-4xl font-bold mb-2">$9.99<span className="text-base font-normal">/month</span></p>
      <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">Subscribe Now</button>
    </div>
    
    {/* Celestial Explorer */}
    <div className="rounded-2xl h-[420px] border p-8 shadow-md flex flex-col items-center text-center relative">
      <span className="absolute top-0 right-0 bg-orange-400 text-white text-xs font-semibold px-6 py-2 rounded-tr-2xl">
        Popular
      </span>
      <h3 className="text-3xl font-bold">Celestial Explorer</h3>
      <p className="text-sm font-bold mt-1 mb-4 text-gray-600">Premium Membership</p>
      <ul className="list-disc list-inside text-left space-y-2 text-gray-700 mb-6">
    <li>All features of the Celestial Seeker plan</li>
    <li>Access to daily horoscopes</li>
    <li>Exclusive early access to monthly astrological forecasts</li>
  </ul>
      <p className="text-4xl font-bold mb-6">$19.99<span className="text-base font-normal">/month</span></p>
      <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">Subscribe Now</button>
    </div>
    
    {/* Celestial Visionary */}
    <div className="rounded-2xl h-[400px] border p-8 shadow-sm flex flex-col items-center text-center">
      <h3 className="text-3xl font-bold">Celestial Visionary</h3>
      <p className="text-sm font-bold mt-1 mb-4 text-gray-600">VIP Membership</p>
      <ul className="list-disc list-inside text-left space-y-2 text-gray-700 mb-6">
        <li>All features of the Celestial Explorer plan</li>
        <li>Exclusive access to webinars and workshops</li>
        <li>Personalized monthly guidance sessions with a professional astrologer</li>
      </ul>
      <p className="text-4xl font-bold mb-2">$49.99<span className="text-base font-normal">/month</span></p>
      <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">Subscribe Now</button>
    </div>

  </div>
</section>
  )
}
