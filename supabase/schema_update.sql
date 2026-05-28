-- Atualizando a tabela de empresas para suportar personalização por IA
ALTER TABLE companies 
ADD COLUMN IF NOT EXISTS niche TEXT,
ADD COLUMN IF NOT EXISTS ai_prompt TEXT DEFAULT 'Você é um assistente de vendas prestativo.',
ADD COLUMN IF NOT EXISTS whatsapp_number TEXT,
ADD COLUMN IF NOT EXISTS ai_model TEXT DEFAULT 'deepseek/deepseek-chat';

-- Garantir que as tabelas relacionadas busquem configurações da empresa de forma eficiente
CREATE INDEX IF NOT EXISTS idx_leads_company_id ON leads(company_id);
CREATE INDEX IF NOT EXISTS idx_messages_company_id ON messages(company_id);
