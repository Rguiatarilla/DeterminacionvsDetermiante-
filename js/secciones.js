/* ==========================================================================
   DEFINICIÓN DE SECCIONES
   Cada sección: { id, titulo, render(estado) -> HTMLElement }
   Usa helpers de window.UI y datos de window.DATA.
   ========================================================================== */

(function () {
    "use strict";
    const U = window.UI;
    const D = window.DATA;
    const ICON = window.ICON;

    /* --------------------------------------------------------------------
       1. PORTADA / RUTA DE APRENDIZAJE
    -------------------------------------------------------------------- */
    function portada() {
        const d = D.portada;
        const sec = U.seccion("portada");

        // HERO: texto breve a la izquierda, ilustración a la derecha
        const hero = U.el("div", { class: "hero" });
        const heroTxt = U.el("div", { class: "hero-txt" }, [
            U.el("p", { class: "kicker", text: "Documento comparativo · Salud Colectiva" }),
            U.el("h1", { class: "portada-titulo", html: "Determinantes <span class=\"g\">vs</span> Determinación" }),
            U.el("p", { class: "portada-sub", text: d.subtitulo })
        ]);
        const heroArte = U.el("div", { class: "hero-arte", attrs: { "aria-hidden": "true" } });
        heroArte.innerHTML = window.ESCENA.territorio;
        hero.appendChild(heroTxt);
        hero.appendChild(heroArte);
        sec.appendChild(hero);

        // Resumen de 3 líneas (idea rápida)
        const resumen = U.el("div", { class: "callout callout-objetivo" }, [
            U.el("strong", { text: "En resumen" })
        ]);
        D.resumen.forEach(t => resumen.appendChild(U.parrafo(t)));
        sec.appendChild(resumen);

        // Objetivo e introducción: ocultos tras acordeón para aligerar la vista
        sec.appendChild(U.acordeon([{
            id: "portada-objetivo",
            titulo: "Objetivo e introducción",
            cuerpo: "<strong>Objetivo.</strong> " + d.objetivo + "<br><br>" + d.introduccion.join("<br><br>")
        }]));

        // Dos perspectivas enfrentadas con insignia VS al centro
        const vs = U.el("div", { class: "vs-grid" });
        vs.appendChild(U.el("div", { class: "mini-card borde-sky vs-lado" }, [
            U.iconoBadge(ICON.lupa, "sky"),
            U.el("span", { class: "etq etq-sky", text: "Enfoque de condiciones visibles" }),
            U.el("h3", { class: "mini-card-h", text: d.perspectivas[0].etiqueta }),
            U.parrafo(d.perspectivas[0].texto)
        ]));
        vs.appendChild(U.el("div", { class: "vs-badge", text: "VS", attrs: { "aria-hidden": "true" } }));
        vs.appendChild(U.el("div", { class: "mini-card borde-rose vs-lado" }, [
            U.iconoBadge(ICON.raiz, "rose"),
            U.el("span", { class: "etq etq-rose", text: "Enfoque de causas profundas" }),
            U.el("h3", { class: "mini-card-h", text: d.perspectivas[1].etiqueta }),
            U.parrafo(d.perspectivas[1].texto)
        ]));
        sec.appendChild(vs);
        return sec;
    }

    /* --------------------------------------------------------------------
       2. APROXIMACIÓN CONCEPTUAL
    -------------------------------------------------------------------- */
    function conceptual(estado) {
        const sec = U.seccion();
        sec.appendChild(U.encabezado(ICON.libro, D.derechoSalud.titulo, "accent"));
        sec.appendChild(U.parrafo("Despliega cada tarjeta para leer la fuente normativa."));
        sec.appendChild(U.acordeon(D.derechoSalud.tarjetas));

        const grid = U.el("div", { class: "grid-2 mt" });
        const gEnf = U.grupoExpandible();
        grid.appendChild(U.el("div", { class: "mini-card borde-sky" }, [
            U.iconoBadge(ICON.lupa, "sky"),
            U.el("span", { class: "etq etq-sky", text: "Determinantes" }),
            U.el("h3", { class: "mini-card-h", text: D.enfoques.determinantes.titulo }),
            U.textoExpandible(D.enfoques.determinantes.texto, 1, gEnf)
        ]));
        grid.appendChild(U.el("div", { class: "mini-card borde-rose" }, [
            U.iconoBadge(ICON.raiz, "rose"),
            U.el("span", { class: "etq etq-rose", text: "Determinación" }),
            U.el("h3", { class: "mini-card-h", text: D.enfoques.determinacion.titulo }),
            U.textoExpandible(D.enfoques.determinacion.texto, 1, gEnf)
        ]));
        sec.appendChild(grid);
        return sec;
    }

    /* --------------------------------------------------------------------
       3. DOS HEBRAS
    -------------------------------------------------------------------- */
    function hebras() {
        const sec = U.seccion();
        sec.appendChild(U.encabezado(ICON.tejido, "Dos miradas, dos hebras", "rose"));

        // Ilustración del tejido
        const arteT = U.el("div", { class: "seccion-arte", attrs: { "aria-hidden": "true" } });
        arteT.innerHTML = window.ESCENA.tejidoEscena;
        sec.appendChild(arteT);

        sec.appendChild(U.parrafo("A la izquierda, <strong>hilos sueltos</strong> (Determinantes); a la derecha, un <strong>tejido entrelazado</strong> (Determinación). Despliega cada factor para leer su lectura."));

        const grid = U.el("div", { class: "grid-2" });

        /* ---- Columna A · Determinantes: hilos sueltos ---- */
        const colDet = U.el("div", { class: "mini-card borde-sky" });
        colDet.appendChild(U.el("span", { class: "etq etq-sky", text: "Determinantes" }));
        colDet.appendChild(U.el("h3", { class: "mini-card-h", text: D.hebras.determinantes.titulo }));
        colDet.appendChild(U.parrafo(D.hebras.determinantes.descripcion));

        // Figura: hilos verticales separados
        const figSueltos = U.el("div", { class: "fig-sueltos", attrs: { "aria-hidden": "true" } });
        D.hebras.determinantes.hilos.forEach(() => figSueltos.appendChild(U.el("span", { class: "hilo-suelto" })));
        colDet.appendChild(figSueltos);

        // Lista de factores con su lectura (siempre visible)
        const listaA = U.el("ul", { class: "hebra-lista" });
        D.hebras.determinantes.hilos.forEach(h => {
            listaA.appendChild(U.el("li", {}, [
                U.el("span", { class: "hebra-factor hebra-factor-sky", text: h.factor }),
                U.el("span", { class: "hebra-lectura", text: h.lectura })
            ]));
        });
        colDet.appendChild(listaA);

        /* ---- Columna B · Determinación: tejido ---- */
        const colDet2 = U.el("div", { class: "mini-card borde-rose" });
        colDet2.appendChild(U.el("span", { class: "etq etq-rose", text: "Determinación" }));
        colDet2.appendChild(U.el("h3", { class: "mini-card-h", text: D.hebras.determinacion.titulo }));
        colDet2.appendChild(U.parrafo(D.hebras.determinacion.descripcion));

        // Figura: trama tejida (urdimbre vertical + trama horizontal)
        const figTejido = U.el("div", { class: "fig-tejido", attrs: { "aria-hidden": "true" } });
        for (let i = 0; i < 5; i++) figTejido.appendChild(U.el("span", { class: "hilo-v" }));
        for (let i = 0; i < 4; i++) figTejido.appendChild(U.el("span", { class: "hilo-h" }));
        colDet2.appendChild(figTejido);

        // Urdimbre
        colDet2.appendChild(U.el("p", { class: "tejido-rotulo", text: "Urdimbre · hilos verticales (estructura)" }));
        const listaU = U.el("ul", { class: "hebra-lista" });
        D.hebras.determinacion.urdimbre.forEach(h => {
            listaU.appendChild(U.el("li", {}, [
                U.el("span", { class: "hebra-factor hebra-factor-rose grueso", text: h.factor }),
                U.el("span", { class: "hebra-lectura", text: h.lectura })
            ]));
        });
        colDet2.appendChild(listaU);

        // Trama
        colDet2.appendChild(U.el("p", { class: "tejido-rotulo", text: "Trama · hilos horizontales (condiciones de vida)" }));
        const listaT = U.el("ul", { class: "hebra-lista" });
        D.hebras.determinacion.trama.forEach(h => {
            listaT.appendChild(U.el("li", {}, [
                U.el("span", { class: "hebra-factor hebra-factor-rose", text: h.factor }),
                U.el("span", { class: "hebra-lectura", text: h.lectura })
            ]));
        });
        colDet2.appendChild(listaT);

        grid.appendChild(colDet);
        grid.appendChild(colDet2);
        sec.appendChild(grid);
        return sec;
    }

    /* --------------------------------------------------------------------
       4. ICEBERG
    -------------------------------------------------------------------- */
    function iceberg() {
        const sec = U.seccion();
        sec.appendChild(U.encabezado(ICON.iceberg, "La metáfora del iceberg", "sky"));

        // Ilustración principal (ocupa todo el ancho)
        const arte = U.el("div", { class: "seccion-arte", attrs: { "aria-hidden": "true" } });
        arte.innerHTML = window.ESCENA.icebergEscena;
        sec.appendChild(arte);

        sec.appendChild(U.parrafo("Toca cada zona para resaltarla. Las descripciones completas aparecen en las tarjetas de abajo."));

        // Figura del iceberg con rótulos cortos (fuera de la zona que se corta)
        const fig = U.el("div", { class: "iceberg" });
        fig.appendChild(U.el("div", { class: "iceberg-agua" }, [
            U.el("span", { class: "iceberg-agua-txt", text: "nivel del agua" })
        ]));

        const punta = U.conPista(U.el("button", { class: "iceberg-punta", attrs: { "aria-label": "Zona visible: " + D.iceberg.punta.titulo } }), D.iceberg.punta.texto);
        const base = U.conPista(U.el("button", { class: "iceberg-base", attrs: { "aria-label": "Zona oculta: " + D.iceberg.base.titulo } }), D.iceberg.base.texto);

        fig.appendChild(U.el("div", { class: "iceberg-fig" }, [punta, base]));

        // Rótulos al lado (no encima del triángulo estrecho)
        const rotulos = U.el("div", { class: "iceberg-rotulos" });
        rotulos.appendChild(U.el("div", { class: "iceberg-rot iceberg-rot-sky" }, [
            U.el("span", { class: "iceberg-rot-flecha", text: "▲ Sobre el agua" }),
            U.el("strong", { text: "La punta" }),
            U.el("span", { class: "iceberg-rot-sub", text: "Condiciones visibles · Determinantes" })
        ]));
        rotulos.appendChild(U.el("div", { class: "iceberg-rot iceberg-rot-rose" }, [
            U.el("span", { class: "iceberg-rot-flecha", text: "▼ Bajo el agua" }),
            U.el("strong", { text: "La base oculta" }),
            U.el("span", { class: "iceberg-rot-sub", text: "Génesis de la salud · Determinación" })
        ]));

        sec.appendChild(U.el("div", { class: "iceberg-wrap" }, [fig, rotulos]));

        // Panel que se resalta al interactuar + tarjetas siempre visibles
        const tarjetas = U.el("div", { class: "grid-2 mt" });
        const cardPunta = U.el("div", { class: "mini-card borde-sky iceberg-card", attrs: { id: "ice-card-punta" } }, [
            U.el("span", { class: "etq etq-sky", text: D.iceberg.punta.enfoque }),
            U.el("h3", { class: "mini-card-h", text: D.iceberg.punta.titulo }),
            U.parrafo(D.iceberg.punta.texto)
        ]);
        const cardBase = U.el("div", { class: "mini-card borde-rose iceberg-card", attrs: { id: "ice-card-base" } }, [
            U.el("span", { class: "etq etq-rose", text: D.iceberg.base.enfoque }),
            U.el("h3", { class: "mini-card-h", text: D.iceberg.base.titulo }),
            U.parrafo(D.iceberg.base.texto)
        ]);
        tarjetas.appendChild(cardPunta);
        tarjetas.appendChild(cardBase);
        sec.appendChild(tarjetas);

        // Resaltado recíproco figura <-> tarjeta
        const activar = (zona) => {
            punta.classList.toggle("activa", zona === "punta");
            base.classList.toggle("activa", zona === "base");
            cardPunta.classList.toggle("resaltada", zona === "punta");
            cardBase.classList.toggle("resaltada", zona === "base");
        };
        [["punta", punta, cardPunta], ["base", base, cardBase]].forEach(([k, btn, card]) => {
            const m = () => activar(k);
            btn.addEventListener("mouseenter", m); btn.addEventListener("focus", m); btn.addEventListener("click", m);
            card.addEventListener("mouseenter", m);
        });
        return sec;
    }

    /* --------------------------------------------------------------------
       5. CUADRO COMPARATIVO INTERACTIVO
    -------------------------------------------------------------------- */
    function comparativo() {
        const sec = U.seccion();
        sec.appendChild(U.encabezado(ICON.balanza, "Determinación VS Determinantes", "accent"));
        sec.appendChild(U.parrafo("Toca cada pregunta para comparar ambos enfoques. Se abre una a la vez."));

        const lista = U.el("div", { class: "comp-acordeon" });
        const paneles = [];

        D.comparativo.forEach((f, i) => {
            const item = U.el("div", { class: "comp-item" });

            const panelId = "comp-panel-" + i;
            const btn = U.el("button", {
                class: "comp-head",
                attrs: { type: "button", "aria-expanded": "false", "aria-controls": panelId }
            });
            const iconosPreg = [ICON.brujula, ICON.iceberg, ICON.balanza, ICON.tejido, ICON.niveles, ICON.hoja];
            btn.innerHTML =
                `<span class="comp-num">${iconosPreg[i] || (i + 1)}</span>` +
                `<span class="comp-pregunta">${f.clave}</span>` +
                `<span class="comp-ico" aria-hidden="true">▾</span>`;

            const panel = U.el("div", { class: "comp-panel", attrs: { id: panelId, hidden: "" } });
            const par = U.el("div", { class: "grid-2" });
            par.appendChild(U.el("div", { class: "comparativo-celda borde-rose" }, [
                U.el("span", { class: "etq etq-rose", text: "Determinación social" }),
                U.parrafo(f.determinacion)
            ]));
            par.appendChild(U.el("div", { class: "comparativo-celda borde-sky" }, [
                U.el("span", { class: "etq etq-sky", text: "Determinantes de la salud" }),
                U.parrafo(f.determinantes)
            ]));
            panel.appendChild(par);

            const cerrar = () => { btn.setAttribute("aria-expanded", "false"); panel.setAttribute("hidden", ""); };
            btn.addEventListener("click", () => {
                const abierto = btn.getAttribute("aria-expanded") === "true";
                paneles.forEach(p => p.cerrar());           // cierra las demás
                if (!abierto) { btn.setAttribute("aria-expanded", "true"); panel.removeAttribute("hidden"); }
            });

            paneles.push({ cerrar });
            item.appendChild(btn);
            item.appendChild(panel);
            lista.appendChild(item);
        });

        sec.appendChild(lista);
        return sec;
    }

    /* --------------------------------------------------------------------
       6. ESTRUCTURAS COMPARADAS (NIVELES) · CASO MATEO
    -------------------------------------------------------------------- */
    function niveles() {
        const sec = U.seccion();
        sec.appendChild(U.encabezado(ICON.niveles, "Estructuras comparadas · el caso de Mateo", "accent"));
        sec.appendChild(U.parrafo("Recorre nivel por nivel y compara cómo cada enfoque ubica las causas de la malnutrición de Mateo."));

        const n = Math.max(D.niveles.determinacion.niveles.length, D.niveles.determinantes.niveles.length);
        const tabs = U.el("div", { class: "nivel-tabs" });
        const panel = U.el("div", { class: "grid-2" });

        function pintar(idx) {
            panel.innerHTML = "";
            const a = D.niveles.determinacion.niveles[idx];
            const b = D.niveles.determinantes.niveles[idx];
            panel.appendChild(U.el("div", { class: "comparativo-celda borde-rose" }, [
                U.el("span", { class: "etq etq-rose", text: D.niveles.determinacion.titulo }),
                U.el("h4", { class: "nivel-h", text: a.nombre }),
                U.parrafo("<em>" + a.definicion + "</em>"),
                U.el("div", { class: "callout callout-rose" }, [U.parrafo("<strong>Mateo:</strong> " + a.mateo)])
            ]));
            panel.appendChild(U.el("div", { class: "comparativo-celda borde-sky" }, [
                U.el("span", { class: "etq etq-sky", text: D.niveles.determinantes.titulo }),
                U.el("h4", { class: "nivel-h", text: b.nombre }),
                U.parrafo("<em>" + b.definicion + "</em>"),
                U.el("div", { class: "callout callout-sky" }, [U.parrafo("<strong>Mateo:</strong> " + b.mateo)])
            ]));
            [...tabs.children].forEach((t, i) => t.classList.toggle("activo", i === idx));
        }

        for (let i = 0; i < n; i++) {
            const t = U.el("button", { class: "nivel-tab", text: "Nivel " + (i + 1) });
            t.addEventListener("click", () => pintar(i));
            tabs.appendChild(t);
        }
        sec.appendChild(tabs);
        sec.appendChild(panel);

        const cierre = U.el("div", { class: "grid-2 mt" });
        cierre.appendChild(U.el("div", { class: "callout callout-rose" }, [U.parrafo("<strong>Lectura:</strong> " + D.niveles.determinacion.lectura)]));
        cierre.appendChild(U.el("div", { class: "callout callout-sky" }, [U.parrafo("<strong>Lectura:</strong> " + D.niveles.determinantes.lectura)]));
        sec.appendChild(cierre);

        // Frase contrastante final
        const frase = U.el("div", { class: "vs-grid frase-final" });
        frase.appendChild(U.el("div", { class: "frase-lado frase-rose", text: D.mateoContraste.determinacion }));
        frase.appendChild(U.el("div", { class: "vs-badge", text: "VS", attrs: { "aria-hidden": "true" } }));
        frase.appendChild(U.el("div", { class: "frase-lado frase-sky", text: D.mateoContraste.determinantes }));
        sec.appendChild(frase);

        pintar(0);
        return sec;
    }

    /* --------------------------------------------------------------------
       SÍNTESIS (tabla de diferencias clave + conclusión)
    -------------------------------------------------------------------- */
    function sintesis() {
        const d = D.sintesis;
        const sec = U.seccion();
        sec.appendChild(U.encabezado(ICON.balanza, "Síntesis: diferencias clave", "accent"));

        const tabla = U.el("table", { class: "tabla-sintesis" });
        const thead = U.el("thead");
        thead.appendChild(U.el("tr", {}, [
            U.el("th", { text: "Criterio" }),
            U.el("th", { class: "th-rose", text: "Determinación social" }),
            U.el("th", { class: "th-sky", text: "Determinantes sociales" })
        ]));
        tabla.appendChild(thead);
        const tbody = U.el("tbody");
        d.filas.forEach(f => {
            tbody.appendChild(U.el("tr", {}, [
                U.el("th", { attrs: { scope: "row" }, text: f.criterio }),
                U.el("td", { text: f.determinacion }),
                U.el("td", { text: f.determinantes })
            ]));
        });
        tabla.appendChild(tbody);
        sec.appendChild(tabla);

        sec.appendChild(U.el("div", { class: "callout callout-objetivo mt" }, [
            U.el("strong", { text: "Conclusión" }),
            U.parrafo(d.conclusion)
        ]));
        return sec;
    }

    /* --------------------------------------------------------------------
       NOTA: las secciones de casos (Clarita, Las Encinas), actividades
       (Elena), reflexión, recursos y quiz se retiraron de este documento
       comparativo. El contenido sigue disponible en js/contenido/casos.js
       y js/contenido/recursos.js por si se quieren reincorporar.
    -------------------------------------------------------------------- */

    /* --------------------------------------------------------------------
       NOTA: las secciones de casos (Clarita, Las Encinas), actividad (Elena),
       reflexión, recursos y quiz se retiraron de este documento comparativo.
       Su contenido sigue en js/contenido/casos.js y js/contenido/recursos.js
       por si se quieren reincorporar en el futuro.

       REGISTRO DE SECCIONES
    -------------------------------------------------------------------- */
    window.SECCIONES = [
        { id: "comparativo", titulo: "Cuadro comparativo (6 preguntas)", render: comparativo },
        { id: "iceberg", titulo: "Metáfora 1 · El iceberg", render: iceberg },
        { id: "hebras", titulo: "Metáfora 2 · El tejido", render: hebras },
        { id: "niveles", titulo: "Metáfora 3 · Niveles (caso Mateo)", render: niveles },
        { id: "sintesis", titulo: "Síntesis y conclusión", render: sintesis }
    ];

    // Export MD: este documento comparativo no tiene campos de respuesta.
    window.ETIQUETAS_EXPORT = [];
})();
