import { KnowledgeChapter, MythFact, RoutineStep, RedFlagAssessment } from '../types';

export const OFFICIAL_DATABASE_TEXT = `
1. Etiología y Fisiopatología del Conducto Pilosebáceo
El acné vulgar es una enfermedad inflamatoria crónica, multifactorial y recidivante que afecta primordialmente a la unidad pilosebácea (compuesta por el folículo piloso y la glándula sebácea asociada). Afecta típicamente áreas anatómicas de alta densidad de glándulas sebáceas como el rostro (99%), la espalda (60%) y el pecho (15%). Afecta a cerca del 90% de los adolescentes.

1.1. Los Cuatro Factores Fisiopatológicos Clave:
- Aumento de la producción de sebo e hiperplasia glandular: En la pubertad aumentan los andrógenos (especialmente testosterona de origen gonadal y suprarrenal en adrenarquia), estimulando sebocitos y secreción sebácea.
- Descamación anormal de queratinocitos (hiperqueratosis ductal): Pared del canal folicular tiene desprendimiento alterado y cohesivo de células de la capa córnea, bloqueando el drenaje y estrechando el poro.
- Colonización folicular por Cutibacterium acnes: Sebo en folículo obstruido genera entorno anaeróbico y rico en lípidos propicio para C. acnes (bacilo Gram positivo anaerobio microaerófilo).
- Cascada inflamatoria local: C. acnes secreta lipasas que transforman triglicéridos en ácidos grasos libres irritantes. Interactúa con receptores Toll TLR-2 liberando citocinas proinflamatorias (IL-1β, IL-8, TNF-α) atrayendo neutrófilos.

1.2. Dinámica de Desarrollo de Lesiones:
- Microcomedón: Lesión precursora microscópica e invisible.
- Comedón cerrado (punto blanco): Pequeña pápula blanquecina puntiforme con sebo y queratina bajo apertura folicular estrecha u ocluida.
- Comedón abierto (punto negro): Concreción gris oscura, marrón o negra en poro dilatado. El color oscuro se debe a oxidación de melanina y lípidos con el aire (NO es suciedad).
- Pápula eritematosa o pústula (purulenta): Inflamación distal/terminal del conducto en epidermis.
- Nódulos, quistes y abscesos profundos: Ruptura de la pared folicular o inflamación en parte proximal profunda y glándula sebácea. Muy dolorosos, destruyen tejido circundante y tienen alto riesgo de cicatrices permanentes.

2. Clasificación Clínica y Formas Especiales del Acné (Consenso Ibero-latinoamericano 2014)
- Por edad: Neonatal (0-30 días), Lactante (1-24 meses), Infantil (2-7 años), Preadolescente (8-11 años), Adolescente (11-25 años), Adulto (>25 años).
- Por lesión predominante: Comedónico (no inflamatorio), Pápulo-pustuloso (inflamatorio), Nódulo-quístico (grave).
- Por grado de severidad en hemicara:
  * Leve: < 20 lesiones (predominio comedones).
  * Moderado: 20 a 50 lesiones (mixtas inflamatorias).
  * Severo: > 50 lesiones (nódulos profundos).
- Formas Clínicas Graves:
  * Acné Conglobata: Crónico, severo, nódulos grandes, abscesos fluctuantes, comedones dobles interconectados, fístulas (sinus), úlceras necróticas y cicatrices hipertróficas/queloideas. Parte de la tétrada de oclusión folicular (seno pilonidal, hidradenitis supurativa, celulitis disecante).
  * Acné Fulminans: Urgencia dermatológica súbita, casi siempre varones adolescentes por hipersensibilidad a C. acnes o esteroides anabólicos. Lesiones ulcerosas, costrosas y necróticas dolorosas acompañadas obligatoriamente de síntomas sistémicos: fiebre alta, mialgias, artralgias, pérdida de peso, anemia, leucocitosis y lesiones osteolíticas.
- Síndromes Complejos: SAPHO (Sinovitis, Acné, Pustulosis, Hiperostosis, Osteoartropatía), PAPA (Artritis piógena, Pioderma gangrenoso, Acné por gen CD2BP1), HAIR-AN (Hiperandrogenismo, Resistencia Insulina, Acantosis Nigricans).
- Diagnóstico diferencial: Rosácea (mujeres 30-50 años, fondo eritematoso, telangiectasias, NO comedones), Erupciones acneiformes por fármacos (halógenos, corticoides, B12, monomorfa sin comedones verdaderos), Dermatosis perioral rosaceiforme (por corticoides fluorinados tópicos).

3. Factores de Riesgo, Desencadenantes y Nutrición
- Estrés y Ritmo Circadiano: Estrés mental/físico eleva cortisol y andrógenos suprarrenales, alterando la barrera y aumentando la inflamación. "Acné de avión / ocasional": estrés de viajes largos, privación de sueño, alteración de cortisol, aire seco de cabinas y roce mecánico de asientos/almohadas.
- Factores ambientales y mecánicos: Humo del cigarrillo y contaminantes aumentan peroxidación del sebo. Roce o fricción por celulares, cascos, cuellos ajustados y mochilas (acné mecánico).
- Nutrición:
  * Suplementos de proteína de suero (Whey Protein): Muy comedogénicos. Elevan insulina posprandial e IGF-1, reducen el factor FoxO1, activan receptores androgénicos, aumentan lipogénesis sebácea, queratinización e inflamación troncal aguda.
  * Leche descremada vs Leche entera: La leche descremada es MÁS comedogénica que la entera porque su procesamiento elimina estrógenos naturales y concentra andrógenos, progesterona y factores como IGF-1.
  * Carbohidratos de alta carga glucémica (azúcares refinados, harinas procesadas): Provocan picos de insulina, estimulan andrógenos y disminuyen adiponectina antiinflamatoria.
  * Alcohol: Se excreta en parte por sudor sirviendo de nutriente a C. acnes, deprime el sistema inmune local y altera el microbioma.

4. Impacto Psicosocial y Salud Mental
- El acné impacta profundamente la salud mental, autoconcepto y calidad de vida.
- Estadísticas:
  * Ecuador (Bejarano et al.): 56% de pacientes con acné padecen ansiedad (1.7 veces superior a controles) y la depresión moderada-severa es 4 veces mayor.
  * Perú (Coronel y Rodríguez, Chiclayo): 82.79% de adolescentes con acné moderado a grave presentaron síntomas de ansiedad.
  * Colombia (Hospital Univ. del Norte): Relación entre síntomas depresivos, desempleo y antecedentes familiares severos.
- Diferencias de género: Mujeres experimentan mayor angustia, ansiedad y baja autoestima por estigmas y cánones de belleza.
- Autoimagen y Suicidio: Torres y Zumba reportan 39% con percepción negativa de sí mismos y 15.3% baja autoestima severa. Aislamiento escolar, evitación de contacto visual, ciberacoso y en casos graves ideación suicida y autolesiones.

5. Papel de la Higiene Facial en la Homeostasis Cutánea
- Función de la limpieza: Remover sebo, queratinocitos muertos y sudor con surfactantes micelares sin destruir la barrera.
- Jabones alcalinos (pH 9-11): Destruyen el manto ácido, barren ceramidas, suben TEWL (pérdida de agua transepidérmica) hasta 30% y causan sequedad extrema y rebote bacteriano.
- Syndet (detergente sintético / soap-free, pH 4.5-5.5): Mantiene manto ácido, TEWL <10%, permite actividad óptima de enzimas esfingomielinasa ácida y beta-glucocerebrosidasa que fabrican ceramidas.
- Principios activos en limpiadores:
  * AHA (ácido glicólico): Exfoliación superficial de corneocitos.
  * BHA (ácido salicílico): Liposoluble, penetra profundamente en el poro y glándula sebácea, comedolítico y antiinflamatorio.
  * Peróxido de benzoilo (wash-off 4%): Bactericida rápido liberando oxígeno contra C. acnes sin alterar la diversidad alfa del microbioma.
  * Niacinamida: Estimula síntesis de ceramidas, reduce sebo e inflamación.
- Evidencia clínica (Choi et al.):
  * 2 lavados al día (mañana y noche) reduce comedones en 20% frente a 1 lavado.
  * 4 lavados al día NO aporta beneficio y provoca irritación, sequedad y eritema.
- Técnica correcta: Agua tibia (<35°C), solo con las yemas limpias durante 30 a 40 segundos, secado a toques suaves con toalla limpia sin frotar. Evitar cepillos rotatorios o esponjas abrasivas.

6. Rutinas de Cuidado de la Piel y Fotoprotección Especializada
- Paradoja de la hidratación: Grasa (sebo) y agua (hidratación) son cosas distintas. Si una piel grasa se deshidrata, produce más sebo compensatorio ("efecto rebote"). Usar hidratantes ligeras con etiquetas "oil-free" (libre de aceites) y "no comedogénico" (en gel o emulsión acuosa).
- Efecto nocivo de la radiación UV: El sol NO seca los granos. Engrosa la capa córnea taponando el poro, oxida el escualeno sebáceo produciendo brotes inflamatorios, y estimula melanocitos fijando manchas residuales oscuras (hiperpigmentación post-inflamatoria).
- Fotoprotector ideal: SPF 50 o 50+, amplio espectro UVA (PA++++ / PPD alta), oil-free y no comedogénico, acabado mate o toque seco (con sílice, almidón de maíz o perlita absorbente), sin alcohol denat en altas concentraciones (para evitar efecto rebote). Filtros minerales (óxido de zinc/dióxido de titanio) tienen efecto calmante y antiséptico ideal para piel reactiva.

7. Terapéutica Médica Tradicional y Perfil de Seguridad (Guía INSN San Borja)
- Acné Leve (<20 lesiones): Peróxido de benzoilo (PB) tópico, retinoides tópicos (adapaleno, tretinoína) o combinación fija PB + adapaleno. Alternativas: ácido azelaico, dapsone tópica o ácido salicílico.
- Acné Moderado (20-50 lesiones): Antibiótico oral sistémico + tópico combinado (PB, retinoides) o combinación fija sola.
- Acné Severo (>50 lesiones): Antibiótico oral sistémico + combinación tópica fija profunda, o Isotretinoína oral precoz.
- Activos tópicos clave:
  * Peróxido de benzoilo: Concentraciones 2.5%, 5% y 10%. Bactericida potente, queratolítico. NO genera resistencia bacteriana; al combinarse con antibióticos previene que las bacterias se vuelvan resistentes.
  * Retinoides tópicos: Normalizan la queratinización y desobstruyen poros.
  * Antibióticos tópicos (Clindamicina, Eritromicina): NUNCA en monoterapia por alto riesgo de resistencia bacteriana.
  * Ácido azelaico tópico: Comedolítico, antiinflamatorio, inhibidor competitivo de la tirosinasa cutánea, de primera elección para despigmentar marcas post-inflamatorias.
- Antibióticos orales: Doxiciclina, minociclina, limeciclina (300 mg/día 12 sem). Reducen C. acnes e inhiben metaloproteinasas como MMP-9. En adultos doxiciclina 50 mg 1-3 veces/día de 6 a 12 semanas. Contraindicados en menores de 8 años y embarazadas (manchas dentales irreversibles, hipoplasia de esmalte).
- Isotretinoína oral: Retinoide oral potente que reduce tamaño y secreción sebácea de forma drástica e irreversible. Dosis 0.5-1.0 mg/kg/día (severo) o 0.3-0.5 mg/kg/día (moderado) administrado con alimentos grasos. Teratogénico severo (exige anticoncepción estricta en mujeres). Causa queilitis labial en el 100%, sequedad extrema. Monitoreo riguroso de salud mental por posible asociación con síntomas depresivos agudos durante los primeros meses.

8. Terapias Emergentes e Intervenciones Quirúrgicas
- Farmacología avanzada: Inhibidores dirigidos de IL-1 y TNF-α; anticuerpos monoclonales (secukinumab, ixekizumab contra IL-17, adalimumab); inhibidores de JAK/STAT; péptidos antimicrobianos sintéticos selectivos; terapias de silenciamiento genético por ARNi.
- Eje intestino-piel: Disbiosis intestinal transloca endotoxinas generando inflamación sistémica que empeora el acné. Uso de prebióticos/probióticos, dietas ricas en omega-3, zinc y antioxidantes.
- Dispositivos de alta tecnología: Láseres no ablativos y colorante pulsado (para eritema e inflamación), Luz pulsada intensa (IPL, activa porfirinas de C. acnes), Terapia fotodinámica (PDT).
- Cirugía y manejo de cicatrices:
  * Subcisión quirúrgica con aguja Nokor: Corta bandas fibrosas profundas que traccionan la piel en cicatrices atróficas.
  * Láser CO2 fraccional: Neocolagénesis y remodelación dérmica.
  * Dermoabrasión mecánica profunda y microinjertos en sacabocados (punch) de piel retroauricular.
  * Infiltración intralesional de triamcinolona para cicatrices hipertróficas o queloides.
  * Plasma Rico en Plaquetas (PRP) y factores de crecimiento coadyuvantes.

Referencias Bibliográficas:
- Instituto Nacional de Salud del Niño San Borja. (2021). Guía de Práctica Clínica para el Diagnóstico y Tratamiento de Acné (GPC-002/INSN-SB). Lima, Perú.
- Dermovitall. (2025). Acné hormonal vs. acné bacteriano: diferencias y tratamientos eficaces. Ciudad de México.
- Opuntia Brava. (2024). El acné y su impacto en la salud mental de los adolescentes. Ambato, Ecuador.
- López Vera, E. (2025). Papel de la higiene facial en el acné. Más Dermatología (N.º 52, págs. 23-27). Málaga, España.
- La Beautyneta. (2026). Rutina skincare para adolescentes: simple y efectiva. Buenos Aires, Argentina.
- Prodermica. (2026). Mejor protector solar para piel grasa y acneica: guía completa 2026. Puebla, México.
- Sánchez Martini, P. F., y Formaggia, V. (2022). Mitos y verdades sobre el acné. Dermatología Argentina.
- Becerra Sánchez, T. A., et al. (2025). Terapias emergentes para el manejo del acné severo: desde la dermatología hasta la cirugía plástica. Ibero-American Journal of Health Science Research. Quito, Ecuador.
`;

