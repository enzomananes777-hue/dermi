import React, { useState } from 'react';
import { MYTHS_DATABASE } from '../data/dermatologyKnowledgeBase';
import { AlertOctagon, CheckCircle2, HelpCircle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface MythBusterViewProps {
  onAskDermi: (promptText: string) => void;
  onOpenKnowledgeChapter: (chapterId: number) => void;
}

export const MythBusterView: React.FC<MythBusterViewProps> = ({ onAskDermi, onOpenKnowledgeChapter }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredMyths = selectedCategory === 'all'
    ? MYTHS_DATABASE
    : MYTHS_DATABASE.filter(m => m.verdict === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-rose-50 via-amber-50 to-white border border-rose-100 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full">
            <AlertOctagon className="w-3.5 h-3.5 text-rose-600" />
            Desmitificador Científico Dermi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            Remedios Caseros vs Evidencia Médica
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            En redes sociales circulan &quot;hacks&quot; virales que prometen secar granos en minutos usando pasta de dientes, alcohol, limón o bicarbonato. Dermi combate la desinformación explicando con rigor y sencillez por qué dañan la piel y qué dice la ciencia.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-xs px-3 py-1 rounded-lg font-semibold transition-all ${
                selectedCategory === 'all' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              Todos los mitos ({MYTHS_DATABASE.length})
            </button>
            <button
              onClick={() => setSelectedCategory('Falso y Peligroso')}
              className={`text-xs px-3 py-1 rounded-lg font-semibold transition-all ${
                selectedCategory === 'Falso y Peligroso' ? 'bg-rose-600 text-white' : 'bg-white border border-slate-200 text-rose-700'
              }`}
            >
              Falso y Peligroso
            </button>
            <button
              onClick={() => setSelectedCategory('Falso y Contraproducente')}
              className={`text-xs px-3 py-1 rounded-lg font-semibold transition-all ${
                selectedCategory === 'Falso y Contraproducente' ? 'bg-amber-600 text-white' : 'bg-white border border-slate-200 text-amber-700'
              }`}
            >
              Falso y Contraproducente
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Myths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredMyths.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    item.verdict === 'Falso y Peligroso'
                      ? 'bg-rose-100 text-rose-800'
                      : item.verdict === 'Falso y Contraproducente'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {item.verdict}
                </span>

                <button
                  onClick={() => onOpenKnowledgeChapter(item.chapterRef)}
                  className="text-slate-400 hover:text-emerald-600 text-xs flex items-center gap-1 transition-colors"
                  title="Ver evidencia en la Base de Datos"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Capítulo {item.chapterRef}</span>
                </button>
              </div>

              {/* Myth headline */}
              <h3 className="text-base font-bold text-slate-800 leading-snug">
                &quot;{item.myth}&quot;
              </h3>

              {/* Reality */}
              <div className="bg-rose-50/60 border border-rose-100 rounded-xl p-3 text-xs text-rose-950 font-medium">
                <strong>La realidad:</strong> {item.reality}
              </div>

              {/* Scientific explanation */}
              <div className="text-xs text-slate-600 leading-relaxed space-y-1">
                <span className="font-bold text-slate-700 block">¿Por qué la ciencia lo desaconseja?</span>
                <p>{item.scientificReason}</p>
              </div>

              {/* Better alternative */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 text-xs text-emerald-950">
                <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Qué hacer en su lugar:
                </div>
                <p>{item.betterAlternative}</p>
              </div>
            </div>

            {/* Ask Dermi CTA */}
            <button
              id={`ask-dermi-myth-${item.id}`}
              onClick={() => onAskDermi(`Hola Dermi, ¿por qué es malo ${item.myth.toLowerCase()} y qué me recomiendas hacer?`)}
              className="w-full text-xs font-semibold bg-slate-50 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 border border-slate-200 hover:border-emerald-300 py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Preguntar a Dermi sobre este truco
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
