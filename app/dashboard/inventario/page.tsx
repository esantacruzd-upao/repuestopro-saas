'use client';
import { useState } from 'react';

interface Producto {
  id: number;
  codigo: string;
  desc: string;
  vehiculo: string;
  stock: number;
  precio: number;
}

export default function Inventario() {
  const [productos] = useState<Producto[]>([
    { id: 1, codigo: "AMT-001", desc: "Amortiguador delantero", vehiculo: "Toyota Hilux 2018-2024", stock: 18, precio: 245 },
    { id: 2, codigo: "FRI-045", desc: "Kit de frenos trasero", vehiculo: "Hyundai Tucson 2020-2023", stock: 7, precio: 135 },
    { id: 3, codigo: "FIL-112", desc: "Filtro de aceite", vehiculo: "Kia Sportage 2022", stock: 42, precio: 28 },
    { id: 4, codigo: "BAT-220", desc: "Batería 75Ah", vehiculo: "Nissan NP300 2021-2025", stock: 3, precio: 380 },
    { id: 5, codigo: "BUJ-089", desc: "Juego de bujías", vehiculo: "Suzuki Vitara 2023", stock: 25, precio: 65 },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [filtroStock, setFiltroStock] = useState("todos");

  const productosFiltrados = productos.filter(p => {
    const coincideBusqueda = 
      p.desc.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.vehiculo.toLowerCase().includes(busqueda.toLowerCase());

    if (filtroStock === "bajo") return coincideBusqueda && p.stock < 10;
    if (filtroStock === "normal") return coincideBusqueda && p.stock >= 10;
    return coincideBusqueda;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Inventario • {productos.length} productos</h1>
        
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Buscar por código, descripción o vehículo..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-2xl w-96 focus:outline-none focus:border-blue-500"
          />
          
          <select 
            value={filtroStock}
            onChange={(e) => setFiltroStock(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-2xl"
          >
            <option value="todos">Todos</option>
            <option value="bajo">Stock bajo (< 10)</option>
            <option value="normal">Stock normal</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-8 py-5 text-left">Código</th>
              <th className="px-8 py-5 text-left">Descripción</th>
              <th className="px-8 py-5 text-left">Compatible con</th>
              <th className="px-8 py-5 text-center">Stock</th>
              <th className="px-8 py-5 text-right">Precio</th>
              <th className="px-8 py-5"></th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="px-8 py-6 font-mono">{p.codigo}</td>
                <td className="px-8 py-6 font-medium">{p.desc}</td>
                <td className="px-8 py-6 text-gray-600">{p.vehiculo}</td>
                <td className="px-8 py-6 text-center">
                  <span className={`px-5 py-2 rounded-2xl text-sm font-medium ${p.stock < 10 ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {p.stock}
                  </span>
                </td>
                <td className="px-8 py-6 text-right font-semibold">S/ {p.precio}</td>
                <td className="px-8 py-6 text-right">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}