export const CHAPTERS_DATA: KnowledgeChapter[] = [
  {
    id: 1,
    title: 'Etiología y Fisiopatología del Conducto Pilosebáceo',
    subtitle: 'Por qué y cómo se originan los granitos y comedones',
    summary: 'El acné es una afección inflamatoria crónica multifactorial del folículo pilosebáceo. Ocurre por cuatro factores sinérgicos: exceso de sebo, hiperqueratosis, colonización por Cutibacterium acnes e inflamación local.',
    sections: [
      {
        heading: '1.1. Los Cuatro Factores Fisiopatológicos Clave',
        content: '1) Aumento de sebo por andrógenos en la pubertad; 2) Hiperqueratosis ductal (células muertas pegadas que taponan el poro); 3) Proliferación de Cutibacterium acnes en entorno anaerobio; 4) Cascada inflamatoria con activación de receptores TLR-2 y liberación de citocinas (IL-1β, IL-8, TNF-α).'
      },
      {
        heading: '1.2. Evolución de las Lesiones Cutáneas',
        content: 'Comienza con el microcomedón invisible. Luego el comedón cerrado (punto blanco) y el comedón abierto (punto negro oxidado por el aire, ¡no es suciedad!). Si hay inflamación superficial surgen pápulas y pústulas. Si la pared folicular se rompe en profundidad aparecen nódulos y quistes dolorosos de alto riesgo cicatricial.'
      }
    ],
    keyFacts: [
      'Afecta al 90% de los adolescentes en todo el mundo.',
      'El rostro concentra el 99% de las manifestaciones cutáneas.',
      'Los puntos negros son grasa y melanina oxidada con el aire, no falta de higiene.',
      'Los nódulos y quistes profundos requieren atención médica prioritaria para evitar cicatrices.'
    ]
  },
  {
    id: 2,
    title: 'Clasificación Clínica y Formas Especiales',
    subtitle: 'Consenso Ibero-latinoamericano 2014 y variantes clínicas',
    summary: 'Criterios diagnósticos por edad (neonatal a adulto), morfología de lesión (comedónico, pápulo-pustuloso, nódulo-quístico) y severidad (<20 leve, 20-50 moderado, >50 severo en hemicara). Formas graves como Conglobata y Fulminans requieren urgencia médica.',
    sections: [
      {
        heading: '2.1. Criterios de Severidad por Hemicara',
        content: 'Leve: menos de 20 lesiones (comedones no inflamatorios). Moderado: 20 a 50 lesiones mixtas pápulo-pustulosas. Severo: más de 50 lesiones o presencia de nódulos y quistes profundos.'
      },
      {
        heading: '2.2. Formas Clínicas Graves y Diagnóstico Diferencial',
        content: 'Acné Conglobata (fístulas sinusales, abscesos, cicatrices hipertróficas); Acné Fulminans (urgencia médica con fiebre, mialgias, artralgias y necrosis). Diagnóstico diferencial con Rosácea (no tiene comedones), erupciones medicamentosas y dermatosis perioral.'
      }
    ],
    keyFacts: [
      'El acné fulminans es una urgencia médica que cursa con fiebre y dolores articulares.',
      'La rosácea se diferencia del acné porque NO presenta comedones.',
      'Acné conglobata forma fístulas interconectadas debajo de la piel.'
    ]
  },
  {
    id: 3,
    title: 'Factores de Riesgo, Desencadenantes y Nutrición',
    subtitle: 'Estrés, ritmo circadiano, whey protein y lácteos descremados',
    summary: 'El cortisol por estrés y la privación de sueño aumentan la producción de sebo. Los suplementos de Whey Protein y la leche descremada elevan la insulina e IGF-1 provocando brotes inflamatorios agudos.',
    sections: [
      {
        heading: '3.1. Estrés, Humo y Acné Mecánico',
        content: 'El estrés físico o mental eleva el cortisol que desestabiliza la barrera cutánea. El humo del cigarrillo oxida el escualeno. La fricción constante por teléfonos, cascos y mochilas genera acné mecánico.'
      },
      {
        heading: '3.2. Mecanismos Moleculares de la Dieta',
        content: 'Whey Protein eleva insulina e IGF-1 disminuyendo FoxO1 y activando la lipogénesis. La leche descremada es MÁS comedogénica que la entera por concentración de andrógenos e IGF-1 tras remover estrógenos naturales con la grasa. Los azúcares refinados provocan picos de insulina.'
      }
    ],
    keyFacts: [
      'La proteína de suero (Whey Protein) puede disparar brotes agudos en pecho y espalda.',
      'La leche descremada es más comedogénica que la leche entera.',
      'El teléfono sucio y los cascos provocan acné mecánico por fricción y oclusión.'
    ]
  },
  {
    id: 4,
    title: 'Impacto Psicosocial y Salud Mental',
    subtitle: 'Ansiedad, autoestima y validación emocional del paciente',
    summary: 'El acné tiene consecuencias profundas en la salud psíquica de los jóvenes. Estudios en Ecuador, Perú y Colombia demuestran tasas de ansiedad que superan el 56% y hasta el 82%, aislamiento social e ideación de autolisis.',
    sections: [
      {
        heading: '4.1. Estadísticas Clínicas Internacionales',
        content: 'Ecuador (Bejarano et al.): 56% de pacientes con ansiedad clínica (1.7x superior a controles) y depresión 4x mayor. Perú (Coronel y Rodríguez): 82.79% de adolescentes con acné moderado/grave expresaron ansiedad significativa. Colombia: correlación con frustración laboral y antecedentes familiares.'
      },
      {
        heading: '4.2. Presión Estética, Género y Suicidio',
        content: 'Las mujeres experimentan mayor estigma social por ideales hegemónicos de belleza. Torres y Zumba revelan 39% de autopercepción negativa y 15.3% baja autoestima severa. El aislamiento social y las burlas escolares pueden derivar en ideaciones suicidas que requieren apoyo empático inmediato.'
      }
    ],
    keyFacts: [
      'Hasta el 82.79% de adolescentes con acné manifiestan síntomas clínicos de ansiedad.',
      'No minimices tus sentimientos: el dolor emocional del acné es 100% válido y real.',
      'El aislamiento social es un síntoma común que amerita acompañamiento y contención.'
    ]
  },
  {
    id: 5,
    title: 'Papel de la Higiene Facial en la Homeostasis Cutánea',
    subtitle: 'Jabones alcalinos vs Syndet, surfactantes y técnica correcta',
    summary: 'La higiene suave es clave. Los jabones comunes (pH 9-11) destruyen el manto ácido protector. Se debe usar Syndet sin jabón (pH 4.5-5.5) dos veces al día con las manos limpias y agua tibia.',
    sections: [
      {
        heading: '5.1. Jabón Tradicional vs Syndet',
        content: 'Los jabones alcalinos (pH 9-11) aumentan la pérdida de agua (TEWL) hasta un 30% y barren ceramidas. Los Syndets a pH fisiológico 4.5-5.5 preservan la barrera dérmica y permiten que las enzimas esfingomielinasa ácida y beta-glucocerebrosidasa sinteticen ceramidas protectoras.'
      },
      {
        heading: '5.2. Evidencia de Frecuencia y Técnica',
        content: 'Choi et al. demostraron que 2 lavados diarios reducen un 20% los comedones. Lavarse 4 veces NO aporta beneficios y empeora la irritación. Lavar con yemas de los dedos, agua a <35°C por 30-40 segundos y secar a toques con toalla limpia sin frotar.'
      }
    ],
    keyFacts: [
      'Lavarse la cara 2 veces al día es lo óptimo. Lavarse 4 veces empeora la piel.',
      'Los limpiadores Syndet a pH 4.5-5.5 protegen la barrera cutánea sin resecar.',
      'Nunca uses cepillos rotatorios agresivos ni esponjas en piel inflamada.'
    ]
  },
  {
    id: 6,
    title: 'Rutinas de Cuidado de la Piel y Fotoprotección Especializada',
    subtitle: 'La tríada esencial: Limpiador + Hidratante + Protector Solar SPF 50',
    summary: 'Toda rutina juvenil efectiva se basa en 3 pasos mínimos. La piel grasa necesita agua para evitar que la glándula produzca más sebo por compensación. El sol oxida el escualeno e intensifica las manchas oscuras.',
    sections: [
      {
        heading: '6.1. La Paradoja de la Hidratación',
        content: 'Grasa (sebo) no es lo mismo que agua (hidratación). Si una piel grasa se deshidrata, produce aún más grasa para protegerse ("efecto rebote"). Es obligatorio usar emulsión ligera o gel con etiquetas "oil-free" y "no comedogénico".'
      },
      {
        heading: '6.2. El Daño Oculto del Sol y Criterios del Protector',
        content: 'El sol NO seca los granos: engrosa la capa córnea tapando poros, oxida el escualeno sebáceo y fija manchas oscuras (hiperpigmentación post-inflamatoria). Requiere SPF 50+, UVA PA++++, acabado mate o toque seco (con sílice o perlita) y sin alcohol desnaturalizado en alta concentración.'
      }
    ],
    keyFacts: [
      'Menos es más: no necesitas 10 productos, solo 3 pasos esenciales.',
      'El sol no cura el acné; causa manchas oscuras duraderas y más brotes.',
      'Busca siempre productos con etiqueta "Oil-Free" y "No Comedogénico".'
    ]
  },
  {
    id: 7,
    title: 'Terapéutica Médica Tradicional y Perfil de Seguridad',
    subtitle: 'Guía INSN San Borja: Peróxido de benzoilo, retinoides e isotretinoína',
    summary: 'Lineamientos terapéuticos para acné leve, moderado y severo. Peróxido de benzoilo (2.5%, 5%, 10%) no genera resistencia bacteriana. Retinoides tópicos normalizan el poro. Casos severos requieren antibióticos regulados o isotretinoína oral bajo estricta supervisión médica.',
    sections: [
      {
        heading: '7.1. Tratamientos Tópicos de Venta Libre y con Receta',
        content: 'Peróxido de benzoilo (PB) al 2.5% es el bactericida OTC más respaldado y no causa resistencia. Ácido salicílico al 2% penetra el sebo. Ácido azelaico bloquea la tirosinasa cutánea y despigmenta manchas. Antibióticos tópicos (clindamicina) nunca deben usarse en monoterapia.'
      },
      {
        heading: '7.2. Fármacos Sistémicos y Seguridad de la Isotretinoína',
        content: 'Antibióticos orales: doxiciclina o limeciclina 300 mg/día por 12 semanas (prohibidos en <8 años y embarazadas por manchas dentales). Isotretinoína oral (0.5-1 mg/kg/día con alimentos grasos) para casos graves: altamente teratogénica, queilitis labial en 100%, exige monitoreo de salud mental por riesgo de síntomas depresivos iniciales.'
      }
    ],
    keyFacts: [
      'El Peróxido de Benzoilo al 2.5% es tan eficaz como al 10% con mucha menor irritación.',
      'El Ácido Azelaico es el ingrediente de elección para eliminar manchas rojas y oscuras.',
      'La Isotretinoína oral requiere supervisión dermatológica estricta y monitoreo emocional.'
    ]
  },
  {
    id: 8,
    title: 'Terapias Emergentes e Intervenciones de Cirugía Plástica',
    subtitle: 'Biológicos, eje intestino-piel, láseres y subcisión de cicatrices',
    summary: 'Avances en biotecnología (inhibidores de IL-1, TNF-α, anticuerpos monoclonales), modulación del eje intestino-piel con probióticos y omega-3, y técnicas quirúrgicas para cicatrices (subcisión Nokor, láser fraccional CO2, microinjertos punch y triamcinolona intralesional).',
    sections: [
      {
        heading: '8.1. Eje Intestino-Piel y Nuevos Biológicos',
        content: 'La disbiosis intestinal filtra endotoxinas que exacerban la inflamación de la piel. Se recomiendan prebióticos, omega-3 y zinc. En investigación: anticuerpos monoclonales (secukinumab, ixekizumab), inhibidores JAK/STAT y péptidos antimicrobianos sintéticos selectivos.'
      },
      {
        heading: '8.2. Cirugía Plástica de Cicatrices del Acné',
        content: 'Subcisión con aguja Nokor para romper tractos fibrosos en cicatrices atróficas. Láser fraccional CO2 para neocolagénesis. Microinjertos en sacabocados (punch) de piel retroauricular para cicatrices en picahielo. Infiltración de triamcinolona para cicatrices hipertróficas/queloides.'
      }
    ],
    keyFacts: [
      'El cuidado digestivo (eje intestino-piel) influye directamente en la inflamación facial.',
      'Las cicatrices profundas pueden tratarse mediante subcisión quirúrgica y láser CO2.',
      'Los procedimientos quirúrgicos y láser deben ser realizados por cirujanos plásticos o dermatólogos acreditados.'
    ]
  }
];

