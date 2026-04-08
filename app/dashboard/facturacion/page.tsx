'use client';
import { useState } from 'react';

interface Comprobante {
  id: string;
  fecha: string;
  cliente: string;
  tipo: string;
  monto: number;
  estado: string;
}

export default function Facturacion() {
  const [comprobantes, setComprobantes] = useState<Comprobante[]>([
    {
      id: "B001-000124",
      fecha: "08/04/2026",
      cliente: "Juan Pérez",
      tipo: "Boleta",
      monto: 245.80,
      estado: "ACEPTADO"
    },
    {
      id: "F001-000089",
      fecha: "07/04/2026",
      cliente: "Taller Los Pinos S.A.",
      tipo: "Factura",
      monto: 1280.00,
      estado: "ACEPTADO"
    }
  ]);

  const nuevoComprobante = () => {
    const nuevo: Comprobante = {
      id: `B001-${Math.floor(100000 + Math.random() * 900000)}`,
      fecha: "08/04/2026",
      cliente: "Cliente Mostrador",
      tipo: "Boleta",
      monto: Math.floor(Math.random() * 800) + 120,
      estado: "ACEPTADO"
    };
    setComprobantes([nuevo, ...comprobantes]);
    alert(`✅ Comprobante ${nuevo.id} emitido correctamente vía Nubefact (Simulación)`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Facturación Electrónica SUNAT</h1>
        <button
          onClick={nuevoComprobante}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2"
        >
          + Nuevo Comprobante
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-8 py-5 text-left font-medium text-gray-600">N° Comprobante</th>
              <th className="px-8 py-5 text-left font-medium text-gray-600">Fecha</th>
              <th className="px-8 py-5 text-left font-medium text-gray-600">Cliente</th>
              <th className="px-8 py-5 text-left font-medium text-gray-600">Tipo</th>
              <th className="px-8 py-5 text-right font-medium text-gray-600">Monto</th>
              <th className="px-8 py-5 text-center font-medium text-gray-600">Estado SUNAT</th>
            </tr>
          </thead>
          <tbody>
            {comprobantes.map((comp, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-8 py-6 font-mono font-medium">{comp.id}</td>
                <td className="px-8 py-6">{comp.fecha}</td>
                <td className="px-8 py-6">{comp.cliente}</td>
                <td className="px-8 py-6">
                  <span className="px-5 py-1 bg-purple-100 text-purple-700 rounded-2xl text-sm">
                    {comp.tipo}
                  </span>
                </td>
                <td className="px-8 py-6 text-right font-semibold">S/ {comp.monto.toFixed(2)}</td>
                <td className="px-8 py-6 text-center">
                  <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-3xl text-sm">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    {comp.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        Simulación de integración con Nubefact • En producción enviaría XML y recibiría CDR automáticamente
      </p>
    </div>
  );
}