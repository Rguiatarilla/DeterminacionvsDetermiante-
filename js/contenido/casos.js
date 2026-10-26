/* ==========================================================================
   CONTENIDO · Casos de estudio (Clarita, Las Encinas) y actividades (Elena)
   `propuesto: true` = contenido nuevo para revisión docente.
   ========================================================================== */

window.DATA = window.DATA || {};

// --- Caso 1: Clarita (mirada de determinantes / biomédica) ---
window.DATA.clarita = {
    titulo: "Caso 1 · Clarita",
    enfoque: "Mirada de los determinantes (biomédica)",
    escenas: [
        {
            titulo: "El diagnóstico",
            texto: "Clarita es una señora de 70 años que vive en un barrio popular de Pasto. Es viuda, tiene cuatro hijos y tres nietos. Tras ser diagnosticada con hipertensión arterial, el médico le explicó que se trata de una enfermedad crónica ligada a malos estilos de vida o a factores hereditarios. Ella recordó que su madre padeció esta enfermedad y falleció por un derrame cerebral. El doctor le ordenó mejorar su alimentación, eliminar sal y azúcares, empezar a hacer ejercicio y le prescribió antihipertensivos de por vida."
        },
        {
            titulo: "La consulta de nutrición",
            texto: "Como parte del programa de crónicos, la remitieron a nutrición. La nutricionista le prohibió las sopas, argumentando que el exceso de harinas del caldo se transforma en azúcar en el cuerpo, lo que inquietó a Clarita porque las sopas son la base de su alimentación diaria. También le prohibió el pan blanco y le sugirió pan o galletas integrales, que Clarita sabe que son más costosos. Le indicó incluir a diario una porción de carne, pollo o pescado (en su familia a duras penas comen carne una vez a la semana) y evitar combinar carbohidratos, acompañando con una porción generosa de ensalada."
        },
        {
            titulo: "La salida del consultorio",
            texto: "La paciente manifestó que no tenía los medios económicos para seguir esa dieta. La doctora le respondió que debía hacer un esfuerzo porque es por su propia salud. Clarita salió más preocupada: no quiere convertirse en una carga para sus hijos y ahora no sabe cómo se va a alimentar, porque le prohibieron casi todo lo que suele comer."
        }
    ],
    // Preguntas guía — contenido propuesto
    preguntas: [
        { id: "clarita-q1", propuesto: true, texto: "¿Qué factores de la enfermedad de Clarita se le atribuyen a ella como individuo (hábitos, herencia, decisiones)?" },
        { id: "clarita-q2", propuesto: true, texto: "¿Qué condiciones estructurales (económicas, de clase, de acceso) quedan sin nombrar en la consulta?" },
        { id: "clarita-q3", propuesto: true, texto: "La recomendación \"haga un esfuerzo, es por su salud\", ¿qué supuesto tiene sobre la capacidad económica de Clarita?" },
        { id: "clarita-q4", propuesto: true, texto: "Si miraras este caso desde la determinación social, ¿qué causas profundas señalarías?" }
    ]
};

// --- Caso 2: Escuela Campesina de Las Encinas (mirada de determinación) ---
window.DATA.lasEncinas = {
    titulo: "Caso 2 · Escuela Campesina de Las Encinas",
    lugar: "Vereda Las Encinas, corregimiento de Santa Bárbara, Pasto.",
    enfoque: "Mirada de la determinación social",
    timeline: [
        { año: "Años 20", titulo: "El modelo agrario hegemónico", texto: "Desde los años 20, el modelo de mercado sustentado en la lógica del capitalismo ha generado violencia y marginación en las comunidades campesinas, reproduciendo conflictos sociales, económicos, ambientales y culturales." },
        { año: "2005", titulo: "Nace la Escuela Campesina", texto: "En la vereda Las Encinas se desarrolla la Escuela Campesina como una propuesta hacia una nueva ruralidad, en abierta oposición al modelo agrario hegemónico en Colombia." },
        { año: "2019", titulo: "La apuesta agroecológica", texto: "La Escuela Campesina visibilizó la agroecología para privilegiar la producción propia mediante el uso responsable de la tierra, trazando el camino hacia la soberanía alimentaria y nutricional de los pueblos. Se adoptó el término descolonización alimentaria, que promueve hábitos saludables, reduce el consumo de ultraprocesados y concibe la alimentación como un acto político." }
    ],
    tensiones: ["Escasez de alimentos", "Malnutrición", "Pobreza rural"],
    saberes: "Desde la práctica, el proceso incluyó visitas a reservas naturales en transición agroecológica, preparación de recetas tradicionales e implementación de una huerta comunitaria. Esto generó espacios para rescatar la memoria ancestral frente a la modernización social, abordando también el éxodo de la juventud hacia los centros urbanos.",
    // Citas textuales — NO modificar
    voces: [
        {
            titulo: "Conciencia crítica y consumo local",
            cita: "Lo que más nos recalcaban era volver a las huertas caseras y consumir los alimentos que nosotros mismos producimos, para no depender de todo lo que traían de la ciudad. En ese tiempo pensábamos que la comida de allá (ciudad) tenía más alimento, entonces era reemplazar lo que se consumía. En las huertas nos decían que cultivemos verduras, papas, habas, todo eso era más beneficioso tanto para nosotros como para los niños. Ahora tenemos más conocimiento, antes uno no sabía que los alimentos empacados tenían conservantes, químicos. Ahora como más conciencia, en mi caso a los niños dejarles de dar tanto mecato. Por lo menos nos decían que nosotros la leche, toda la vendíamos y el yogurt lo comprábamos y que no lo hacíamos nosotros, o los huevos de las gallinas criollas, nosotros los vendíamos y comprábamos los de panal."
        },
        {
            titulo: "Saberes ancestrales y sentido de pertenencia",
            cita: "Tener sentido de pertenencia me acuerdo que decían que mucha de la gente estudiaba y tenían la idea de irse a Pasto a la ciudad, muchos dicen que la juventud de ahora ya no le gusta trabajar la mentalidad de ellos es estudiar e irse, entonces decían que quién será que va a cultivar, eso era como tener un sentido de pertenencia a querer el campo nosotros somos de acá cómo tratar de inculcarle eso a los niños y a los jóvenes."
        }
    ]
};

