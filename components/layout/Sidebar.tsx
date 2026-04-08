'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Boxes, ShoppingCart, FileText, Users, BarChart3, Truck } from 'lucide-react';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/inventario', label: 'Inventario', icon: Boxes },
  { href: '/dashboard/pos', label: 'POS / Venta', icon: ShoppingCart },
  { href: '/dashboard/facturacion', label: 'Facturación SUNAT', icon: FileText },
  { href: '/dashboard/clientes', label: 'Clientes', icon: Users },
  { href: '/dashboard/reportes', label: 'Reportes', icon: BarChart3 },
  { href: '/dashboard/ordenes', label: 'Órdenes de Compra', icon: Truck },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-white border-r h-full p-6 hidden lg:block overflow-auto">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl">🚗</div>
        <h1 className="text-2xl font-bold">RepuestoPro</h1>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-medium transition-all ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}