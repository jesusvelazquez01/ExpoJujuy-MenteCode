import { Footer } from "./layout/footer";
import { Navbar } from "./layout/navbar";
import { VisitPlanner } from "./components/visit-planner";
import { ManifestoCarousel } from "./components/manifesto-carousel";
import { FaqAndSponsors } from "./components/faq-sponsors";

const heroImage = "/media/hero-expojuy.webp";

type IconName = "arrow" | "bookmark";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    bookmark: <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4Z" />,
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const sectors = [
  { number: "01", title: "Producción", color: "lime" },
  { number: "02", title: "Industria", color: "blue" },
  { number: "03", title: "Minería y energía", color: "coral" },
  { number: "04", title: "Tecnología", color: "violet" },
  { number: "05", title: "Turismo", color: "sky" },
  { number: "06", title: "Emprendimientos", color: "amber" },
  { number: "07", title: "Comercio", color: "rose" },
  { number: "08", title: "Economía del conocimiento", color: "mint" },
];

const agenda = [
  {
    time: "10:00",
    tag: "Innovación",
    title: "Jujuy productivo: ideas que transforman",
    speaker: "Auditorio Norte · Contenido demostrativo",
    color: "blue",
  },
  {
    time: "12:30",
    tag: "Negocios",
    title: "Ronda de vinculación empresarial",
    speaker: "Espacio Conecta · Contenido demostrativo",
    color: "lime",
  },
  {
    time: "16:00",
    tag: "Experiencia",
    title: "Tecnología aplicada al territorio",
    speaker: "Escenario Futuro · Contenido demostrativo",
    color: "coral",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-video-stage" aria-hidden="true">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroImage}
              tabIndex={-1}
            >
              <source src="/media/expojuy-hero.mp4" type="video/mp4" media="(prefers-reduced-motion: no-preference)" />
            </video>
            <div className="hero-video-overlay" />
          </div>
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span /> ExpoJuy · Edición 2026</p>
              <h1 aria-label="Jujuy produce. Innova. Se conecta.">
                <span className="hero-title-line">Jujuy produce.</span>
                <span className="hero-title-line hero-title-accent"><em>Innova.</em><span> Se conecta.</span></span>
              </h1>
              <p className="hero-lead">Toda la diversidad productiva, empresarial y cultural de Jujuy en un solo recorrido digital.</p>
              <div className="hero-bottom">
                <div className="hero-actions"><a className="button button-primary" href="#planifica">Explorar la experiencia <Icon name="arrow" /></a><a className="button button-ghost" href="#sectores">Quiero exponer</a></div>
                <div className="hero-meta"><div><span>Cuándo</span><strong>Fecha a confirmar</strong></div><div><span>Dónde</span><strong>Jujuy · Sede a confirmar</strong></div></div>
              </div>
            </div>
            <aside className="hero-edition" aria-label="Propuesta conceptual ExpoJuy 2026"><span>EXPERIENCIA</span><strong>2026</strong><small>Propuesta conceptual</small></aside>
          </div>
          <a className="scroll-cue" href="#descubri">
            <span>Descubrí</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <ManifestoCarousel />

        <section className="sectors-section" id="sectores">
          <div className="shell">
            <div className="section-heading-row">
              <div className="section-intro">
                <p className="eyebrow dark">
                  <span /> El motor de la provincia
                </p>
                <h2>
                  Todos los sectores.
                  <br />
                  <em>Un mismo impulso.</em>
                </h2>
              </div>
              <p>
                Explorá las actividades que mueven a Jujuy y conectá con las
                personas que están construyendo su futuro.
              </p>
            </div>
            <div className="sectors-grid">
              {sectors.map((sector) => (
                <a
                  className={`sector-card ${sector.color}`}
                  href="#agenda"
                  key={sector.title}
                >
                  <span>{sector.number}</span>
                  <h3>{sector.title}</h3>
                  <i>
                    <Icon name="arrow" />
                  </i>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="agenda-section" id="agenda">
          <div className="shell agenda-layout">
            <div className="agenda-aside">
              <p className="eyebrow">
                <span /> Agenda destacada
              </p>
              <h2>
                Ideas para
                <br />
                <em>llevarte puestas.</em>
              </h2>
              <p>
                Charlas, demostraciones y encuentros pensados para conectar
                conocimiento con oportunidades reales.
              </p>
              <div className="day-switch" aria-label="Días del evento">
                <button className="active">Día 01</button>
                <button>Día 02</button>
                <button>Día 03</button>
              </div>
              <a className="text-link" href="#agenda">
                Ver agenda completa <Icon name="arrow" />
              </a>
            </div>
            <div className="agenda-list">
              {agenda.map((item, index) => (
                <article className="agenda-item" key={item.title}>
                  <div className="agenda-time">
                    <span>0{index + 1}</span>
                    <strong>{item.time}</strong>
                  </div>
                  <div className="agenda-content">
                    <span className={`agenda-tag ${item.color}`}>
                      {item.tag}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.speaker}</p>
                  </div>
                  <button
                    className="save-button"
                    aria-label={`Guardar ${item.title}`}
                  >
                    <Icon name="bookmark" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <VisitPlanner />

        <section className="map-section" id="mapa">
          <div className="shell map-card">
            <div className="map-copy">
              <p className="eyebrow dark">
                <span /> Mapa del predio
              </p>
              <h2>
                Encontrá tu próximo
                <br />
                <em>punto de encuentro.</em>
              </h2>
              <p>
                Ubicá expositores, escenarios, servicios y accesos. La versión
                final incorporará el plano oficial del predio.
              </p>
              <a className="button button-dark" href="#mapa">
                Explorar mapa <Icon name="arrow" />
              </a>
            </div>
            <div
              className="map-visual"
              aria-label="Representación conceptual del mapa del predio"
            >
              <span className="map-label label-a">Pabellón Industria</span>
              <span className="map-label label-b">Escenario</span>
              <span className="map-label label-c">Tecnología</span>
              <span className="map-pin pin-a">A</span>
              <span className="map-pin pin-b">B</span>
              <span className="map-pin pin-c">C</span>
              <div className="map-path path-one" />
              <div className="map-path path-two" />
              <div className="map-block block-one" />
              <div className="map-block block-two" />
              <div className="map-block block-three" />
            </div>
          </div>
        </section>

        <FaqAndSponsors />
      </main>
      <Footer />
    </>
  );
}
