import Image from "next/image";
import { assetPath } from "../lib/asset-path";

const questions = [
  {
    question: "¿Cuándo y dónde se realizará ExpoJuy 2026?",
    answer: "La fecha, los horarios y la sede oficial todavía están sujetos a confirmación. Esta propuesta se actualizará cuando la organización publique la información definitiva.",
  },
  {
    question: "¿Cómo podré obtener mi entrada?",
    answer: "El sitio final contará con un acceso claro al proceso oficial de acreditación. El recorrido disponible en este mockup es demostrativo y no solicita ni almacena datos personales.",
  },
  {
    question: "¿Puedo participar como expositor?",
    answer: "La experiencia contempla un canal específico para empresas, emprendimientos e instituciones. Los requisitos, costos y condiciones deberán validarse con la organización antes de su publicación.",
  },
  {
    question: "¿Qué voy a encontrar durante la exposición?",
    answer: "La propuesta reúne sectores productivos, agenda de actividades, expositores, servicios y experiencias culturales en un recorrido digital que permitirá preparar la visita.",
  },
  {
    question: "¿El mapa del predio ya es definitivo?",
    answer: "No. El mapa actual comunica la idea de navegación y orientación. Será reemplazado por el plano oficial cuando la organización confirme pabellones, accesos y servicios.",
  },
];

const sponsors = [
  { image: assetPath("/media/sponsors/kelimpio.jpeg"), name: "Kelimpio" },
  { image: assetPath("/media/sponsors/cannava.jpeg"), name: "Cannava Sociedad del Estado" },
  { image: assetPath("/media/sponsors/seguros-jujuy.jpeg"), name: "Compañía de Seguros de Jujuy" },
  { image: assetPath("/media/sponsors/exar.jpeg"), name: "EXAR" },
  { image: assetPath("/media/sponsors/turismo-ambiente-deportes.jpeg"), name: "Secretaría de Turismo, Ambiente y Deportes" },
  { image: assetPath("/media/sponsors/camara-comercio-servicios.jpeg"), name: "Cámara Argentina de Comercio y Servicios" },
  { image: assetPath("/media/sponsors/cfi.jpeg"), name: "Consejo Federal de Inversiones" },
  { image: assetPath("/media/sponsors/jujuy-con-la-gente.jpeg"), name: "Jujuy con la gente" },
  { image: assetPath("/media/sponsors/municipalidad-san-salvador.jpeg"), name: "Municipalidad de San Salvador de Jujuy" },
];

function SponsorGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="sponsor-group" aria-hidden={duplicate || undefined}>
      {sponsors.map((sponsor) => (
        <li className="sponsor-card" key={`${duplicate ? "duplicate-" : ""}${sponsor.image}`}>
          <Image
            src={sponsor.image}
            alt={duplicate ? "" : sponsor.name}
            fill
            sizes="240px"
          />
        </li>
      ))}
    </ul>
  );
}

export function FaqAndSponsors() {
  return (
    <>
      <section className="faq-section" id="dudas" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <div className="faq-heading">
            <p className="eyebrow dark"><span /> Información útil</p>
            <h2 id="faq-title">Preguntas<br /><em>frecuentes.</em></h2>
            <p>Respuestas para orientar la experiencia. La información oficial se incorporará a medida que sea confirmada.</p>
          </div>
          <div className="faq-list">
            {questions.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  <span>0{index + 1}</span>
                  <strong>{item.question}</strong>
                  <i aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sponsors-section" aria-labelledby="sponsors-title">
        <div className="shell sponsors-heading">
          <p className="eyebrow"><span /> Juntos hacemos ExpoJuy</p>
          <h2 id="sponsors-title">Organizaciones que <em>acompañan.</em></h2>
          <small>Identidades provistas para esta instancia de mockup.</small>
        </div>
        <div className="sponsor-viewport">
          <div className="sponsor-track">
            <SponsorGroup />
            <SponsorGroup duplicate />
          </div>
        </div>
      </section>
    </>
  );
}
