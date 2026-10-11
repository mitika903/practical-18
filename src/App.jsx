import React from 'react';
import HashApp from './components/HashApp';

function App() {
  return (
    <main className="min-h-screen bg-[#070b14] px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          System Online
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">NEXUS <span className="text-emerald-400">PANEL</span></h1>
        <p className="mt-3 text-sm text-slate-400">A smarter way to manage your workspace.</p>
      </div>
      <HashApp />
      <p className="mt-6 text-center text-xs tracking-wide text-slate-600">SECURE INTERFACE · SIMPLE NAVIGATION · SMART CONTROL</p>
    </main>
  );
}

export default App;