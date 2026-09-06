import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "ExpoJuy 2026 | Jujuy produce, innova y se conecta", description: "Propuesta conceptual para la experiencia digital de ExpoJuy 2026." };

export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="es-AR"><body>{children}</body></html>; }
