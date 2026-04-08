'use client';

export default function Reportes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Reportes y Analíticas</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Reporte de Ventas */}
        <div className="bg-white rounded-3xl p-8 shadow">
          <h2 className="font-semibold text-xl mb-6">Ventas de los últimos 7 días</h2>
          <div className="h-80 bg-gray-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl font-bold text-blue-600">S/ 28,450</p>
              <p className="text-gray-500 mt-2">Total ventas esta semana</p>
              <div className="mt-8 grid grid-cols-7 gap-2 text-xs">
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((dia, i) => (
                  <div key={i} className="text-center">
                    <div className="h-32 bg-blue-500 rounded-t mx-auto w-6" style={{height: `${40 + i*15}px`}}></div>
                    <p className="mt-2">{dia}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rotación de Stock */}
        <div className="bg-white rounded-3xl p-8 shadow">
          <h2 className="font-semibold text-xl mb-6">Productos más vendidos</h2>
          <div className="space-y-6">
            {[
              { nombre: "Amortiguador Hilux", vendidos: 42, porcentaje: 85 },
              { nombre: "Filtro de aceite", vendidos: 38, porcentaje: 76 },
              { nombre: "Kit de frenos", vendidos: 29, porcentaje: 58 },
              { nombre: "Batería 75Ah", vendidos: 15, porcentaje: 30 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{item.nombre}</span>
                  <span className="font-medium">{item.vendidos} unidades</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500" 
                    style={{ width: `${item.porcentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resumen General */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow">
          <h2 className="font-semibold text-xl mb-6">Resumen del Mes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6">
              <p className="text-gray-500">Margen de Ganancia</p>
              <p className="text-4xl font-bold mt-2 text-emerald-600">32.8%</p>
            </div>
            <div className="border rounded-2xl p-6">
              <p className="text-gray-500">Rotación de Inventario</p>
              <p className="text-4xl font-bold mt-2">4.2x</p>
            </div>
            <div className="border rounded-2xl p-6">
              <p className="text-gray-500">Ticket Promedio</p>
              <p className="text-4xl font-bold mt-2">S/ 87.40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}