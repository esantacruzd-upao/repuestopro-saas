'use client';
import { useState } from 'react';

interface OrdenCompra {
  id: string;
  fecha: string;
  proveedor: string;
  monto: number;
  items: number;
  estado: 'Pendiente' | 'Enviado' | 'Recibido';
}

export default function OrdenesCompra() {
  const [ordenes, setOrdenes] = useState<OrdenCompra[]>([
    {
      id: "OC-20260408-001",
      fecha: "08/04/2026",
      proveedor: "Repuestos SAC - Lima",
      monto: 2450,
      items: 12,
      estado: "Pendiente"
    },
    {
      id: "OC-20260407-002",
      fecha: "07/04/2026",
      proveedor: "AutoPartes Import",
      monto: 1890,
      items: 8,
      estado: "Enviado"
    },
    {
      id: "OC-20260405-003",
      fecha: "05/04/2026",
      proveedor: "Frenos y Suspensión S.A.",
      monto: 3200,
      items: 15,
      estado: "Recibido"
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const crearNuevaOrden = () => {
    const nuevaOrden: OrdenCompra = {
      id: `OC-${new Date().toISOString().slice(0,10).replace(/-/g, '')}-${String(Math.floor(Math.random()*900)+100)}`,
      fecha: new Date().toLocaleDateString('es-PE'),
      proveedor: "Nuevo Proveedor",
      monto: Math.floor(Math.random() * 3000) + 800,
      items: Math.floor(Math.random() * 20) + 5,
      estado: "Pendiente"
    };

    setOrdenes([nuevaOrden, ...ordenes]);
    setMostrarFormulario(false);
    alert(`✅ Nueva orden de compra creada: ${nuevaOrden.id}`);
  };

  const cambiarEstado = (id: string, nuevoEstado: 'Pendiente' | 'Enviado' | 'Recibido') => {
    setOrdenes(ordenes.map(orden => 
      orden.id === id ? { ...orden, estado: nuevoEstado } : orden
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Órdenes de Compra</h1>
        <button
          onClick={() => setMostrarFormulario(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2"
        >
          + Nueva Orden de Compra
        </button>
      </div>

      {mostrarFormulario && (
        <div className="bg-white border border-amber-200 rounded-3xl p-8 mb-8">
          <h3 className="font-semibold text-xl mb-4">Crear Nueva Orden de Compra</h3>
          <p className="text-gray-600 mb-6">Esta es una simulación. En producción se conectaría con proveedores.</p>
          
          <div className="flex gap-4">
            <button
              onClick={crearNuevaOrden}
              className="bg-amber-600 text-white px-10 py-4 rounded-2xl font-medium"
            >
              Crear Orden
            </button>
            <button
              onClick={() => setMostrarFormulario(false)}
              className="px-10 py-4 border rounded-2xl"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-8 py-5 text-left">N° Orden</th>
              <th className="px-8 py-5 text-left">Fecha</th>
              <th className="px-8 py-5 text-left">Proveedor</th>
              <th className="px-8 py-5 text-center">Items</th>
              <th className="px-8 py-5 text-right">Monto Total</th>
              <th className="px-8 py-5 text-center">Estado</th>
              <th className="px-8 py-5 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden) => (
              <tr key={orden.id} className="border-b hover:bg-gray-50">
                <td className="px-8 py-6 font-mono font-medium">{orden.id}</td>
                <td className="px-8 py-6">{orden.fecha}</td>
                <td className="px-8 py-6">{orden.proveedor}</td>
                <td className="px-8 py-6 text-center">{orden.items}</td>
                <td className="px-8 py-6 text-right font-semibold">S/ {orden.monto}</td>
                <td className="px-8 py-6 text-center">
                  <span className={`px-6 py-2 rounded-3xl text-sm font-medium ${
                    orden.estado === 'Recibido' ? 'bg-emerald-100 text-emerald-700' :
                    orden.estado === 'Enviado' ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {orden.estado}
                  </span>
                </td>
                <td className="px-8 py-6 text-center">
                  <div className="flex gap-2 justify-center">
                    {orden.estado === 'Pendiente' && (
                      <button 
                        onClick={() => cambiarEstado(orden.id, 'Enviado')}
                        className="text-xs bg-blue-600 text-white px-4 py-2 rounded-xl"
                      >
                        Marcar Enviado
                      </button>
                    )}
                    {orden.estado === 'Enviado' && (
                      <button 
                        onClick={() => cambiarEstado(orden.id, 'Recibido')}
                        className="text-xs bg-emerald-600 text-white px-4 py-2 rounded-xl"
                      >
                        Marcar Recibido
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}