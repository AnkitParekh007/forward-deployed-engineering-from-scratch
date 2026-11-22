# Retrieval-augmented generation

## Why this matters
An employee asks about leave policy.

## Learning objectives
- Explain retrieval-augmented generation in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## Prerequisites
Complete lesson 07-03: Embeddings and similarity; use synthetic data.

## Concepts
RAG retrieves evidence before composing an answer. Preserve citations and abstain when evidence is missing.

## Build it
1. Read the scenario and identify the input and expected output.
2. Index four synthetic policy passages using word overlap and return top passages with IDs.
3. Verify the result using the success evidence below.

## Real-world scenario
An employee asks about leave policy. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## Checkpoint
1. Why cite retrieved evidence?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## Deliverable
Retrieval results and one abstention case.

## Further reading
- [Reference](https://huggingface.co/learn/llm-course/chapter1/1)
