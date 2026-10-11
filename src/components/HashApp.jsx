import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/10">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl transition group-hover:bg-emerald-400/20"></div>
      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-2xl text-emerald-300 shadow-lg shadow-emerald-500/10">⌘</div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">System Overview</p>
          <h3 className="mt-1 text-xl font-extrabold text-white">Dashboard Active</h3>
          <p className="mt-1 text-sm text-slate-400">Your system is running smoothly.</p>
        </div>
      </div>
      <div className="relative mt-6 flex items-center justify-between rounded-xl border border-white/5 bg-black/20 p-3">
        <span className="text-sm text-slate-400">System Status</span>
        <span className="flex items-center gap-2 text-sm font-semibold text-emerald-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>Online</span>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/15 via-slate-900 to-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/10">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-400/10 blur-3xl transition group-hover:bg-amber-400/20"></div>
      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-2xl text-amber-300 shadow-lg shadow-amber-500/10">⚙</div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Configuration</p>
          <h3 className="mt-1 text-xl font-extrabold text-white">System Settings</h3>
          <p className="mt-1 text-sm text-slate-400">Manage your utility panel.</p>
        </div>
      </div>
      <div className="relative mt-6 rounded-xl border border-white/5 bg-black/20 p-3">
        <p className="text-sm text-slate-300">Settings panel is ready to use.</p>
      </div>
    </div>
  );
}

function HashApp() {
  return (
    <HashRouter>
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/40">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"></div>

        <div className="relative border-b border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Control Center</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">Utility Panel</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">One space to monitor and configure your system.</p>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-2xl text-emerald-300">✦</div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link to="/" className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-300 transition duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/20">⌂ Dashboard</Link>
            <Link to="/settings" className="rounded-xl border border-amber-400/20 bg-amber-400/10 px-5 py-3 text-sm font-bold text-amber-300 transition duration-300 hover:border-amber-400/50 hover:bg-amber-400/20">⚙ Settings</Link>
          </div>
        </div>

        <div className="relative space-y-4 p-5 sm:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-white/[0.02] px-6 py-4">
          <p className="text-xs font-medium text-slate-500">UTILITY PANEL · V1.0</p>
          <p className="text-xs font-semibold tracking-wider text-emerald-400">BUILT FOR CONTROL</p>
        </div>
      </div>
    </HashRouter>
  );
}

export default HashApp;