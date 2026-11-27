# Business rules

Contract for requirements review. **Approved product constraints** below restate the existing scope; detailed choices tagged Candidate require R1/feature review before implementation. No database schema or new feature execution authorized.

| ID | Requirement | Rule | Status |
| --- | --- | --- | --- |
| BR-01 | MUS-01–03 | Stable identities; ordered release track placements reference recordings. One recording may appear on multiple releases. Same title alone does not establish identity. | Approved concept |
| BR-02 | MUS-04/05 | A credit identifies contributor, role, target and claim-specific evidence. A generic source about a recording does not prove every credit. Reciprocal views reference the same fact. | Approved concept |
| BR-03 | MUS-05/10 | Unknown is not false; missing evidence is not verification. Conflicting claims remain distinguishable; no inferred certainty or automatic merge. | Approved concept |
| BR-04 | MUS-06 | Listening Panel persists selection within in-app navigation; official external link must match target and be validated. No playback simulation, embed, autoplay or audio hosting. | Approved concept |
| BR-05 | MUS-07/08 | Correction cannot directly change published content; decision records actor, reason, proposal and evidence. Publication requires authorized action; stale edits must not overwrite newer content silently. | Approved concept |
| BR-06 | MUS-09 | Public search and links cannot reveal draft or private data; unauthorized mutations rejected server-side. | Approved concept |
| BR-07 | MUS-05 | Real metadata/artwork/source ingestion requires separate rights approval; source accessibility does not establish reuse rights. | Approved constraint |
| BR-08 | MUS-11/12 | Distinguish composition, recorded realization, release edition and track placement; relations must carry evidence. Version categories, identity/merge criteria and cardinalities remain open. | Candidate |
| BR-09 | MUS-13 | Preserve display spelling; normalized/accent-insensitive search and aliases help retrieval without conflating identities; exact ranking and normalization require review. | Candidate |
| BR-10 | MUS-14 | Index only eligible public entities; canonical links use stable identity, metadata reflects published facts, sitemap excludes drafts. URL/redirect and SSR strategy require review. | Candidate |
| BR-11 | MUS-15 | Timeline events derive from sourced dates with precision; partial dates cannot become exact days; uncertain chronology clearly labeled. | Candidate / later |

## Decisions still open
R1 must settle identity and version rules, edition hierarchy, artist membership/roles, citation and rights policy, lifecycle and authorization matrix, date precision, identifiers and search ranking. Do not turn candidate rules into migrations until approval. No automated merge/deletion, provider API, analytics or embed authorization.

Each feature issue links applicable MUS and BR IDs, specifies positive/negative acceptance and evidence, and marks unresolved decisions. See [synthetic scenarios](./synthetic-scenarios.md).
