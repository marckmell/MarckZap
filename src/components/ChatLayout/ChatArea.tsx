// src/components/ChatLayout/ChatArea.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import Message from '../Chat/Message';
import ChatInput from '../Chat/ChatInput';
import { useChat } from '@/hooks/useChat';

const ChatArea: React.FC = () => {
  const { messages, sendMessage, isLoading } = useChat();
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const formatTimestamp = (timestamp: number) => new Date(timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    <main className="chat-area" role="main" aria-label="Conversa">
      <header className="chat-header">
        <div className="chat-header-avatar" style={{background:'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>CF</div>
        <div className="chat-header-info">
          <div className="chat-header-name">Carlos Ferreira</div>
          <div className="chat-header-status">Online</div>
        </div>
      </header>

      <div className="chat-messages custom-scrollbar" ref={chatMessagesRef} role="log">
        {messages.map((msg, index) => (
          <div key={index} className={`msg-wrapper ${msg.role === 'user' ? 'out' : 'in'}`}>
            <div className="msg-bubble">{msg.content}</div>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
      </div>
    </main>
  );
};

export default ChatArea;
