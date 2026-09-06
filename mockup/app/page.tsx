import Image from "next/image";
import { Footer } from "./layout/footer";
import { Navbar } from "./layout/navbar";
import { VisitPlanner } from "./components/visit-planner";

const heroImage = "/media/hero-expojuy.webp";
const industryImage = "/media/industria.webp";
const technologyImage = "/media/tecnologia.webp";
const cultureImage = "/media/cultura.webp";
const communityImage = "/media/comunidad.webp";
const foodImage = "/media/gastronomia.webp";

type IconName = "calendar" | "building" | "map" | "route" | "arrow" | "bookmark";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    calendar: <><path d="M7 3v3M17 3v3M4 9h16"/><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 13h3M8 17h6"/></>,
    building: <><path d="M4 21V7l8-4 8 4v14M8 10h2M14 10h2M8 14h2M14 14h2M10 21v-3h4v3"/></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z"/><path d="M9 3v15M15 6v15"/></>,
    route: <><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 3-3v-6a3 3 0 0 1 3-3"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    bookmark: <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4Z"/>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

const quickLinks: Array<{ icon: IconName; eyebrow: string; title: string; text: string; href: string }> = [
  { icon: "calendar", eyebrow: "01 / Ahora", title: "Agenda", text: "Charlas, experiencias y encuentros para aprovechar cada jornada.", href: "#agenda" },
  { icon: "building", eyebrow: "02 / Conectá", title: "Expositores", text: "Descubrí empresas, emprendimientos e instituciones de toda la provincia.", href: "#sectores" },
  { icon: "map", eyebrow: "03 / Ubicate", title: "Mapa", text: "Encontrá stands, escenarios, servicios y los mejores recorridos.", href: "#mapa" },
  { icon: "route", eyebrow: "04 / A tu manera", title: "Planificá tu visita", text: "Armá una experiencia a partir de tus intereses y tu tiempo disponible.", href: "#planifica" },
];

const sectors = [
  { number: "01", title: "Producción", color: "lime" }, { number: "02", title: "Industria", color: "blue" },
  { number: "03", title: "Minería y energía", color: "coral" }, { number: "04", title: "Tecnología", color: "violet" },
  { number: "05", title: "Turismo", color: "sky" }, { number: "06", title: "Emprendimientos", color: "amber" },
  { number: "07", title: "Comercio", color: "rose" }, { number: "08", title: "Economía del conocimiento", color: "mint" },
];

const agenda = [
  { time: "10:00", tag: "Innovación", title: "Jujuy productivo: ideas que transforman", speaker: "Auditorio Norte · Contenido demostrativo", color: "blue" },
  { time: "12:30", tag: "Negocios", title: "Ronda de vinculación empresarial", speaker: "Espacio Conecta · Contenido demostrativo", color: "lime" },
  { time: "16:00", tag: "Experiencia", title: "Tecnología aplicada al territorio", speaker: "Escenario Futuro · Contenido demostrativo", color: "coral" },
];

