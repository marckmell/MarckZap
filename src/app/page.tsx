// src/app/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-green-500 selection:text-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-green-400 tracking-tighter">MARCKZAP</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#beneficios" className="hover:text-white transition">Benefícios</a>
          <a href="#planos" className="hover:text-white transition">Planos</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>
        <Link href="/login" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-green-400 transition">
          Entrar no Painel
        </Link>
      </nav>

      {/* Hero */}
      <header className="max-w-5xl mx-auto text-center pt-20 pb-20 px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          Transforme conversas em <span className="text-green-400">vendas reais</span> com IA.
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Automatize o atendimento do seu negócio local no WhatsApp e converta leads 24h por dia. Sem robôs, apenas resultados.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-full font-bold text-lg transition">
            Começar Agora (Grátis)
          </button>
          <a href="https://wa.me/5500000000000" className="bg-gray-800 hover:bg-gray-700 px-10 py-4 rounded-full font-bold text-lg transition border border-gray-700">
            Falar com especialista
          </a>
        </div>
      </header>

      {/* Seção de Automação */}
      <section className="py-20 bg-gray-900 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Automação que não parece robô</h2>
            <p className="text-gray-400 mb-6">Nossa IA aprende o tom de voz do seu negócio e trata cada cliente como único. Esqueça mensagens frias e robotizadas.</p>
            <ul className="space-y-4 text-gray-300">
              <li>✅ Respostas em tempo real</li>
              <li>✅ Qualificação automática de leads</li>
              <li>✅ Integração com seu CRM</li>
            </ul>
          </div>
          <div className="bg-gray-800 h-80 rounded-2xl border border-gray-700 flex items-center justify-center text-gray-500">
            [Mockup do Dashboard MARCKZAP]
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-20 max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Planos que cabem no seu negócio</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-10 bg-gray-900 rounded-3xl border border-gray-800 text-center">
            <h3 className="text-2xl font-bold mb-2">Essencial</h3>
            <p className="text-gray-400 mb-6">Para quem está começando.</p>
            <p className="text-5xl font-extrabold mb-8">R$ 197<span className="text-lg font-normal">/mês</span></p>
            <button className="w-full py-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-green-500 font-bold transition">Assinar Essencial</button>
          </div>
          <div className="p-10 bg-green-600 rounded-3xl text-center transform scale-105 shadow-2xl shadow-green-900/50">
            <h3 className="text-2xl font-bold mb-2">Business</h3>
            <p className="text-green-100 mb-6">Para escalar o atendimento.</p>
            <p className="text-5xl font-extrabold mb-8">R$ 397<span className="text-lg font-normal">/mês</span></p>
            <button className="w-full py-4 rounded-xl bg-white text-green-700 font-bold hover:bg-gray-100 transition">Assinar Business</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-8 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Dúvidas Frequentes</h2>
        <div className="space-y-6">
          <details className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <summary className="font-bold cursor-pointer">Preciso trocar meu número?</summary>
            <p className="text-gray-400 mt-4">Não. Você utiliza o seu número comercial atual.</p>
          </details>
          <details className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <summary className="font-bold cursor-pointer">A IA realmente aprende meu negócio?</summary>
            <p className="text-gray-400 mt-4">Sim, configuramos o prompt da IA com as informações da sua empresa.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-600 text-sm border-t border-gray-900">
        © 2025 MARCKZAP AI. Todos os direitos reservados.
      </footer>
    </div>
  );
}
