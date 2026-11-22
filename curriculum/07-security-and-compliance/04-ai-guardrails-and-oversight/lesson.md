# AI guardrails and oversight

## Why this matters
A document assistant encounters irrelevant instructions in documents.

## Learning objectives
- Explain ai guardrails and oversight in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 10-03: Secrets and configuration; use synthetic data.

## Concepts
Validate structured output, enforce policy independently of model text, and send uncertain or sensitive cases to human review.

## Build it
1. Read the scenario and identify the input and expected output.
2. Use benign synthetic documents containing irrelevant instructions and verify the assistant treats them as quoted data.
3. Verify the result using the success evidence below.

## Real-world scenario
A document assistant encounters irrelevant instructions in documents. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. Should retrieved text set system permissions?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
A regression test and review outcome.

## Further reading
- [Reference](https://www.nist.gov/itl/ai-risk-management-framework)
