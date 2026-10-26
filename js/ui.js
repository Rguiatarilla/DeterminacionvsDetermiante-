/* ==========================================================================
   HELPERS DE UI (compartidos por las secciones)
   ========================================================================== */

window.UI = (function () {
    "use strict";

    // Crea un elemento con clases, atributos e hijos
    function el(tag, opts = {}, hijos = []) {
        const n = document.createElement(tag);
        if (opts.class) n.className = opts.class;
        if (opts.html != null) n.innerHTML = opts.html;
        if (opts.text != null) n.textContent = opts.text;
        if (opts.attrs) for (const k in opts.attrs) n.setAttribute(k, opts.attrs[k]);
        if (opts.on) for (const ev in opts.on) n.addEventListener(ev, opts.on[ev]);
        (Array.isArray(hijos) ? hijos : [hijos]).forEach(h => {
            if (h == null) return;
            n.appendChild(typeof h === "string" ? document.createTextNode(h) : h);
        });
        return n;
    }

    // Insignia "propuesto"
    function badgePropuesto() {
        return el("span", {
            class: "badge-propuesto",
            text: "propuesto",
            attrs: { title: "Contenido nuevo sugerido, pendiente de revisión docente" }
        });
    }

    // Tarjeta de sección contenedora
    function seccion(claseExtra = "") {
        return el("section", { class: "seccion " + claseExtra });
    }

    function titulo(txt, nivel = "h2") {
        return el(nivel, { class: "seccion-h", text: txt });
    }

    function parrafo(txt, clase = "") {
        return el("p", { class: "parrafo " + clase, html: txt });
    }

    // Campo de respuesta con autoguardado en localStorage
    function campoRespuesta(estado, id, etiqueta, opciones = {}) {
        const wrap = el("div", { class: "campo" });
        const lab = el("label", { class: "campo-label", attrs: { for: id } });
        lab.textContent = etiqueta;
        if (opciones.propuesto) lab.appendChild(badgePropuesto());
        const ta = el("textarea", {
            class: "campo-input",
            attrs: {
                id,
                rows: opciones.rows || 3,
                placeholder: opciones.placeholder || "Escribe tu respuesta…"
            },
            on: {
                input: (e) => estado.set(id, e.target.value)
            }
        });
        ta.value = estado.get(id);
        wrap.appendChild(lab);
        wrap.appendChild(ta);
        return wrap;
    }

    // Acordeón accesible
    function acordeon(items) {
        const cont = el("div", { class: "acordeon" });
        items.forEach(item => {
            const panelId = "panel-" + item.id;
            const btn = el("button", {
                class: "acordeon-head",
                attrs: { "aria-expanded": "false", "aria-controls": panelId }
            });
            btn.innerHTML = `<span>${item.titulo}</span><span class="acordeon-ico" aria-hidden="true">▾</span>`;
            const panel = el("div", { class: "acordeon-panel", attrs: { id: panelId, hidden: "" } });
            panel.appendChild(parrafo(item.cuerpo));
            if (item.fuente) panel.appendChild(el("p", { class: "fuente", text: "Fuente: " + item.fuente }));
            btn.addEventListener("click", () => {
                const abierto = btn.getAttribute("aria-expanded") === "true";
                btn.setAttribute("aria-expanded", String(!abierto));
                if (abierto) panel.setAttribute("hidden", "");
                else panel.removeAttribute("hidden");
            });
            cont.appendChild(el("div", { class: "acordeon-item" }, [btn, panel]));
        });
        return cont;
    }

    // Chip de pista flotante (tooltip simple accesible)
    function conPista(nodo, texto) {
        nodo.setAttribute("tabindex", "0");
        nodo.setAttribute("role", "button");
        nodo.setAttribute("aria-label", texto);
        nodo.title = texto;
        return nodo;
    }

    // Texto expandible tipo acordeón: muestra un resumen (primeras N oraciones)
    // y oculta el resto tras "Ver más / Ver menos". Si pasas un "grupo", al abrir
    // uno se cierran automáticamente los demás del mismo grupo.
    function textoExpandible(texto, resumenOraciones = 1, grupo) {
        const limpio = String(texto).trim();
        // Divide en oraciones conservando el signo de puntuación
        const partes = limpio.match(/[^.!?]+[.!?]+|\s*[^.!?]+$/g) || [limpio];
        if (partes.length <= resumenOraciones) {
            return parrafo(limpio);
        }
        const resumen = partes.slice(0, resumenOraciones).join(" ").trim();
        const resto = partes.slice(resumenOraciones).join(" ").trim();

        const wrap = el("div", { class: "expandible" });
        const pResumen = el("span", { class: "exp-resumen", text: resumen + " " });
        const pResto = el("span", { class: "exp-resto", attrs: { hidden: "" }, text: resto });
        const btn = el("button", {
            class: "exp-btn",
            text: "Ver más",
            attrs: { type: "button", "aria-expanded": "false" }
        });

        const cerrar = () => {
            btn.setAttribute("aria-expanded", "false");
            pResto.setAttribute("hidden", "");
            btn.textContent = "Ver más";
        };
        const abrir = () => {
            btn.setAttribute("aria-expanded", "true");
            pResto.removeAttribute("hidden");
            btn.textContent = "Ver menos";
        };

        // Registro en el grupo (si se proporcionó) para el comportamiento acordeón
        if (grupo && Array.isArray(grupo._items)) {
            grupo._items.push({ cerrar });
        } else if (grupo) {
            grupo._items = [{ cerrar }];
        }

        btn.addEventListener("click", () => {
            const abierto = btn.getAttribute("aria-expanded") === "true";
            if (abierto) { cerrar(); return; }
            // Cerrar los demás del mismo grupo
            if (grupo && grupo._items) {
                grupo._items.forEach(it => { if (it.cerrar !== cerrar) it.cerrar(); });
            }
            abrir();
        });

        const p = el("p", { class: "parrafo" }, [pResumen, pResto]);
        wrap.appendChild(p);
        wrap.appendChild(btn);
        return wrap;
    }

    // Crea un identificador de grupo para expandibles tipo acordeón
    function grupoExpandible() { return { _items: [] }; }

    // Insignia de icono dentro de un círculo con color de tono (rose/sky/accent)
    function iconoBadge(svg, tono = "accent") {
        const b = el("span", { class: "icono-badge icono-" + tono, attrs: { "aria-hidden": "true" } });
        b.innerHTML = svg || "";
        return b;
    }

    // Encabezado de sección con icono + título (más visual que solo texto)
    function encabezado(svg, titulo, tono = "accent") {
        const h = el("div", { class: "sec-hero" }, [
            iconoBadge(svg, tono),
            el("h2", { class: "sec-hero-h", text: titulo })
        ]);
        return h;
    }

    return { el, badgePropuesto, seccion, titulo, parrafo, campoRespuesta, acordeon, conPista, textoExpandible, grupoExpandible, iconoBadge, encabezado };
})();
