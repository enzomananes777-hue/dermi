import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { processDermiQueryOffline } from '../utils/dermiResponseEngine';
import {
  Send,
  AlertTriangle,
  Copy,
  Check,
  Bot,
  User,
  BookOpen
} from 'lucide-react';

interface ChatInterfaceProps {
  resetTrigger?: number;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'dermi',
    text: `¡Hola! Soy **Dermi** (o DermaJoven IA), tu asistente amigable y cercano diseñado específicamente para acompañarte a ti y a los jóvenes en el cuidado de su piel. 💚

Sé de primera mano lo frustrante, molesto y a veces vergonzoso que pueden resultar los granitos antes de ir a la escuela o salir con amigos. Pero quiero que recuerdes algo fundamental: **el acné afecta al 90% de los jóvenes**, no es tu culpa ni es por falta de higiene, y tiene solución con paciencia y ciencia.

Mi conocimiento está basado **única y exclusivamente en la evidencia dermatológica oficial** de nuestro proyecto (Guías del INSN San Borja, Consenso Ibero-latinoamericano y estudios clínicos). Aquí no hay trucos peligrosos ni remedios mágicos de internet.

¿En qué puedo ayudarte hoy? Escríbeme libremente tu consulta aquí abajo.`,
    timestamp: 'Ahora'
  }
];

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  resetTrigger = 0
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle external reset trigger
  useEffect(() => {
    if (resetTrigger > 0) {
      setMessages(INITIAL_MESSAGES);
    }
  }, [resetTrigger]);

  const handleSendMessage = async () => {
    const query = inputText.trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Build conversation history for the API
      const historyPayload = messages
        .filter((m) => m.sender === 'user' || m.sender === 'dermi')
        .concat(userMessage)
        .map((m) => ({
          role: m.sender === 'dermi' ? 'model' : 'user',
          content: m.text
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historyPayload })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const dermiReply: ChatMessage = {
        id: `dermi-${Date.now()}`,
        sender: 'dermi',
        text: data.reply || 'Lo siento, no pude procesar la respuesta en este momento.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isRedFlag: data.isRedFlag || false,
        relatedChapter: data.relatedChapter,
        isFallback: data.source === 'fallback_database' || data.source === 'offline_database'
      };

      setMessages((prev) => [...prev, dermiReply]);
    } catch (err) {
      console.warn('Using offline database fallback:', err);
      const offlineResult = processDermiQueryOffline(query);
      const fallbackReply: ChatMessage = {
        id: `dermi-${Date.now()}`,
        sender: 'dermi',
        text: offlineResult.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isRedFlag: offlineResult.isRedFlag,
        relatedChapter: offlineResult.relatedChapter,
        isFallback: true
      };
      setMessages((prev) => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-4 py-3 flex flex-col h-[calc(100vh-68px)] min-h-[560px]">
      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-4 px-1 pr-1.5 scrollbar-thin pt-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-in fade-in`}
          >
            <div className="flex items-start gap-2.5 max-w-[94%] sm:max-w-[88%]">
              {msg.sender === 'dermi' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className="space-y-1.5">
                <div
                  className={`rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-xs shadow-xs'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs shadow-xs'
                  }`}
                >
                  {/* Red Flag Warning Box */}
                  {msg.isRedFlag && (
                    <div className="mb-3 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-rose-900">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-bold text-xs">Filtro de Seguridad: Derivación Médica Prioritaria</p>
                        <p className="text-[11px] leading-normal text-rose-800">
                          Se detectaron signos de lesiones nodulares/quísticas profundas o dolor severo. Debemos detener las recomendaciones cosméticas de venta libre y priorizar la consulta con un dermatólogo para evitar cicatrices irreversibles.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Message body with formatted markdown paragraphs */}
                  <div className="whitespace-pre-wrap font-sans space-y-2">
                    {msg.text.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph.split('**').map((segment, sIdx) => {
                          if (sIdx % 2 === 1) {
                            return <strong key={sIdx} className="font-bold">{segment}</strong>;
                          }
                          return segment;
                        })}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Footer metadata for message */}
                <div className="flex items-center gap-2 px-1 text-[11px] text-slate-400">
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'dermi' && (
                    <>
                      <span>•</span>
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="hover:text-slate-600 flex items-center gap-1 transition-colors"
                        title="Copiar respuesta"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                      {msg.relatedChapter && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-400 font-medium">
                            <BookOpen className="w-3 h-3" />
                            <span>Capítulo {msg.relatedChapter}</span>
                          </span>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2.5 max-w-[85%] animate-in fade-in">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-1">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs p-4 text-xs text-slate-500 shadow-xs flex items-center gap-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span>Dermi está revisando la evidencia médica dermatológica...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Bar */}
      <div className="pt-2.5 border-t border-slate-100 bg-white/90 backdrop-blur-xs shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative flex items-end gap-2 bg-slate-50 border border-slate-300/80 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 focus-within:bg-white transition-all shadow-2xs"
        >
          <textarea
            ref={inputRef}
            id="dermi-chat-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe aquí tu pregunta para Dermi..."
            rows={1}
            className="w-full text-xs sm:text-sm bg-transparent resize-none focus:outline-hidden px-2 py-1.5 max-h-32 text-slate-800 placeholder-slate-400"
          />

          <button
            type="submit"
            id="dermi-chat-send"
            disabled={!inputText.trim() || isLoading}
            className={`p-2.5 rounded-xl flex items-center justify-center transition-all shrink-0 ${
              inputText.trim() && !isLoading
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
            title="Enviar mensaje"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <p className="text-[10px] text-center text-slate-400 mt-1.5">
          Dermi es un asistente educativo y de acompañamiento. En casos de dolor o lesiones profundas, siempre prioriza la consulta presencial con un dermatólogo.
        </p>
      </div>
    </div>
  );
};