export const MYTHS_DATABASE: MythFact[] = [
  {
    id: 'pasta-dientes',
    myth: 'Ponerse pasta de dientes o alcohol en un grano para secarlo rápido',
    verdict: 'Falso y Peligroso',
    reality: 'Quema la barrera cutánea, genera dermatitis por contacto y fija manchas oscuras muy difíciles de quitar.',
    scientificReason: 'El alcohol y los detergentes alcalinos de la pasta de dientes destruyen el manto lipídico ácido (pH 4.5-5.5) y las ceramidas del estrato córneo. Esto aumenta la pérdida transepidérmica de agua (TEWL), incrementa la inflamación y propaga la bacteria C. acnes.',
    betterAlternative: 'Aplica un parche hidrocoloide puntual o un gel de venta libre con Ácido Salicílico al 2% o Peróxido de Benzoilo al 2.5%.',
    chapterRef: 5
  },
  {
    id: 'sol-cura-granos',
    myth: 'Tomar el sol sin protección seca los granitos y cura el acné',
    verdict: 'Falso y Contraproducente',
    reality: 'Brinda una falsa mejoría de días, pero luego causa un rebote severo y manchas oscuras permanentes.',
    scientificReason: 'La radiación ultravioleta engrosa mecánicamente el estrato córneo taponando más folículos, oxida el escualeno del sebo (altamente comedogénico e inflamatorio) y estimula a los melanocitos para fijar hiperpigmentación post-inflamatoria (manchas rojas o marrones).',
    betterAlternative: 'Usa a diario un fotoprotector facial SPF 50 con toque seco o acabado mate, etiquetado "oil-free" y "no comedogénico".',
    chapterRef: 6
  },
  {
    id: 'lavar-muchas-veces',
    myth: 'El acné es por suciedad; lavarse la cara 4 o 5 veces al día limpia los poros',
    verdict: 'Falso y Peligroso',
    reality: 'Empeora drásticamente el acné al provocar "acné detergicans" y efecto rebote de grasa.',
    scientificReason: 'El estudio clínico de Choi et al. demostró que 2 lavados al día reducen un 20% los comedones, pero 4 lavados diarios provocan descamación, eritema y destrucción de ceramidas, activando un mecanismo compensatorio donde la glándula produce aún más sebo.',
    betterAlternative: 'Lávate solo 2 veces al día (mañana y noche) con limpiador suave Syndet (sin jabón) usando únicamente las yemas de tus manos y agua tibia (<35°C).',
    chapterRef: 5
  },
  {
    id: 'piel-grasa-sin-hidratante',
    myth: 'Si tengo la piel grasa no debo usar crema hidratante porque me saldrán más granos',
    verdict: 'Falso y Contraproducente',
    reality: 'La falta de agua activa una sobreproducción refleja de grasa por las glándulas sebáceas.',
    scientificReason: 'Grasa (lípidos sebáceos) y agua (hidratación transepidérmica) son parámetros biológicos completamente distintos. Una piel grasa deshidratada intenta protegerse produciendo más sebo, aumentando el taponamiento de poros.',
    betterAlternative: 'Usa una loción o gel hidratante con textura emulsión ligera, etiquetada como "oil-free" (libre de aceite) y "no comedogénica".',
    chapterRef: 6
  },
  {
    id: 'exprimir-granos',
    myth: 'Exprimir o reventar los granos con pus hace que sanen más rápido',
    verdict: 'Falso y Peligroso',
    reality: 'Empuja la infección a la dermis profunda, provocando abscesos, nódulos y cicatrices de por vida.',
    scientificReason: 'La presión mecánica rompe la pared del folículo pilosebáceo hacia el interior, propagando C. acnes, ácidos grasos libres y citocinas inflamatorias (IL-1β, TNF-α) en la dermis profunda, destruyendo elastina y colágeno.',
    betterAlternative: 'Deja que el ciclo natural ocurra. Aplica un parche hidrocoloide para protegerlo del roce y las bacterias de las manos.',
    chapterRef: 1
  },
  {
    id: 'leche-descremada-saludable',
    myth: 'La leche descremada es mejor para el acné porque no tiene grasa',
    verdict: 'Mito Inexacto',
    reality: 'La leche descremada es biológicamente MÁS comedogénica que la leche entera.',
    scientificReason: 'El desnatado industrial elimina los estrógenos naturales pero concentra andrógenos, progesterona y el factor de crecimiento insulínico (IGF-1), los cuales estimulan directamente la proliferación de sebocitos y la queratinización folicular.',
    betterAlternative: 'Si notas brotes con lácteos, reduce su consumo o sustitúyelos por bebidas vegetales fortificadas con calcio no endulzadas.',
    chapterRef: 3
  }
];

