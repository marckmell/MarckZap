// src/components/Layout/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => (
  <aside className="w-64 bg-gray-900 p-6 flex flex-col border-r border-gray-800">
    <div className="text-2xl font-bold text-green-400 mb-10 text-center">MARCKZAP AI</div>
    <nav className="flex-grow">
      <ul className="space-y-3">
        <li><Link href="/dashboard" className="flex items-center text-gray-300 p-2 hover:bg-gray-800 rounded-lg">Dashboard</Link></li>
        <li><Link href="/dashboard/chat" className="flex items-center text-gray-300 p-2 hover:bg-gray-800 rounded-lg">Chat IA</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
