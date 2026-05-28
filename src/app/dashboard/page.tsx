// src/app/dashboard/page.tsx
'use client';

import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import Topbar from '../../components/Layout/Topbar';
import MetricCard from '../../components/Dashboard/MetricCard';
import ChartPlaceholder from '../../components/Dashboard/ChartPlaceholder';
import LeadTable from '../../components/Dashboard/LeadTable';
import OCRUpload from '../../components/Dashboard/OCRUpload';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-950 text-white font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-grow flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-grow overflow-y-auto p-8 space-y-10 custom-scrollbar">
          
          {/* Métricas Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard title="Leads" value="1,284" description="+12% este mês" icon={<span className="text-xs">📈</span>} />
            <MetricCard title="Conversões" value="432" description="Taxa de 33%" icon={<span className="text-xs">✅</span>} />
            <MetricCard title="IA Ativa" value="98%" description="Uptime" icon={<span className="text-xs">🤖</span>} />
            <MetricCard title="Pagamentos" value="R$12k" description="MRR" icon={<span className="text-xs">💰</span>} />
          </div>

          {/* Módulo de OCR de Comprovantes */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-8 bg-green-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Verificação de Pagamentos</h2>
            </div>
            <OCRUpload />
          </section>

          {/* Análises e Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fade-in-up">
              <ChartPlaceholder title="Vendas Mensais" />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ChartPlaceholder title="Origem de Leads" />
            </div>
          </div>

          {/* Gestão de Leads */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <LeadTable />
          </div>
        </main>
      </div>
    </div>
  );
}
