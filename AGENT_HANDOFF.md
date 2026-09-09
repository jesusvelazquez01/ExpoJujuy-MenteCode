# Handoff - Mockup web ExpoJuy 2026

Última actualización: 8 de septiembre de 2026.

## Objetivo

Construir una propuesta conceptual, visual, responsive y navegable para el nuevo sitio oficial de ExpoJuy 2026. La entrega de la primera etapa vence el **8 de septiembre de 2026 a las 23:59 (Argentina)**.

La primera etapa exige una propuesta conceptual y visual; no exige desarrollar el sitio definitivo. El equipo decidió presentar un mockup navegable en **Next.js** y acompañarlo con la memoria descriptiva obligatoria en PDF. La publicación en **GitHub Pages** es una mejora prevista, no una exigencia de las consignas técnicas.

## Qué permiten las bases

- No hay restricciones de lenguaje o framework.
- Next.js aparece explícitamente entre las tecnologías admitidas.
- La primera etapa solicita una propuesta conceptual y visual mediante un mockup, prototipo o maqueta navegable.
- Es válido presentar opcionalmente un desarrollo funcional en GitHub con instrucciones de ejecución.
- Programar el prototipo no otorga una ventaja automática sobre Figma: el jurado evaluará diseño, UX, originalidad, accesibilidad, factibilidad y cumplimiento.
- La memoria descriptiva debe explicar el uso previsto de IA cuando corresponda. Como este proyecto utilizó IA como apoyo, debe declararse.
- No deben inventarse datos oficiales ni utilizarse recursos sin licencia.

### Entregables obligatorios

1. Mockup, prototipo o maqueta navegable.
2. Memoria descriptiva en PDF con concepto, objetivos, organización, diseño, tecnologías, accesibilidad, estrategia responsive y uso de IA.
3. Formulario de inscripción e integrantes del equipo, según las Bases y Condiciones.

### Entregables adicionales elegidos por el equipo

1. Repositorio de GitHub con instrucciones de visualización y ejecución.
2. Sitio navegable publicado en GitHub Pages, si el tiempo disponible permite configurarlo y verificarlo correctamente.

## Fuentes originales revisadas

Los documentos revisados son:

- `BASES Y CONDICIONES.pdf` - 13 páginas.
- `CONSIGNAS TÉCNICAS DEL DESAFÍO.pdf` - 7 páginas, vuelto a verificar el 7 de septiembre de 2026 desde la copia aportada por el usuario.

La conversación de contexto en Codex/ChatGPT tiene el ID:

`6a9c28fc-5bb8-83e9-843e-4670af812948`

Título: `Revisión de bases y mockup`.

## Referencias de diseño

Referencias oficiales indicadas en las consignas técnicas:

- ExpoJuy 2024: https://expojuy.camcomexjujuy.com.ar/
- Argentina Mining: https://argentinaminingonline.com/
- Expo Industrias: https://expoindustrias.com.ar/
- Expo Logisti-k: https://www.expologisti-k.com.ar/

Referencias adicionales elegidas por el equipo como inspiración de UX y composición:

- Tech Show London: https://www.techshowlondon.co.uk/
- Webflow Conf: https://webflow.com/webflowconf
- K-Softwave: https://k-softwave.com/eng/
- Startup Grind: https://www.startupgrind.tech/

Todas las referencias son orientativas. No copiar diseños, contenidos, estructuras ni recursos gráficos.

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
- Seis espacios expositivos conceptuales con tarjetas fotográficas.
- Agenda demostrativa.
- Galería editorial.
- Página independiente `/entrada` con el flujo interactivo inicial de `Planificá tu visita`.
- Página independiente `/contacto` con formulario para preparar consultas por correo.
- Iconos de Instagram, X, Facebook y YouTube con enlaces oficiales pendientes de confirmación.
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

