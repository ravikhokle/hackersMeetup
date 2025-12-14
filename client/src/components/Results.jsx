import React from 'react';

export default function Results({ result }) {
  if (!result) return null;
  return (
    <div className="bg-white shadow rounded-md p-4">
      <h2 className="text-xl font-medium">Analysis for {result.meta.owner}/{result.meta.repo}</h2>
      <p className="text-sm text-slate-600">Commits: {result.meta.commits}</p>

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
