/* ==========================================================================
   CONTENIDO · Cuadro comparativo, hebras, iceberg y niveles (caso Mateo)
   ========================================================================== */

window.DATA = window.DATA || {};

// --- Resumen inicial (3 líneas) ---
window.DATA.resumen = [
    "Dos formas de explicar por qué enfermamos. La <strong>determinación social</strong> mira las causas profundas: la organización histórica, económica y política de la sociedad.",
    "Los <strong>determinantes sociales</strong> miran las condiciones visibles: factores de riesgo que rodean a la persona y se pueden medir.",
    "Una busca <strong>transformar el telar</strong>; la otra, <strong>reparar los hilos sueltos</strong>."
];

// --- Frase contrastante final del caso Mateo ---
window.DATA.mateoContraste = {
    determinacion: "Transformar el telar.",
    determinantes: "Reparar los hilos sueltos."
};

// --- Tabla de síntesis (diferencias clave) ---
window.DATA.sintesis = {
    filas: [
        { criterio: "Mirada", determinacion: "Causas profundas y estructurales", determinantes: "Condiciones visibles del entorno" },
        { criterio: "Enfoque de acción", determinacion: "Político y crítico: transformar el sistema", determinantes: "Técnico y normativo: medir y mejorar" },
        { criterio: "Metáfora", determinacion: "Un tejido con urdimbre (telar)", determinantes: "Hilos sueltos e independientes" },
        { criterio: "Solución", determinacion: "Transformar el telar", determinantes: "Reparar los hilos sueltos" }
    ],
    conclusion: "Ambas miradas describen la misma realidad, pero no la explican igual: una interviene los síntomas visibles dentro del sistema; la otra cuestiona el sistema que los produce."
};