// --- Actividad: Caso Elena (constructor de cuadro) — enunciado propuesto ---
window.DATA.elena = {
    titulo: "Actividad · Caso Elena",
    propuesto: true,
    enunciado: "Elena tiene 34 años y tres hijos. Trabaja por días en oficios varios, sin contrato ni horario fijo. Vive en un asentamiento del borde urbano de Pasto, con acceso irregular a agua potable. Come lo que alcanza a comprar cada día, casi siempre harinas, porque las frutas y verduras le resultan caras y lejanas. En el último control, a su hija menor le detectaron bajo peso para la edad. En el centro de salud le recomendaron \"alimentar mejor a la niña\" y asistir a un taller de alimentación saludable.",
    instruccion: "Completa el cuadro para el caso de Elena desde los dos enfoques, tomando como modelo el ejemplo de Mateo. No hay una única respuesta correcta: argumenta.",
    campos: [
        { id: "elena-general", enfoque: "determinacion", etiqueta: "Nivel GENERAL (el sistema)" },
        { id: "elena-particular", enfoque: "determinacion", etiqueta: "Nivel PARTICULAR (la comunidad)" },
        { id: "elena-singular", enfoque: "determinacion", etiqueta: "Nivel SINGULAR (el individuo)" },
        { id: "elena-dx-det", enfoque: "determinacion", etiqueta: "Diagnóstico (determinación)" },
        { id: "elena-sol-det", enfoque: "determinacion", etiqueta: "Enfoque de solución (determinación)" },
        { id: "elena-distal", enfoque: "determinantes", etiqueta: "Nivel DISTAL (la raíz)" },
        { id: "elena-intermedio", enfoque: "determinantes", etiqueta: "Nivel INTERMEDIO (el entorno)" },
        { id: "elena-proximal", enfoque: "determinantes", etiqueta: "Nivel PROXIMAL (lo más cercano)" },
        { id: "elena-dx-dts", enfoque: "determinantes", etiqueta: "Diagnóstico (determinantes)" },
        { id: "elena-sol-dts", enfoque: "determinantes", etiqueta: "Enfoque de solución (determinantes)" }
    ],
    autoevaluacion: [
        "¿Distinguí las causas profundas (estructurales) de las condiciones visibles del entorno?",
        "¿La columna de determinación social conecta lo singular con lo general (cadena histórica)?",
        "¿La columna de determinantes trata los factores como variables más o menos independientes?",
        "¿Mis soluciones son coherentes con cada enfoque (transformar vs. medir/mejorar)?",
        "¿Evité culpar únicamente a Elena por la situación de su hija?"
    ]
};

// --- Reflexión sobre el quehacer ---
window.DATA.reflexion = {
    titulo: "Reflexión sobre mi quehacer",
    intro: "Esta herramienta te invita a mirar tu propia práctica laboral y preguntarte desde qué enfoque la ejerces.",
    preguntas: [
        { id: "ref-q1", propuesto: true, texto: "Describe brevemente tu actividad laboral o tu quehacer en salud." },
        { id: "ref-q2", propuesto: true, texto: "¿Qué problemas de salud abordas y cómo explicas sus causas habitualmente?" },
        { id: "ref-q3", propuesto: true, texto: "Cuando intervienes, ¿reparas \"hilos sueltos\" (determinantes) o buscas transformar causas estructurales (determinación)?" },
        { id: "ref-q4", propuesto: true, texto: "¿Qué cambiarías en tu práctica para incorporar la mirada de la determinación social?" }
    ]
};
