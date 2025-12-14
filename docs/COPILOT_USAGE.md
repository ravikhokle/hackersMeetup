# GitHub Copilot Usage

This project actively used GitHub Copilot during the hackathon. To make Copilot's contributions visible:

- For key files (server analyzers and client components) we kept a developer note in `docs/copilot_notes.md` listing prompts and suggestions used.
- We include short notes in `README.md` to highlight where Copilot helped generate initial sketches.


Examples of Copilot usage:

- Generated initial implementations for: `server/src/services/analyzers.js`, `client/src/components/AnalyzeForm.jsx`.
- Suggested unit test skeletons in `server/tests/analyzers.test.js`.

Visibility & workflow:

- Copilot-assisted work was seeded on a branch named `copilot/seed` (commit `2e112fd`) and later merged to `main`.
- When possible, Copilot-generated code was reviewed and edited before merging.

During judging, reviewers can inspect the commit history and PRs to see the `copilot/seed` branch and labeled commits like `chore(copilot): seed analyzer and client components (copilot-assisted)`.
