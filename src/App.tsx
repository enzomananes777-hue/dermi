import React, { useState } from 'react';
import { Header } from './components/Header';
import { ChatInterface } from './components/ChatInterface';

export default function App() {
  const [resetTrigger, setResetTrigger] = useState<number>(0);

  const handleResetChat = () => {
    setResetTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Streamlined Header */}
      <Header onResetChat={handleResetChat} />

      {/* Main Single-Screen Chat */}
      <main className="flex-1 w-full">
        <ChatInterface resetTrigger={resetTrigger} />
      </main>
    </div>
  );
}
