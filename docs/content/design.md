# Design as Code

## Approved direction — M+

Muzik Modern Classic is the approved **concept direction**, not an accepted implementation or locked token set.

| Surface | Direction |
| --- | --- |
| Music public website | M+ Modern Classic: F Signature for discovery; G Library for search and knowledge; J Liner Notes for release, recording and credits; M for shared layout. |
| Internal admin | Upstream shadcn/ui defaults; functional tables, forms and review; server authorization required. |
| Documentation | Native Docusaurus Classic theme, native navigation/sidebar, light/dark and Mermaid; no custom dashboard. |

Use a single public design language: quiet editorial typography, artwork, whitespace, fine rules and readable metadata. Avoid SaaS dashboard aesthetics, heavy shadows, gradients and decorative animations. Candidate colors and system serif/sans fonts in the prototype are exploratory only; validate Vietnamese glyphs, contrast and responsive behavior before approval.

## Prototype review

[React prototype source](https://github.com/fusumivietnam/muzik-os/tree/r0/1-laravel-react-bootstrap/design/prototype) is isolated from production routes and uses fictional entities and original geometric CSS artwork. Review Home, Search, Artist, Release and Recording at desktop (1440px), mobile (390px), and narrow (320px), light/dark, keyboard focus, no-result state, long names and overflow. The local prototype is not a deployed preview or approved visual baseline.

Concept → reviewed React prototype and CSS tokens → accepted implementation → Playwright baseline. Never update a baseline to hide defects. No palette, typography, logo or baseline is locked by concept approval.
