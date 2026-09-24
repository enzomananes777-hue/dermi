import React from 'react';
import { Sparkles, ShieldCheck, RotateCcw } from 'lucide-react';

interface HeaderProps {
  onResetChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onResetChat }) => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Logo & Agent Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xs ring-2 ring-emerald-100">
            <Sparkles className="w-5 h-5 text-emerald-100" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">Dermi</h1>
              <span className="text-[11px] font-semibold bg-emerald-100/80 text-emerald-800 px-2 py-0.5 rounded-full">
                DermaJoven IA
              </span>
            </div>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Salud Dermatológica Juvenil • 11 a 25 años
            </p>
          </div>
        </div>

        {/* Quick Action Controls */}
        <div className="flex items-center gap-2">
          <button
            id="btn-reset-chat-header"
            onClick={onResetChat}
            className="text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 p-2 sm:px-2.5 sm:py-1.5 rounded-xl flex items-center gap-1 transition-colors"
            title="Reiniciar chat"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reiniciar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
