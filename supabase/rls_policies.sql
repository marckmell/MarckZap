-- Habilitar RLS nas tabelas
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Política de RLS para empresas: Apenas o dono do perfil vinculado à empresa pode vê-la
CREATE POLICY "Acesso a empresa do usuario" ON companies
  FOR SELECT USING (id IN (SELECT company_id FROM profiles WHERE id = auth.uid()));

-- Política de RLS para leads: Acesso apenas para usuários da mesma empresa
CREATE POLICY "Acesso a leads da empresa" ON leads
  FOR ALL USING (company_id IN (SELECT company_id FROM profiles WHERE id = auth.uid()));

-- Política de RLS para mensagens: Acesso apenas para usuários da mesma empresa
CREATE POLICY "Acesso a mensagens da empresa" ON messages
  FOR ALL USING (company_id IN (SELECT company_id FROM profiles WHERE id = auth.uid()));
