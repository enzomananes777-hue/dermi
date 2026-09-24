import React, { useState } from 'react';
import { THREE_STEP_ROUTINE } from '../data/dermatologyKnowledgeBase';
import { Sparkles, Check, AlertCircle, Clock, DollarSign, ShieldAlert, Droplets, SunMedium, Sparkle } from 'lucide-react';

interface ThreeStepRoutineViewProps {
  onAskDermi: (promptText: string) => void;
}

export const ThreeStepRoutineView: React.FC<ThreeStepRoutineViewProps> = ({ onAskDermi }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepIcons = [
    <Droplets key="1" className="w-5 h-5 text-sky-500" />,
    <Sparkle key="2" className="w-5 h-5 text-emerald-500" />,
    <SunMedium key="3" className="w-5 h-5 text-amber-500" />
  ];

  const currentStepData = THREE_STEP_ROUTINE.find((s) => s.step === activeStep) || THREE_STEP_ROUTINE[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Introduction Hero Card */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-100 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Filosofía Dermatológica: &quot;Menos es Más&quot;
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            La Rutina Mínima Esencial de 3 Pasos
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Las redes sociales suelen promover rutinas de 10 pasos con marcas carísimas. La ciencia dermatológica demuestra que saturar la piel con múltiples activos destruye la barrera cutánea y causa <strong>&quot;acné detergicans&quot;</strong> (empeoramiento por exceso de químicos).
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-emerald-900">
            <span className="bg-white/90 border border-emerald-200 px-3 py-1 rounded-lg">1. Limpiador Syndet</span>
            <span className="bg-white/90 border border-emerald-200 px-3 py-1 rounded-lg">2. Hidratante Oil-Free</span>
            <span className="bg-white/90 border border-emerald-200 px-3 py-1 rounded-lg">3. Protector FPS 50</span>
          </div>
        </div>
      </div>

      {/* Step Selector Pills */}
      <div className="grid grid-cols-3 gap-3">
        {THREE_STEP_ROUTINE.map((s, idx) => (
          <button
            key={s.step}
            id={`routine-step-selector-${s.step}`}
            onClick={() => setActiveStep(s.step)}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
              activeStep === s.step
                ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                : 'bg-white/60 hover:bg-white border-slate-200 text-slate-600'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                activeStep === s.step ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                Paso {s.step}
              </span>
              {stepIcons[idx]}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 line-clamp-1">{s.title.split('(')[0]}</p>
              <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                <Clock className="w-3 h-3 text-slate-400" />
                {s.timeOfDay}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Active Step Details */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                Paso {currentStepData.step} de 3
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Frecuencia: {currentStepData.timeOfDay}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800">{currentStepData.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{currentStepData.goal}</p>
          </div>

          <button
            id={`ask-dermi-step-${currentStepData.step}`}
            onClick={() => onAskDermi(`¿Cómo elijo y aplico correctamente el ${currentStepData.title}?`)}
            className="self-start sm:self-center shrink-0 text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Preguntar a Dermi sobre este paso
          </button>
        </div>

        {/* Instructions */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-600" />
            Técnica correcta de aplicación:
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">{currentStepData.instructions}</p>
        </div>

        {/* Dos and Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* What to look for */}
          <div className="bg-emerald-50/50 border border-emerald-200/70 rounded-2xl p-4 sm:p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              Qué buscar en la etiqueta (económico):
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              {currentStepData.whatToLookFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to avoid */}
          <div className="bg-rose-50/50 border border-rose-200/70 rounded-2xl p-4 sm:p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              Qué evitar a toda costa:
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              {currentStepData.whatToAvoid.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Budget Tip */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
          <DollarSign className="w-5 h-5 text-amber-700 shrink-0" />
          <div className="text-xs text-amber-900 leading-normal">
            <strong>Consejo para tu bolsillo escolar:</strong> {currentStepData.budgetTip}
          </div>
        </div>

        {/* Active Treatments section if present */}
        {currentStepData.activeTreatments && (
          <div className="border-t border-slate-100 pt-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Tratamiento puntual activo de venta libre (Respaldado por la ciencia):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentStepData.activeTreatments.map((act, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-800">{act.name}</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                      {act.concentration}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{act.action}</p>
                  <p className="text-[11px] text-slate-500 italic mt-1">{act.usage}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Safety Note on Over-cleansing */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 text-emerald-400">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold">¿Sabías por qué lavarse 4 veces al día empeora el acné?</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            El ensayo clínico de Choi et al. comprobó que 2 lavados al día reducen un 20% los comedones, pero realizar 4 lavados solo causa sequedad extrema y activa el <strong>&quot;efecto rebote&quot;</strong>, donde la glándula produce el doble de grasa para defenderse.
          </p>
        </div>
      </div>
    </div>
  );
};
