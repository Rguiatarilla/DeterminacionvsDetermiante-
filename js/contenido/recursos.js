/* ==========================================================================
   CONTENIDO · Recursos, glosario y quiz de repaso
   El glosario y el quiz son contenido `propuesto` para revisión docente.
   ========================================================================== */

window.DATA = window.DATA || {};

window.DATA.recursos = {
    titulo: "Recursos",
    enlaces: [
        {
            etiqueta: "Entrevista a Jaime Breilh",
            nota: "Referente de la determinación social de la salud y la epidemiología crítica latinoamericana.",
            // Enlace de búsqueda; sustituir por la URL exacta que indique la docente.
            url: "",
            propuesto: true
        }
    ],
    glosario: [
        { termino: "Determinantes sociales", definicion: "Circunstancias en que las personas nacen, crecen, trabajan, viven y envejecen; se analizan como factores que influyen sobre el individuo." },
        { termino: "Determinación social", definicion: "Enfoque crítico que entiende el proceso salud-enfermedad como resultado de la organización histórica, económica y política de la sociedad." },
        { termino: "Proximal / Distal", definicion: "Niveles del modelo de determinantes: proximal es lo más cercano a la persona (cuerpo, hábitos); distal es la raíz (leyes, ingresos, clase)." },
        { termino: "Urdimbre", definicion: "En la metáfora del tejido, los hilos verticales gruesos que sostienen todo: estructura económica, modelo político y leyes." },
        { termino: "Soberanía alimentaria", definicion: "Derecho de los pueblos a producir y decidir sobre su propia alimentación mediante el uso responsable de la tierra." },
        { termino: "Descolonización alimentaria", definicion: "Promueve hábitos saludables, reduce el consumo de ultraprocesados y concibe la alimentación como un acto político." },
        { termino: "Agroecología", definicion: "Estrategia que privilegia la producción propia y el uso responsable de la tierra, base de la soberanía alimentaria." }
    ]
};

// Quiz de repaso — contenido propuesto. respuesta = índice de la opción correcta.
window.DATA.quiz = {
    titulo: "Quiz de repaso",
    propuesto: true,
    preguntas: [
        {
            texto: "¿Qué institución impulsa el modelo de los Determinantes Sociales de la Salud (2005)?",
            opciones: ["La Medicina Social Latinoamericana", "La Organización Mundial de la Salud (OMS)", "La Escuela Campesina de Las Encinas"],
            respuesta: 1,
            feedback: "La Comisión sobre Determinantes Sociales fue establecida por la OMS en 2005."
        },
        {
            texto: "En la metáfora del iceberg, la base oculta corresponde a…",
            opciones: ["Las condiciones visibles del día a día", "La organización histórica, económica y política de la sociedad", "Los hábitos individuales"],
            respuesta: 1,
            feedback: "La base oculta es la génesis de la salud: lo estructural e histórico (determinación social)."
        },
        {
            texto: "La frase \"se interviene hilo por hilo\" describe principalmente a…",
            opciones: ["La determinación social", "Los determinantes sociales", "La soberanía alimentaria"],
            respuesta: 1,
            feedback: "Reparar hilos sueltos de forma aislada es propio del enfoque de determinantes."
        },
        {
            texto: "Los niveles General–Particular–Singular pertenecen al enfoque de…",
            opciones: ["Determinación social", "Determinantes sociales", "Ninguno"],
            respuesta: 0,
            feedback: "General–Particular–Singular es la forma en que la determinación social estructura las causas profundas."
        },
        {
            texto: "Frente a la malnutrición de Mateo, la determinación social propone sobre todo…",
            opciones: ["Educación nutricional y bonos de alimentación", "Transformación social y soberanía alimentaria", "Más chequeos médicos rutinarios"],
            respuesta: 1,
            feedback: "La determinación social apunta a transformar la estructura: regular corporaciones, salarios dignos, soberanía alimentaria."
        },
        {
            texto: "La Escuela Campesina de Las Encinas es un ejemplo de…",
            opciones: ["Mirada biomédica individual", "Mirada de la determinación social en el territorio", "Programa de transferencias monetarias"],
            respuesta: 1,
            feedback: "Las Encinas encarna la determinación social: agroecología, organización territorial y alimentación como acto político."
        },
        {
            texto: "En el caso de Clarita, ¿qué queda sin nombrar en la consulta?",
            opciones: ["Sus hábitos alimentarios", "Sus condiciones económicas y de clase", "Su diagnóstico de hipertensión"],
            respuesta: 1,
            feedback: "La consulta atribuye todo a la persona y omite las condiciones estructurales que limitan seguir la dieta."
        }
    ]
};
