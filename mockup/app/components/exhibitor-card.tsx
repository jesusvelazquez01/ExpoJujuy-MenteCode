import Image from "next/image";
import Link from "next/link";
import type { Exhibitor } from "../data/exhibitors";

export function ExhibitorCard({ exhibitor }: { exhibitor: Exhibitor }) {
  return (
    <Link
      aria-label={`Ir al espacio ${exhibitor.title}`}
      className={`exhibitor-card ${exhibitor.accent}`}
      href={`/expositores#${exhibitor.slug}`}
      id={exhibitor.slug}
    >
      <Image
        alt={exhibitor.imageAlt}
        className="exhibitor-card-image"
        fill
        sizes="(max-width: 680px) 44vw, (max-width: 980px) 30vw, 16vw"
        src={exhibitor.image}
      />
      <span className="exhibitor-card-shade" aria-hidden="true" />
      <span className="exhibitor-card-copy">
        <small>Contenido demostrativo</small>
        <strong>{exhibitor.title}</strong>
        <span className="exhibitor-card-action">
          Ir al expositor
          <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M5 12h14M14 7l5 5-5 5" />
          </svg>
        </span>
      </span>
    </Link>
  );
}
