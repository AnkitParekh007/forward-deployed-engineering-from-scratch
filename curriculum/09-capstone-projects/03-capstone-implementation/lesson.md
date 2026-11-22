# Capstone implementation

## Why this matters
A stakeholder wants a live prototype by Friday.

## Learning objectives
- Explain capstone implementation in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 12-02: Capstone architecture; use synthetic data.

## Concepts
Build a vertical slice with deterministic baseline, explicit errors and optional provider adapters. Prefer testable fixtures over live dependencies.

## Build it
1. Read the scenario and identify the input and expected output.
2. Implement the selected workflow and verify valid, empty and malformed inputs.
3. Verify the result using the success evidence below.

## Real-world scenario
A stakeholder wants a live prototype by Friday. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. Why use a baseline before model integration?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
Runnable source, README and tests.

## Further reading
- [Reference](https://docs.python.org/3/library/unittest.html)
