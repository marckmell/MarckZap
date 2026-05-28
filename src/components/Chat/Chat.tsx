// src/components/Chat/Chat.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';
import { useChat } from '@/hooks/useChat';

const Chat: React.FC = () => {
  const { messages, sendMessage, isLoading, clearChat } = useChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-semibold text-white">Assistente de Vendas</h2>
        </div>
        <button 
          onClick={clearChat} 
          className="text-xs text-gray-400 hover:text-red-400 transition-colors"
        >
          Limpar Conversa
        </button>
      </div>

      <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto custom-scrollbar bg-gray-900">
        {messages.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full text-gray-500 text-center p-4">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <p className="text-lg font-medium text-gray-300">Olá! Como posso ajudar seu negócio hoje?</p>
            <p className="text-sm">Eu lembro das nossas conversas anteriores!</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <Message 
              key={index} 
              text={msg.content} 
              sender={msg.role === 'user' ? 'user' : 'ai'} 
            />
          ))
        )}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-700 text-white p-3 rounded-lg rounded-tl-none shadow-md animate-pulse">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
    </div>
  );
};

export default Chat;
