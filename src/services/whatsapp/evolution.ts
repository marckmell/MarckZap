// src/services/whatsapp/evolution.ts
import { supabase } from '../../lib/supabase';

// URL da sua Evolution API (deve estar em .env.local)
const EVOLUTION_API_URL = process.env.EVOLUTION_API_URL;
const EVOLUTION_API_KEY = process.env.EVOLUTION_API_KEY;

export async function createWhatsAppInstance(companyId: string, instanceName: string) {
  const response = await fetch(`${EVOLUTION_API_URL}/instance/create`, {
    method: 'POST',
    headers: {
      'apikey': EVOLUTION_API_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      instanceName,
      token: `${companyId}_token`,
      qrcode: true,
    }),
  });

  if (!response.ok) throw new Error('Falha ao criar instância no Evolution');
  
  const data = await response.json();
  
  // Salvar a instância no banco de dados da empresa
  await supabase.from('companies').update({ whatsapp_instance: data.instance.instanceName }).eq('id', companyId);
  
  return data;
}

export async function getQRCode(instanceName: string) {
  const response = await fetch(`${EVOLUTION_API_URL}/instance/connect/${instanceName}`, {
    headers: { 'apikey': EVOLUTION_API_KEY! },
  });
  
  if (!response.ok) throw new Error('Falha ao obter QR Code');
  return await response.json();
}
