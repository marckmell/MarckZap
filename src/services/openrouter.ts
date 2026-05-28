// src/services/openrouter.ts
import { Message, ChatRequest, ChatResponse } from '../types/chat';
import { supabase } from '../lib/supabase';

export async function getAIResponse(request: ChatRequest, companyId: string): Promise<ChatResponse> {
  const API_KEY = process.env.OPENROUTER_API_KEY;
  if (!API_KEY) throw new Error('API Key missing');

  // Busca configurações personalizadas da empresa no Supabase
  const { data: company, error } = await supabase
    .from('companies')
    .select('ai_prompt, ai_model')
    .eq('id', companyId)
    .single();

  if (error || !company) throw new Error('Configurações da empresa não encontradas');

  const systemPrompt: Message = {
    role: 'system',
    content: company.ai_prompt || 'Você é um assistente de vendas especializado em negócios locais.'
  };

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'HTTP-Referer': 'https://marckzap.ai',
      'X-Title': 'MARCKZAP AI',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: company.ai_model || 'deepseek/deepseek-chat',
      messages: [systemPrompt, ...request.messages],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return { content: data.choices[0].message.content };
}
