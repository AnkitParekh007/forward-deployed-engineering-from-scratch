# REST integrations

## Why this matters
A CRM service occasionally times out.

## Learning objectives
- Explain rest integrations in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 06-02: Database design and queries; use synthetic data.

## Concepts
An integration needs an explicit contract, timeouts, bounded retries and error mapping. Retry only safe operations.

## Build it
1. Read the scenario and identify the input and expected output.
2. Implement a local read adapter with timeout and capped retry behavior.
3. Verify the result using the success evidence below.

## Real-world scenario
A CRM service occasionally times out. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. Why bound retries?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
A simulated timeout test and recovery log.

## Further reading
- [Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP)