// --- Cuadro comparativo: 6 filas originales ---
window.DATA.comparativo = [
    {
        clave: "El origen: ¿de dónde vienen estas ideas?",
        determinacion: "Impulsada por la Medicina Social Latinoamericana entre los años 60 y 70. Su propósito: unir la salud con las ciencias sociales y la acción política para lograr una transformación profunda de la sociedad y eliminar las injusticias estructurales.",
        determinantes: "En el 2005 aparece la propuesta de la Comisión sobre Determinantes Sociales de la Organización Mundial de la Salud (OMS). La OMS creó una comisión de expertos para estudiar de forma técnica y estructurada cómo las condiciones de vida afectan el bienestar cotidiano de las poblaciones."
    },
    {
        clave: "¿Cómo se comprenden? Imagina un iceberg",
        determinacion: "La base oculta del iceberg: hace referencia a la producción o génesis de la salud. Este enfoque crítico explica el proceso salud-enfermedad como resultado de la organización histórica, económica y política de la sociedad, y no solo como la suma de factores de riesgo individuales.",
        determinantes: "La punta del iceberg: se enfoca en las condiciones en que las personas nacen, crecen, trabajan, viven y envejecen. Son las circunstancias visibles que te rodean y que influyen en tu día a día."
    },
    {
        clave: "¿Desde qué enfoque actúan?",
        determinacion: "Político y crítico: busca transformar el sistema social y económico desde la raíz. Ejemplo – malnutrición infantil: proteger por ley la economía campesina, garantizar salarios dignos para que las familias puedan comprar alimentos saludables y regular la publicidad de comida chatarra.",
        determinantes: "Técnico y normativo: busca medir y mejorar las condiciones dentro del sistema actual. Ejemplo – malnutrición infantil: entregar bonos de alimentación para las familias afectadas, dar talleres de cocina saludable a las mamás y mejorar las revisiones médicas en los centros de salud."
    },
    {
        clave: "¿Cómo se comprende la salud?",
        determinacion: "Plantea que la salud es un proceso dinámico, multidimensional e histórico. Metáfora: la salud no es un estado fijo ni un logro individual, sino un tejido que la sociedad ha ido trenzando colectivamente a lo largo del tiempo. Es histórica: los hilos gruesos y verticales que sostienen todo el tejido (la urdimbre) representan la estructura económica, el modelo político y las leyes del país; no se pusieron ayer, se han ido colocando a lo largo de décadas de historia. Es multidimensional: los hilos horizontales que cruzan el tapiz son las condiciones de vida de los distintos grupos; hay hilos de seda, de algodón o de lana tosca, que representan el lugar que ocupa cada clase social, género o etnia. Es dinámica: el acto de tejer nunca se detiene; cambia a medida que la sociedad se transforma, entra en crisis o conquista derechos.",
        determinantes: "Entiende la salud como la suma de factores de riesgo aislados (ingresos, educación, vivienda, acceso a agua). Metáfora: el tejido se analiza como una gran red compuesta por hilos independientes que se cruzan en la vida de una persona. Hilos sueltos y separados: una colección de hilos independientes (empleo, vivienda, educación, biología). Causas lineales: analiza cómo cada hilo, por separado, afecta la salud del individuo. Se interviene hilo por hilo: la solución consiste en reparar o fortalecer los hilos averiados de manera aislada (un programa para vivienda, otro para empleo), tratándolos como factores externos que influyen en la persona."
    },
    {
        clave: "¿Cómo se dividen o estructuran?",
        determinacion: "LAS CAUSAS PROFUNDAS. General (el sistema): la economía del país, la política del gobierno, la cultura y cómo el Estado maneja los recursos y la producción. Particular (comunidad): cómo vive tu comunidad o tu clase social; horarios de trabajo, alimentos disponibles, identidad cultural, organización social, la relación con el entorno. Singular (individuo): tu vida personal y familiar; incluye tu genética, tus hábitos en casa, lo que tú y tu familia piensan y consumen.",
        determinantes: "LAS CONDICIONES DEL ENTORNO. Distales (la raíz): las leyes del gobierno, tu nivel de educación, tu empleo, tus ingresos económicos, tu género y tu clase social; estos factores crean las desigualdades. Intermedios (el entorno): las cosas materiales que te rodean: calidad de tu vivienda, tus condiciones de trabajo, acceso a los servicios de salud, si tienes redes de apoyo. Proximales (lo más cercano): tu propio cuerpo, tus hábitos personales (si fumas, tomas, comes bien, haces ejercicio) combinados con tu edad, tu sexo y la genética con la que naciste."
    },
    {
        clave: "Ejemplo: Malnutrición",
        determinacion: "La malnutrición en el cuerpo de Mateo no son fallas individuales, sino la consecuencia lógica de cómo se organiza la sociedad. El modelo económico capitalista y agroindustrial (dimensión general) prioriza la producción masiva de comida ultraprocesada y promueve jornadas laborales que precarizan e intensifican el trabajo. Estas dinámicas macroeconómicas impactan en la clase trabajadora (dimensión particular), imponiéndoles jornadas extenuantes, lo que despoja a las familias de tiempo, energía y presupuesto para una nutrición adecuada. Como resultado, el cuerpo de Mateo (dimensión singular) absorbe y expresa esa cadena de opresión histórica. Solución: transformación social y soberanía alimentaria. La solución real exige regular las corporaciones de comida chatarra, garantizar salarios dignos, reducir las jornadas laborales y defender el derecho a una alimentación saludable para las comunidades.",
        determinantes: "El diagnóstico: Mateo padece malnutrición porque confluyen en él varios factores desfavorables: a nivel proximal, tiene malos hábitos alimentarios y consume exceso de azúcares; a nivel intermedio, su entorno comunitario carece de acceso a mercados saludables; y a nivel distal, los bajos ingresos familiares limitan su capacidad de compra. Los factores actúan como variables independientes que golpean su salud. Solución: se propone educación nutricional para la madre (modificar el factor proximal) y programas de transferencia económica o comedores escolares (mitigar el factor intermedio). Se busca reparar los hilos sueltos sin alterar el telar."
    }
];

