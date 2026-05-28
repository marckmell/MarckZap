-- Atualizar a tabela de leads para incluir valor e data de fechamento
ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS value DECIMAL(12, 2) DEFAULT 0.00,
ADD COLUMN IF NOT EXISTS expected_close_date DATE;
