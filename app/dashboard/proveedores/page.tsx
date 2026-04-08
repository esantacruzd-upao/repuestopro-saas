'use client';
import { useState } from 'react';

interface Proveedor {
  id: number;
  nombre: string;
  ruc: string;
  telefono: string;
  email: string;
  productos: string;
  estado: 'Activo' | 'Inactivo';
  ultimaCompra: string;
}

export default function Proveedores() {
  const [proveedores, setProveedores] = useState<Proveedor[]>([
    {
      id: 1,
      nombre: "Repuestos SAC - Lima",
      ruc: "20512345678",
      telefono: "987 654 321",
      email: "ventas@repuestossac.pe",
      productos: "Amortiguadores, Frenos, Filtros",
      estado: "Activo",
      ultimaCompra: "05/04/2026"
    },
    {
      id: 2,
      nombre: "AutoPartes Import S.A.",
      ruc: "20609876543",
      telefono: "974 112 233",
      email: "contacto@autopartesimport.pe",
      productos: "Baterías, Luces, Aceites",
      estado: "Activo",
      ultimaCompra: "03/04/2026"
    },
    {
      id: 3,
      nombre: "Frenos y Suspensión Trujillo",
      ruc: "20456789012",
      telefono: "951 753 852",
      email: "frenos.trujillo@gmail.com",
      productos: "Discos de freno, Kits de suspensión",
      estado: "Activo",
      ultimaCompra: "01/04/2026"
    },
    {
      id: 4,
      nombre: "Importadora China Parts",
      ruc: "20598765432",
      telefono: "942 336 699",
      email: "import@chinaparts.pe",
      productos: "Accesorios, Herramientas",
      estado: "Inactivo",
      ultimaCompra: "15/03/2026"
    }
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState<"Todos" | "Activo" | "Inactivo">("Todos");

  const proveedoresFiltrados = proveedores.filter(p => {
    const coincideBusqueda = 
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.ruc.includes(busqueda) ||
      p.productos.toLowerCase().includes(busqueda.toLowerCase());

    if (filtroEstado === "Todos") return coincideBusqueda;
    return coincideBusqueda && p.estado === filtroEstado;
  });

  const cambiarEstado = (id: number) => {
    setProveedores(proveedores.map(p => 
      p.id === id 
        ? { ...p, estado: p.estado === 'Activo' ? 'Inactivo' : 'Activo' } 
        : p
    ));
  };

  const agregarProveedor = () => {
    const nuevo: Proveedor = {
      id: Date.now(),
      nombre: "Nuevo Proveedor",
      ruc: "20" + Math.floor(100000000 + Math.random() * 900000000),
      telefono: "9" + Math.floor(10000000 + Math.random() * 90000000),
      email: "proveedor" + Math.floor(Math.random()*1000) + "@gmail.com",
      productos: "Varios productos",
      estado: "Activo",
      ultimaCompra: new Date().toLocaleDateString('es-PE')
    };
    setProveedores([nuevo, ...proveedores]);
    alert("✅ Nuevo proveedor agregado (simulación)");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gestión de Proveedores</h1>
        <button
          onClick={agregarProveedor}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2"
        >
          + Nuevo Proveedor
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre, RUC o productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 px-6 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
        />
        <select
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value as "Todos" | "Activo" | "Inactivo")}
          className="px-6 py-3 border border-gray-300 rounded-2xl"
        >
          <option value="Todos">Todos</option>
          <option value="Activo">Activos</option>
          <option value="Inactivo">Inactivos</option>
        </select>
      </div>

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-8 py-5 text-left">Proveedor</th>
              <th className="px-8 py-5 text-left">RUC</th>
              <th className="px-8 py-5 text-left">Contacto</th>
              <th className="px-8 py-5 text-left">Productos principales</th>
              <th className="px-8 py-5 text-center">Última Compra</th>
              <th className="px-8 py-5 text-center">Estado</th>
              <th className="px-8 py-5 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedoresFiltrados.map((proveedor) => (
              <tr key={proveedor.id} className="border-b hover:bg-gray-50">
                <td className="px-8 py-6 font-medium">{proveedor.nombre}</td>
                <td className="px-8 py-6 font-mono">{proveedor.ruc}</td>
                <td className="px-8 py-6">
                  <div>{proveedor.telefono}</div>
                  <div className="text-sm text-gray-500">{proveedor.email}</div>
                </td>
                <td className="px-8 py-6 text-gray-600">{proveedor.productos}</td>
                <td className="px-8 py-6 text-center text-sm">{proveedor.ultimaCompra}</td>
                <td className="px-8 py-6 text-center">
                  <span className={`px-6 py-2 rounded-3xl text-sm font-medium ${
                    proveedor.estado === 'Activo' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {proveedor.estado}
                  </span>
                </td>
                <td className="px-8 py-6 text-center">
                  <button
                    onClick={() => cambiarEstado(proveedor.id)}
                    className={`text-xs px-5 py-2 rounded-xl font-medium ${
                      proveedor.estado === 'Activo' 
                        ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                        : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                    }`}
                  >
                    {proveedor.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}