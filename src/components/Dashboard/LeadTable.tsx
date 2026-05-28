// src/components/Dashboard/LeadTable.tsx
import React from 'react';

const LeadTable: React.FC = () => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 overflow-x-auto shadow-lg">
    <h3 className="text-xl font-semibold text-white mb-4">Últimos Leads</h3>
    <table className="min-w-full divide-y divide-gray-700">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Nome</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        <tr><td className="px-6 py-4 text-white">Ana Silva</td><td className="px-6 py-4"><span className="px-2 py-1 rounded-full bg-green-600 text-xs">Convertido</span></td></tr>
        <tr><td className="px-6 py-4 text-white">Bruno Costa</td><td className="px-6 py-4"><span className="px-2 py-1 rounded-full bg-yellow-600 text-xs">Contato</span></td></tr>
      </tbody>
    </table>
  </div>
);

export default LeadTable;
