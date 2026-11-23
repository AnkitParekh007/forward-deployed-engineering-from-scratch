# 🤝 Contributing to Zero to FDE

Thank you for helping make Forward Deployed Engineering more approachable. Contributions from beginners, experienced engineers, technical writers and designers are welcome.

## 🧭 Find a contribution

- Start with [good first issues](https://github.com/AnkitParekh007/forward-deployed-engineering-from-scratch/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) or browse [all open issues](https://github.com/AnkitParekh007/forward-deployed-engineering-from-scratch/issues).
- Comment with your approach or questions before starting; ask the maintainer to clarify scope if needed.
- Report broken links, confusing prerequisites, inaccessible interactions or incorrect examples.
- Propose a focused improvement with a clear learning outcome before spending time on a large rewrite.
- For a new lesson or project, explain the real-world customer problem, proposed deliverable and how learners can verify success.

## 🛠️ Development workflow

1. Fork the repository and clone your fork.
2. Create a focused branch, such as `docs/clarify-rag-checkpoint`.
3. Make the smallest change that solves the issue.
4. Validate it using the commands below.
5. Open a pull request against `main`. Link the relevant issue if one exists.

## 📚 Curriculum contributions

The source of the generated curriculum is maintained in `curriculum/build_curriculum.py` and `curriculum/build_projects.py`. Update the editorial source, regenerate the Markdown and JSON, and include the relevant generated files in your PR. Independently maintained guides, including the professional path, can be edited directly.

Every lesson should explain why the concept matters, define measurable outcomes, cover prerequisites, demonstrate a realistic application, provide an exercise and checkpoint, specify a deliverable and link to trustworthy references.

Use original examples, synthetic data, provider-neutral patterns and plain language. Keep starter code reproducible, include answer keys or expected outputs and avoid unsupported claims, credentials, private customer material or harmful instructions. Attribute external sources without copying unlicensed content.

From the repository root:

```bash
python3 curriculum/build_curriculum.py
python3 curriculum/build_projects.py
python3 curriculum/assets/starter.py
python3 curriculum/assets/field_lab.py
python3 curriculum/assets/pro_lab.py
```

Review regenerated files and make sure running both generators again produces no additional changes.

## 💻 Website contributions

Use Node.js 22+ and Python 3.10+. Follow the existing React/TypeScript component system, CSS tokens and accessible interaction patterns. Preserve the static routes, mobile navigation, keyboard access and light/dark themes.

```bash
cd website
npm ci
npm run dev
npm test
npm run build
python3 scripts/verify-static.py
npx playwright install chromium
npm run test:e2e
```

For Linux CI, Playwright may need `npx playwright install --with-deps chromium`. See the [website guide](website/README.md) for deployment details.

## ✅ Pull request checklist

- [ ] The change addresses a specific learner need or engineering issue.
- [ ] Content is original, accurate, and includes references when needed.
- [ ] Examples use synthetic data and contain no secrets or private information.
- [ ] Generated curriculum and catalog files match their source.
- [ ] Relevant tests, static route checks and builds pass.
- [ ] UI changes support keyboard navigation, mobile layouts and both themes.
- [ ] The PR explains how to reproduce or verify the improvement.

Reviewers assess clarity, correctness, accessibility and evidence. Keep discussions constructive and follow the [code of conduct](CODE_OF_CONDUCT.md).

All contributions are licensed under the [MIT License](LICENSE).
