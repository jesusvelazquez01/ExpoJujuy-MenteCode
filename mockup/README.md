# Mockup ExpoJuy 2026

Propuesta conceptual y navegable desarrollada con Next.js, React y TypeScript.
Todo dato todavía no confirmado por la organización se identifica como contenido
demostrativo.

## Desarrollo local

```bash
npm ci
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). Las rutas principales son:

- `/`: portada.
- `/expositores`: directorio conceptual.
- `/noticias`: actualidad y contenidos editoriales conceptuales.
- `/entrada`: planificación y acreditación demostrativa.

## Verificación

```bash
npm run lint
npm run build
```

El build usa `output: "export"` y genera el sitio estático en `out/`. No requiere
un servidor Node.js en producción.

## Publicación en GitHub Pages

El workflow `../.github/workflows/deploy-pages.yml` compila y publica `mockup/out`
cuando se envían cambios a `main`. Antes del primer despliegue, en GitHub se debe
seleccionar **Settings → Pages → Source → GitHub Actions**.

Durante el workflow, `actions/configure-pages` informa el subdirectorio público
del repositorio. `next.config.ts` lo usa como `basePath`, y `app/lib/asset-path.ts`
lo aplica a las imágenes y al video locales. Por eso el mismo código funciona en
la raíz de `localhost` y en `/ExpoJujuy-MenteCode/` dentro de GitHub Pages.

Para simular localmente el build bajo ese subdirectorio:

```powershell
$env:PAGES_BASE_PATH = "/ExpoJujuy-MenteCode"
npm run build
Remove-Item Env:PAGES_BASE_PATH
```

No se debe incorporar SSR, Server Actions, cookies ni rutas dinámicas no
prerenderizadas mientras GitHub Pages continúe siendo el destino de publicación.
