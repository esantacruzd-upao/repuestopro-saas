'use client';

export default function Header() {
  const tenant = JSON.parse(localStorage.getItem('tenant') || '{}');

  return (
    <header className="bg-white border-b h-16 flex items-center px-8 shadow-sm">
      <div className="flex-1 flex items-center gap-4">
        <div className="text-gray-500">🏪</div>
        <div>
          <p className="font-semibold">{tenant.name || "AutoRepuestos Trujillo"}</p>
          <p className="text-xs text-gray-500">RUC: {tenant.ruc || "20501234567"}</p>
        </div>
      </div>

      <button 
        onClick={() => {
          localStorage.clear();
          window.location.href = '/login';
        }}
        className="flex items-center gap-2 text-gray-600 hover:text-red-600 px-4 py-2 rounded-xl hover:bg-gray-100"
      >
        Cerrar Sesión
      </button>
    </header>
  );
}