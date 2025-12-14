# GitHub Usage & Demonstration Guide

This document highlights how the repository uses GitHub features and organizes work for judging.

Branches:
- `main`: stable main branch with CI and production-ready code.
- `copilot/seed` (historical): branch used to seed Copilot-assisted changes. Commits are labeled `chore(copilot): ...` for visibility.

Pull Requests:
- Use `feature/<short-description>` for changes (e.g., `feature/readme-analyzer`).
- PRs should reference issues and include a clear description (see `.github/PULL_REQUEST_TEMPLATE.md`).

Issues & Templates:
- Use the issue template to report bugs or request features. We include labels for **good first issue**, **enhancement**, **bug** (maintainers can add these).

Workflows & Automation:
- CI (`.github/workflows/ci.yml`) runs server tests and client build on PRs and pushes.
- PR Analyzer (`.github/workflows/analyze-pr.yml`) runs the repository analyzer on new PRs and posts a summary comment. This demonstrates automation and provides instant repository feedback.

Copilot Visibility:
- See `docs/COPILOT_USAGE.md` for prompts, assisted files, and branch/commit references.

Demo & Artifacts:
- Add screenshots or short demo videos to `/assets/` and link them in the README.

Judging Tips:
- Inspect commit history and `copilot/seed` branch for Copilot use.
- Check actions run in the `Actions` tab to see automation outputs like the PR analysis comment.
