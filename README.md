# Portafolio — Juan Simón Berdugo

Portafolio personal construido en **React + Vite + TypeScript + Tailwind CSS** (migrado desde Angular).

## Stack

- **React 18** + **Vite 5** (SPA, sin frameworks SSR)
- **TypeScript**
- **Tailwind CSS** para todo el estilado
- **react-i18next** para internacionalización ES / EN (detección por navegador + `localStorage`)
- Font Awesome (CDN) para iconografía
- Formulario de contacto → Cloudflare Worker existente

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # type-check + build de producción en /dist
npm run preview  # previsualizar el build
```

## Estructura

```
public/
  img/            imágenes (pfp, proyectos, ilustraciones, favicon)
  fonts/          Ubuntu + Liberation Mono
  cv/             CV descargable en ES y EN (.docx)
src/
  components/     Header, Home, Experiencia, SobreMi, Skills, Proyectos, Contacto, Footer, LanguageToggle
  hooks/          useScrollReveal, useCustomCursor
  services/       contact (POST al worker)
  locales/        es.json, en.json
  i18n.ts         configuración de i18next
  index.css       tokens de tema, animaciones, cursor, burbujas
```

## Gimmicks conservados y ampliados

- Cursor personalizado con seguimiento suave que se invierte sobre las secciones amarillas
- Burbujas animadas en el hero
- Animaciones de revelado al hacer scroll (IntersectionObserver)
- Texto con degradado animado (shimmer), badges de stack, timeline de experiencia
- Toggle de idioma ES/EN

## Novedades (actualización de CV)

- Nuevo empleo **TopLevel — Full-Stack Developer (React / NestJS)**
- Sección **Skills & Stack** (Frontend / Backend / Herramientas)
- Bloque de **Educación** e **Idiomas**
- Botón **Descargar CV** (sirve el `.docx` según el idioma activo)
- Textos de "Sobre mí" y footer actualizados al perfil full-stack
