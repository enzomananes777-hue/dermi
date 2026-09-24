import React from 'react';
import { X, Heart, Shield, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

interface ParentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParentGuideModal: React.FC<ParentGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-100 flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center">
              <Heart className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">Cómo hablar con tus padres sin vergüenza</h3>
              <p className="text-xs text-slate-500">Guía empática para agendar una consulta médica con un dermatólogo</p>
            </div>
          </div>
          <button
            id="close-parent-guide-modal"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6 text-sm text-slate-700 leading-relaxed">
          {/* Emotional Validation */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-900">
            <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-xs uppercase tracking-wider text-amber-700 mb-1">
                Recuerda primero esto
              </p>
              <p className="text-xs leading-normal">
                El acné no es tu culpa ni es por falta de higiene. Afecta a casi el <strong>90% de los jóvenes</strong> en el mundo. Sentir vergüenza o timidez es completamente humano, pero pedir ayuda médica es un acto de valentía y autocuidado.
              </p>
            </div>
          </div>

          {/* 4 Steps Guide */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">1</span>
              Elige el momento oportuno
            </h4>
            <p className="text-xs text-slate-600 pl-8">
              No lo saques en medio de una discusión o cuando estén saliendo apurados al trabajo. Busca un momento de calma en casa, por ejemplo después de cenar o durante el fin de semana.
            </p>

            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">2</span>
              Habla desde el dolor físico y la salud
            </h4>
            <p className="text-xs text-slate-600 pl-8">
              En lugar de decir solo &quot;no me gusta cómo me veo&quot;, enfócate en cómo te afecta físicamente: el ardor, el dolor al apoyar la cara en la almohada o la inflamación constante.
            </p>

            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">3</span>
              Menciona el respaldo médico
            </h4>
            <p className="text-xs text-slate-600 pl-8">
              Explícales que los bultos profundos o brotes inflamados no se quitan con remedios caseros ni con cremas comunes de supermercado, y que atenderlo a tiempo con un dermatólogo previene cicatrices permanentes y ahorra dinero a largo plazo.
            </p>
          </div>

          {/* Script to read or adapt */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              Guión sugerido (puedes leerlo o enviárselo por mensaje):
            </div>
            <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-xs text-slate-800 italic leading-relaxed">
              &quot;Hola mamá / papá, quería pedirles un favor importante. He estado teniendo brotes y bultos en la piel que me duelen bastante, incluso al dormir, y me hacen sentir incómodo y triste. Estuve consultando información médica científica y cuando las lesiones son profundas, las cremas comunes no funcionan y pueden quedar marcas para siempre si no las ve un especialista. ¿Podríamos sacar una cita con un dermatólogo para que me revise y me indique el tratamiento adecuado? Se los agradecería muchísimo.&quot;
            </div>
          </div>

          {/* Reassurance */}
          <div className="flex items-start gap-2.5 text-xs text-slate-600 bg-emerald-50/70 border border-emerald-200 p-3.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              La gran mayoría de los padres reacciona con comprensión cuando ven que te preocupa tu salud y que no estás pidiendo cosas innecesarias, sino atención médica formal.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            id="close-parent-guide-bottom"
            onClick={onClose}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
          >
            Entendido, gracias Dermi
          </button>
        </div>
      </div>
    </div>
  );
};
