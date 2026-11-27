# Synthetic dataset and acceptance scenarios

One logical fictional fixture contract for future tests, not a running seeder or test suite. IDs are illustrative, not physical keys. All names, evidence and URLs below are invented for testing only; never publish them as real music data.

## Shared fixtures

| ID | Kind | Fixture |
| --- | --- | --- |
| A1 | Artist | An Linh (alias: Án Linh, synthetic) |
| A2 | Artist | Mai An |
| A3 | Artist | Minh Lam |
| A4 | Artist | An Linh (distinct identity, same display name) |
| R1 | Release | Blue Hours, album, tracks T1 and T2 |
| R2 | Release | First Light, single, track T1 |
| T1 | Recording | First Light, credited performer A1 |
| T2 | Recording | First Light, distinct take, performer A2 |
| W1 | Work candidate | First Light; T1/T2 association pending R1 approval |
| C1 | Credit | A3 producer on T1, evidence E1 |
| C2 | Credit | A2 performer on T2, missing supporting evidence |
| S1 | Source | Fictional session sheet |
| E1 | Evidence | S1 entry 01 supports C1 specifically |
| E2 | Evidence | Fictional conflicting date claims for R1, unresolved |
| L1 | Listening | T1, simulated validated URL at https://example.invalid/t1; intercepted test only, never actual link |
| L2 | Listening | T2 missing URL |
| D1 | Draft | Unpublished recording, excluded from public search |
| Q1 | Correction | Proposes change to C1, review pending |

Include a long Vietnamese name, empty catalog and invalid/foreign reference in test variants. Dates and rights in fixtures are synthetic. No external network call is needed; mock validated link behavior without treating example.invalid as an official provider.

## Acceptance references (not executed)

| ID | Trace | Expected outcome |
| --- | --- | --- |
| AT-01 | BR-01 / MUS-02–03 | R1 and R2 point to T1; T1 lists both. T2 remains distinct despite equal title. Invalid reference rejected. |
| AT-02 | BR-02–03 / MUS-04–05 | C1 links A3/T1/E1/S1 reciprocally; E1 does not verify C2. E2 remains disputed; no invented date. |
| AT-03 | BR-04 / MUS-06 | Select T1 then navigate to A3 and back; selection persists. Mock verified link actionable only in test harness; T2 unavailable; no audio/iframe/network calls. |
| AT-04 | BR-05–07 / MUS-07–08 | Q1 leaves public C1 unchanged; unauthorized reviewer denied; approved decision records actor/reason; stale update rejected; publication separate and rights-gated. |
| AT-05 | BR-06 / MUS-09–10 | Public search excludes D1; duplicate A1/A4 flagged, never merged; no-result state accessible. |
| AT-06 | BR-08 / MUS-11–12 | Candidate: sourced work/version and contributor navigation; no title-only inference. Requires R1 approval. |
| AT-07 | BR-09 / MUS-13 | Candidate: accented/unaccented alias retrieval preserves original display and separate A1/A4. |
| AT-08 | BR-10 / MUS-14 | Candidate: public canonical metadata and sitemap omit D1; no invented attributes. |
| AT-09 | BR-11 / MUS-15 | Later: partial date retains precision; conflicting date is not silently selected. |
| AT-10 | All | 1440/390/320px, light/dark/system, keyboard, long labels, errors/empty, validation and authorization. |

Convert applicable scenarios to actual tests in the approved feature issue after R0; use exact-SHA CI results. No scenario is marked passed by this document.
