# JSON and HTTP

## Why this matters
A customer application reads order status.

## Learning objectives
- Explain json and http in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 02-04: Data and statistics; use synthetic data.

## Concepts
JSON encodes structured data. HTTP requests have methods, headers and status codes; a response is not necessarily successful.

## Build it
1. Read the scenario and identify the input and expected output.
2. Run a local HTTP server serving synthetic JSON and inspect its response with curl.
3. Verify the result using the success evidence below.

## Real-world scenario
A customer application reads order status. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. What does HTTP 404 mean?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
A 200 response and parsed record.

## Further reading
- [Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP)
