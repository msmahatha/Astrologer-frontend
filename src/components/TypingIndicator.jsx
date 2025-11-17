/**
 * TypingIndicator.jsx
 * Shows animated typing bubble like WhatsApp/SMS
 */

import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-1 p-3 bg-gray-200 rounded-full w-fit">
      {/* Dot 1 */}
      <div 
        className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
        style={{ animationDelay: '0s' }}
      />
      {/* Dot 2 */}
      <div 
        className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
        style={{ animationDelay: '0.2s' }}
      />
      {/* Dot 3 */}
      <div 
        className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
        style={{ animationDelay: '0.4s' }}
      />
    </div>
  );
};

export default TypingIndicator;
