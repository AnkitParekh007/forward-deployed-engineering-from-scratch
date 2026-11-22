# 🎨 Redesign implementation and review guide

## 🎯 Scope
The original 60 lessons, exercises, quizzes, seven project briefs and offline demonstrations remain the source of truth. The existing five interview questions are presented in the practice workspace. No testimonials, employment metrics, or customer outcomes have been invented. GitHub Pages remains static hosting.

## 🧭 Six phases

| Phase | Before | After |
|---|---|---|
| 1 | One stylesheet, pastel-heavy surfaces | Theme tokens, readable scale, semantic controls, sticky header and footer |
| 2 | Generic homepage and identical path links | Customer-outcome hero, distinct 7/21-day paths plus 30-day practice extension |
| 3 | Centered article with no navigation | Documentation layout, phase context, TOC, copyable code, checkpoint and next lesson |
| 4 | Catalogue cards and GitHub-only practice | Phase/day views, project details, exercises, quiz and interview practice |
| 5 | Title-only search and completion | Full-content search, keyboard shortcut, saved/recent, local feedback |
| 6 | Hash routes and shared metadata | Static HTML routes, canonical metadata, legacy mapping, sitemap and CI tests |

## 📱 Responsive behavior
320–767px: 16px gutters, compact navigation dialog, single column. 768–1023px: two-column overview cards where appropriate, collapsible learning navigation. 1024–1279px: left navigation plus article. 1280px and up: left navigation, reading pane and right table of contents. Marketing width is capped at 1200px; reading at 760px. Main controls target 44px. Verify actual rendering at every listed breakpoint.

## 🧩 Components and states
Buttons, navigation, links, menus, filters, accordion summaries, cards and lesson lists use the centralized color tokens. Interactive controls have hover and focus-visible states; toggles expose pressed state, navigation uses aria-current, and disabled buttons use a native disabled attribute. Search and navigation dialogs support Escape. Empty and missing-page states provide recovery paths. There are no remote operations requiring artificial loading spinners; browser-local updates are immediate. Search and progress feedback uses local state. Code and table overflow stays within the reading pane. Test contrast in both themes, including accent/foreground colors, focus rings, and control boundaries.

## ✅ Verification checklist
- Curriculum generators produce no tracked diffs; Python checks pass.
- TypeScript and Vite production build pass; static pages contain real lesson text and metadata.
- Unit tests cover all lesson IDs, exercise and quiz count, project briefs and legacy URL mapping.
- Browser tests cover learning state, global search, keyboard skip link, mobile drawer, project demo, practice and five viewport widths.
- Automated axe checks run on key pages in light and dark mode; automated results are not a substitute for manual accessibility review.
- Lighthouse reports are produced in CI for the home and representative lesson routes; review scores and regressions before merge.
- Review actual visuals, keyboard behavior and screen-reader reading order before release.

## 🔒 Privacy and deployment
Theme, progress, bookmarks, recently read lessons and helpful votes are stored locally. No API, hosted database, or telemetry is required. PR validation uploads static build and test evidence but never changes GitHub Pages. Merge after review; the main deployment workflow publishes only website/dist.
