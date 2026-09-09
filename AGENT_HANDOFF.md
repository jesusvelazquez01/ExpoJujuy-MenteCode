# Handoff - Mockup web ExpoJuy 2026

Última actualización: 8 de septiembre de 2026.

## Objetivo

Construir una propuesta conceptual, visual, responsive y navegable para el nuevo sitio oficial de ExpoJuy 2026. La entrega de la primera etapa vence el **8 de septiembre de 2026 a las 23:59 (Argentina)**.

El equipo decidió avanzar con un mockup funcional en **Next.js**, publicable en **GitHub Pages**, acompañado posteriormente por una memoria descriptiva en PDF.

## Qué permiten las bases

- No hay restricciones de lenguaje o framework.
- Next.js aparece explícitamente entre las tecnologías admitidas.
- La primera etapa solicita un mockup, prototipo o maqueta navegable.
- Es válido presentar opcionalmente un desarrollo funcional en GitHub con instrucciones de ejecución.
- Programar el prototipo no otorga una ventaja automática sobre Figma: el jurado evaluará diseño, UX, originalidad, accesibilidad, factibilidad y cumplimiento.
- Debe declararse el uso de herramientas de IA.
- No deben inventarse datos oficiales ni utilizarse recursos sin licencia.

### Entregables previstos

1. Sitio navegable publicado.
2. Repositorio de GitHub e instrucciones.
3. Memoria descriptiva en PDF.
4. Tecnologías propuestas.
5. Declaración de uso de IA.
6. Formulario de inscripción e integrantes del equipo.

## Fuentes originales revisadas

Los PDF se encontraban como adjuntos temporales de la conversación de referencia:

- `BASES Y CONDICIONES.pdf` - 13 páginas.
- `CONSIGNAS TÉCNICAS DEL DESAFÍO.pdf` - 7 páginas.

La conversación de contexto en Codex/ChatGPT tiene el ID:

`6a9c28fc-5bb8-83e9-843e-4670af812948`

Título: `Revisión de bases y mockup`.

## Referencias de diseño

Usarlas como inspiración de UX y composición, nunca como material para copiar:

- Tech Show London: https://www.techshowlondon.co.uk/
- Webflow Conf: https://webflow.com/webflowconf
- K-Softwave: https://k-softwave.com/eng/
- ExpoJuy 2024: https://www.expojuy.camcomexjujuy.com.ar/
- Startup Grind: https://www.startupgrind.tech/

Dirección acordada:

- Organización funcional similar a Tech Show London.
- Composición editorial, tipografía protagonista y ritmo visual inspirados en Webflow Conf.
- Orientación empresarial y separación de públicos inspiradas en K-Softwave.
- Tratamiento de cifras y comunidad inspirado en Startup Grind.
- Fotografías, contenido e identidad territorial tomados de ExpoJuy y Jujuy.
- No usar una estética gubernamental cargada, cyberpunk ni de conferencia tecnológica genérica.

## Concepto

Frase principal:

> Jujuy produce. Innova. Se conecta.

Concepto general:

> Toda la diversidad productiva, empresarial y cultural de Jujuy en un solo recorrido digital.

Públicos principales:

1. Visitantes.
2. Empresas, emprendedores y expositores.
3. Instituciones, organizaciones y prensa.

## Estado actual del proyecto

Directorio de la aplicación:

`mockup/`

Stack instalado:

- Next.js 16.3.4.
- React 19.2.8.
- TypeScript.
- Tailwind CSS 4.
- App Router.

La portada fue reemplazada por una primera propuesta visual completa. Actualmente incluye:

- Hero audiovisual a pantalla completa con video auténtico de ExpoJuy, poster de respaldo, capa de contraste y transición inferior difuminada.
- Título, bajada y llamadas a la acción centrados; título controlado en dos líneas en escritorio y tres líneas en móvil.
- Navegación fija en escritorio.
- Menú desplegable móvil.
- Manifiesto y métricas conceptuales acompañados por un carrusel fotográfico automático de cuatro escenas, sin flechas y con pausa durante hover/foco.
- Ocho sectores productivos.
- Agenda demostrativa.
- Flujo interactivo inicial de `Planificá tu visita`.
- Mapa conceptual del predio.
- Cinco preguntas frecuentes en acordeón, con información conceptual y datos oficiales señalados como pendientes.
- Carrusel lateral automático con nueve sponsors únicos tomados de `fotos/sponsor/`.
- Footer institucional.
- Página editorial de Noticias con portada, nota destacada, cinco novedades y
  llamada informativa; todo el contenido se identifica como demostrativo.
