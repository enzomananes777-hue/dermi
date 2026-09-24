import React, { useState } from 'react';
import { RED_FLAG_CRITERIA } from '../data/dermatologyKnowledgeBase';
import { AlertTriangle, ShieldCheck, HeartHandshake, Stethoscope, ChevronRight, CheckCircle, HelpCircle } from 'lucide-react';

interface RedFlagTriageViewProps {
  onAskDermi: (promptText: string) => void;
  onOpenParentGuide: () => void;
}

export const RedFlagTriageView: React.FC<RedFlagTriageViewProps> = ({ onAskDermi, onOpenParentGuide }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const hasAnyRedFlag = Object.values(checkedItems).some(Boolean);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-rose-50 via-red-50 to-white border border-rose-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            Filtro de Seguridad y Detección Temprana
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            Semáforo Dermatológico: ¿Cuándo ir al médico?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Dermi actúa como un filtro ético y de seguridad: <strong>detiene el asesoramiento cosmético</strong> e indica derivación prioritaria a un dermatólogo cuando se presentan lesiones moderadas a severas para evitar cicatrices irreversibles.
          </p>
        </div>
      </div>

      {/* Interactive Safety Checklist */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Autoevaluación de Criterios de Alerta Roja</h3>
          <p className="text-xs text-slate-500 mt-0.5">Marca las opciones que se asemejen a lo que estás experimentando:</p>
        </div>

        <div className="space-y-3">
          {RED_FLAG_CRITERIA.map((crit) => {
            const isChecked = Boolean(checkedItems[crit.id]);
            return (
              <div
                key={crit.id}
                onClick={() => toggleCheck(crit.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-rose-50/80 border-rose-300 ring-2 ring-rose-500/20'
                    : 'bg-slate-50/60 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-1 h-4 w-4 rounded-sm border-slate-300 text-rose-600 focus:ring-rose-500 cursor-pointer"
                />
                <div className="space-y-1 text-left flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800">{crit.symptom}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      crit.severity === 'Urgente' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {crit.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{crit.description}</p>
                  <p className="text-xs font-medium text-rose-700 bg-rose-100/50 p-2 rounded-lg mt-2">
                    <strong>Acción recomendada:</strong> {crit.actionRequired}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnosis Outcome Card */}
        {hasAnyRedFlag ? (
          <div className="bg-rose-50 border border-rose-300 rounded-2xl p-5 space-y-4 animate-in fade-in">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-rose-900">Alerta de Seguridad Activada</h4>
                <p className="text-xs text-rose-800 leading-relaxed">
                  Has marcado uno o más síntomas que corresponden a acné noduloquístico, riesgo de cicatriz o impacto severo. Las cremas de venta libre no son suficientes en estos casos y pueden retrasar un tratamiento médico efectivo como retinoides orales (isotretinoína) o antibióticos regulados.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
              <button
                id="btn-open-parent-guide-triage"
                onClick={onOpenParentGuide}
                className="w-full sm:w-auto text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <HeartHandshake className="w-4 h-4" />
                Ver guía para hablar con tus padres
              </button>

              <button
                id="btn-ask-dermi-triage"
                onClick={() => onAskDermi('Tengo bultos muy grandes debajo de la piel en las mejillas y la mandíbula. Me duelen mucho, incluso cuando me acuesto sobre la almohada, y están muy rojos. ¿Qué crema me recomiendas comprar?')}
                className="w-full sm:w-auto text-xs font-semibold bg-white hover:bg-slate-50 text-rose-900 border border-rose-200 px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <Stethoscope className="w-4 h-4 text-rose-600" />
                Simular consulta de alerta con Dermi
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-xs text-emerald-900 leading-relaxed">
              <strong>Semáforo Verde:</strong> Si solo tienes puntos negros (comedones abiertos), puntos blancos o granitos superficiales leves sin dolor profundo, una rutina suave de 3 pasos con activos de venta libre (como Ácido Salicílico o Peróxido de Benzoilo al 2.5%) es el camino seguro.
            </div>
          </div>
        )}
      </div>

      {/* When to visit the doctor summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Manejo Seguro en Casa (Leve / Cosmético)
          </h4>
          <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
            <li>Menos de 20 lesiones en un lado de la cara.</li>
            <li>Puntos negros y blancos en nariz, frente y barbilla.</li>
            <li>Pápulas superficiales que no causan dolor palpitante profundo.</li>
            <li>Tratamiento: Limpiador syndet + Hidratante oil-free + Protector FPS 50.</li>
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Derivación Prioritaria al Dermatólogo (Moderado / Severo)
          </h4>
          <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
            <li>Nódulos y quistes que duelen al apoyar la cara en la almohada.</li>
            <li>Brotes masivos con fiebre, dolores musculares o articulares.</li>
            <li>Aparición de cicatrices profundas (picahielo o hendiduras).</li>
            <li>Angustia emocional severa o aislamiento de amigos y escuela.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
