'use client';
import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-green-500 selection:text-black">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-green-400 tracking-tighter">MARCKZAP</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#beneficios" className="hover:text-white transition">Benefícios</a>
          <a href="#planos" className="hover:text-white transition">Planos</a>
        </div>
        <Link href="/login" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-green-400 transition">
          Entrar no Painel
        </Link>
      </nav>

      <header className="max-w-5xl mx-auto text-center pt-20 pb-20 px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          Transforme conversas em <span className="text-green-400">vendas</span> com IA.
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Automatize o atendimento do seu negócio local no WhatsApp e converta leads 24h por dia.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login" className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-full font-bold text-lg transition">
            Começar Agora
          </Link>
        </div>
      </header>

      <section id="beneficios" className="py-20 bg-gray-900 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-12">
          <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">IA Humanizada</h3>
            <p className="text-gray-400">Conversas naturais que vendem como um especialista.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">CRM Integrado</h3>
            <p className="text-gray-400">Pipeline visual para gerenciar seus leads quentes.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">OCR Inteligente</h3>
            <p className="text-gray-400">Leitura automática de comprovantes de pagamento.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2025 MARCKZAP AI. Todos os direitos reservados.
      </footer>
    </div>
  );
}