- Páginas independientes para Expositores y Obtener entrada.

## Sistema visual implementado

Paleta vigente dentro de `app/globals.css`, tomada de `paleta-colores/RGB-COLORES.txt`:

- Gris principal: `#4c4c4c`.
- Celeste: `#27c3d3`.
- Lila: `#bb8cfb`.
- Violeta: `#7b2de2`.
- Fondo claro: `#dfdde2`.
- Grises auxiliares: `#909090`, `#74697b` y `#676768`.

La cabecera utiliza `mockup/public/media/expojuy26-logo.jpg`, extraído del material incorporado por el usuario. Confirmar su condición oficial y derechos de uso antes de la entrega definitiva; no redibujar ni alterar el logo.

No se usan fuentes remotas. Se retiró `next/font/google` para evitar que el build dependa de descargar Geist desde Google.

La familia Ambit/Ambi-Light está declarada globalmente para todo el documento y
para los controles nativos (`button`, `input`, `textarea`, `select` y `option`).
La jerarquía fue armonizada con peso Light (`300`) para todos los encabezados,
peso regular (`400`) para lectura y peso de énfasis (`700` o superior) reservado
para etiquetas, métricas, preguntas, botones y datos clave.
El repositorio todavía no contiene archivos tipográficos: para garantizar una
representación idéntica en todos los equipos será necesario incorporar la fuente
web licenciada en formato WOFF2; mientras tanto se utilizan alternativas locales
de sistema cuando Ambit no está instalada.

## Recursos disponibles

### Fotografías originales del repositorio

Carpeta:

`fotos/`

Contiene `imagen-1.webp` a `imagen-23.webp`, con fotografías de ExpoJuy 2024: público, stands, producción, transporte, gastronomía, tecnología, instituciones y espectáculos.

Las imágenes seleccionadas para la portada fueron copiadas con nombres semánticos a:

`mockup/public/media/`

- `hero-expojuy.webp`
- `industria.webp`
- `tecnologia.webp`
- `cultura.webp`
- `comunidad.webp`
- `gastronomia.webp`

### Video

El video fuente de aproximadamente 46 MB se encuentra en:

`video/video-DvvGNoCh.mp4`

Fue copiado para servirlo desde:

`mockup/public/media/expojuy-hero.mp4`

Está incorporado como fondo del hero con reproducción automática, silenciosa, en bucle y `playsInline`; usa `hero-expojuy.webp` como poster. La fuente se condiciona a `prefers-reduced-motion: no-preference` y el poster queda como alternativa. El peso de 46 MB sigue siendo alto: comprimir y generar variantes livianas antes del despliegue definitivo.

Para la versión final se recomienda producir una variante del video sin títulos ni palabras incrustadas. Un fondo audiovisual limpio permitirá conservar la composición centrada del hero, mejorar la jerarquía del mensaje “Jujuy produce. Innova. Se conecta.” y evitar cruces visuales variables a medida que avanza la reproducción. El mockup actual conserva el material disponible y documenta esta limitación como una decisión de producción pendiente.

### Paleta agregada por el usuario

Existe la carpeta:

`paleta-colores/`

Contiene la imagen horizontal de identidad y `RGB-COLORES.txt`. Su paleta ya fue aplicada al mockup. Preservar el material fuente.

## Archivos principales

- `mockup/app/page.tsx`: portada y datos demostrativos.
- `mockup/app/globals.css`: sistema visual, layout y breakpoints.
- `mockup/app/components/visit-planner.tsx`: bloque cliente interactivo del planificador.
- `mockup/app/components/manifesto-carousel.tsx`: carrusel automático accesible del manifiesto, aislado como Client Component.
- `mockup/app/components/faq-sponsors.tsx`: preguntas frecuentes y franja automática de sponsors.
- `mockup/app/layout/navbar.tsx`: navegación desktop y móvil.
- `mockup/app/layout/footer.tsx`: footer.
- `mockup/app/layout.tsx`: metadata, idioma `es-AR` y layout raíz.
- `mockup/next.config.ts`: actualmente solo configura imágenes sin optimización.

## Principios técnicos aplicados

- Mantener la mayor parte de la portada como Server Component.
- Aislar el estado cliente en componentes pequeños.
- Usar imágenes WebP locales.
- No añadir librerías de iconos: los iconos actuales son SVG inline.
- Respetar `prefers-reduced-motion`.
- Usar HTML semántico, textos alternativos y estados de foco visibles.
- Controles táctiles de al menos 44 px cuando corresponde.
- Señalar todo contenido ficticio como `Contenido demostrativo`, `conceptual` o `a confirmar`.

