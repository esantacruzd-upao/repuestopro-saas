import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RepuestoPro - SaaS Autopartes",
  description: "ERP para tiendas de autopartes en Perú",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}