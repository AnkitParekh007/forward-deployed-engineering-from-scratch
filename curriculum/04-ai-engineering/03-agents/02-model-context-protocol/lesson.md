# Model Context Protocol

## Why this matters
A company wants reusable internal search.

## Learning objectives
- Explain model context protocol in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 08-01: Tools and contracts; use synthetic data.

## Concepts
MCP standardizes interfaces between AI clients and tools or resources. A client still enforces permissions and validates data.

## Build it
1. Read the scenario and identify the input and expected output.
2. Draw a client/server boundary and define a read-only document resource contract.
3. Verify the result using the success evidence below.

## Real-world scenario
A company wants reusable internal search. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. Does protocol compatibility grant authorization?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
An interface sketch with permissions.

## Further reading
- [Reference](https://modelcontextprotocol.io/)
