# Muzik OS operating rules

- Public main is the SOT. Documentation-only initial bootstrap is approved. All application changes require one issue, one branch, one integrated PR and CI; no direct application commits to main.
- Read relevant issue, PR, main SHA and these rules before changes. Search before reading; minimize diffs and log reads. Use targeted tests before regression; verify CI against exact SHA. Do not retry failures without a change or clear infrastructure fault.
- Use ChatGPT Web and GitHub native only. GitHub Actions runs deterministic build/test only, with read-only permissions, no pull_request_target, no AI and no auto-deploy. Maintain one long-lived CI workflow. No external AI agents or providers.
- Use official Laravel React starter, PostgreSQL, Laravel-native approaches and upstream npm. Verify versions against upstream. Use Docker/Sail when needed for development.
- Design as Code: concept, approved React prototype and CSS tokens, then Playwright baseline from accepted implementation. Do not overwrite approved design or update baselines to hide defects.
- Issues/Milestones are backlog and acceptance; Projects are views and native automation; repository docs are canonical; Wiki only indexes/how-to.
- No self-merge, deployment, preview without separate approval, permission/visibility changes, secrets, data deletion, SSO changes or real data ingestion without source-rights approval. No public registration or audio hosting. Keep private data and backups out of this public repository.
- Report proposed / approved / implemented / verified / deployed distinctly; report evidence, blockers and exact PR or SHA. Do not claim unverified execution.
