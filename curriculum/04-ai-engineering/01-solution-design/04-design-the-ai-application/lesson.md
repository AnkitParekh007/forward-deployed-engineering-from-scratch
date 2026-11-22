# Design the AI application

## Why this matters
A feedback analyzer categorizes comments.

## Learning objectives
- Explain design the ai application in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 05-03: Model selection tradeoffs; use synthetic data.

## Concepts
Separate UI, deterministic service, model interface, data access and policy. Explicit boundaries enable tests and replacement.

## Build it
1. Read the scenario and identify the input and expected output.
2. Draw components and mark which component owns validation and user approval.
3. Verify the result using the success evidence below.

## Real-world scenario
A feedback analyzer categorizes comments. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. Why isolate the model adapter?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
A component diagram with responsibilities.

## Further reading
- [Reference](https://12factor.net/)