export const THREE_STEP_ROUTINE: RoutineStep[] = [
  {
    step: 1,
    title: 'Limpieza Suave Fisiológica (Syndet)',
    timeOfDay: 'Mañana y Noche',
    goal: 'Eliminar el exceso de grasa, células muertas y polución sin destruir la barrera dérmica ni las ceramidas protectoras.',
    instructions: 'Humedece el rostro con agua templada (<35°C). Aplica una pequeña cantidad de limpiador Syndet en tus manos limpias, haz espuma suave y masajea con las yemas durante 30 a 40 segundos. Enjuaga y seca con pequeños toques de una toalla limpia, sin frotar.',
    whatToLookFor: [
      'Etiqueta "Syndet" o "Soap-Free" (sin jabón alcalino)',
      'pH fisiológico equilibrado (entre 4.5 y 5.5)',
      'Textura en gel suave o espuma micelar',
      'Ingredientes calmantes o activos suaves (Ácido Salicílico suave, Niacinamida o Peróxido de Benzoilo Wash-Off 4%)'
    ],
    whatToAvoid: [
      'Jabones de barra tradicionales alcalinos (pH 9-11)',
      'Cepillos mecánicos rotatorios o esponjas exfoliantes agresivas',
      'Frotar con fuerza o usar agua muy caliente (>35°C)'
    ],
    budgetTip: 'Los geles limpiadores syndet de farmacia o dermocosmética básica duran meses y cuidan tu barrera.',
    activeTreatments: [
      {
        name: 'Peróxido de Benzoilo 4% (Fórmula Lavado)',
        concentration: '4% Wash-off',
        usage: 'Enjuagar a los 1-2 minutos',
        action: 'Bactericida potente que no genera resistencia bacteriana.'
      }
    ]
  },
  {
    step: 2,
    title: 'Hidratación Ultraligera No Comedogénica',
    timeOfDay: 'Mañana y Noche',
    goal: 'Aportar agua a la piel para equilibrar el estrato córneo y evitar que las glándulas produzcan grasa de más por compensación.',
    instructions: 'Aplica una cantidad equivalente a un guisante sobre el rostro limpio y ligeramente húmedo. Distribuye con suavidad hasta su absorción completa.',
    whatToLookFor: [
      'Texturas tipo gel, fluido o emulsión acuosa',
      'Leyenda obligatoria: "Oil-Free" (libre de aceites)',
      'Leyenda obligatoria: "No Comedogénico" (no tapona poros)',
      'Activos hidratantes ligeros como Ácido Hialurónico o Niacinamida'
    ],
    whatToAvoid: [
      'Cremas pesadas untuosas a base de aceites minerales o mantecas oclusivas',
      'Fórmulas perfumadas que irriten la piel inflamada'
    ],
    budgetTip: 'Las emulsiones fluidas y geles neutros de venta libre son económicos y no dejan sensación grasosa.',
    activeTreatments: [
      {
        name: 'Ácido Salicílico 2% puntual o Peróxido de Benzoilo 2.5%',
        concentration: '2% / 2.5%',
        usage: 'Aplicar una capa fina solo sobre los granitos activos por las mañanas o noches',
        action: 'Desinflama y disuelve el tapón lipídico del poro.'
      }
    ]
  },
  {
    step: 3,
    title: 'Fotoprotección Facial Especializada (SPF 50)',
    timeOfDay: 'Solo Mañana',
    goal: 'Prevenir la oxidación del sebo por radiación UV, evitar el engrosamiento del poro y bloquear las manchas oscuras post-inflamatorias.',
    instructions: 'Aplica la regla de los dos dedos (líneas de protector en los dedos índice y corazón) de manera uniforme en rostro y cuello cada mañana. Reaplica si realizas deportes al aire libre.',
    whatToLookFor: [
      'Factor SPF 50 o 50+ con protección de amplio espectro UVA (PA++++ o PPD alta)',
      'Acabado toque seco o efecto mate con micropartículas (sílice, almidón o perlita)',
      'Fórmula "Oil-Free" y no comedogénica',
      'Filtros minerales (óxido de zinc, dióxido de titanio) si tu piel arde fácilmente'
    ],
    whatToAvoid: [
      'Protectores corporales grasosos en el rostro',
      'Protectores con alta concentración de alcohol denat en los primeros ingredientes (efecto rebote)',
      'Creer que el sol cura los granos'
    ],
    budgetTip: 'Un buen protector mate de farmacia es la mejor inversión para que las manchas no tarden meses en borrarse.'
  }
];

