import { OFFICIAL_DATABASE_TEXT, MYTHS_DATABASE, THREE_STEP_ROUTINE, RED_FLAG_CRITERIA } from '../data/dermatologyKnowledgeBase';

export interface DermiEngineResponse {
  text: string;
  isRedFlag: boolean;
  relatedChapter?: number;
  suggestions?: string[];
}

export function processDermiQueryOffline(userMessage: string): DermiEngineResponse {
  const query = userMessage.toLowerCase().trim();

  // Red Flag / Bultos profundos / Nódulos / Quistes / Dolor severo (Example 3 from prompt)
  const isRedFlagQuery =
    (query.includes('bulto') || query.includes('quiste') || query.includes('nodulo') || query.includes('nódulo') || query.includes('almohada') || query.includes('duele mucho')) &&
    (query.includes('debajo') || query.includes('piel') || query.includes('mejilla') || query.includes('mandibula') || query.includes('mandíbula') || query.includes('crema') || query.includes('profundo'));

  const isFulminansOrConglobata =
    query.includes('fulminans') || query.includes('conglobata') || (query.includes('fiebre') && query.includes('grano')) || query.includes('fístula') || query.includes('fistula');

  if (isRedFlagQuery || isFulminansOrConglobata) {
    return {
      text: `Te agradezco mucho que me lo cuentes. Sé que esto es doloroso e incómodo física y emocionalmente, pero por tu seguridad, debemos detener las recomendaciones de productos de venta libre.

Lo que me describes (bultos profundos, dolorosos y muy inflamados) coincide con lesiones nodulares o quísticas de acné moderado a severo. Este tipo de acné ocurre en las capas más profundas de la piel, donde las cremas de venta libre no logran llegar de manera efectiva. Si no se tratan a tiempo con la ayuda de un profesional, tienen un riesgo muy alto de dejar cicatrices físicas permanentes.

Mi recomendación más importante hoy es que pidas una cita con un dermatólogo. Ellos pueden recetarte tratamientos específicos muy eficaces (como retinoides orales como la isotretinoína o antibióticos regulados como doxiciclina o limeciclina) que controlarán el problema desde la raíz.

Mientras consigues tu cita:
1. Mantén tu rutina de limpieza suave con las manos usando un limpiador syndet a pH 4.5-5.5.
2. NO intentes apretar, punzar ni exprimir esos bultos, ya que romperías la pared folicular en profundidad.
3. Usa tu protector solar a diario (SPF 50 con toque seco).

¿Te gustaría que te ayude con algunos consejos sobre cómo explicarle esto a tus padres para agendar la consulta médica?`,
      isRedFlag: true,
      relatedChapter: 2,
      suggestions: [
        '¿Cómo le explico a mis padres para ir al dermatólogo?',
        '¿Qué es la isotretinoína y cómo funciona?',
        '¿Qué limpiador suave debo usar mientras tanto?'
      ]
    };
  }

  // Interacción 1: Pasta de dientes o alcohol en granos (Desmitificación)
  if (
    (query.includes('pasta de diente') || query.includes('alcohol') || query.includes('colgate') || query.includes('secador') || query.includes('limon') || query.includes('limón') || query.includes('bicarbonato')) &&
    (query.includes('grano') || query.includes('secar') || query.includes('nariz') || query.includes('espinilla') || query.includes('urgente') || query.includes('vergüenza'))
  ) {
    return {
      text: `¡Hola! Entiendo perfectamente que te dé rabia ver ese granito ahí y que quieras hacerlo desaparecer ya mismo antes de ir a la escuela o salir, pero por favor, ¡no uses pasta de dientes ni alcohol!

Científicamente, el alcohol y los químicos alcalinos de la pasta de dientes resecan la piel de forma tan agresiva que rompen su barrera protectora natural (destruyen el manto ácido de pH 4.5-5.5 y barren las ceramidas protectoras). Esto irrita la zona, aumenta la pérdida transepidérmica de agua (TEWL), empeora la inflamación y puede hacer que la bacteria del acné (Cutibacterium acnes) se propague o te deje una mancha oscura post-inflamatoria muy difícil de quitar.

En lugar de eso, busca en la farmacia:
1. Un parche hidrocoloide puntual: Protegerá el granito del ambiente y absorberá el exudado sin irritar.
2. Un gel puntual con Ácido Salicílico al 2% o Peróxido de Benzoilo al 2.5%: El ácido salicílico es liposoluble, lo que significa que puede penetrar dentro del poro para disolver la grasa acumulada y desinflamar el granito sin quemar tu piel.

¿Tienes a mano algún limpiador suave para que preparemos tu rutina de esta noche?`,
      isRedFlag: false,
      relatedChapter: 5,
      suggestions: [
        '¿Qué es un limpiador Syndet y cuál busco?',
        '¿Cómo se aplica el Peróxido de Benzoilo al 2.5%?',
        '¿El sol ayuda a secar los granos?'
      ]
    };
  }

  // Interacción 2: Rutina básica de bajo presupuesto (3 pasos esenciales)
  if (
    (query.includes('rutina') || query.includes('minimo') || query.includes('mínimo') || query.includes('presupuesto') || query.includes('dinero') || query.includes('barat') || query.includes('10 pasos') || query.includes('empezar')) &&
    (query.includes('piel') || query.includes('grasa') || query.includes('cuidar') || query.includes('comprar'))
  ) {
    return {
      text: `¡Me encanta que preguntes esto! En dermatología, menos es más, especialmente en pieles jóvenes. El error más común es usar demasiados productos activos a la vez, lo que termina irritando la piel, provocando "acné detergicans" y generando más brotes.

Para tener una piel sana solo necesitas tres pasos básicos adaptados a tu presupuesto escolar:

1. Limpiador suave (Mañana y Noche): Un gel limpiador tipo Syndet (sin jabón alcalino tradicional) con pH fisiológico equilibrado (4.5 a 5.5) que elimine el exceso de sebo sin dejar la piel tirante. ¡Lávate solo con las manos limpias por 30-40 segundos, con agua tibia y sin frotar fuerte!
2. Hidratante ligera (Mañana y Noche): Aunque tu piel sea grasa, necesita agua. Grasa y agua son dos cosas distintas. Elige texturas en gel o emulsión que tengan la etiqueta "oil-free" (libre de aceite) o "no comedogénica" (que no obstruye los poros).
3. Protector solar FPS 30 o 50 (Mañana): El sol no seca los granos; en realidad engrosa la piel taponando el poro, oxida la grasa y fija las manchas rojas o moradas que dejan al sanar. Busca uno de toque seco o acabado mate (con sílice o perlita).

Para tratar activamente los granitos, un gel económico con Peróxido de Benzoilo al 2.5% aplicado por las mañanas o noches es el bactericida de venta libre más potente y respaldado por la ciencia, y no genera resistencia bacteriana.`,
      isRedFlag: false,
      relatedChapter: 6,
      suggestions: [
        '¿Por qué una piel grasa necesita hidratante?',
        '¿Cómo me lavo la cara correctamente?',
        '¿Qué protector solar debo buscar en la farmacia?'
      ]
    };
  }

  // Whey protein / Proteína de suero
  if (query.includes('whey') || query.includes('proteina') || query.includes('proteína') || query.includes('gimnasio') || query.includes('suplemento')) {
    return {
      text: `¡Tiene una explicación científica directa! Según la base de datos dermatológica, los suplementos de proteína de suero de leche (Whey Protein) son altamente comedogénicos.

Cuando consumes Whey Protein:
1. Se produce una elevación drástica de la insulina posprandial y del factor de crecimiento similar a la insulina 1 (IGF-1).
2. Esto provoca una reducción celular del factor de transcripción FoxO1.
3. La falta de FoxO1 activa los receptores androgénicos, estimulando la producción excesiva de grasa (lipogénesis sebácea), taponando el canal del folículo (hiperqueratinización) e induciendo brotes agudos y persistentes, especialmente en la espalda y el pecho.

Si estás experimentando esto, considera suspender o reducir el suplemento de suero de leche y consultar fuentes de proteínas no derivadas del suero lácteo.`,
      isRedFlag: false,
      relatedChapter: 3,
      suggestions: [
        '¿Y qué pasa con la leche descremada vs entera?',
        '¿Cómo tratar los granitos de la espalda?',
        '¿Qué alimentos empeoran el acné?'
      ]
    };
  }

  // Leche descremada vs entera / Lácteos
  if (query.includes('descremada') || query.includes('desnatada') || (query.includes('leche') && query.includes('grasa'))) {
    return {
      text: `Sorprendentemente, la evidencia científica demuestra que la leche descremada (desnatada) tiene un MAYOR índice comedogénico que la leche entera.

¿Por qué ocurre esto?
Durante el procesamiento industrial para remover la grasa de la leche, también se eliminan los estrógenos naturales. Sin embargo, se preservan y concentran los andrógenos, la progesterona y factores de crecimiento como el IGF-1. Estos compuestos sobreviven al procesamiento y actúan directamente sobre tus glándulas sebáceas, estimulando más grasa e inflamación en los poros.

Por lo tanto, pasarse a leche descremada pensando que "al no tener grasa no sacará granos" es un mito: sus hormonas y factores de crecimiento biológicos son los que realmente estimulan la unidad pilosebácea.`,
      isRedFlag: false,
      relatedChapter: 3,
      suggestions: [
        '¿El azúcar refinado también empeora el acné?',
        '¿Qué es la tríada de cuidado esencial?',
        '¿La alimentación es la única causa del acné?'
      ]
    };
  }

  // Frecuencia de lavado de cara / Cuántas veces lavarse
  if (query.includes('cuantas veces') || query.includes('cuántas veces') || query.includes('lavar') || query.includes('lavado') || query.includes('higiene') || query.includes('jabon') || query.includes('jabón')) {
    return {
      text: `La evidencia clínica es contundente: en el estudio de Choi et al. se demostró que realizar 2 lavados suaves al día (uno por la mañana y otro por la noche) reduce en un 20% el recuento de comedones.

Sin embargo, lavarse la cara 4 o más veces al día NO aporta ningún beneficio adicional y provoca sequedad, irritación, enrojecimiento y destrucción de las ceramidas de tu barrera protectora. Esto desencadena un "efecto rebote", donde la piel desprotegida produce aún más grasa.

Reglas clave para tu lavado:
- Usa un limpiador Syndet (sin jabón alcalino, pH fisiológico 4.5 a 5.5).
- Usa solo las yemas de tus dedos limpios con agua tibia (menos de 35°C) durante 30 a 40 segundos.
- Seca con una toalla limpia dando suaves toquecitos, ¡sin frotar ni raspar!
- Evita cepillos rotatorios o esponjas abrasivas.`,
      isRedFlag: false,
      relatedChapter: 5,
      suggestions: [
        '¿Qué es el manto ácido de la piel?',
        '¿Qué hidratante ligera puedo usar?',
        '¿Qué hago si tengo un grano inflamado?'
      ]
    };
  }

  // Sol y bronceado / secar granos
  if (query.includes('sol') || query.includes('bronce') || query.includes('playa') || query.includes('verano') || query.includes('solar')) {
    return {
      text: `Es uno de los mitos más peligrosos: el sol NO cura ni seca los granos. Aunque al principio el enrojecimiento general puede disimular las lesiones, la radiación ultravioleta causa tres daños graves en la piel acneica:

1. Engrosa el estrato córneo: Como defensa contra los rayos UV, la piel engrosa su capa externa, lo que bloquea mecánicamente los poros y atrapa el sebo dentro.
2. Oxida el escualeno: El sol oxida las grasas naturales de tu sebo, convirtiéndolas en un compuesto altamente inflamatorio que detona brotes profundos.
3. Fija manchas oscuras permanentes (hiperpigmentación post-inflamatoria): La radiación UV activa los melanocitos sobre las zonas rojas de los granitos, transformándolas en manchas marrones o violáceas que tardan meses o años en desaparecer.

Por eso, el protector solar FPS 50 toque seco (oil-free y no comedogénico) es tu mejor aliado diario.`,
      isRedFlag: false,
      relatedChapter: 6,
      suggestions: [
        '¿Qué filtros solares existen (físicos vs químicos)?',
        '¿Cómo eliminar las manchas que dejaron los granos?',
        '¿Qué es la hiperpigmentación post-inflamatoria?'
      ]
    };
  }

  // Explicarle a los padres / Ayuda para ir al dermatólogo
  if (query.includes('padres') || query.includes('papá') || query.includes('mamá') || query.includes('medico') || query.includes('médico') || query.includes('cita') || query.includes('consulta') || query.includes('verguenza') || query.includes('vergüenza')) {
    return {
      text: `Es completamente normal sentir timidez o vergüenza de hablar sobre el acné, pero recuerda que el acné es una afección médica inflamatoria que afecta al 90% de los jóvenes; no es culpa tuya ni falta de higiene.

Aquí tienes una guía sencilla para hablar con tus padres con tranquilidad y confianza:

1. Escoge un momento tranquilo: Habla con ellos en casa cuando no haya prisas ni discusiones.
2. Explícales el dolor físico: Diles "Tengo algunos bultos debajo de la piel que me duelen mucho, incluso al apoyar la cabeza en la almohada, y están muy inflamados".
3. Menciona la importancia médica: "Investigué en una guía dermatológica médica y cuando los granitos duelen por dentro, las cremas comunes no llegan. Si no lo ve un especialista a tiempo, pueden dejar cicatrices permanentes".
4. Pídeles su apoyo: "¿Me ayudarían a agendar una consulta con un dermatólogo para que un médico revise mi piel y me indique el tratamiento correcto?".

Los padres suelen responder con mucho amor cuando ven que te preocupa tu salud y que buscas una solución médica profesional y seria.`,
      isRedFlag: false,
      relatedChapter: 4,
      suggestions: [
        '¿Qué tratamientos puede recetar el dermatólogo?',
        '¿Qué es la isotretinoína?',
        '¿Qué cuidados tener mientras consigo la cita?'
      ]
    };
  }

  // Salud mental / Autoestima / Ansiedad / Tristeza
  if (query.includes('triste') || query.includes('ansiedad') || query.includes('depre') || query.includes('autoestima') || query.includes('burlar') || query.includes('espejo') || query.includes('insegur') || query.includes('vergüenza') || query.includes('pena')) {
    return {
      text: `Quiero que respires profundo y sepas que te escucho y te entiendo. Lo que sientes es 100% válido.

El acné no es una simple cuestión estética: la ciencia y los estudios médicos demuestran que tiene un impacto directo en la salud mental. En estudios realizados en Ecuador (Bejarano et al.), el 56% de los jóvenes con acné experimentan ansiedad diagnosticada y la tasa de depresión es 4 veces mayor. En Perú (Coronel y Rodríguez), más del 82% de los adolescentes con acné manifestaron síntomas de ansiedad, y el 39% tienen una autopercepción negativa de su imagen física.

No estás solo en esto. Tu valor como persona no lo define un brote en la piel. La piel es un órgano vivo que pasa por cambios hormonales intensos en la adolescencia y juventud. Con paciencia, una rutina básica suave y la ayuda médica oportuna, la piel se recupera.

Si en algún momento sientes que la tristeza te sobrepasa o no quieres salir, por favor habla con un adulto de confianza o busca apoyo psicológico. Tu bienestar emocional es la prioridad número uno.`,
      isRedFlag: false,
      relatedChapter: 4,
      suggestions: [
        '¿Qué puedo hacer hoy para cuidar mi piel con calma?',
        '¿Cómo hablar con mis padres si me siento triste?',
        '¿Por qué salen granitos en la adolescencia?'
      ]
    };
  }

  // Activos: Peróxido de Benzoilo, Ácido Salicílico, Ácido Azelaico, Retinoides
  if (query.includes('benzoilo') || query.includes('salicilico') || query.includes('salicílico') || query.includes('azelaico') || query.includes('adapaleno') || query.includes('retinoide') || query.includes('isotretinoina') || query.includes('isotretinoína')) {
    return {
      text: `En la farmacología dermatológica autorizada para el acné, estos son los activos clave según la Guía de Práctica Clínica:

1. Peróxido de Benzoilo (2.5%, 5%, 10%): Es el bactericida de venta libre más eficaz contra Cutibacterium acnes. ¡Dato clave! No genera resistencia bacteriana. Al 2.5% es igual de efectivo que al 10% pero causa mucha menor irritación.
2. Ácido Salicílico (BHA al 2%): Es liposoluble, lo que le permite disolver el tapón de grasa dentro del poro y calmar la inflamación.
3. Ácido Azelaico: Bloquea la enzima tirosinasa, siendo la opción de primera línea para despigmentar las manchas oscuras residuales (hiperpigmentación post-inflamatoria).
4. Retinoides tópicos (Adapaleno, Tretinoína): Normalizan el desprendimiento de las células del poro para que no se obstruya.
5. Isotretinoína oral: Retinoide sistémico muy potente recetado EXCLUSIVAMENTE por dermatólogos para acné severo o con riesgo de cicatrices. Reduce la glándula sebácea, pero requiere control médico estricto y anticoncepción en mujeres por ser teratogénico.`,
      isRedFlag: false,
      relatedChapter: 7,
      suggestions: [
        '¿Cómo se aplica el Peróxido de Benzoilo para que no irrite?',
        '¿Qué es la hiperpigmentación post-inflamatoria?',
        '¿Puedo usar antibióticos en crema solos?'
      ]
    };
  }

  // Check if the query is outside the database scope
  const isAcneOrSkinRelated =
    query.includes('piel') || query.includes('acne') || query.includes('acné') || query.includes('grano') || query.includes('espinilla') ||
    query.includes('poro') || query.includes('sebo') || query.includes('grasa') || query.includes('cara') || query.includes('rostro') ||
    query.includes('crema') || query.includes('gel') || query.includes('rutina') || query.includes('mancha') || query.includes('cicatriz') ||
    query.includes('dermat') || query.includes('limpiador') || query.includes('solar') || query.includes('protector') || query.includes('hidrata') ||
    query.includes('comedon') || query.includes('comedón') || query.includes('pústula') || query.includes('pustula') || query.includes('pápula') ||
    query.includes('papula') || query.includes('quiste') || query.includes('nodulo') || query.includes('nódulo') || query.includes('syndet') ||
    query.includes('acido') || query.includes('ácido') || query.includes('benzoilo') || query.includes('isotretinoina') || query.includes('salud') ||
    query.includes('dermi') || query.includes('hola') || query.includes('buenas') || query.includes('ayuda');

  if (!isAcneOrSkinRelated) {
    // Strict Database Boundary Mandate:
    return {
      text: `¡Hola! Como Dermi (tu asistente de salud y cuidado de la piel), mi conocimiento está estrictamente fundamentado en la base de datos oficial de evidencia científica y dermatológica del proyecto.

Por seguridad y rigor científico, no puedo responder preguntas ajenas a la salud cutánea, el acné o el cuidado de la piel, ni buscar información externa en internet.

¿Te gustaría que conversemos sobre cómo cuidar tu piel, diseñar una rutina de 3 pasos económica, resolver dudas sobre granitos o desmitificar algún truco casero? ¡Estoy aquí para acompañarte!`,
      isRedFlag: false,
      suggestions: [
        '¿Cómo armar una rutina básica de 3 pasos?',
        '¿Es malo ponerse pasta de dientes en un grano?',
        '¿Cómo saber si debo ir al dermatólogo?'
      ]
    };
  }

  // General warm answer based on database
  return {
    text: `¡Hola! Soy Dermi, tu asistente de cuidado de la piel basado exclusivamente en evidencia dermatológica científica.

En el cuidado del acné juvenil, la regla de oro es que **menos es más**. Para mantener tu piel sana y protegida solo necesitas una rutina esencial de 3 pasos:
1. **Limpiador suave Syndet** (pH 4.5-5.5) mañana y noche.
2. **Hidratante ligera oil-free** (libre de aceites y no comedogénica) para no activar sebo compensatorio.
3. **Protector solar FPS 50** toque seco a diario para evitar que las marcas de los granitos se fijen como manchas oscuras.

Si tienes un granito puntual, puedes usar activos seguros de venta libre como el **Ácido Salicílico al 2%** o **Peróxido de Benzoilo al 2.5%**.

¿Qué duda tienes sobre tu piel o algún producto que hayas visto?`,
    isRedFlag: false,
    relatedChapter: 1,
    suggestions: [
      '¿Me puedo poner pasta de dientes en un grano?',
      '¿Qué es lo mínimo que necesito comprar?',
      'Tengo bultos dolorosos bajo la piel, ¿qué hago?'
    ]
  };
}
