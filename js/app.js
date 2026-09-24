/* ==========================================================================
   Lógica de navegación de la presentación
   Depende de: datos.js (variables globales "IMG" y "slides")
   ========================================================================== */

let currentSlide = 0;

/** Devuelve el HTML del bloque de imagen de una tarjeta. */
function buildImage(src, alt) {
    return `<div class="slide-image-wrap mb-4"><img src="${src}" alt="${alt || ''}" loading="lazy"></div>`;
}

/** Renderiza la diapositiva actual. */
function updateSlide() {
    const slide = slides[currentSlide];

    document.getElementById('slide-category').innerText = slide.category;
    document.getElementById('slide-main-title').innerText = slide.title;

    const socialEl = document.getElementById('content-social');
    const detEl = document.getElementById('content-determinantes');
    socialEl.innerHTML = buildImage(slide.socialImg, slide.socialImgAlt) + slide.social;
    detEl.innerHTML = buildImage(slide.determinantesImg, slide.determinantesImgAlt) + slide.determinantes;

    // Reinicia la animación de entrada
    socialEl.classList.remove('slide-fade');
    detEl.classList.remove('slide-fade');
    void socialEl.offsetWidth;
    socialEl.classList.add('slide-fade');
    detEl.classList.add('slide-fade');

    // Barra de progreso y contador
    document.getElementById('progress-fill').style.width =
        ((currentSlide + 1) / slides.length * 100) + '%';
    document.getElementById('slide-counter').innerText =
        `${currentSlide + 1} / ${slides.length}`;

    // Puntos indicadores
    const dots = document.getElementById('dots-container');
    dots.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Ir a la diapositiva ${i + 1}`);
        dot.className = `h-3 rounded-full transition-all cursor-pointer ${
            i === currentSlide
                ? 'bg-gradient-to-r from-rose-500 to-sky-500 w-8 shadow-sm'
                : 'w-3 bg-slate-300 hover:bg-slate-400'
        }`;
        dot.onclick = () => { currentSlide = i; updateSlide(); };
        dots.appendChild(dot);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}

// Navegación con las flechas del teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

window.addEventListener('load', updateSlide);
