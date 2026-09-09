"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/media/tecnologia.webp",
    alt: "Estudiantes participan de una experiencia tecnológica en ExpoJuy",
    label: "Tecnología & educación",
  },
  {
    image: "/media/industria.webp",
    alt: "Vehículos y producción industrial presentes en ExpoJuy",
    label: "Producción en movimiento",
  },
  {
    image: "/media/comunidad.webp",
    alt: "Representantes institucionales recorren ExpoJuy",
    label: "Comunidad productiva",
  },
  {
    image: "/media/cultura.webp",
    alt: "Presentación cultural sobre el escenario de ExpoJuy",
    label: "Cultura que conecta",
  },
];

export function ManifestoCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const previousSlide = (activeSlide - 1 + slides.length) % slides.length;
  const nextSlide = (activeSlide + 1) % slides.length;

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="manifesto" id="provincia" aria-labelledby="manifesto-title">
      <div className="shell manifesto-layout">
        <div className="manifesto-copy">
          <p className="manifesto-kicker">UNA PROVINCIA<br />QUE HACE</p>
          <h2 className="manifesto-text" id="manifesto-title">
            ExpoJuy es el punto de encuentro entre quienes producen, quienes imaginan y quienes hacen crecer el Norte Argentino.
          </h2>
          <div className="metric-row" aria-label="Cifras conceptuales de ExpoJuy 2026">
            <div><strong>2026</strong><span>Una nueva edición</span></div>
            <div><strong>8+</strong><span>Sectores productivos</span></div>
            <div><strong>1</strong><span>Experiencia conectada</span></div>
          </div>
          <small className="demo-note">Cifras de carácter conceptual para esta instancia de mockup.</small>
        </div>

        <div
          className="manifesto-carousel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Momentos de ExpoJuy"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <div className="manifesto-slides" aria-live={isPaused ? "polite" : "off"}>
            {slides.map((slide, index) => {
              const position = index === activeSlide ? "active" : index === previousSlide ? "previous" : index === nextSlide ? "next" : "hidden";
              return (
                <figure className="manifesto-slide" data-position={position} aria-hidden={index !== activeSlide} key={slide.image}>
                  <Image src={slide.image} alt={index === activeSlide ? slide.alt : ""} fill sizes="(max-width: 980px) 92vw, 46vw" />
                  <figcaption><span>0{index + 1}</span>{slide.label}</figcaption>
                </figure>
              );
            })}
          </div>
          <div className="carousel-controls">
            
            <div className="carousel-dots" aria-label="Elegir fotografía">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  aria-label={`Ver ${slide.label}`}
                  aria-pressed={index === activeSlide}
                  className={index === activeSlide ? "active" : ""}
                  onClick={() => setActiveSlide(index)}
                  key={slide.image}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
