# Muzik OS operating rules

## Product and authority
- Muzik OS is a Music Discovery & Knowledge Platform. The Music Website (Laravel/React/PostgreSQL) is the product; Docusaurus is a supporting read-only documentation and roadmap surface, not a separate management application.
- Public main is the sole SOT. After initial documentation bootstrap, deliver one approved issue, one branch, one integrated PR and CI; never commit application directly to main.
- Use ChatGPT Web and GitHub native only. No external AI, agents, dispatcher, AI API or additional tools/services/costs without approval. GitHub Actions is deterministic build/test only, one long-lived workflow, read-only permissions, no pull_request_target, no automatic deployment.
- Use official Laravel React starter, Laravel-native conventions, PostgreSQL and upstream npm. Verify candidate runtime versions against upstream and actual checks. Docker/Sail only when needed.

## Vibe coding delivery
- Understand outcome, business rules, scope and testable acceptance before implementation. For material UX/UI changes, show a visual concept, obtain approval of React prototype and CSS tokens, then derive Playwright baselines from accepted implementation. Never overwrite approved design or reset baselines to hide defects.
- Use a stable Feature ID when a feature spans specs, design and evidence; small fixes need only a concise issue. Durable business rules live in specs; executable acceptance lives in Issues. Link rather than duplicate.
- Read live visibility, main SHA, relevant issue/PR and these rules; search before reading. Minimal diff, no unrelated refactors, no repeated roadmap or full-repo/log/lockfile reads by default.
- Work autonomously within approved scope: code, targeted tests, relevant docs, branch commits, PR and permitted CI. Ask approval for scope/architecture changes, design decisions, real data source rights, new services, permission changes, merge, preview or deployment.
- Keep docs aligned in the same PR when affected; Issues/Milestones own delivery and acceptance, Projects provide views/native automation, Docusaurus presents evidence with snapshot time and source links. Wiki only indexes/how-to. No duplicate status store, fake progress percentages or new management backend.
- Ready: approved scope, clear outcome, testable acceptance, required business rules and approved design where applicable.
- Done for review: implementation matches scope; targeted checks then appropriate regression; data, accessibility and security checks proportionate to risk; relevant docs updated; exact SHA CI evidence; PR ready for human review. CI success does not imply human acceptance or deployment.
- On failure diagnose first; do not rerun unchanged failed jobs unless a clear infrastructure fault. Report actual execution, missing runtime/permissions and blockers; never invent tests, logs or results.

## Safety and data
- No self-merge, deployment, preview without separate approval, permission/visibility changes, secrets, data deletion, SSO changes or real data ingestion without source-rights approval.
- No public registration or audio hosting. Use synthetic fixtures; keep private data, credentials, backups and sensitive vulnerability details out of the public repository. Validate server-side authorization, input, provenance and dependencies as applicable.
- Distinguish Proposed, Approved, Implemented, Verified, Accepted, Deployed and Blocked. Report evidence, exact SHA/PR, blocker and next action concisely. Do not mark a gate complete without evidence.
- "Tiếp tục": inspect GitHub live and execute the next approved step; do not repeat plans. "Review"/"Security": assess relevant evidence. "Release": assess readiness only, never self-authorize deployment.
