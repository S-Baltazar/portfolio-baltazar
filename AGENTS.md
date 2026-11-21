<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Reglas de Sincronización del Portfolio (`llms.txt` y SEO)

Siempre que realices cualquier cambio en la información personal, roles, habilidades, datos de contacto o proyectos de Baltazar Salerno:

1. **Actualizar la página y metadatos SEO:**
   - Verifica y actualiza `src/app/page.tsx` (Hero, Sobre mí, Habilidades, Contacto y JSON-LD estructurado).
   - Verifica y actualiza `src/app/layout.tsx` (`title`, `description`, `keywords`, `openGraph`, `twitter`).
   - Si se agregan, modifican o eliminan proyectos, actualiza `src/data/projects.ts` (y asegúrate de que el JSON-LD en `src/app/page.tsx` siga reflejando la lista actual).
2. **Actualizar `public/llms.txt`:**
   - Mantén `public/llms.txt` 100% sincronizado con los datos visibles en la página: nombre, roles, stack tecnológico, descripción profesional, enlaces de contacto y la lista completa de proyectos con sus tecnologías y puntos clave.
3. **Verificar rutas SEO:**
   - Si agregas nuevas páginas o rutas públicas, actualízalas también en `src/app/sitemap.ts` y `public/llms.txt`.
   - Evita usar valores dinámicos no deterministas (como `new Date()`) durante el prerenderizado estático mientras `cacheComponents: true` esté activo en `next.config.ts`.
