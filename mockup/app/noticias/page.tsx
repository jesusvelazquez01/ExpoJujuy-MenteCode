import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../lib/asset-path";
import { Footer } from "../layout/footer";
import { Navbar } from "../layout/navbar";

export const metadata: Metadata = {
  title: "Noticias | ExpoJuy 2026",
  description:
    "Novedades, historias y contenidos conceptuales de ExpoJuy 2026.",
};

const news = [
  {
    slug: "produccion-que-conecta",
    category: "Producción",
    title: "El encuentro que conecta la capacidad productiva de Jujuy",
    excerpt:
      "Una mirada a los sectores, proyectos y personas que formarán parte del próximo recorrido de ExpoJuy.",
    image: "/media/industria.webp",
    alt: "Vehículos y propuestas industriales en una edición anterior de ExpoJuy",
    accent: "blue",
    href: "/expositores#industria-movilidad",
  },
  {
    slug: "innovacion-territorio",
    category: "Innovación",
    title: "Ideas nacidas en el territorio que miran hacia el futuro",
    excerpt:
      "Tecnología, conocimiento y nuevas soluciones se encuentran en un espacio pensado para compartir experiencias.",
    image: "/media/tecnologia.webp",
    alt: "Experiencia tecnológica presentada durante una edición anterior de ExpoJuy",
    accent: "violet",
    href: "/expositores#tecnologia-innovacion",
  },
  {
    slug: "sabores-identidad",
    category: "Gastronomía",
    title: "Sabores que cuentan la identidad de una provincia",
    excerpt:
      "Productos, emprendimientos y cadenas de valor acercan la diversidad gastronómica jujeña a cada visitante.",
    image: "/media/gastronomia.webp",
    alt: "Demostración gastronómica en una edición anterior de ExpoJuy",
    accent: "coral",
    href: "/expositores#produccion-gastronomia",
  },
  {
    slug: "comunidad-oportunidades",
    category: "Comunidad",
    title: "Vínculos que se transforman en nuevas oportunidades",
    excerpt:
      "Instituciones, empresas y organizaciones comparten un mismo punto de encuentro para impulsar la región.",
    image: "/media/comunidad.webp",
    alt: "Representantes institucionales recorriendo una edición anterior de ExpoJuy",
    accent: "blue",
    href: "/expositores#instituciones-comunidad",
  },
  {
    slug: "cultura-escenario",
    category: "Cultura",
    title: "La cultura jujeña también ocupa el centro de la escena",
    excerpt:
      "Música y expresiones locales completan una experiencia que celebra todo lo que la provincia produce.",
    image: "/media/cultura.webp",
    alt: "Presentación musical en el escenario de una edición anterior de ExpoJuy",
    accent: "violet",
    href: "/expositores#cultura-espectaculos",
  },
  {
    slug: "preparar-visita",
    category: "Experiencia",
    title: "Una experiencia digital para preparar cada recorrido",
    excerpt:
      "Agenda, expositores, accesos y servicios reunidos en una plataforma clara, accesible y conectada.",
    image: "/media/hero-expojuy.webp",
    alt: "Público recorriendo una edición anterior de ExpoJuy",
    accent: "coral",
    href: "/entrada",
  },
];

const featured = news[0];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="news-page">
        <header className="news-hero">
          <div className="shell news-hero-layout">
            <div>
          
              <h1>Historias que<br /><em>nos conectan.</em></h1>
            </div>
            <p>
              Novedades sobre producción, innovación, cultura y comunidad.
              Esta sección presenta contenido demostrativo para visualizar la
              futura experiencia editorial del sitio.
            </p>
          </div>
        </header>

        <section className="featured-news" aria-labelledby="featured-title">
          <div className="shell featured-news-card" id={featured.slug}>
            <div className="featured-news-media">
              <Image
                alt={featured.alt}
                fill
                priority
                sizes="(max-width: 980px) 100vw, 58vw"
                src={assetPath(featured.image)}
              />
            </div>
            <div className="featured-news-copy">
              <span className="news-category">{featured.category}</span>
              <small>Nota destacada · Contenido demostrativo</small>
              <h2 id="featured-title">{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <Link className="news-link" href={featured.href}>
                Explorar este sector <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="news-directory" aria-labelledby="news-title">
          <div className="shell">
            <div className="news-heading">
              <div>
               
                <h2 id="news-title">Todo lo que<br /><em>está pasando.</em></h2>
              </div>
              <p>
                Las fechas, protagonistas y contenidos definitivos serán
                incorporados cuando sean confirmados por la organización.
              </p>
            </div>
            <div className="news-grid">
              {news.slice(1).map((item, index) => (
                <article
                  className={`news-card ${item.accent}`}
                  id={item.slug}
                  key={item.slug}
                >
                  <div className="news-card-media">
                    <Image
                      alt={item.alt}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                      src={assetPath(item.image)}
                    />
                    <span>0{index + 2}</span>
                  </div>
                  <div className="news-card-copy">
                    <div>
                      <span className="news-category">{item.category}</span>
                      <small>Contenido demostrativo</small>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <Link className="news-link" href={item.href}>
                      Conocer este espacio <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

       
      </main>
      <Footer />
    </>
  );
}
