/* ==========================================================================
   ICONOS SVG (pequeños, UI) y ESCENAS SVG (grandes, ilustraciones)
   ========================================================================== */

/* ---- Íconos de UI ---- */
window.ICON = (function () {
    "use strict";
    const w = (p) => `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
    return {
        brujula: w(`<circle cx="24" cy="24" r="18"/><polygon points="24,14 28,24 24,34 20,24" fill="currentColor" stroke="none"/>`),
        iceberg: w(`<path d="M6 26h36"/><path d="M24 8l9 18H15z" fill="currentColor" fill-opacity="0.12"/><path d="M15 26l-6 14h30l-6-14"/>`),
        tejido:  w(`<path d="M14 8v32M24 8v32M34 8v32"/><path d="M8 16h32M8 26h32M8 36h32" stroke-opacity="0.6"/>`),
        niveles: w(`<rect x="10" y="10" width="28" height="7" rx="2"/><rect x="13" y="21" width="22" height="7" rx="2"/><rect x="16" y="32" width="16" height="7" rx="2"/>`),
        balanza: w(`<path d="M24 8v32M14 40h20"/><path d="M10 16h28M10 16l-5 10a5 5 0 0 0 10 0zM38 16l-5 10a5 5 0 0 0 10 0z"/>`),
        libro:   w(`<path d="M24 12c-4-3-10-3-14-2v26c4-1 10-1 14 2 4-3 10-3 14-2V10c-4-1-10-1-14 2z"/><path d="M24 12v28"/>`),
        raiz:    w(`<path d="M24 6v16"/><path d="M18 12c-2 4-8 5-10 10M30 12c2 4 8 5 10 10"/><path d="M24 22c-3 5-3 10-7 16M24 22c3 5 3 10 7 16M24 22v16"/>`),
        lupa:    w(`<circle cx="21" cy="21" r="12"/><path d="M30 30l10 10"/>`),
        hoja:    w(`<path d="M10 38C10 20 24 10 40 10c0 16-10 30-28 30-1-8 4-16 14-20"/>`)
    };
})();

/* ---- Escenas ilustrativas (banners grandes de sección) ---- */
window.ESCENA = (function () {
    "use strict";

    // Paisaje de territorio
    const territorio = `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Paisaje de territorio" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="es-cielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe0f2"/><stop offset="1" stop-color="#e9ecd8"/></linearGradient>
        <linearGradient id="es-col1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a9b70"/><stop offset="1" stop-color="#1f6b4a"/></linearGradient>
        <linearGradient id="es-col2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aa37d"/><stop offset="1" stop-color="#2e8b63"/></linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#es-cielo)"/>
      <circle cx="312" cy="66" r="30" fill="#f3c267" opacity="0.9"/><circle cx="312" cy="66" r="44" fill="#f3c267" opacity="0.25"/>
      <path d="M0 150 L70 96 L130 150 Z" fill="#9bbccb" opacity="0.7"/>
      <path d="M90 150 L170 84 L250 150 Z" fill="#86aebb" opacity="0.8"/>
      <path d="M210 150 L300 92 L400 150 Z" fill="#9bbccb" opacity="0.6"/>
      <path d="M0 150 Q110 128 210 150 T400 148 V260 H0 Z" fill="url(#es-col2)"/>
      <path d="M0 182 Q130 160 260 184 T400 180 V260 H0 Z" fill="url(#es-col1)"/>
      <g stroke="#15573b" stroke-width="2" opacity="0.5">
        <path d="M40 230 q6 -16 0 -32 M60 232 q6 -16 0 -32 M80 230 q6 -16 0 -32"/>
        <path d="M300 232 q6 -16 0 -32 M320 234 q6 -16 0 -32 M340 232 q6 -16 0 -32"/>
      </g>
    </svg>`;

    // Ilustración del iceberg
    const icebergEscena = `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Metáfora del iceberg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ice-ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe6ef"/><stop offset="1" stop-color="#a4c8d8"/></linearGradient>
        <linearGradient id="ice-ap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b8c9b"/><stop offset="1" stop-color="#0f6975"/></linearGradient>
        <linearGradient id="ice-vb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a9b70"/><stop offset="1" stop-color="#1f6b4a"/></linearGradient>
      </defs>
      <rect width="400" height="108" fill="url(#ice-ag)"/>
      <rect x="0" y="108" width="400" height="152" fill="url(#ice-ap)"/>
      <line x1="0" y1="108" x2="400" y2="108" stroke="#fff" stroke-width="2" stroke-dasharray="8 6" opacity="0.7"/>
      <polygon points="200,28 268,108 132,108" fill="white" opacity="0.92"/>
      <text x="200" y="80" text-anchor="middle" font-family="Outfit,sans-serif" font-size="11" fill="#0f6975" font-weight="700">Condiciones visibles</text>
      <polygon points="132,108 268,108 320,248 80,248" fill="url(#ice-vb)" opacity="0.9"/>
      <text x="200" y="172" text-anchor="middle" font-family="Outfit,sans-serif" font-size="13" fill="white" font-weight="700">Organización histórica,</text>
      <text x="200" y="194" text-anchor="middle" font-family="Outfit,sans-serif" font-size="13" fill="white" font-weight="700">económica y política</text>
      <text x="22" y="76" font-family="Outfit,sans-serif" font-size="10" fill="#1b8c9b" font-weight="800" opacity="0.9">DETERMINANTES</text>
      <text x="22" y="148" font-family="Outfit,sans-serif" font-size="10" fill="#e2f0e8" font-weight="800" opacity="0.9">DETERMINACIÓN</text>
    </svg>`;

    // Ilustración del tejido
    const tejidoEscena = `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Metáfora del tejido" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tej-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1f8f4"/><stop offset="1" stop-color="#ddf0f2"/></linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#tej-bg)"/>
      <g stroke="#2e8b63" stroke-width="11" stroke-linecap="round" opacity="0.85">
        <line x1="80"  y1="10" x2="80"  y2="190"/>
        <line x1="140" y1="10" x2="140" y2="190"/>
        <line x1="200" y1="10" x2="200" y2="190"/>
        <line x1="260" y1="10" x2="260" y2="190"/>
        <line x1="320" y1="10" x2="320" y2="190"/>
      </g>
      <g stroke="#1b8c9b" stroke-width="9" stroke-linecap="round" opacity="0.7">
        <line x1="50" y1="52"  x2="350" y2="52"/>
        <line x1="50" y1="100" x2="350" y2="100"/>
        <line x1="50" y1="148" x2="350" y2="148"/>
      </g>
      <g stroke="#6a8a3e" stroke-width="7" stroke-dasharray="4 10" stroke-linecap="round" opacity="0.55">
        <line x1="358" y1="35"  x2="395" y2="35"/>
        <line x1="356" y1="85"  x2="395" y2="72"/>
        <line x1="356" y1="135" x2="395" y2="148"/>
      </g>
      <rect x="340" y="15" width="2" height="170" fill="#bfe4e8" opacity="0.4"/>
      <text x="12" y="52" font-family="Outfit,sans-serif" font-size="10" fill="#1f6b4a" font-weight="800" opacity="0.8">URDIMBRE</text>
      <text x="12" y="100" font-family="Outfit,sans-serif" font-size="10" fill="#0f6975" font-weight="800" opacity="0.8">TRAMA</text>
      <text x="356" y="170" font-family="Outfit,sans-serif" font-size="9" fill="#6a8a3e" font-weight="700" opacity="0.7" transform="rotate(-90 356 170)">SUELTOS</text>
    </svg>`;

    return { territorio, icebergEscena, tejidoEscena };
})();
