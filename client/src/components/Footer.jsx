import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-8 text-sm text-slate-500">
      <div className="border-t pt-4">
        <p>Made for the hackathon. See <a className="text-blue-600" href="/README.md">README</a> for details. Copilot-assisted seed branch: <span className="font-mono">copilot/seed</span>.</p>
      </div>
    </footer>
  );
}
