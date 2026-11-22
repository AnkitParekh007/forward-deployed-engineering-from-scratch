# Bounded agent loops

## Why this matters
An onboarding assistant gathers missing fields.

## Learning objectives
- Explain bounded agent loops in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 08-02: Model Context Protocol; use synthetic data.

## Concepts
An agent can choose among permitted tools, but the runtime limits actions, rounds and cost. A deterministic exit condition prevents runaway loops.

## Build it
1. Read the scenario and identify the input and expected output.
2. Build a local state machine with at most three read-only steps and a final summary.
3. Verify the result using the success evidence below.

## Real-world scenario
An onboarding assistant gathers missing fields. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. Why cap rounds?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
Trace showing a successful stop and limit stop.

## Further reading
- [Reference](https://docs.python.org/3/library/enum.html)
