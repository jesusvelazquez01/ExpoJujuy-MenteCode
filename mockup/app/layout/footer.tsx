import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-main"><div><Link className="brand brand-footer" href="/" aria-label="ExpoJuy 2026, volver al inicio"><Image className="brand-logo" src="/media/expojuy26-logo.jpg" alt="ExpoJuy: conectando países, creando oportunidades" fill sizes="240px" /></Link><p>El encuentro de la producción,<br/>la innovación y el futuro de Jujuy.</p></div><div className="footer-links"><div><strong>Explorá</strong><Link href="/#sectores">Expositores</Link><Link href="/#agenda">Agenda</Link><Link href="/#mapa">Mapa del predio</Link></div><div><strong>Información</strong><Link href="/#descubri">Sobre ExpoJuy</Link><Link href="/entrada">Planificá tu visita</Link><Link href="/#dudas">Preguntas frecuentes</Link></div><div><strong>Participá</strong><Link href="/#sectores">Quiero exponer</Link><Link href="/#inicio">Prensa</Link><Link href="/#contacto">Contacto</Link></div></div></div><div className="shell footer-bottom"><span>© 2026 ExpoJuy · Propuesta conceptual</span><span>Contenido demostrativo sujeto a validación oficial</span></div></footer>;
}