El recurso `paleta-colores/expojuy26_horizontal.jpg`, entregado por el usuario como logo correcto, fue copiado sin alteraciones a `mockup/public/media/expojuy26-logo.jpg` y se utiliza en la cabecera y el footer. Confirmar su condición oficial y derechos de uso antes de la entrega definitiva; no redibujar ni alterar el original.

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

### Identidad visual agregada por el usuario

La carpeta versionada `paleta-colores/` contiene:

- `RGB-COLORES.txt`: ocho valores cromáticos suministrados para el proyecto.
- `expojuy26_horizontal.jpg`: logo horizontal con el lema `Conectando países - Creando oportunidades`.

Ambos recursos fueron inspeccionados y deben preservarse como fuentes originales. La copia utilizada por la aplicación se encuentra en `mockup/public/media/`.

## Archivos principales

- `mockup/app/page.tsx`: portada y datos demostrativos.
- `mockup/app/entrada/page.tsx`: página independiente de obtención de entrada y planificación de la visita.
- `mockup/app/contacto/page.tsx`: página independiente con el canal de contacto de la organización.
- `mockup/app/expositores/page.tsx`: directorio conceptual de expositores.
- `mockup/app/globals.css`: sistema visual, layout y breakpoints.
- `mockup/app/components/visit-planner.tsx`: bloque cliente interactivo del planificador.
- `mockup/app/components/manifesto-carousel.tsx`: carrusel automático accesible del manifiesto, aislado como Client Component.
- `mockup/app/components/faq-sponsors.tsx`: preguntas frecuentes y franja automática de sponsors.
- `mockup/app/components/exhibitor-card.tsx`: tarjeta visual reutilizable para cada espacio expositor.
- `mockup/app/components/contact-section.tsx`: composición de la sección de contacto.
- `mockup/app/components/contact-form.tsx`: formulario cliente que prepara un correo para la organización.
- `mockup/app/components/social-links.tsx`: iconos reutilizables de Instagram, X, Facebook y YouTube.
- `mockup/app/data/exhibitors.ts`: contenido demostrativo centralizado de los seis espacios expositivos.
- `mockup/app/noticias/page.tsx`: página editorial de Noticias.
- `mockup/app/lib/asset-path.ts`: resolución del prefijo de recursos para GitHub Pages.
- `mockup/app/layout/navbar.tsx`: navegación desktop y móvil.
- `mockup/app/layout/footer.tsx`: footer.
- `mockup/app/layout.tsx`: metadata, idioma `es-AR` y layout raíz.
- `mockup/next.config.ts`: exportación estática, rutas para GitHub Pages e imágenes sin optimización de servidor.

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

El build genera `/`, `/contacto`, `/entrada`, `/expositores`, `/noticias` y `/_not-found`
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

Orden actualizado según las consignas técnicas y el tiempo disponible:

1. Validar con el usuario el nuevo hero audiovisual y hacer una ronda corta de ajustes.
2. Comprimir el video del hero y confirmar licencia/origen del logo y las piezas visuales.
3. Ampliar el listado de expositores con buscador, filtros y datos oficiales.
4. Crear perfil individual de expositor.
5. Convertir la agenda en una pantalla funcional con días y filtros.
6. Crear detalle de actividad.
7. Ampliar `Planificá tu visita` a los cuatro pasos.
8. Crear mapa interactivo simulado.
9. Crear flujo de entrada/acreditación, sin pagos ni datos reales.
10. Validar el contenido definitivo de Noticias, el correo de contacto y los perfiles sociales oficiales.
11. Probar la URL pública generada por GitHub Pages.
12. Preparar memoria descriptiva y declaración de uso de IA.

Si el tiempo se vuelve crítico, priorizar:

1. Identidad visual y revisión responsive.
2. Secciones mínimas solicitadas.
3. Memoria descriptiva.
4. Expositores, agenda y mapa.
5. Documentación y publicación.

## Precauciones

- Revisar siempre `git status` y `git diff` antes de editar y preservar los cambios existentes.
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

## Registro de cambios

### 8 de septiembre de 2026 - Integración con el remoto y tipografía

