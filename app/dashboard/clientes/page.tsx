'use client';

const clientes = [
  { id: 1, nombre: "Taller Los Pinos S.A.", ruc: "20512345678", telefono: "987654321", email: "taller@pinos.pe" },
  { id: 2, nombre: "Juan Pérez Ramírez", ruc: "", telefono: "951753852", email: "juan@gmail.com" },
  { id: 3, nombre: "Mecánica Express", ruc: "20609876543", telefono: "974112233", email: "express@mecanica.pe" },
];

export default function Clientes() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Clientes</h1>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold">
          + Nuevo Cliente
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-8 py-5 text-left">Nombre / Razón Social</th>
              <th className="px-8 py-5 text-left">RUC / DNI</th>
              <th className="px-8 py-5 text-left">Teléfono</th>
              <th className="px-8 py-5 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id} className="border-b hover:bg-gray-50">
                <td className="px-8 py-6 font-medium">{cliente.nombre}</td>
                <td className="px-8 py-6">{cliente.ruc || "—"}</td>
                <td className="px-8 py-6">{cliente.telefono}</td>
                <td className="px-8 py-6 text-blue-600">{cliente.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}