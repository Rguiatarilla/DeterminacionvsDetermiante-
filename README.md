# Dos miradas sobre la salud

Recurso educativo interactivo para el curso de **Salud Colectiva** (Pasto, Nariño).
Compara los **Determinantes Sociales de la Salud (Modelo OMS)** y la **Determinación
Social de la Salud (Medicina Social Latinoamericana)** a partir del documento fuente
del curso.

Es una página web **estática** (HTML + CSS + JavaScript con Tailwind por CDN). No
necesita instalación ni servidor: se abre con doble clic.

---

## Cómo ejecutarla

1. Abre el archivo **`index.html`** con tu navegador (doble clic).
2. Navega con el **índice lateral** o con los botones **Anterior / Siguiente**
   (también con las flechas ← → del teclado).

> La primera carga necesita conexión a internet porque Tailwind y la tipografía se
> cargan desde un CDN. Una vez cargada, el resto funciona sin conexión. Si necesitas
> que funcione **100% sin internet**, descarga Tailwind y la fuente y reemplaza los
> `<script>`/`<link>` del `<head>` por archivos locales.

---

## Secciones

1. Portada y ruta de aprendizaje (con barra de progreso)
2. Aproximación conceptual (derecho a la salud, en acordeón)
3. Dos miradas, dos hebras (hilos sueltos vs. tejido, interactivo)
4. La metáfora del iceberg (interactivo)
5. Cuadro comparativo (filtrable, lado a lado / tarjetas en celular)
6. Estructuras comparadas · caso de Mateo (niveles)
7. Caso 1 · Clarita (escenas + preguntas guía)
8. Caso 2 · Escuela Campesina de Las Encinas (línea de tiempo + voces)
9. Actividad · Caso Elena (constructor de cuadro + autoevaluación)
10. Reflexión sobre el quehacer
11. Recursos y glosario
12. Quiz de repaso

---

## Cómo editar el contenido (sin tocar el código)

Todos los textos viven en la carpeta **`js/contenido/`**. Edítalos con cualquier
editor de texto; **no cambies los nombres de las variables**, solo su contenido.

| Archivo | Qué contiene |
| --- | --- |
| `js/contenido/conceptual.js` | Portada, objetivo, introducción, derecho a la salud, definiciones de cada enfoque |
| `js/contenido/comparativo.js` | Cuadro comparativo (6 filas), hebras, iceberg y niveles del caso Mateo |
| `js/contenido/casos.js` | Caso Clarita, caso Las Encinas, actividad Elena y reflexión |
| `js/contenido/recursos.js` | Recursos, glosario y quiz |

Para agregar la **URL de la entrevista a Jaime Breilh**, abre
`js/contenido/recursos.js` y pega el enlace en el campo `url`.

### Archivos de lógica (normalmente no se tocan)

| Archivo | Rol |
| --- | --- |
| `index.html` | Estructura/base de la página |
| `css/estilos.css` | Todos los estilos (incluye diseño de impresión) |
| `js/ui.js` | Funciones auxiliares para construir la interfaz |
| `js/secciones.js` | Cómo se arma cada una de las 12 secciones |
| `js/app.js` | Navegación, progreso, guardado y exportación |

---

## Guardado y exportación

- **Guardado automático:** las respuestas y el progreso se guardan en el navegador
  (`localStorage`). Al reabrir, todo sigue ahí.
- **Exportar MD:** descarga un archivo Markdown con las respuestas escritas.
- **PDF:** abre el diálogo de impresión del navegador (elige "Guardar como PDF").
- **Reiniciar:** borra respuestas y progreso (pide confirmación).

---

## Marca `propuesto`

El contenido **nuevo** que no venía en el documento original (caso Elena, preguntas
guía de Clarita, glosario, quiz y preguntas de reflexión) aparece con una etiqueta
amarilla **`propuesto`**. Sirve para que la persona docente lo revise antes de
publicarlo. Puedes editarlo o eliminarlo desde los archivos de `js/contenido/`.

---

## Supuestos y decisiones

- **Stack sin build:** se eligió HTML + CSS + JS plano (en vez de React/Vite) para que
  funcione con doble clic, sin instalar nada, y sea fácil de editar por docentes.
- **Terminología:** se unificó **"malnutrición"** (el documento original alternaba
  "desnutrición" y "malnutrición" en el caso de Mateo).
- **Citas textuales:** las dos "Voces del Territorio" de Las Encinas se reproducen sin
  cambios. Las fuentes (OMS 2017, Ley 1751 de 2015, Política Pública de Pasto, Jaime
  Breilh) se citan tal como aparecen; no se inventaron referencias.
- **Equilibrio:** se mantiene el posicionamiento crítico del material (la determinación
  social como mirada crítica) sin descalificar el enfoque de determinantes.
- **Export PDF:** vía diálogo de impresión del navegador con una hoja de estilos de
  impresión, para no depender de librerías externas.
- **Caso Elena / quiz / glosario:** contenido nuevo marcado como `propuesto`.
