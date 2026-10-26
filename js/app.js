/* ==========================================================================
   NÚCLEO DE LA APP
   - Estado y persistencia (localStorage)
   - Registro y render de secciones
   - Navegación, progreso, exportación
   Depende de: js/contenido/*.js (window.DATA) y js/secciones.js (window.SECCIONES)
   ========================================================================== */

(function () {
    "use strict";

    const STORAGE_KEY = "salud-colectiva-v1";

    // ----- Estado persistente -----
    const Estado = {
        datos: cargar(),
        get(id) { return this.datos.respuestas[id] ?? ""; },
        set(id, valor) {
            this.datos.respuestas[id] = valor;
            guardar(this.datos);
        },
        marcarVisitada(idSeccion) {
            if (!this.datos.visitadas.includes(idSeccion)) {
                this.datos.visitadas.push(idSeccion);
                guardar(this.datos);
            }
        },
        guardarQuiz(resultado) {
            this.datos.quiz = resultado;
            guardar(this.datos);
        },
        guardarUltima(indice) {
            this.datos.ultima = indice;
            guardar(this.datos);
        },
        reiniciar() {
            this.datos = { respuestas: {}, visitadas: [], quiz: null, ultima: 0 };
            guardar(this.datos);
        }
    };

    function cargar() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const d = JSON.parse(raw);
                return {
                    respuestas: d.respuestas || {},
                    visitadas: d.visitadas || [],
                    quiz: d.quiz || null,
                    ultima: d.ultima || 0
                };
            }
        } catch (e) { /* almacenamiento no disponible */ }
        return { respuestas: {}, visitadas: [], quiz: null, ultima: 0 };
    }

    function guardar(datos) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(datos)); }
        catch (e) { /* ignora si no hay almacenamiento (p. ej. modo privado) */ }
    }

    // ----- App -----
    const App = {
        secciones: window.SECCIONES || [],
        actual: 0,

        iniciar() {
            this.cacheDom();
            this.render();
            this.crearBotonArriba();
            this.bindGlobal();
            // Retomar la última sección vista (si existe)
            const inicio = Math.min(Estado.datos.ultima || 0, this.secciones.length - 1);
            this.ir(inicio, false);
        },

        cacheDom() {
            this.$nav = document.getElementById("nav-indice");
            this.$main = document.getElementById("vista");
            this.$progreso = document.getElementById("progreso-fill");
            this.$progresoTxt = document.getElementById("progreso-texto");
            this.$btnPrev = document.getElementById("btn-prev");
            this.$btnNext = document.getElementById("btn-next");
            this.$titulo = document.getElementById("seccion-titulo");
        },

        crearBotonArriba() {
            const b = document.createElement("button");
            b.id = "btn-arriba";
            b.className = "btn-arriba no-print";
            b.setAttribute("aria-label", "Volver arriba");
            b.innerHTML = "↑";
            b.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
            document.body.appendChild(b);
            this.$btnArriba = b;
            window.addEventListener("scroll", () => {
                b.classList.toggle("visible", window.scrollY > 320);
            }, { passive: true });
        },

        render() {
            // Índice lateral
            this.$nav.innerHTML = "";
            this.secciones.forEach((s, i) => {
                const li = document.createElement("li");
                const btn = document.createElement("button");
                btn.className = "nav-item";
                btn.innerHTML = `<span class="nav-num">${i + 1}</span><span>${s.titulo}</span>`;
                btn.setAttribute("aria-label", `Ir a ${s.titulo}`);
                btn.onclick = () => { this.ir(i); this.cerrarMenuMovil(); };
                li.appendChild(btn);
                this.$nav.appendChild(li);
            });
        },

        ir(indice, scroll = true) {
            if (indice < 0 || indice >= this.secciones.length) return;
            this.actual = indice;
            const sec = this.secciones[indice];

            Estado.marcarVisitada(sec.id);
            Estado.guardarUltima(indice);
            this.$titulo.textContent = sec.titulo;

            // Render de la sección
            this.$main.innerHTML = "";
            const nodo = sec.render(Estado);
            this.$main.appendChild(nodo);
            this.$main.classList.remove("slide-fade");
            void this.$main.offsetWidth;
            this.$main.classList.add("slide-fade");

            // Marca activa en el índice + scroll del índice hacia ella
            const items = [...this.$nav.querySelectorAll(".nav-item")];
            items.forEach((b, i) => b.classList.toggle("activo", i === indice));
            if (items[indice] && items[indice].scrollIntoView) {
                items[indice].scrollIntoView({ block: "nearest" });
            }

            // Botones
            this.$btnPrev.disabled = indice === 0;
            this.$btnNext.disabled = indice === this.secciones.length - 1;

            this.actualizarProgreso();
            if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
        },

        actualizarProgreso() {
            const total = this.secciones.length;
            const vistas = this.secciones.filter(s => Estado.datos.visitadas.includes(s.id)).length;
            const pct = Math.round((vistas / total) * 100);
            this.$progreso.style.width = pct + "%";
            this.$progresoTxt.textContent = `${vistas} / ${total} secciones · ${pct}%`;
        },

        bindGlobal() {
            this.$btnPrev.onclick = () => this.ir(this.actual - 1);
            this.$btnNext.onclick = () => this.ir(this.actual + 1);

            document.addEventListener("keydown", (e) => {
                if (e.target.matches("input, textarea")) return;
                if (e.key === "ArrowRight") this.ir(this.actual + 1);
                if (e.key === "ArrowLeft") this.ir(this.actual - 1);
            });

            document.getElementById("btn-menu").onclick = () => {
                document.body.classList.toggle("menu-abierto");
            };

        },

        cerrarMenuMovil() {
            document.body.classList.remove("menu-abierto");
        }
    };

    // Exponer utilidades a las secciones
    window.APP = App;
    window.Estado = Estado;

    window.addEventListener("load", () => App.iniciar());
})();
