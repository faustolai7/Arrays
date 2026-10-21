# 🖥️ Timbó Hardware

Proyecto final del curso de **Desarrollo Web**: un sitio estático de e-commerce (front-end) para una tienda de hardware gamer ficticia llamada **Timbó Hardware**.

🔗 **Demo en vivo:** entrega-proyecto-final-desarrollo-w.vercel.app
---

## 📋 Descripción

Timbó Hardware es un sitio web de una tienda de hardware con secciones dedicadas a **monitores**, **teclados** y **mouses**, más una página de **contacto**. El diseño utiliza una estética oscura con colores negro y verde neón, pensada para un público gamer y tecnológico.

El proyecto está armado como una serie de páginas HTML estáticas que comparten un mismo header (navbar), footer y hoja de estilos, mostrando productos en formato de tarjetas (imagen, nombre y precio).

---

## 🚀 Tecnologías utilizadas

- **HTML5** — Estructura semántica del contenido (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<figure>`, `<form>`, etc.).
- **CSS3 / Sass (SCSS)** — Estilos del sitio escritos en `sass/main.scss` y compilados a `css/styles.css` (incluye su `.map` para debugging). Define variables de color, tipografías y layout.
- **[Bootstrap 5.3.3](https://getbootstrap.com/)** — Framework CSS/JS usado vía CDN para el navbar responsive, el sistema de grillas (`row`/`col`) y los estilos de formulario.
- **Google Fonts** — Tipografías `Orbitron` (títulos, estética futurista) y `Roboto` / `Exo 2` (texto general).
- **Google Maps Embed** — `<iframe>` con la ubicación en la página de contacto.

No hay backend ni base de datos: es un sitio 100% estático, desplegado en **Vercel** (o Netlify).

---

## 📁 Estructura del proyecto

```
Entrega-proyecto-final-desarrollo-web/
├── index.html                  # Página de inicio (banner de presentación)
├── css/
│   ├── styles.css              # CSS compilado, enlazado desde el HTML
│   └── styles.css.map          # Source map (relaciona el CSS con el SCSS)
├── sass/
│   └── main.scss               # Fuente de los estilos (variables, secciones)
├── img/                        # Logos, banner e imágenes de productos
└── pages/
    ├── monitores.html          # Catálogo de monitores gamer
    ├── teclados.html           # Catálogo de teclados mecánicos
    ├── mouses.html             # Catálogo de mouses gamer
    └── contactanos.html        # Formulario de contacto + mapa embebido
```

