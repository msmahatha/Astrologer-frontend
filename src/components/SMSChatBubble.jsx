/**
 * SMSChatBubble.jsx
 * Displays SMS-style short messages like WhatsApp
 */

import React from 'react';
import TypingIndicator from './TypingIndicator';

const SMSChatBubble = ({ message, isUser, showTyping = false }) => {
  if (!message) return null;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'  // User: blue, right-aligned
            : 'bg-gray-200 text-gray-800 rounded-bl-none'  // AI: gray, left-aligned
        }`}
      >
        {showTyping ? (
          <TypingIndicator />
        ) : (
          <p className="break-all whitespace-pre-wrap">{message}</p>
        )}
      </div>
    </div>
  );
};

export default SMSChatBubble;
