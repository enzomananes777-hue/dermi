import React, { useState } from 'react';
import { CHAPTERS_DATA, OFFICIAL_DATABASE_TEXT } from '../data/dermatologyKnowledgeBase';
import { BookOpen, Search, FileText, CheckCircle2, Bookmark, Sparkles, ExternalLink } from 'lucide-react';

interface KnowledgeBaseViewerProps {
  initialChapter?: number;
  onAskDermi: (promptText: string) => void;
}

export const KnowledgeBaseViewer: React.FC<KnowledgeBaseViewerProps> = ({ initialChapter = 1, onAskDermi }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(initialChapter);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewFullRawText, setViewFullRawText] = useState<boolean>(false);

  const activeChapter = CHAPTERS_DATA.find((c) => c.id === selectedChapterId) || CHAPTERS_DATA[0];

  const filteredChapters = CHAPTERS_DATA.filter((c) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      c.title.toLowerCase().includes(query) ||
      c.summary.toLowerCase().includes(query) ||
      c.keyFacts.some((f) => f.toLowerCase().includes(query)) ||
      c.sections.some((s) => s.heading.toLowerCase().includes(query) || s.content.toLowerCase().includes(query))
    );
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
              <BookOpen className="w-3.5 h-3.5" />
              Base de Datos Científica Autorizada
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Compilación de Evidencia Dermatológica
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Dermi opera bajo un estricto principio de fundamentación científica: no consulta fuentes no autorizadas ni busca información en internet. Todo su criterio se deriva de esta base de datos médica.
            </p>
          </div>

          <button
            onClick={() => setViewFullRawText(!viewFullRawText)}
            className="self-start sm:self-center text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-colors flex items-center gap-2 shrink-0 border border-white/10"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            {viewFullRawText ? 'Ver Capítulos Estructurados' : 'Ver Texto Completo Oficial'}
          </button>
        </div>

        {/* Search bar */}
        {!viewFullRawText && (
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar en los 8 capítulos (ej. syndet, isotretinoína, whey protein, foxo1, ansiedad)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        )}
      </div>

      {viewFullRawText ? (
        /* Verbatim Raw Document Viewer */
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="font-bold text-base text-slate-800 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              Documento Fuente Original: Etiología y Evidencia Dermatológica
            </h3>
            <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-mono">
              8 Capítulos + Referencias
            </span>
          </div>
          <pre className="text-xs text-slate-700 font-mono whitespace-pre-wrap leading-relaxed bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 max-h-[70vh] overflow-y-auto">
            {OFFICIAL_DATABASE_TEXT}
          </pre>
        </div>
      ) : (
        /* Structured Chapter Explorer */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Chapter navigation sidebar */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2">
              Capítulos ({filteredChapters.length})
            </h4>
            <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
              {filteredChapters.map((ch) => (
                <button
                  key={ch.id}
                  id={`btn-chapter-${ch.id}`}
                  onClick={() => setSelectedChapterId(ch.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                    selectedChapterId === ch.id
                      ? 'bg-emerald-50/80 border-emerald-300 ring-2 ring-emerald-500/20 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
                      selectedChapterId === ch.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {ch.id}
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-800 line-clamp-1">{ch.title}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">{ch.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Chapter Details */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  Capítulo {activeChapter.id}
                </span>
                <button
                  onClick={() => onAskDermi(`Hola Dermi, explícame lo más importante del Capítulo ${activeChapter.id}: ${activeChapter.title}`)}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Preguntar a Dermi
                </button>
              </div>

              <h3 className="text-xl font-bold text-slate-800">{activeChapter.title}</h3>
              <p className="text-xs text-slate-500">{activeChapter.subtitle}</p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                {activeChapter.summary}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-4">
              {activeChapter.sections.map((sec, i) => (
                <div key={i} className="space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                    <Bookmark className="w-3.5 h-3.5 text-emerald-600" />
                    {sec.heading}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Facts list */}
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Puntos Clave y Evidencia Médica:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activeChapter.keyFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Official Bibliographical References */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-600" />
          Referencias Bibliográficas y Consensos Médicos Consultados:
        </h4>
        <ul className="text-xs text-slate-600 space-y-2 pl-4 list-disc">
          <li><strong>Instituto Nacional de Salud del Niño San Borja. (2021).</strong> Guía de Práctica Clínica para el Diagnóstico y Tratamiento de Acné (Código: GPC-002/INSN-SB). Lima, Perú.</li>
          <li><strong>Dermovitall. (2025).</strong> Acné hormonal vs. acné bacteriano: diferencias y tratamientos eficaces. Ciudad de México.</li>
          <li><strong>Opuntia Brava. (2024).</strong> El acné y su impacto en la salud mental de los adolescentes (Vol. 16, Núm. 4). Ambato, Ecuador.</li>
          <li><strong>López Vera, E. (2025).</strong> Papel de la higiene facial en el acné. Más Dermatología. Actualidad y Avances (N.º 52). Málaga, España.</li>
          <li><strong>La Beautyneta. (2026).</strong> Rutina skincare para adolescentes: simple y efectiva. Buenos Aires, Argentina.</li>
          <li><strong>Prodermica. (2026).</strong> Mejor protector solar para piel grasa y acneica: guía completa 2026. Puebla, México.</li>
          <li><strong>Sánchez Martini, P. F., y Formaggia, V. (2022).</strong> Mitos y verdades sobre el acné. Dermatología Argentina.</li>
          <li><strong>Becerra Sánchez, T. A., et al. (2025).</strong> Terapias emergentes para el manejo del acné severo. Ibero-American Journal of Health Science Research. Quito, Ecuador.</li>
        </ul>
      </div>
    </div>
  );
};
