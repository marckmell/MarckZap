// src/components/Chat/ChatInput.tsx
import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4 bg-gray-800 border-t border-gray-700">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={disabled ? "IA digitando..." : "Digite sua mensagem..."}
        disabled={disabled}
        className="flex-grow p-3 mr-3 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button type="submit" disabled={disabled || !message.trim()} className="p-3 rounded-full bg-green-600 text-white disabled:bg-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9 2zm0 0v-8"></path></svg>
      </button>
    </form>
  );
};

export default ChatInput;
