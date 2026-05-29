// src/hooks/useChat.ts
import { useState, useEffect } from 'react';
import { Message } from '@/types/chat';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === 'undefined') return [];
    const savedChat = localStorage.getItem('marckzap_chat_history');
    if (savedChat) {
      try {
        return JSON.parse(savedChat);
      } catch (e) {
        console.error('Erro ao carregar histórico:', e);
        return [];
      }
    }
    return [];
  });
  const [isLoading, setIsLoading] = useState(false);

  // Salvar histórico no LocalStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('marckzap_chat_history', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (text: string) => {
    const userMessage: Message = {
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    // Atualiza o estado imediatamente com a mensagem do usuário
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error('Erro na API');

      const data = await response.json();

      const aiMessage: Message = {
        role: 'assistant',
        content: data.content,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Desculpe, tive um erro técnico. Tente novamente!', timestamp: Date.now() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('marckzap_chat_history');
  };

  return { messages, sendMessage, isLoading, clearChat };
};