## Validaciones realizadas

Desde `mockup/`:

```bash
npm run lint
npm run build
```

Ambos comandos finalizan correctamente.

El build genera `/`, `/entrada`, `/expositores`, `/noticias` y `/_not-found`
como contenido estático.

También se verificó en navegador integrado:

- Render de escritorio.
- Render móvil a 390 x 844 px.
- Reproducción real del video del hero: MP4 1920 x 1080, silenciado y sin errores.
- Título completo y legible en escritorio y móvil, sin cortes.
- Rotación automática del carrusel del manifiesto, sin controles de flechas.
- Acordeón de preguntas frecuentes y franja continua de nueve sponsors.
- Sin desbordamiento horizontal en móvil.
- Apertura y cierre del menú móvil.
- Selección de intereses en el planificador.
- Estado `aria-pressed` correcto.
- Consola del navegador sin errores.
- Página de Noticias verificada en navegador, con seis imágenes cargadas, cinco
  tarjetas secundarias y sin desbordamiento horizontal.
- Exportación probada tanto en la raíz como bajo `/ExpoJujuy-MenteCode`; los
  enlaces, recursos de Next.js, fotografías, logos y video incluyen el prefijo
  correcto en el build para GitHub Pages.

## Estado de GitHub Pages

El proyecto está configurado para exportación estática y despliegue mediante
GitHub Actions:

- `mockup/next.config.ts` activa `output: "export"`, `trailingSlash`, imágenes
  sin optimización de servidor y un `basePath` definido durante el build.
- `mockup/app/lib/asset-path.ts` antepone ese mismo `basePath` a imágenes y video.
- `.github/workflows/deploy-pages.yml` instala, compila, sube `mockup/out` y lo
  publica mediante las acciones oficiales de GitHub Pages.
- `mockup/README.md` incluye instrucciones de desarrollo, validación y despliegue.

Antes del primer despliegue debe seleccionarse **GitHub Actions** como fuente en
Settings → Pages. La publicación real y la prueba de la URL pública quedan
pendientes hasta que el equipo haga commit y push; no fueron ejecutadas desde
esta tarea.

Git remote detectado:

`https://github.com/jesusvelazquez01/ExpoJujuy-MenteCode.git`

No desplegar ni hacer push sin que el usuario lo solicite explícitamente.

## Próximos pasos recomendados

Orden sugerido por el poco tiempo disponible:

1. Validar con el usuario el nuevo hero audiovisual y hacer una ronda corta de ajustes.
2. Comprimir el video del hero y confirmar licencia/origen del logo y las piezas visuales.
3. Crear listado de expositores con buscador y filtros funcionales.
4. Crear perfil individual de expositor.
5. Convertir la agenda en una pantalla funcional con días y filtros.
6. Crear detalle de actividad.
7. Ampliar `Planificá tu visita` a los cuatro pasos.
8. Crear mapa interactivo simulado.
9. Crear flujo de entrada/acreditación, sin pagos ni datos reales.
10. Completar contacto y validar el contenido definitivo de Noticias.
11. Probar la URL pública generada por GitHub Pages.
12. Preparar memoria descriptiva y declaración de uso de IA.

Si el tiempo se vuelve crítico, priorizar:

1. Inicio.
2. Expositores.
3. Agenda.
4. Mapa.
5. Entrada/acreditación.
6. Vista móvil y accesibilidad.

## Precauciones

- El worktree contiene cambios del usuario. Revisar siempre `git status` y `git diff` antes de editar.
- No eliminar ni sobrescribir `paleta-colores/`.
- Las fotos provienen del sitio de ExpoJuy 2024; confirmar derechos de uso para la entrega definitiva.
- No presentar el placeholder visual como logotipo oficial.
- No inventar fecha, sede, sponsors, expositores, precios ni cifras oficiales.
- No implementar backend innecesario para esta etapa.
- No agregar Server Actions, API Routes, cookies de servidor o SSR si el destino continúa siendo GitHub Pages.
- Mantener el diseño original; las referencias son solo orientación.

## Comando de desarrollo

```bash
cd mockup
npm run dev
```

Luego abrir:

`http://localhost:3000`

## Criterio de finalización de la primera etapa

La propuesta debería sentirse como un producto navegable y técnicamente realizable, aunque las operaciones sean simuladas. El objetivo no es construir el backend definitivo antes del 8 de septiembre, sino demostrar con claridad el concepto, la experiencia, el sistema visual, la arquitectura y la factibilidad del futuro sitio oficial.