export const RED_FLAG_CRITERIA: RedFlagAssessment[] = [
  {
    id: 'deep-nodules',
    symptom: 'Bultos profundos, duros y dolorosos debajo de la piel (Nódulos o Quistes)',
    severity: 'Urgente',
    description: 'Lesiones que se sienten bajo la piel, duelen al tacto o al apoyar la cabeza en la almohada y están muy rojas o calientes.',
    actionRequired: 'Detener productos cosméticos y consultar con un dermatólogo. Requiere terapia médica oral para evitar cicatrices permanentes.'
  },
  {
    id: 'fever-systemic',
    symptom: 'Acné repentino acompañado de fiebre, dolor en articulaciones o malestar general',
    severity: 'Urgente',
    description: 'Puede corresponder a Acné Fulminans, una reacción inmunitaria aguda grave que afecta al cuerpo entero.',
    actionRequired: 'Atención médica de urgencia hospitalaria o dermatológica inmediata.'
  },
  {
    id: 'severe-scars',
    symptom: 'Aparición rápida de marcas hundidas (en picahielo, furgón) o cicatrices abultadas (queloides)',
    severity: 'Alta',
    description: 'Destrucción tisular acelerada del colágeno dérmico por inflamación severa no controlada.',
    actionRequired: 'Valoración dermatológica prioritaria para iniciar tratamientos de rescate antes de que la cicatriz se fije de forma permanente.'
  },
  {
    id: 'emotional-crisis',
    symptom: 'Angustia severa, ganas de no salir de casa, rechazo a ir a la escuela o pensamientos de autolesión',
    severity: 'Urgente',
    description: 'Impacto psicosocial severo del acné en la salud mental.',
    actionRequired: 'Hablar de inmediato con un adulto de confianza, médico o servicio de salud mental. No estás solo.'
  }
];

