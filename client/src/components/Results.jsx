import React from 'react';
import LanguageBar from './LanguageBar.jsx';

export default function Results({ result }) {
  if (!result) {
    return (
      <div className="bg-white shadow rounded-md p-6 text-slate-600">
        <p className="text-center">Enter a public repository (owner/repo) and click <span className="font-medium">Analyze</span> to see recommendations.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-md p-4">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-medium">Analysis for {result.meta.owner}/{result.meta.repo}</h2>
          <p className="text-sm text-slate-600">Commits: {result.meta.commits}</p>
        </div>
        <div>
          <a className="text-sm text-blue-600 hover:underline" href={`https://github.com/${result.meta.owner}/${result.meta.repo}`} target="_blank" rel="noreferrer">Open on GitHub</a>
        </div>
      </div>

      {result.languages && result.languages.length > 0 && (
        <div className="mt-4">
          <LanguageBar languages={result.languages} />
        </div>
      )}

      <div className="mt-3">
        <h3 className="font-semibold">Recommendations</h3>
        <ul className="list-disc list-inside mt-2">
          {result.recommendations.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold">README Suggestions</h3>
        <ul className="list-disc list-inside mt-2">
          {result.readmeSuggestions.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
