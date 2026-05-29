// src/app/dashboard/ocr/page.tsx
'use client';
import React from 'react';
import Sidebar from '@/components/Layout/Sidebar';
import OCRUpload from '@/components/Dashboard/OCRUpload';

export default function OCRPage() {
  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-grow p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-white mb-8">Verificação de Comprovantes</h1>
        <OCRUpload />
      </main>
    </div>
  );
}