// --- Dos hebras: factores y cómo los interpreta cada enfoque ---
window.DATA.hebras = {
    determinantes: {
        titulo: "Hilos sueltos e independientes",
        descripcion: "Se interviene \"hilo por hilo\": cada factor se repara por separado, como variable externa que influye en la persona.",
        hilos: [
            { factor: "Empleo", lectura: "Se evalúa de forma aislada: ¿cuánta fuerza pierde la salud si el hilo del empleo se debilita? Se interviene con un programa específico." },
            { factor: "Vivienda", lectura: "Factor independiente: una vivienda de mala calidad daña la salud; la respuesta es un programa de vivienda puntual." },
            { factor: "Educación", lectura: "Variable separada que se mide y se mejora con intervención educativa individual." },
            { factor: "Biología", lectura: "Edad, sexo y genética con la que la persona nació; se trata como dato individual." }
        ]
    },
    determinacion: {
        titulo: "Un tejido (urdimbre y trama)",
        descripcion: "La salud es un tejido que la sociedad trenza colectivamente. No son hilos sueltos: están entrelazados y el acto de tejer nunca se detiene.",
        urdimbre: [
            { factor: "Estructura económica", lectura: "Hilo vertical grueso que sostiene todo el tejido; se ha ido colocando a lo largo de décadas de historia." },
            { factor: "Modelo político", lectura: "Hilo de la urdimbre: las decisiones del Estado y el poder que organiza la producción." },
            { factor: "Leyes del país", lectura: "Marco histórico que estructura las condiciones de vida de todos los grupos." }
        ],
        trama: [
            { factor: "Clase social", lectura: "Hilo horizontal: el lugar que ocupa cada grupo en la sociedad (hilo de seda, algodón o lana tosca)." },
            { factor: "Género", lectura: "Condición de vida que cruza el tapiz y define posiciones y cargas distintas." },
            { factor: "Etnia", lectura: "Dimensión histórica y cultural que atraviesa el tejido social." }
        ]
    }
};

// --- Iceberg ---
window.DATA.iceberg = {
    punta: {
        titulo: "La punta (condiciones visibles)",
        enfoque: "Determinantes",
        texto: "Se enfoca en las condiciones en que las personas nacen, crecen, trabajan, viven y envejecen. Son las circunstancias visibles que te rodean y que influyen en tu día a día."
    },
    base: {
        titulo: "La base oculta (génesis de la salud)",
        enfoque: "Determinación",
        texto: "Hace referencia a la producción o génesis de la salud. Explica el proceso salud-enfermedad como resultado de la organización histórica, económica y política de la sociedad, y no solo como la suma de factores de riesgo individuales."
    }
};

// --- Estructuras comparadas (niveles) recorriendo el caso Mateo ---
window.DATA.niveles = {
    determinacion: {
        titulo: "Determinación: las causas profundas",
        niveles: [
            { nombre: "General (el sistema)", definicion: "La economía del país, la política del gobierno, la cultura y cómo el Estado maneja los recursos y la producción.", mateo: "El modelo económico capitalista y agroindustrial prioriza la producción masiva de comida ultraprocesada y promueve jornadas laborales que precarizan el trabajo." },
            { nombre: "Particular (la comunidad)", definicion: "Cómo vive tu comunidad o tu clase social: horarios de trabajo, alimentos disponibles, identidad cultural, organización social.", mateo: "Estas dinámicas macroeconómicas impactan en la clase trabajadora, imponiéndole jornadas extenuantes que despojan a las familias de tiempo, energía y presupuesto para una nutrición adecuada." },
            { nombre: "Singular (el individuo)", definicion: "Tu vida personal y familiar: genética, hábitos en casa, lo que tú y tu familia piensan y consumen.", mateo: "El cuerpo de Mateo absorbe y expresa esa cadena de opresión histórica. No es una falla individual, es consecuencia de cómo se organiza la sociedad." }
        ],
        lectura: "Se lee una cadena de opresión histórica: lo singular es la expresión de lo general."
    },
    determinantes: {
        titulo: "Determinantes: las condiciones del entorno",
        niveles: [
            { nombre: "Distales (la raíz)", definicion: "Leyes del gobierno, nivel de educación, ingresos económicos, género y clase social; estos factores crean las desigualdades.", mateo: "Los bajos ingresos familiares limitan la capacidad de compra de alimentos adecuados." },
            { nombre: "Intermedios (el entorno)", definicion: "Las cosas materiales que te rodean: vivienda, condiciones de trabajo, acceso a servicios de salud, redes de apoyo.", mateo: "Su entorno comunitario carece de acceso a mercados saludables." },
            { nombre: "Proximales (lo más cercano)", definicion: "Tu propio cuerpo y hábitos personales, combinados con edad, sexo y genética.", mateo: "Tiene malos hábitos alimentarios y consume exceso de azúcares." }
        ],
        lectura: "Los factores actúan como variables independientes que golpean su salud. Se busca reparar los hilos sueltos sin alterar el telar."
    }
};
