'use client';
import { useState, useEffect } from 'react';

interface Producto {
  id: number;
  codigo: string;
  desc: string;
  vehiculo: string;
  precio: number;
  stock: number;
}

const productosIniciales: Producto[] = [
  { id: 1, codigo: "AMT-001", desc: "Amortiguador delantero", vehiculo: "Toyota Hilux 2018-2024", precio: 245, stock: 18 },
  { id: 2, codigo: "FRI-045", desc: "Kit de frenos trasero", vehiculo: "Hyundai Tucson 2020-2023", precio: 135, stock: 7 },
  { id: 3, codigo: "FIL-112", desc: "Filtro de aceite", vehiculo: "Kia Sportage 2022", precio: 28, stock: 42 },
  { id: 4, codigo: "BAT-220", desc: "Batería 75Ah", vehiculo: "Nissan NP300 2021-2025", precio: 380, stock: 3 },
];

export default function POS() {
  const [productos] = useState(productosIniciales);
  const [carrito, setCarrito] = useState<any[]>([]);
  const [busqueda, setBusqueda] = useState("");

  const agregarAlCarrito = (producto: Producto) => {
    const existente = carrito.find(item => item.id === producto.id);
    if (existente) {
      setCarrito(carrito.map(item => 
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const quitarDelCarrito = (id: number) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const aumentarCantidad = (id: number) => {
    setCarrito(carrito.map(item => 
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const disminuirCantidad = (id: number) => {
    setCarrito(carrito.map(item => 
      item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
    ).filter(item => item.cantidad > 0));
  };

  const subtotal = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const igv = subtotal * 0.18;
  const total = subtotal + igv;

  const emitirComprobante = () => {
    if (carrito.length === 0) {
      alert("Agrega al menos un producto al carrito");
      return;
    }

    const numeroComprobante = `B001-${Math.floor(100000 + Math.random() * 900000)}`;
    
    alert(`✅ Comprobante emitido exitosamente!\n\nNúmero: ${numeroComprobante}\nTotal: S/ ${total.toFixed(2)}\n\n(Simulación de Nubefact - SUNAT)`);
    
    // Limpiar carrito después de emitir
    setCarrito([]);
  };

  const productosFiltrados = productos.filter(p => 
    p.desc.toLowerCase().includes(busqueda.toLowerCase()) || 
    p.codigo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Punto de Venta (POS)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lista de productos */}
        <div className="lg:col-span-7">
          <input
            type="text"
            placeholder="Buscar pieza por código o descripción..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl mb-6 focus:outline-none focus:border-blue-500"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productosFiltrados.map(producto => (
              <div
                key={producto.id}
                onClick={() => agregarAlCarrito(producto)}
                className="bg-white p-6 rounded-3xl border hover:border-blue-500 cursor-pointer transition-all hover:shadow"
              >
                <div className="font-mono text-sm text-gray-500">{producto.codigo}</div>
                <div className="font-semibold text-lg mt-1">{producto.desc}</div>
                <div className="text-sm text-gray-600 mt-1">{producto.vehiculo}</div>
                <div className="flex justify-between items-end mt-6">
                  <div className="text-3xl font-bold">S/ {producto.precio}</div>
                  <div className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-2xl">Stock: {producto.stock}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrito */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow">
          <h2 className="text-2xl font-semibold mb-6">Carrito de Venta</h2>

          <div className="space-y-4 max-h-[420px] overflow-auto">
            {carrito.length === 0 ? (
              <p className="text-gray-400 text-center py-12">El carrito está vacío</p>
            ) : (
              carrito.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 p-5 rounded-2xl">
                  <div className="flex-1">
                    <p className="font-medium">{item.desc}</p>
                    <p className="text-xs text-gray-500">{item.vehiculo}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-xl">
                      <button onClick={() => disminuirCantidad(item.id)} className="px-3 py-1 hover:bg-gray-200 rounded-l-xl">-</button>
                      <span className="px-4 py-1 font-medium">{item.cantidad}</span>
                      <button onClick={() => aumentarCantidad(item.id)} className="px-3 py-1 hover:bg-gray-200 rounded-r-xl">+</button>
                    </div>
                    <div className="font-semibold text-right w-20">S/ {(item.precio * item.cantidad).toFixed(2)}</div>
                    <button onClick={() => quitarDelCarrito(item.id)} className="text-red-500 text-xl">×</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>S/ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg mt-2">
              <span>IGV (18%)</span>
              <span>S/ {igv.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-3xl font-bold mt-6 border-t pt-6">
              <span>Total</span>
              <span className="text-blue-600">S/ {total.toFixed(2)}</span>
            </div>

            <button
              onClick={emitirComprobante}
              className="mt-10 w-full py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-semibold rounded-3xl hover:brightness-105 transition"
            >
              Emitir Comprobante SUNAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}