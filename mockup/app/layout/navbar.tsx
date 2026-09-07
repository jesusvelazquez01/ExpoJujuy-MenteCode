import Image from "next/image";

export function Navbar() {
  return <header className="site-header"><div className="shell navbar"><a className="brand" href="#inicio" aria-label="ExpoJuy 2026, inicio"><Image className="brand-logo" src="/media/expojuy26-logo.jpg" alt="ExpoJuy: conectando países, creando oportunidades" fill priority sizes="208px" /></a><nav className="desktop-nav" aria-label="Navegación principal"><a href="#sectores">La Expo</a><a href="#sectores">Expositores</a><a href="#agenda">Agenda</a><a href="#mapa">Mapa</a><a href="#descubri">Información</a></nav><a className="nav-cta" href="#planifica">Obtener entrada <span>↗</span></a><details className="mobile-menu"><summary aria-label="Abrir menú"><span/><span/></summary><nav><a href="#sectores">La Expo</a><a href="#sectores">Expositores</a><a href="#agenda">Agenda</a><a href="#mapa">Mapa</a><a href="#planifica">Obtener entrada</a></nav></details></div></header>;
}
