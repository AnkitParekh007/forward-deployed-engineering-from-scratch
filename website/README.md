# Zero to FDE website

## Local development

Node 22+; run `npm install`, `npm run dev`, `npm run build` and `npm run preview` from this directory. The catalog is generated from the sibling curriculum using the Python scripts documented in the root README. The website works without API keys or a backend.

## Deployment checklist

- Push to `main` in the public repository.
- In Settings → Pages, select GitHub Actions as the source.
- Confirm Actions is enabled and deployment environment permissions allow the workflow.
- Check build and deploy logs, then open the Pages URL.
- Verify all five navigation routes, lesson links, search/filter, progress persistence, dark/light theme and mobile layout.
- Check external links and keyboard navigation. Never ship secrets in client assets.
- If a release breaks, revert the faulty commit and rerun the workflow.

The workflow publishes only `website/dist/`; the Markdown source remains in the repository and is also rendered from the local catalog. Hash routing handles deep links on static hosting.
