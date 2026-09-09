import type { Metadata } from "next";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../layout/footer";
import { Navbar } from "../layout/navbar";

export const metadata: Metadata = {
  title: "Contacto | ExpoJuy 2026",
  description:
    "Canal de contacto con la organización de ExpoJuy para consultas, prensa y expositores.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
