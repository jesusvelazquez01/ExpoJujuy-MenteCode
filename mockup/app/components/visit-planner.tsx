"use client";

import { useState } from "react";

const interests = ["Tecnología", "Producción", "Negocios", "Turismo", "Cultura", "Emprendimientos"];

export function VisitPlanner() {
  const [selected, setSelected] = useState<string[]>(["Tecnología", "Negocios"]);
  const toggle = (interest: string) => setSelected((current) => current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest]);
  return (
    <section className="planner-section" id="planifica"><div className="shell planner-grid"><div className="planner-copy"><p className="eyebrow"><span /> Tu Expo, a tu manera</p><h2>Planificá una visita<br/><em>hecha para vos.</em></h2><p>Elegí lo que te interesa y obtené una selección personalizada de actividades, expositores y puntos del predio.</p><ol className="planner-steps"><li className="active"><span>1</span>Intereses</li><li><span>2</span>Día</li><li><span>3</span>Favoritos</li><li><span>4</span>Recorrido</li></ol></div><div className="planner-panel"><div className="planner-panel-top"><span>Paso 1 de 4</span><span>{selected.length} seleccionados</span></div><h3>¿Qué te gustaría descubrir?</h3><p>Podés elegir más de una opción.</p><div className="interest-grid">{interests.map((interest) => { const active = selected.includes(interest); return <button className={active ? "selected" : ""} aria-pressed={active} onClick={() => toggle(interest)} key={interest}><i>{active ? "✓" : "+"}</i>{interest}</button>; })}</div><button className="planner-next">Continuar <span>→</span></button><small>Experiencia demostrativa. No se almacenan datos personales.</small></div></div></section>
  );
}
