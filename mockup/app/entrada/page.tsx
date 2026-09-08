import type { Metadata } from "next";
import { VisitPlanner } from "../components/visit-planner";
import { Footer } from "../layout/footer";
import { Navbar } from "../layout/navbar";

export const metadata: Metadata = {
  title: "Obtener entrada | ExpoJuy 2026",
  description: "Planificá tu visita y prepará tu experiencia en ExpoJuy 2026.",
};

export default function EntradaPage() {
  return (
    <>
      <Navbar />
      <main className="entry-page">
        <VisitPlanner />
      </main>
      <Footer />
    </>
  );
}
