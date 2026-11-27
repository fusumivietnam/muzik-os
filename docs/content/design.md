# Design as Code

## Approved direction — Starter Native

Starter Native supersedes M+ by explicit product decision. Preserve the official Laravel React starter typography, appearance, CSS tokens and shadcn/ui defaults. No separate theme or UI framework.

| Surface | Direction |
| --- | --- |
| Music website | Native components, new public layout and music-specific artwork, catalog and metadata components only. |
| Internal admin | Existing app layout, sidebar, auth and settings; extend only for approved catalog and review functions. |
| Docs | Native Docusaurus Classic theme, navigation, sidebar, dark mode and Mermaid. |

Reuse, configure, extend, create only if necessary. Do not copy the starter dashboard layout into public discovery. Retain native visual primitives and build a content-focused public header/footer, responsive artwork grid, search and entity details. No public registration or hosted audio.

## Review on the actual starter

Integrate the pinned official starter first. Review Home, Search, Artist, Release and Recording directly in the Laravel/Inertia React application using fictional fixtures at 1440, 390 and 320 CSS pixels; check light/dark/system appearance, keyboard focus, long names, empty states and overflow. No separate maintained prototype. Actual UI review is pending, and no new design tokens or baseline are authorized.

The former [M+ concept and prototype](https://github.com/fusumivietnam/muzik-os/tree/64907e5f20727da0a204040bd548b78ba783cf0d/design/prototype) remain historical reference only. Do not import their CSS or runtime.

Approved concept → review on integrated starter → human acceptance → Playwright baseline from accepted implementation. No preview deployment or production deployment without separate approval.
