import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow"><span /> Contacto</p>
          <h2 id="contact-title">Hablemos.<br /><em>Estamos para ayudarte.</em></h2>
          <p>
            Escribile a la organización para realizar consultas generales,
            participar como expositor o comunicarte con el equipo de prensa.
          </p>
          <a href="mailto:expojuy2.0@gmail.com">expojuy2.0@gmail.com</a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
