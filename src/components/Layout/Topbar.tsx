// src/components/Layout/Topbar.tsx
import React from 'react';

const Topbar: React.FC = () => (
  <header className="h-20 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8">
    <h1 className="text-2xl font-bold text-white">Dashboard</h1>
    <div className="flex items-center space-x-4">
      <span className="text-gray-400">Admin</span>
      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold">A</div>
    </div>
  </header>
);

export default Topbar;
