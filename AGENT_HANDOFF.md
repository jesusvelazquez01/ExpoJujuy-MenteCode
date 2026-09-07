# Handoff - Mockup web ExpoJuy 2026

Última actualización: 6 de septiembre de 2026.

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

- Hero editorial con imagen auténtica de una edición anterior.
- Navegación fija en escritorio.
- Menú desplegable móvil.
- Accesos rápidos a agenda, expositores, mapa y planificación.
- Manifiesto y métricas conceptuales.
- Ocho sectores productivos.
- Bloque destacado de industria y producción.
- Agenda demostrativa.
- Galería editorial.
- Flujo interactivo inicial de `Planificá tu visita`.
- Mapa conceptual del predio.
- Footer institucional.

## Sistema visual implementado

Paleta inicial dentro de `app/globals.css`:

- Azul nocturno: `#06162d`.
- Azul institucional oscuro: `#07182f`.
- Celeste: `#2ab6f6`.
- Verde lima: `#c7ef43`.
- Coral: `#ff6b4b`.
- Violeta: `#9b78ff`.
- Fondo claro: `#f4f2ea`.

La identidad visual de la cabecera es **provisional**. El repositorio todavía no contiene el logotipo oficial de ExpoJuy 2026. Cuando esté disponible el kit oficial, reemplazar el placeholder sin rediseñar ni alterar el logo.

No se usan fuentes remotas. Se retiró `next/font/google` para evitar que el build dependa de descargar Geist desde Google.

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

Existe un video de aproximadamente 46 MB:

`video/video-DvvGNoCh.mp4`

Todavía no se incorporó a la interfaz. Evaluar compresión, poster, carga diferida y `prefers-reduced-motion` antes de usarlo. No cargarlo automáticamente en móvil sin optimización.

### Paleta agregada por el usuario

Existe una carpeta sin versionar:

`paleta-colores/`

No fue creada ni modificada durante el trabajo anterior. Inspeccionarla antes de seguir y preservar su contenido. Puede contener información nueva del usuario que deba sustituir la paleta provisional.

## Archivos principales

- `mockup/app/page.tsx`: portada y datos demostrativos.
- `mockup/app/globals.css`: sistema visual, layout y breakpoints.
- `mockup/app/components/visit-planner.tsx`: único bloque cliente interactivo por ahora.
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

El build genera las rutas `/` y `/_not-found` como contenido estático.

También se verificó en navegador integrado:

- Render de escritorio.
- Render móvil a 390 x 844 px.
- Sin desbordamiento horizontal en móvil.
- Apertura y cierre del menú móvil.
- Selección de intereses en el planificador.
- Estado `aria-pressed` correcto.
- Consola del navegador sin errores.

## Estado de GitHub Pages

El proyecto todavía **no está configurado completamente para desplegar en GitHub Pages**.

Pendiente en `next.config.ts`:

- `output: "export"`.
- `trailingSlash: true` si se mantiene navegación multipágina.
- `basePath` para `/ExpoJujuy-MenteCode` durante producción.
- Resolver rutas de imágenes públicas con el `basePath`.

Pendiente:

- Workflow en `.github/workflows/`.
- Publicación del contenido de `mockup/out` mediante GitHub Actions.
- Prueba directa bajo el subpath del repositorio.

Git remote detectado:

`https://github.com/jesusvelazquez01/ExpoJujuy-MenteCode.git`

No desplegar ni hacer push sin que el usuario lo solicite explícitamente.

## Próximos pasos recomendados

Orden sugerido por el poco tiempo disponible:

1. Inspeccionar `paleta-colores/` y localizar el kit/logotipo oficial 2026.
2. Validar la portada actual con el usuario y hacer una ronda corta de ajustes.
3. Crear listado de expositores con buscador y filtros funcionales.
4. Crear perfil individual de expositor.
5. Convertir la agenda en una pantalla funcional con días y filtros.
6. Crear detalle de actividad.
7. Ampliar `Planificá tu visita` a los cuatro pasos.
8. Crear mapa interactivo simulado.
9. Crear flujo de entrada/acreditación, sin pagos ni datos reales.
10. Agregar noticias, sponsors, FAQ y contacto.
11. Configurar exportación estática y GitHub Pages.
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
