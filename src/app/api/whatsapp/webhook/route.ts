// src/app/api/whatsapp/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const data = await req.json();
  
  // Exemplo: Processar mensagens recebidas
  if (data.event === 'messages.upsert') {
    const { instance, data: message } = data;
    
    // Identificar a empresa pelo nome da instância ou token
    const { data: company } = await supabase
      .from('companies')
      .select('id')
      .eq('whatsapp_instance', instance)
      .single();

    if (company) {
      // Salvar a mensagem no banco
      await supabase.from('messages').insert({
        company_id: company.id,
        content: message.message.conversation || message.message.extendedTextMessage?.text,
        role: 'user'
      });
    }
  }

  return NextResponse.json({ success: true });
}
