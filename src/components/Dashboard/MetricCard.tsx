// src/components/Dashboard/MetricCard.tsx
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, description }) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 transform transition-all hover:scale-105 shadow-lg">
    <div className="flex items-center mb-4">
      <div className="p-3 rounded-full bg-green-600 text-white mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-4xl font-bold text-green-400 mb-2">{value}</p>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default MetricCard;
