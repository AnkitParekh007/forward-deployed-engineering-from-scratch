# Zero to FDE website

React 19 + TypeScript + Vite, independently prerendered HTML routes on GitHub Pages. No server or external API required. The Markdown curriculum remains the source of truth.

## Local development
Node 22+. From website run npm ci, npm run dev, npm test, npm run build and npm run preview. Open the printed base path /forward-deployed-engineering-from-scratch/. The build generates exercise, quiz, interview and project content from the sibling curriculum, then prerenders every route with unique metadata. The generated content and temporary SSR bundle are ignored by Git.

## Release process
- Use redesign-validation on a PR to verify curriculum, unit tests, production build and browser checks.
- Enable GitHub Actions as the Pages source. Merge only after review and green validation.
- The deploy workflow publishes website/dist.
- Verify canonical routes, legacy hash links, progress persistence, bookmarks, search, project demonstrations and keyboard/mobile behavior.
- If a release breaks, revert the faulty commit and rerun the deploy workflow.

## Learner privacy
Progress, theme, bookmarks, recent lessons and helpfulness feedback stay on this device. Offline project demonstrations are synthetic deterministic baselines.
