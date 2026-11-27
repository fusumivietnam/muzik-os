# Feature specification

Create a durable spec only where needed; use one stable feature identifier for cross-references, not a new tracking database.

| Section | Required content |
| --- | --- |
| Outcome and scope | User need, included and excluded behavior |
| Business rules | Domain definitions, invariants and failure states |
| Flow and design | User flow, approved prototype/tokens where applicable |
| Data and security | Entities, validation, authorization, source rights, privacy |
| Acceptance | Link to issue with testable criteria |
| Evidence | PR, relevant tests, exact SHA CI and human decision |

Keep execution status in GitHub Issues/PRs. Do not duplicate a checklist across docs and issue. Small fixes may use only the issue. A feature can be implemented but not verified; verification and acceptance require distinct evidence. No actual feature IDs or implementation status are asserted by this template.
