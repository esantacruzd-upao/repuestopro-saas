# RepuestoPro - SaaS para Tiendas de Autopartes

Sistema ERP + POS diseñado específicamente para **tiendas de repuestos automotrices** en Perú, con enfoque en facturación electrónica SUNAT.

## Funcionalidades actuales

- Autenticación con selección de tienda (Multi-tenant)
- Dashboard con métricas clave
- Inventario completo con filtros y búsqueda
- POS (Punto de Venta) con carrito inteligente
- Facturación electrónica simulada (compatible con Nubefact)
- Gestión de Clientes
- Gestión de Proveedores
- Órdenes de Compra a proveedores
- Reportes básicos

## Tecnologías

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React

## Estructura del proyecto
app/
├── login/              → Pantalla de inicio de sesión
├── dashboard/
│   ├── inventario/
│   ├── pos/
│   ├── facturacion/
│   ├── clientes/
│   ├── proveedores/    ← Nueva
│   ├── ordenes/
│   └── reportes/
components/
└── layout/             → Sidebar y Header


## Próximas mejoras (Roadmap)

- Búsqueda avanzada por vehículo (marca, modelo, año)
- Integración real con API Nubefact
- Generación automática de XML + CDR
- Gráficos avanzados con Recharts
- Notificaciones y alertas de stock bajo
- App móvil básica (PWA)

---

**Proyecto desarrollado como prototipo funcional para tiendas de autopartes en Trujillo y todo el Perú.**
