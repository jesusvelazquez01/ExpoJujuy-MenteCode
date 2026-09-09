import type { Metadata } from "next";
import Link from "next/link";
import { ExhibitorCard } from "../components/exhibitor-card";
import { exhibitors } from "../data/exhibitors";
import { Footer } from "../layout/footer";
import { Navbar } from "../layout/navbar";

export const metadata: Metadata = {
  title: "Expositores | ExpoJuy 2026",
  description: "Vista conceptual de los espacios expositivos de ExpoJuy 2026.",
};

export default function ExhibitorsPage() {
  return (
    <>
      <Navbar />
      <main className="exhibitors-page">
        <header className="exhibitors-page-hero">
          <div className="shell">
            <h1>Encontrá tu próximo<br /><em>punto de conexión.</em></h1>
            <p>
              Una primera vista de los espacios que integrarán la experiencia.
              Los nombres y contenidos son demostrativos hasta confirmar el listado oficial.
            </p>
          </div>
        </header>
        <section className="exhibitors-directory" aria-labelledby="directory-title">
          <div className="shell">
            <div className="directory-heading">
              <div>
                <h2 id="directory-title">Todos los expositores</h2>
              </div>
              <Link className="text-link" href="/#sectores">Volver al inicio</Link>
            </div>
            <div className="exhibitors-grid directory-grid">
              {exhibitors.map((exhibitor) => (
                <ExhibitorCard exhibitor={exhibitor} key={exhibitor.slug} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