- Se descargó `origin/main` hasta el commit remoto `0b21732` y se combinó con el commit local mediante el merge `1a49a9a`.
- Antes de la integración se creó la rama de respaldo `codex/pre-remote-merge-20260908` y se guardó temporalmente el Markdown pendiente.
- Se incorporaron la página `/noticias`, la preparación para GitHub Pages, el helper `assetPath`, el workflow de despliegue, la documentación y los recursos de sponsors agregados en el remoto.
- Se conservaron la página `/contacto`, el formulario, los iconos sociales, `/entrada`, las tarjetas de expositores y la navegación local.
- Los conflictos de navbar y footer se resolvieron usando `/noticias` y los recursos compatibles con `basePath`, mientras se mantuvieron `/contacto`, las redes sociales y los destinos locales vigentes.
- La familia Ambit/Ambi-Light y las variables de peso incorporadas por el remoto se aplican globalmente al documento y a `button`, `input`, `textarea`, `select` y `option`.
- Los énfasis del formulario de contacto se adaptaron a `--font-weight-emphasis`; sus encabezados y textos heredan los pesos Light y Regular del nuevo sistema.
- El conflicto documental surgido al restaurar `AGENT_HANDOFF.md` se resolvió combinando el estado de ambos historiales.
- `npm run lint` y `npm run build` finalizaron correctamente después de la integración; el build genera también `/noticias` como contenido estático.

### 8 de septiembre de 2026 - Destino del enlace La Expo

- Se asignó el identificador `#provincia` a la sección del manifiesto que comienza con `UNA PROVINCIA / QUE HACE`.
- El enlace `La Expo` del navbar de escritorio y del menú móvil ya apuntaba a `/#provincia`; ahora el destino existe y lleva al bloque solicitado.
- Se añadió un margen de desplazamiento de 78 px para que la cabecera fija no cubra el comienzo de la sección.
- `npm run lint` y `npm run build` finalizaron correctamente.
- Se verificó en navegador integrado que `/#provincia` posiciona la vista directamente sobre `UNA PROVINCIA / QUE HACE` con el encabezado visible.

### 8 de septiembre de 2026 - Página independiente de contacto

- Se creó la ruta estática `/contacto` en `mockup/app/contacto/page.tsx`, con metadata propia, navbar, formulario y footer.
- Se retiró `<ContactSection />` de `mockup/app/page.tsx`, por lo que el formulario ya no aparece dentro del inicio.
- Los enlaces `Contacto` del navbar de escritorio, del menú móvil y del footer ahora navegan directamente a `/contacto`.
- Se reutilizaron `ContactSection` y `ContactForm` sin cambiar la preparación del correo ni los campos existentes.
- Se añadió `.contact-page .contact-section` para compensar la cabecera fija y ocupar como mínimo la altura de la pantalla, con ajuste para móvil.
- `npm run lint` finalizó correctamente.
- `npm run build` finalizó correctamente y confirmó que `/contacto` se genera como ruta estática junto con `/`, `/entrada`, `/expositores` y `/_not-found`.
- Se verificó en navegador integrado que `/contacto` muestra la cabecera, el formulario completo y el footer, y que los enlaces de navegación apuntan a la nueva ruta.

### 8 de septiembre de 2026 - Contacto y redes sociales

