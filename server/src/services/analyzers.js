import { fetchRepoReadme, fetchRepoTree, fetchRepoCommitsCount } from './githubService.js';

function codeQualityFromFiles(files) {
  const stats = { totalFiles: files.length, jsFiles: 0, hasTests: false, scripts: [] };
  files.forEach((f) => {
    if (f.name.endsWith('.js') || f.name.endsWith('.ts')) stats.jsFiles += 1;
    if (f.name.toLowerCase().includes('test') || f.name === 'test') stats.hasTests = true;
  });
  return stats;
}

export async function analyzeRepository(fullName) {
  const [owner, repo] = fullName.split('/');
  if (!owner || !repo) throw new Error('repo must be owner/name');

  const token = process.env.GITHUB_TOKEN;
  const readme = await fetchRepoReadme(owner, repo, token).catch(() => '');
  const tree = await fetchRepoTree(owner, repo, token).catch(() => []);
  const commits = await fetchRepoCommitsCount(owner, repo, token).catch(() => 0);
  const languages = await fetchRepoLanguages(owner, repo, token).catch(() => ({}));

  const structure = tree.map((t) => ({ name: t.name, type: t.type }));
  const codeQuality = codeQualityFromFiles(tree);
  const sortedLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .map(([name, bytes]) => ({ name, bytes }));

  const readmeSuggestions = [];
  if (!readme || readme.length < 100) readmeSuggestions.push('Expand README with usage examples and badges');
  if (!/##\s+Usage/i.test(readme)) readmeSuggestions.push('Add a Usage section');

  const recommendations = [];
  if (!codeQuality.hasTests) recommendations.push('Add tests: add a `tests/` directory with basic unit tests');
  if (commits < 10) recommendations.push('Encourage more frequent commits and descriptive messages');
  if (!sortedLanguages.length) recommendations.push('Add language files or check languages API access');

  return {
    meta: { owner, repo, commits },
    structure,
    codeQuality,
    languages: sortedLanguages,
    readmeSuggestions,
    recommendations
  };
}
