# Project blueprint

Zero to FDE — From Skills to Standout is a public, independently created learning platform. Its 21-day core is designed for accessible guided practice rather than a promise of job placement.

## Delivery plan

1. Publish a static React + TypeScript website, with navigation, a searchable catalog, browser-local progress, theme options and offline demonstrations.
2. Organize 60 lessons (five per phase) into a 21-day sequence. Each lesson has a scenario, learning objectives, exercise, checkpoint, deliverable and reading. The guided lessons total 20 hours; substantial projects need additional time.
3. Provide twelve phase mini-projects and seven portfolio briefs, with runnable deterministic example baselines and synthetic data. Learners extend these into evaluated applications.
4. Publish to GitHub Pages through a workflow building only `website/dist/`. Run content checks, Python starter checks, TypeScript compilation, Vitest and browser smoke tests.
5. Continue improving lesson depth, feedback, hands-on labs, career practice and community contributions based on learner evidence.

## File organization

- `website/`: application, assets, tests, generated catalog, documentation and lockfile.
- `curriculum/`: phase folders, Markdown source, lesson exercises and quizzes, portfolio briefs and local examples. The three AI phases live under `04-ai-engineering/` to preserve the required folder structure.
- `.github/workflows/deploy-website.yml`: Pages workflow.
- Root documentation: README, MIT license, contribution guide, conduct policy and ignore rules.

The [21-day roadmap](ROADMAP.md) lists every lesson with its planned time. The [curriculum index](README.md) links all phases.

## Release criteria

- The catalog has 60 unique lessons, twelve phases, 21 days and seven portfolio projects.
- The website builds and can be navigated from GitHub Pages.
- Offline examples produce documented outputs without account credentials.
- Progress persists locally; search and project demonstrations operate without external services.
- Learners clearly understand that sample baselines and fictional engagements are not real production experience.
