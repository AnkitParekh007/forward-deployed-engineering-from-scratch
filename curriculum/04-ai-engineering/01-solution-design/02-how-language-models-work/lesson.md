# How language models work

## Why this matters
A policy assistant invents a policy number.

## Learning objectives
- Explain how language models work in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 05-01: When to use AI; use synthetic data.

## Concepts
Tokens are text fragments; a language model predicts token probabilities conditioned on context. Generation is not database lookup.

## Build it
1. Read the scenario and identify the input and expected output.
2. Compare an answer with and without a provided policy excerpt and record uncertainty.
3. Verify the result using the success evidence below.

## Real-world scenario
A policy assistant invents a policy number. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. Why can an LLM hallucinate?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
Two outputs with a groundedness check.

## Further reading
- [Reference](https://huggingface.co/learn/llm-course/chapter1/1)