- Se eliminó `Revista Interactiva` del navbar de escritorio y del menú móvil. No existía una sección `#revista` renderizada en el inicio, por lo que no fue necesario retirar contenido adicional.
- Se creó `mockup/app/components/social-links.tsx` con iconos SVG propios para Instagram, X, Facebook y YouTube.
- Los iconos se añadieron en la parte superior derecha de la cabecera y dentro del menú móvil.
- Como no se encontraron perfiles oficiales verificables de ExpoJuy para las cuatro plataformas, los iconos se marcaron de forma accesible como `enlace oficial a confirmar` y no dirigen a cuentas inventadas.
- Se creó la sección `#contacto` dentro del inicio, ubicada antes de preguntas frecuentes para respetar el orden de navegación.
- Se agregó un formulario con nombre, correo electrónico, motivo de consulta y mensaje; todos los campos esenciales usan validación HTML nativa.
- El formulario prepara un correo dirigido a `expojuy2.0@gmail.com`, contacto publicado en el sitio de ExpoJuy 2024, y abre la aplicación de correo del visitante sin enviar el mensaje automáticamente.
- Se incluyeron opciones para consulta general, expositores, prensa y accesibilidad.
- Se añadieron mensajes accesibles, estado `role="status"`, etiquetas visibles, autocompletado y estilos de foco.
- La sección utiliza la paleta del proyecto, distribución en dos columnas para escritorio y una columna para tablet y móvil.
- `npm run lint` finalizó correctamente.
- `npm run build` finalizó correctamente y mantuvo la generación estática de `/`, `/entrada`, `/expositores` y `/_not-found`.
- Se verificó en navegador integrado que la cabecera muestra los cuatro iconos, que `Revista Interactiva` ya no aparece y que `#contacto` contiene todos los controles con nombres accesibles.

### 8 de septiembre de 2026 - Tarjetas visuales y directorio de expositores

- Se redujo la vista previa de expositores de ocho tarjetas abstractas a seis tarjetas fotográficas.
- Se tomó como orientación visual la composición de tarjetas verticales de Tech Show London y la imagen de referencia aportada, manteniendo la identidad, fotografías y paleta propias de ExpoJuy.
- Las seis tarjetas representan por ahora espacios temáticos y están identificadas como `Contenido demostrativo` para no presentarlas como expositores oficiales.
- Se creó `mockup/app/components/exhibitor-card.tsx` para reutilizar una tarjeta accesible con `next/image` y `next/link`.
- Se centralizaron títulos, rutas, fotografías y textos alternativos en `mockup/app/data/exhibitors.ts`.
- Al pasar el mouse o enfocar una tarjeta con teclado, se muestra la acción `Ir al expositor`, se oscurece la fotografía y se amplía suavemente la imagen.
- En dispositivos sin hover, la acción permanece visible para conservar la navegación táctil.
- A pedido del usuario, se eliminaron por completo los indicadores numéricos `01` a `06` de las tarjetas y de sus datos.
- Se agregó debajo de las tarjetas el botón `Ver todos los expositores`, adaptado a la paleta visual del sitio.
- Se creó la ruta estática `/expositores` como destino real del botón y de cada tarjeta; los enlaces individuales llegan al espacio correspondiente y lo resaltan.
- Se añadió un margen de desplazamiento para que la cabecera fija no cubra la tarjeta enlazada.
- La grilla usa seis columnas en escritorio, tres en tablet y dos en móvil.
- `npm run lint` finalizó correctamente.
- `npm run build` finalizó correctamente y confirmó que `/expositores` se genera como ruta estática junto con `/`, `/entrada` y `/_not-found`.
- Se verificó en el navegador integrado la composición de las seis tarjetas, la ausencia de numeración, la acción revelada y la navegación hacia un expositor específico.

### 8 de septiembre de 2026 - Página independiente para obtener entrada

- Se creó la ruta estática `/entrada` en `mockup/app/entrada/page.tsx` con metadata propia, navbar, `VisitPlanner` y footer.
- Se retiró `<VisitPlanner />` de `mockup/app/page.tsx`; el componente y su estado interactivo se conservaron sin cambios.
- El botón `Obtener entrada` del navbar de escritorio y del menú móvil ahora navega a `/entrada`.
- El enlace `Explorar la experiencia` del hero y `Planificá tu visita` del footer también llevan a `/entrada`, evitando referencias rotas a `#planifica` en el inicio.
- Se adoptó `next/link` para las navegaciones entre páginas y se prepararon los enlaces del navbar y footer para regresar a las anclas correspondientes del inicio desde `/entrada`.
- Se corrigieron en el navbar de escritorio las etiquetas `Agenda Interactiva` y `Revista Interactiva`, que habían quedado como `Agenda`.
- Se añadió el estilo `.entry-page .planner-section` para compensar la cabecera fija y ocupar como mínimo la altura de la pantalla, con ajuste específico para móvil.
- `npm run lint` finalizó correctamente después de mover el planificador.
- `npm run build` finalizó correctamente y confirmó que `/entrada` se genera como ruta estática junto con `/` y `/_not-found`.
- Se verificó en navegador integrado que `Obtener entrada` abre `/entrada`, que el planificador se renderiza e interactúa allí y que `La Expo` regresa a `/#provincia`.
- Se confirmó en el árbol de accesibilidad que el inicio ya no contiene `VisitPlanner`.