export const SIMULATED_PROMPTS = [
  {
    id: 'mito-remedio',
    badge: 'Interacción 1: Desmitificación',
    title: 'Grano gigante y pasta de dientes',
    query: 'Hola, me salió un grano gigante en la nariz y me da vergüenza ir a la escuela mañana. ¿Me puedo poner pasta de dientes o alcohol para secarlo rápido? Ayuda.'
  },
  {
    id: 'rutina-economica',
    badge: 'Interacción 2: Rutina Mínima',
    title: 'Rutina económica de 3 pasos',
    query: 'No tengo mucho dinero y en internet veo rutinas de 10 pasos con marcas carísimas. ¿Qué es lo mínimo que necesito comprar para empezar a cuidarme la piel grasa?'
  },
  {
    id: 'alerta-medica',
    badge: 'Interacción 3: Alerta Roja',
    title: 'Bultos dolorosos bajo la piel',
    query: 'Tengo bultos muy grandes debajo de la piel en las mejillas y la mandíbula. Me duelen mucho, incluso cuando me acuesto sobre la almohada, y están muy rojos. ¿Qué crema me recomiendas comprar?'
  },
  {
    id: 'whey-protein',
    badge: 'Nutrición y Deporte',
    title: '¿La Whey Protein me saca granos en la espalda?',
    query: 'Empecé a ir al gimnasio y tomo suplemento de Whey Protein, pero se me llenó la espalda de granos que antes no tenía. ¿Tiene relación o es casualidad?'
  },
  {
    id: 'leche-descremada',
    badge: 'Mito de Lácteos',
    title: '¿Leche entera o descremada?',
    query: 'Cambié a leche descremada pensando que me ayudaría con el acné al no tener grasa, pero me veo más brotes. ¿Qué dice la ciencia sobre esto?'
  }
];
