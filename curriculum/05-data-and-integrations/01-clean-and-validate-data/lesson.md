# Clean and validate data

## Why this matters
A CRM export contains blank emails.

## Learning objectives
- Explain clean and validate data in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 05-05: Prototype before scaling; use synthetic data.

## Concepts
Schema checks detect missing or malformed fields. Keep source identifiers and record rejected rows.

## Build it
1. Read the scenario and identify the input and expected output.
2. Normalize a CSV of synthetic contacts and write a reject report.
3. Verify the result using the success evidence below.

## Real-world scenario
A CRM export contains blank emails. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. Why track rejected rows?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
Accepted and rejected row counts reconcile.

## Further reading
- [Reference](https://docs.python.org/3/library/csv.html)
