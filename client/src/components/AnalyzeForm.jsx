import React, { useState } from 'react';
import axios from 'axios';

export default function AnalyzeForm({ onResult }) {
  const [repo, setRepo] = useState('facebook/react');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`/api/analyze?repo=${encodeURIComponent(repo)}`);
      onResult(res.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="flex gap-3 mb-4">
      <input
        className="flex-1 px-3 py-2 border rounded-md"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
        aria-label="owner/repo"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-60"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Analyzing…' : 'Analyze'}
      </button>
      {error && <div className="text-red-600 mt-2">{error}</div>}
    </form>
  );
}
