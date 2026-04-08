'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const tenants = [
  { id: 1, name: "AutoRepuestos Trujillo", ruc: "20501234567" },
  { id: 2, name: "Repuestos del Norte", ruc: "20604567890" },
];

export default function Login() {
  const router = useRouter();
  const [tenantId, setTenantId] = useState(1);

  const login = () => {
    localStorage.setItem('tenant', JSON.stringify(tenants.find(t => t.id === tenantId)));
    localStorage.setItem('user', JSON.stringify({ nombre: "Carlos Mendoza" }));
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-blue-700 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">RepuestoPro</h1>
        <select onChange={(e) => setTenantId(Number(e.target.value))} className="w-full p-4 border rounded-xl mb-6">
          {tenants.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
        <button onClick={login} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-semibold">
          Entrar
        </button>
      </div>
    </div>
  );
}