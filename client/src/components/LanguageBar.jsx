import React from 'react';

function colorForIndex(i) {
  const colors = ['bg-blue-500', 'bg-indigo-500', 'bg-emerald-500', 'bg-yellow-400', 'bg-pink-500', 'bg-sky-500'];
  return colors[i % colors.length];
}

export default function LanguageBar({ languages = [] }) {
  const total = languages.reduce((s, l) => s + l.bytes, 0) || 1;
  return (
    <div className="mt-2">
      <div className="flex items-center gap-2 text-sm text-slate-600">Language breakdown</div>
      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-md h-3 mt-2 overflow-hidden">
        <div className="flex h-full">
          {languages.map((lang, i) => {
            const pct = Math.round((lang.bytes / total) * 100);
            return (
              <div
                key={lang.name}
                title={`${lang.name}: ${pct}%`}
                className={`${colorForIndex(i)} h-full`} 
                style={{ width: `${pct}%` }}
              />
            );
          })}
        </div>
      </div>
      <ul className="mt-2 text-sm">
        {languages.map((l) => (
          <li key={l.name}>{l.name} — {(l.bytes / total * 100).toFixed(1)}%</li>
        ))}
      </ul>
    </div>
  );
}
