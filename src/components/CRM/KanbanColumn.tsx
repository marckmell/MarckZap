// src/components/CRM/KanbanColumn.tsx
'use client';
import React from 'react';

interface Lead {
  id: string;
  name: string;
  status: string;
  value?: number;
  expected_close_date?: string;
}

interface ColumnProps {
  title: string;
  status: string;
  leads: Lead[];
  onStatusChange: (leadId: string, newStatus: string) => void;
}

const KanbanColumn: React.FC<ColumnProps> = ({ title, status, leads, onStatusChange }) => {
  const handleDrop = (leadId: string) => {
    onStatusChange(leadId, status);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-4 min-h-[500px] border border-gray-800">
      <h3 className="text-gray-400 font-semibold mb-4 uppercase text-xs">{title}</h3>
      <div className="space-y-3">
        {leads.filter(l => l.status === status).map(lead => (
          <div 
            key={lead.id} 
            className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700 hover:border-green-500 transition-colors cursor-pointer"
            onClick={() => handleDrop(lead.id)}
          >
            <p className="text-white font-medium">{lead.name}</p>
            <div className="mt-2 flex justify-between text-xs text-gray-400">
                <span>R$ {lead.value?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                <span>{lead.expected_close_date || '-'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
