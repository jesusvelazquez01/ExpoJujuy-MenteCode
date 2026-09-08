export type Exhibitor = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: "blue" | "violet" | "coral";
};

export const exhibitors: Exhibitor[] = [
  {
    slug: "produccion-gastronomia",
    title: "Producción y gastronomía",
    description: "Sabores, productos y cadenas de valor nacidas en Jujuy.",
    image: "/media/gastronomia.webp",
    imageAlt: "Demostración gastronómica durante una edición anterior de ExpoJuy",
    accent: "coral",
  },
  {
    slug: "industria-movilidad",
    title: "Industria y movilidad",
    description: "Capacidad industrial, servicios y soluciones para producir.",
    image: "/media/industria.webp",
    imageAlt: "Vehículo industrial expuesto durante una edición anterior de ExpoJuy",
    accent: "blue",
  },
  {
    slug: "tecnologia-innovacion",
    title: "Tecnología e innovación",
    description: "Ideas y desarrollos que conectan conocimiento con territorio.",
    image: "/media/tecnologia.webp",
    imageAlt: "Demostración tecnológica en un stand de una edición anterior de ExpoJuy",
    accent: "violet",
  },
  {
    slug: "cultura-espectaculos",
    title: "Cultura y espectáculos",
    description: "Artistas y expresiones culturales que reúnen a la provincia.",
    image: "/media/cultura.webp",
    imageAlt: "Espectáculo musical durante una edición anterior de ExpoJuy",
    accent: "coral",
  },
  {
    slug: "instituciones-comunidad",
    title: "Instituciones y comunidad",
    description: "Organizaciones que impulsan vínculos y oportunidades.",
    image: "/media/comunidad.webp",
    imageAlt: "Representantes institucionales en una edición anterior de ExpoJuy",
    accent: "blue",
  },
  {
    slug: "experiencia-expojuy",
    title: "Experiencia ExpoJuy",
    description: "El punto de encuentro de visitantes, empresas y proyectos.",
    image: "/media/hero-expojuy.webp",
    imageAlt: "Ingreso de visitantes a una edición anterior de ExpoJuy",
    accent: "violet",
  },
];
