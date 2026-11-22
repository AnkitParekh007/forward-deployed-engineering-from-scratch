# Zero to FDE

**Forward Deployed Engineering from Scratch · From Skills to Standout**

![Zero to FDE](website/public/brand.png)

A free, original, project-based introduction to customer-facing AI engineering. Designed for graduates, career switchers, nontechnical beginners and working engineers. No prior AI experience needed to start. The 21-day core includes 60 short lessons (20 hours); allow extra time for coding and portfolio projects. Completion is not a guarantee of employment or production competence.

## Start here

- [21-day roadmap](curriculum/ROADMAP.md)
- [Interactive FDE journey](https://ankitparekh007.github.io/forward-deployed-engineering-from-scratch/journey/) — five experience tracks, six evidence milestones, and a next-action recommendation.
- [Professional learning path](curriculum/PROFESSIONAL_PATH.md) — twelve deeper modules, self-reviewed proof artifacts and independent reference attribution.
- [Skill diagnostic](https://ankitparekh007.github.io/forward-deployed-engineering-from-scratch/journey/diagnostic/) and [field lab](https://ankitparekh007.github.io/forward-deployed-engineering-from-scratch/journey/field-lab/) — scenario practice, timeboxed decomposition and interview stories.
- [Curriculum and phase index](curriculum/README.md)
- [Portfolio projects](curriculum/09-capstone-projects/portfolio/)
- [Career preparation](curriculum/10-career-preparation/README.md)

## Structure

`website/` — React and TypeScript static website, lesson catalog and deployment documentation.

`curriculum/` — 12 phases, original Markdown lessons, exercises, quizzes, phase projects and offline starter examples.

The required `.github/` directory contains the deployment workflow.

## Run locally

Requires Node.js 22+ and Python 3.10+. Generate the catalog if editing the editorial source:

```sh
python3 curriculum/build_curriculum.py
python3 curriculum/build_projects.py
cd website
npm install
npm run dev
```

For learners, start at day 1 and work through the lessons, save evidence from each exercise, complete checkpoints, and select a portfolio project. Use AI assistants to clarify unfamiliar code, but verify each result independently. Never use real customer data or commit secrets.

## Deployment

Enable Settings → Pages → Build and deployment → Source → GitHub Actions. The workflow builds `website/` and publishes only its `dist/` directory. The website uses prerendered static routes and preserves legacy hash links.

Expected URL: https://ankitparekh007.github.io/forward-deployed-engineering-from-scratch/

See [website instructions](website/README.md) for deployment checks.

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Content must be original, verifiable, accessible, and use synthetic examples. This project is independently developed.

## License

[MIT](LICENSE).