function PhotoCard({ image, alt, label, className = "" }: { image: string; alt: string; label: string; className?: string }) {
  return <figure className={`photo-card ${className}`}><Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>{label}</figcaption></figure>;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" /><div className="hero-orbit hero-orbit-one" aria-hidden="true" /><div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span /> ExpoJuy · Edición 2026</p>
              <h1>Jujuy produce.<br/><em>Innova.</em> Se conecta.</h1>
              <p className="hero-lead">Toda la diversidad productiva, empresarial y cultural de Jujuy en un solo recorrido digital.</p>
              <div className="hero-actions"><a className="button button-primary" href="#planifica">Explorar la experiencia <Icon name="arrow" /></a><a className="button button-ghost" href="#sectores">Quiero exponer</a></div>
              <div className="hero-meta"><div><span>Cuándo</span><strong>Fecha a confirmar</strong></div><div><span>Dónde</span><strong>Jujuy · Sede a confirmar</strong></div></div>
            </div>
            <div className="hero-media">
              <div className="hero-image-wrap"><Image src={heroImage} alt="Ingreso de visitantes a ExpoJuy durante una edición anterior" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
              <div className="hero-ticket"><span>EXPERIENCIA</span><strong>2026</strong><small>Propuesta conceptual</small></div>
              <div className="hero-caption"><span>San Salvador de Jujuy</span><span>23.18° S / 65.30° O</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#descubri"><span>Descubrí</span><i aria-hidden="true" /></a>
        </section>

        <section className="quick-section" id="descubri"><div className="shell"><div className="section-intro compact"><p className="eyebrow dark"><span /> Tu visita empieza acá</p><h2>¿Qué querés<br/><em>descubrir?</em></h2></div><div className="quick-grid">
          {quickLinks.map((item) => <a className="quick-card" href={item.href} key={item.title}><div className="quick-top"><span>{item.eyebrow}</span><Icon name={item.icon} /></div><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="circle-arrow"><Icon name="arrow" /></span></a>)}
        </div></div></section>

        <section className="manifesto"><div className="shell manifesto-grid"><p className="manifesto-kicker">UNA PROVINCIA<br/>QUE HACE</p><div><p className="manifesto-text">ExpoJuy es el punto de encuentro entre quienes producen, quienes imaginan y quienes hacen crecer el Norte Argentino.</p><div className="metric-row"><div><strong>2026</strong><span>Una nueva edición</span></div><div><strong>8+</strong><span>Sectores productivos</span></div><div><strong>1</strong><span>Experiencia conectada</span></div></div><small className="demo-note">Cifras de carácter conceptual para esta instancia de mockup.</small></div></div></section>

        <section className="sectors-section" id="sectores"><div className="shell"><div className="section-heading-row"><div className="section-intro"><p className="eyebrow dark"><span /> El motor de la provincia</p><h2>Todos los sectores.<br/><em>Un mismo impulso.</em></h2></div><p>Explorá las actividades que mueven a Jujuy y conectá con las personas que están construyendo su futuro.</p></div><div className="sectors-grid">
          {sectors.map((sector) => <a className={`sector-card ${sector.color}`} href="#agenda" key={sector.title}><span>{sector.number}</span><h3>{sector.title}</h3><i><Icon name="arrow" /></i></a>)}
        </div><div className="sector-feature"><div className="sector-feature-image"><Image src={industryImage} alt="Industria y transporte presentes en ExpoJuy" fill sizes="(max-width: 760px) 100vw, 58vw" /></div><div className="sector-feature-copy"><span className="tag">Producción en movimiento</span><h3>Lo que Jujuy hace se encuentra acá.</h3><p>Empresas, instituciones y emprendedores comparten soluciones, abren conversaciones y crean nuevas oportunidades.</p><a href="#planifica">Encontrá tu recorrido <Icon name="arrow" /></a></div></div></div></section>

        <section className="agenda-section" id="agenda"><div className="shell agenda-layout"><div className="agenda-aside"><p className="eyebrow"><span /> Agenda destacada</p><h2>Ideas para<br/><em>llevarte puestas.</em></h2><p>Charlas, demostraciones y encuentros pensados para conectar conocimiento con oportunidades reales.</p><div className="day-switch" aria-label="Días del evento"><button className="active">Día 01</button><button>Día 02</button><button>Día 03</button></div><a className="text-link" href="#agenda">Ver agenda completa <Icon name="arrow" /></a></div><div className="agenda-list">
          {agenda.map((item, index) => <article className="agenda-item" key={item.title}><div className="agenda-time"><span>0{index + 1}</span><strong>{item.time}</strong></div><div className="agenda-content"><span className={`agenda-tag ${item.color}`}>{item.tag}</span><h3>{item.title}</h3><p>{item.speaker}</p></div><button className="save-button" aria-label={`Guardar ${item.title}`}><Icon name="bookmark" /></button></article>)}
        </div></div></section>

        <section className="gallery-section"><div className="shell"><div className="section-heading-row gallery-heading"><div className="section-intro"><p className="eyebrow dark"><span /> La Expo se vive</p><h2>Negocios, conocimiento<br/>y <em>cultura.</em></h2></div><p>Una experiencia multisectorial con identidad propia: productiva, cercana y profundamente jujeña.</p></div><div className="photo-grid"><PhotoCard image={technologyImage} alt="Estudiantes observan una demostración tecnológica" label="Tecnología & educación" className="photo-tall" /><PhotoCard image={cultureImage} alt="Espectáculo musical en el escenario de ExpoJuy" label="Cultura que conecta" /><PhotoCard image={foodImage} alt="Demostración gastronómica durante ExpoJuy" label="Sabores de Jujuy" /><PhotoCard image={communityImage} alt="Representantes institucionales recorriendo la exposición" label="Comunidad productiva" className="photo-wide" /></div></div></section>

        <VisitPlanner />

        <section className="map-section" id="mapa"><div className="shell map-card"><div className="map-copy"><p className="eyebrow dark"><span /> Mapa del predio</p><h2>Encontrá tu próximo<br/><em>punto de encuentro.</em></h2><p>Ubicá expositores, escenarios, servicios y accesos. La versión final incorporará el plano oficial del predio.</p><a className="button button-dark" href="#mapa">Explorar mapa <Icon name="arrow" /></a></div><div className="map-visual" aria-label="Representación conceptual del mapa del predio"><span className="map-label label-a">Pabellón Industria</span><span className="map-label label-b">Escenario</span><span className="map-label label-c">Tecnología</span><span className="map-pin pin-a">A</span><span className="map-pin pin-b">B</span><span className="map-pin pin-c">C</span><div className="map-path path-one"/><div className="map-path path-two"/><div className="map-block block-one"/><div className="map-block block-two"/><div className="map-block block-three"/></div></div></section>
      </main>
      <Footer />
    </>
  );
}
