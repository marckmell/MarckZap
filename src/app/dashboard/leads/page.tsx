// src/app/dashboard/leads/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import KanbanColumn from '@/components/CRM/KanbanColumn';
import Sidebar from '@/components/Layout/Sidebar';

interface Lead {
  id: string;
  name: string;
  status: string;
  value: number;
  expected_close_date: string;
}

export default function PipelinePage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const fetchLeads = async () => {
    const { data, error } = await supabase.from('leads').select('id, name, status, value, expected_close_date');
    if (data) setLeads(data);
  };

  useEffect(() => {
    const loadLeads = async () => {
      await fetchLeads();
    };
    loadLeads();
  }, []);

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    await supabase.from('leads').update({ status: newStatus }).eq('id', leadId);
    fetchLeads();
  };

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar />
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-bold text-white mb-8">Pipeline de Vendas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KanbanColumn title="Lead Quente" status="lead-quente" leads={leads} onStatusChange={updateLeadStatus} />
          <KanbanColumn title="Aguardando Pagamento" status="aguardando-pagamento" leads={leads} onStatusChange={updateLeadStatus} />
          <KanbanColumn title="Concluído" status="concluido" leads={leads} onStatusChange={updateLeadStatus} />
        </div>
      </div>
    </div>
  );
}
