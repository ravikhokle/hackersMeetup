#!/usr/bin/env node
import dotenv from 'dotenv';
import { analyzeRepository } from '../services/analyzers.js';

dotenv.config();

async function main() {
  const repoArg = process.argv[2] || process.env.REPO || process.env.GITHUB_REPOSITORY;
  if (!repoArg) {
    console.error('Usage: node analyze.js owner/repo');
    process.exit(2);
  }
  try {
    const result = await analyzeRepository(repoArg);
    // Simple markdown summary
    const md = [];
    md.push(`# Analysis for ${result.meta.owner}/${result.meta.repo}`);
    md.push(`**Commits:** ${result.meta.commits}`);
    md.push(``);
    if (result.recommendations && result.recommendations.length) {
      md.push('## Recommendations');
      result.recommendations.forEach((r) => md.push(`- ${r}`));
      md.push('');
    }
    if (result.readmeSuggestions && result.readmeSuggestions.length) {
      md.push('## README Suggestions');
      result.readmeSuggestions.forEach((r) => md.push(`- ${r}`));
      md.push('');
    }
    md.push('---');
    md.push('*This comment was generated automatically by the Smart Repo Analyzer workflow.*');
    const out = md.join('\n');
    console.log(out);
  } catch (err) {
    console.error('Error analyzing repo:', err.message || err);
    process.exit(1);
  }
}

if (require.main === module) main();
