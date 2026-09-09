import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "../components/social-links";

export function Navbar() {
  return (
    <header className="site-header">
      <div className="shell navbar">
        <Link className="brand" href="/" aria-label="ExpoJuy 2026, inicio">
          <Image
            className="brand-logo"
            src="/media/expojuy26-logo.jpg"
            alt="ExpoJuy: conectando países, creando oportunidades"
            fill
            priority
            sizes="208px"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="/#provincia">La Expo</Link>
          <Link href="/#sectores">Expositores</Link>
          <Link href="/#agenda">Agenda Interactiva</Link>
          <Link href="/#noticias">Noticias</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/#dudas">Dudas</Link>
        </nav>
        <div className="navbar-actions">
          <SocialLinks className="navbar-socials" />
          <Link className="nav-cta" href="/entrada">
            Obtener entrada <span>↗</span>
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú">
            <span />
            <span />
          </summary>
          <nav aria-label="Navegación móvil">
            <Link href="/#provincia">La Expo</Link>
            <Link href="/#sectores">Expositores</Link>
            <Link href="/#agenda">Agenda Interactiva</Link>
            <Link href="/#noticias">Noticias</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/#dudas">Dudas</Link>
            <Link href="/entrada">Obtener entrada</Link>
            <SocialLinks className="mobile-socials" />
          </nav>
        </details>
      </div>
    </header>
  );
}