### 7 de septiembre de 2026 - Reorganización del navbar

- Se actualizó `mockup/app/layout/navbar.tsx` para usar el mismo menú en escritorio y móvil.
- El navbar quedó compuesto por `La Expo`, `Expositores`, `Agenda Interactiva`, `Noticias`, `Contacto`, `Dudas` y `Revista Interactiva`.
- `Agenda` pasó a llamarse `Agenda Interactiva` sin cambiar su destino actual `#agenda`.
- Se agregaron las anclas futuras `#noticias`, `#contacto`, `#dudas` y `#revista`, que deberán asociarse a sus respectivas secciones cuando sean implementadas.
- `Dudas` se reservó para la futura sección de preguntas frecuentes dentro del inicio.
- Se eliminaron `Mapa` e `Información` únicamente del navbar; sus bloques y contenido permanecen en la portada.
- El enlace `Obtener entrada` se conservó como llamada a la acción independiente y también dentro del menú móvil.
- Se añadió la etiqueta accesible `Navegación móvil` al menú desplegable.
- Se actualizó `mockup/app/globals.css` para activar el menú móvil desde `1180px`, evitando superposiciones causadas por las nuevas opciones.
- El menú desplegable pasó a medir `250px`, tiene una altura máxima relativa a la pantalla y permite desplazamiento vertical cuando sea necesario.
- `npm run lint` y `npm run build` finalizaron correctamente después de reorganizar el navbar.
- Se verificó en navegador integrado que las siete opciones se muestran completas, ordenadas y sin superposición en escritorio.

### 7 de septiembre de 2026 - Identidad visual y corrección del handoff

- Se volvieron a verificar las siete páginas de `CONSIGNAS TÉCNICAS DEL DESAFÍO.pdf`.
- Se aclaró que la primera etapa exige una propuesta conceptual y visual; el desarrollo funcional y la publicación en GitHub Pages son adicionales elegidos por el equipo.
- Se separaron los entregables obligatorios de los entregables adicionales.
- Se incorporaron las cuatro referencias oficiales indicadas por las consignas.
- Se corrigió el estado de `paleta-colores/`, que ya se encuentra versionada.
- Se documentaron los ocho colores aportados por el usuario.
- Se copió `paleta-colores/expojuy26_horizontal.jpg` a `mockup/public/media/expojuy26-logo.jpg` sin modificar el original.
- Se reemplazó el placeholder de marca por el logo aportado en `mockup/app/layout/navbar.tsx`.
- Se reemplazó el placeholder de marca por el logo aportado en `mockup/app/layout/footer.tsx`.
- Se aplicó la paleta aportada en `mockup/app/globals.css`, incluyendo fondos, acentos, estados interactivos, mapa y planificador.
- Se reorganizaron las prioridades para concentrar la entrega en identidad, secciones mínimas, memoria descriptiva, documentación y revisión responsive.
- `npm run lint` finalizó correctamente después de los cambios.
- `npm run build` finalizó correctamente con Next.js 16.3.4 y volvió a generar `/` y `/_not-found` como contenido estático.
- Se verificó en navegador integrado el render de escritorio de la portada, la cabecera y el footer; el logo carga correctamente y no presenta deformaciones.
- Queda pendiente repetir la revisión visual móvil con la nueva identidad antes de la entrega.
