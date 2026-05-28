// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAIResponse } from '../../../services/openrouter';
import { ChatRequest } from '../../../types/chat';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

export async function POST(req: NextRequest) {
  try {
    // 1. Inicializar Supabase para identificar a empresa do usuário logado
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) { return req.cookies.get(name)?.value; },
          set(name: string, value: string, options: CookieOptions) {},
          remove(name: string, options: CookieOptions) {},
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });

    const { data: profile } = await supabase
      .from('profiles')
      .select('company_id')
      .eq('id', user.id)
      .single();

    if (!profile?.company_id) return NextResponse.json({ error: 'Perfil de empresa não encontrado' }, { status: 403 });

    // 2. Processar a IA passando o companyId descoberto dinamicamente
    const body: ChatRequest = await req.json();
    const aiResponse = await getAIResponse(body, profile.company_id);
    
    return NextResponse.json(aiResponse);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
