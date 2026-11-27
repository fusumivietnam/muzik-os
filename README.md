# Muzik OS

Music Discovery & Knowledge Platform.

Status: R0 approved; implementation and verification pending. This public repository is the single source of truth.

## MVP
Home, Search, Artist, Release, Recording, credits, provenance, official listening links, corrections/internal review, legal, responsive and accessible UI. No public registration or hosted audio. No real data ingestion without separate source-rights approval. Editorial/news, embeds, charts, personal library, API and mobile are deferred.

## R0
Official Laravel 13 React starter, React 19, Inertia 3, TypeScript, Tailwind 4, shadcn/ui, PostgreSQL 18. Verify PHP 8.5 and Node 24 against upstream before adoption; use upstream npm workflow. Laravel-native first. Design as Code: concept → approved React prototype/CSS tokens → Playwright baseline from accepted implementation. Calm Editorial is a reference only; palette and typography are not locked.

## Delivery
After initial documentation bootstrap: Issue → Branch → PR → CI. One integrated deterministic CI workflow; no automatic deployment or AI calls. GitHub Issues/Milestones hold backlog and acceptance; Projects provide views and built-in automation. See AGENTS.md for operating rules.

Do not commit secrets, private data or production backups. Public visibility does not grant a software license.
