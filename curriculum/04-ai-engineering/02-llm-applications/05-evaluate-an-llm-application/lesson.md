# Evaluate an LLM application

## Why this matters
A support assistant flags urgent cases.

## Learning objectives
- Explain evaluate an llm application in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 07-04: Retrieval-augmented generation; use synthetic data.

## Concepts
Build a labeled set with positive, negative and ambiguous cases. Precision measures correctness of positives; recall measures coverage.

## Build it
1. Read the scenario and identify the input and expected output.
2. Compute precision and recall from TP=8, FP=2, FN=4 and propose an improvement.
3. Verify the result using the success evidence below.

## Real-world scenario
A support assistant flags urgent cases. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. What does recall penalize?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
Precision 0.8 and recall 0.667.

## Further reading
- [Reference](https://scikit-learn.org/stable/modules/model_evaluation.html)
