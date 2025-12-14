import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github.v3+json' }
});

export async function fetchRepoReadme(owner, repo, token) {
  const headers = token ? { Authorization: `token ${token}` } : {};
  const res = await githubApi.get(`/repos/${owner}/${repo}/readme`, { headers });
  const content = Buffer.from(res.data.content, 'base64').toString('utf8');
  return content;
}

export async function fetchRepoTree(owner, repo, token) {
  const headers = token ? { Authorization: `token ${token}` } : {};
  // List files in the repo root and first-level folders (simple heuristic)
  const res = await githubApi.get(`/repos/${owner}/${repo}/contents`, { headers });
  return res.data; // array of files/folders at root
}

export async function fetchRepoCommitsCount(owner, repo, token) {
  const headers = token ? { Authorization: `token ${token}` } : {};
  const res = await githubApi.get(`/repos/${owner}/${repo}/commits`, { headers, params: { per_page: 1 } });
  const link = res.headers.link || '';
  // try to read total commits via link header (best-effort)
  const match = link.match(/&page=(\d+)>; rel="last"/);
  if (match) return Number(match[1]);
  return res.data.length;
}
