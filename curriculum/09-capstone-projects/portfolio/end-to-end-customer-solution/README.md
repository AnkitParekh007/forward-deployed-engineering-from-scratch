# End-to-End Customer Solution

## Customer brief
The fictional Customer sponsor requests a pilot. Use synthetic data only.

## Problem statement
Deliver one integrated pilot backed by evidence.

## Success metrics
meet declared quality target on ten fixtures and pass access tests. This is a target, not a measured result.

## Technical requirements
- Input: synthetic customer requests.
- Output: validated response, trace and review status.
- Local reproducible baseline, validated input, no committed secrets.
- Optional model adapter runs only in a trusted backend.

## Architecture
```mermaid
flowchart TD
A[Customer input] --> B[Validation]
B --> C[Workflow service]
C --> D[Local data and optional model adapter]
D --> E[Policy and evaluation]
E --> F[Reviewed output and trace]
```

## Step-by-step build guide
1. Create ten labeled synthetic examples, including malformed and empty cases.
2. Implement the baseline: combine a UI, trusted API, database, model adapter, policy and telemetry.
3. Add a local CLI or UI, structured errors, and record correlation IDs.
4. Run the test plan and record observed metrics, latency and limitations.
5. Add optional model support only after the baseline passes.

## Test plan
Run valid, malformed and denied access cases; test rollback. Record results and denominator.

## Deployment
Run and test locally. Publish the static demo on GitHub Pages; keep API credentials and privileged operations on a trusted backend if you add one. Document how to restore the last known-good release.

## Demo script
Introduce the customer problem; run a valid example, demonstrate an error or abstention, show evaluation evidence, and explain next steps.

## Retrospective
- What did the baseline fail to handle?
- Which assumption needs customer validation?
- What would block a real rollout?

## Portfolio description
Designed and implemented a simulated end-to-end customer solution pilot, including evaluation and documented limitations. Add measured results only after completing the tests.

## Runnable starter

See [offline starter](code/README.md). Run `python3 code/demo.py` from the project folder. Extend this baseline; it is not a production application.
