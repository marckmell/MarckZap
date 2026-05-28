// src/types/chat.ts
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number; // Tornado opcional para mensagens de sistema
}

export interface ChatRequest {
  messages: Message[];
}

export interface ChatResponse {
  content: string;
}
