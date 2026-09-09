"use client";

import { FormEvent, useState } from "react";

const contactEmail = "expojuy2.0@gmail.com";

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const reason = String(form.get("reason") ?? "Consulta general");
    const message = String(form.get("message") ?? "");
    const body = `Nombre: ${name}\nCorreo: ${email}\nMotivo: ${reason}\n\nMensaje:\n${message}`;

    setPrepared(true);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[Web ExpoJuy] ${reason}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field-row">
        <label>
          <span>Nombre y apellido</span>
          <input autoComplete="name" name="name" placeholder="¿Cómo te llamás?" required />
        </label>
        <label>
          <span>Correo electrónico</span>
          <input autoComplete="email" name="email" placeholder="nombre@correo.com" required type="email" />
        </label>
      </div>
      <label>
        <span>Motivo de contacto</span>
        <select defaultValue="Consulta general" name="reason">
          <option>Consulta general</option>
          <option>Quiero exponer</option>
          <option>Prensa y comunicación</option>
          <option>Accesibilidad</option>
        </select>
      </label>
      <label>
        <span>Mensaje</span>
        <textarea name="message" placeholder="Contanos en qué podemos ayudarte" required rows={5} />
      </label>
      <button className="contact-submit" type="submit">
        Preparar mensaje
        <span aria-hidden="true">↗</span>
      </button>
      <p className="contact-form-note">
        Al continuar se abrirá tu aplicación de correo. El mensaje no se envía automáticamente.
      </p>
      {prepared && (
        <p className="contact-form-status" role="status">
          Mensaje preparado para {contactEmail}.
        </p>
      )}
    </form>
  );
}
