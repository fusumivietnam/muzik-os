# Data dictionary — logical vocabulary

Candidate field semantics for R1 review, not SQL columns, types, requiredness or indexes. Unknown values remain unknown; do not invent placeholders as facts.

| Concept | Logical attributes | Meaning / constraints |
| --- | --- | --- |
| Artist | identity, display name, aliases, type | Name is not identity; aliases retain original spelling; type and membership vocabulary pending. |
| Release | identity, title, release type, date, edition, artist association | Edition/grouping and partial-date rules pending. |
| Recording | identity, title, duration, identifiers, artist association | Recorded realization; duration/identifier unknown if undocumented. |
| Track placement | release reference, recording reference, medium, position, displayed title | Ordered placement, not separate recording identity. Disc/position uniqueness policy pending. |
| Work (candidate) | identity, title, alternate titles, authorship | Underlying composition; work-to-recording and version rules pending. |
| Credit | contributor reference, role, credited target, evidence | Role and target-specific assertion; contributor identity and role taxonomy pending. |
| Source | identity, title, publisher/owner, locator, access date | Reference metadata; not automatic permission to copy material. |
| Evidence | assertion reference, source reference, exact locator, verification status | Supports or disputes the specified claim; distinguish source rights from claim verification. |
| Rights | source/material reference, permitted use, restrictions, approval evidence | No real ingestion before separate rights approval; exact record model pending. |
| Listening link | provider, target reference, external URL, validation outcome | Official destination for correct release/recording; no iframe or audio. |
| Correction | target, proposed change, evidence, submission reference | Separate from published facts; minimize personal information. |
| Review | proposal, decision, actor, reason, revision reference | Authorized decision and publication are distinct; lifecycle pending. |
| Timeline event (candidate) | target, event kind, sourced date, precision | Derived facts only; no standalone module authorized. |

Verification, rights and publication are separate dimensions. Candidate verification vocabulary: unknown, unverified, verified, disputed; corrected describes revision history rather than inherent truth. Exact enums, required fields, cardinalities, constraints, retention and storage remain subject to R1 approval. No real examples or provider URLs.
