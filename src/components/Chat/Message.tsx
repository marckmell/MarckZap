// src/components/Chat/Message.tsx
import React from 'react';

interface MessageProps {
  text: string;
  sender: 'user' | 'ai';
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs p-3 rounded-lg shadow-md ${isUser ? 'bg-green-600 text-white rounded-tr-none' : 'bg-gray-700 text-white rounded-tl-none'}`}>
        <p className="text-xs font-bold opacity-70 mb-1">{isUser ? 'Você' : 'MARCKZAP AI'}</p>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default Message;
