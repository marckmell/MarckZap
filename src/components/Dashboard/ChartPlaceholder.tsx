// src/components/Dashboard/ChartPlaceholder.tsx
import React from 'react';

const ChartPlaceholder: React.FC<{title: string}> = ({ title }) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 h-72 flex flex-col items-center justify-center shadow-lg">
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">Gráfico Fictício</div>
  </div>
);

export default ChartPlaceholder;
