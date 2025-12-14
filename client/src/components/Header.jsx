import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 border-b bg-white shadow-sm rounded-md px-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md flex items-center justify-center text-white font-semibold">SR</div>
        <div>
          <h1 className="text-lg font-semibold">Smart Repo Analyzer</h1>
          <p className="text-sm text-slate-500">Quick insights for any public GitHub repository</p>
        </div>
      </div>

      <nav className="text-sm">
        <a className="text-slate-700 hover:text-blue-600" href="https://github.com/ravikhokle/hackersMeetup" target="_blank" rel="noreferrer">View on GitHub</a>
      </nav>
    </header>
  );
}
