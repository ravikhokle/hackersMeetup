import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AnalyzeForm from './components/AnalyzeForm.jsx';
import Results from './components/Results.jsx';

export default function App() {
  const [result, setResult] = useState(null);
  return (
    <div className="container">
      <Header />

      <main>
        <AnalyzeForm onResult={setResult} />
        <Results result={result} />
      </main>

      <Footer />
    </div>
  );
}
