export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">¡Bienvenido de nuevo, Carlos! 👋</h1>
      <p className="text-gray-600 mb-10">AutoRepuestos Trujillo • {new Date().toLocaleDateString('es-PE')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow">
          <p className="text-gray-500 text-sm">Ventas Hoy</p>
          <p className="text-5xl font-bold mt-3">S/ 5,840</p>
          <p className="text-emerald-600 mt-4">+38% vs ayer</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow">
          <p className="text-gray-500 text-sm">Stock Bajo</p>
          <p className="text-5xl font-bold mt-3 text-red-600">11</p>
          <p className="text-red-600 mt-4">Piezas críticas</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow">
          <p className="text-gray-500 text-sm">Comprobantes Hoy</p>
          <p className="text-5xl font-bold mt-3">27</p>
          <p className="text-purple-600 mt-4">21 Boletas • 6 Facturas</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow">
          <p className="text-gray-500 text-sm">Órdenes Pendientes</p>
          <p className="text-5xl font-bold mt-3">4</p>
        </div>
      </div>
    </div>
  );
}