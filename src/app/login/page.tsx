// src/app/login/page.tsx
'use client';
import { useState } from 'react';
import { createClient } from '../../lib/supabase-client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) router.push('/dashboard');
    else alert(error.message);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-950">
      <form onSubmit={handleLogin} className="p-8 bg-gray-800 rounded-lg shadow-xl w-96 space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">Login MARCKZAP</h2>
        <input type="email" placeholder="Email" className="w-full p-2 bg-gray-700 rounded text-white" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" className="w-full p-2 bg-gray-700 rounded text-white" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full py-2 bg-green-600 rounded text-white">Entrar</button>
      </form>
    </div>
  );
}
