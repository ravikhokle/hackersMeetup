import React, { useState } from 'react';
import AnalyzeForm from './components/AnalyzeForm.jsx';
import Results from './components/Results.jsx';

export default function App() {
  const [result, setResult] = useState(null);
  return (
    <div className="container">
      <h1 className="text-3xl font-semibold mb-4">Smart Repo Analyzer</h1>
      <AnalyzeForm onResult={setResult} />
      <Results result={result} />
    </div>
  );
}
