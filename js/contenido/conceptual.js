/* ==========================================================================
   CONTENIDO · Aproximación conceptual
   Edita libremente los textos. No cambies los nombres de las variables.
   Marca `propuesto: true` en lo que sea contenido nuevo para revisión docente.
   ========================================================================== */

window.DATA = window.DATA || {};

// Portada / ruta de aprendizaje
window.DATA.portada = {
    titulo: "Determinantes VS Determinación",
    subtitulo: "Dos miradas sobre la salud: los Determinantes Sociales (OMS) frente a la Determinación Social de la Salud (Medicina Social Latinoamericana)",
    objetivo: "Al finalizar el tema los y las estudiantes reconocerán y diferenciarán los aportes de los determinantes sociales y de la determinación social de la salud en la comprensión de las realidades territoriales de los procesos salud-enfermedad.",
    introduccion: [
        "Estimados y estimadas estudiantes, a menudo se piensa que la salud depende de la genética o de decisiones individuales. En este apartado nos proponemos desafiar ese sentido común y reconocer cómo las estructuras políticas, económicas y comunitarias se encarnan en las personas, definiendo los procesos de salud-enfermedad desde dos perspectivas:",
    ],
    perspectivas: [
        {
            etiqueta: "Determinantes Sociales de la Salud (Modelo OMS)",
            texto: "Aprenderán a identificar la salud como una red compuesta por hilos o factores independientes (vivienda, educación, ingresos) que rodean al individuo. Descubrirán cómo este modelo busca intervenir de manera técnica, \"hilo por hilo\"."
        },
        {
            etiqueta: "Determinación Social de la Salud (Medicina Social Latinoamericana)",
            texto: "Nos adentraremos en una mirada crítica que no ve factores independientes, sino un proceso: \"un tejido político\", porque refleja relaciones de poder, intereses económicos y decisiones del Estado. Aprenderán a desarmar la realidad de forma ordenada en tres planos: el General, el Particular y el Singular."
        }
    ]
};

// Derecho a la salud (acordeón) — citas tal como aparecen en el documento fuente
window.DATA.derechoSalud = {
    titulo: "Derecho a la salud",
    tarjetas: [
        {
            id: "oms2017",
            titulo: "OMS (2017)",
            cuerpo: "\"El goce del grado máximo de salud que se pueda lograr es uno de los derechos fundamentales de todo ser humano.\" El derecho a la salud incluye el acceso oportuno, aceptable y asequible a servicios de atención de salud de calidad suficiente.",
            fuente: "Organización Mundial de la Salud, 2017."
        },
        {
            id: "ley1751",
            titulo: "Ley Estatutaria 1751 de 2015 (Colombia)",
            cuerpo: "Reconoce la salud como un derecho fundamental, autónomo e irrenunciable, tanto en el aspecto individual como en el colectivo, que garantiza la dignidad humana y la igualdad de oportunidades de todos los y las colombianas. Este derecho implica la garantía verdadera de gozar de un estado físico, mental, emocional y social que permita al ser humano desarrollar en forma digna y al máximo sus potencialidades, en bien propio, de su familia y de la colectividad en sociedad en general.",
            fuente: "Ley Estatutaria 1751 de 2015."
        },
        {
            id: "pasto",
            titulo: "Política Pública de Salud Colectiva de Pasto",
            cuerpo: "\"La salud en todos los derechos\" asume la salud y la enfermedad como un proceso que se determina social e históricamente, y comprende que la salud es el resultado de la riqueza social expresada en términos de capacidades para ejecutar proyectos vitales individuales y colectivos dignos. Proceso liderado por el Estado en corresponsabilidad con los diferentes grupos étnicos y sociales, organizaciones de base, sociedad civil y ciudadanía en general.",
            fuente: "Política Pública en Salud Colectiva del municipio de Pasto."
        }
    ]
};

// Definiciones base de cada enfoque
window.DATA.enfoques = {
    determinantes: {
        titulo: "Determinantes Sociales de la Salud",
        texto: "En el 2005 aparece la propuesta de la Comisión sobre Determinantes Sociales de la Salud establecida por la Organización Mundial de la Salud (OMS). Los determinantes son las circunstancias en que las personas nacen, crecen, trabajan, viven y envejecen, además de las fuerzas y sistemas que influyen sobre las condiciones de la vida cotidiana. Desde esta perspectiva, la salud es la suma de variables que influyen en el individuo; por ejemplo, la hipertensión es la suma de factores de riesgo individuales y ambientales como mala alimentación (exceso de sal), sedentarismo, estrés laboral y falta de acceso a chequeos médicos rutinarios."
    },
    determinacion: {
        titulo: "Determinación Social de la Salud",
        texto: "Hacia finales de los años 60 y comienzos de los 70 del siglo XX surge la Medicina Social Latinoamericana. Esta corriente incorporó las ciencias sociales al campo de la salud, articulada con una postura política promotora de la transformación profunda de la sociedad, como respuesta a una serie de insatisfacciones con el modelo vigente. Su mayor aporte es el enfoque crítico de la determinación social de la salud, el cual sostiene que el proceso salud-enfermedad es el resultado de la organización histórica, económica y política de la sociedad, y no solo la suma de factores de riesgo individuales."
    }
};
