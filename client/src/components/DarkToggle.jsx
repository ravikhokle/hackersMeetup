import React, { useEffect, useState } from 'react';

export default function DarkToggle() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark';
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDark((d) => !d)}
      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-sm"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  );
}
