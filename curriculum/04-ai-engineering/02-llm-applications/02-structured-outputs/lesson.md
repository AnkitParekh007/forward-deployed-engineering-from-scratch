# Structured outputs

## 💡 Why this matters
An onboarding assistant extracts dates and owners.

## 🎯 Learning objectives
- Explain structured outputs in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 07-01: Prompt instructions and context; use synthetic data.

## 🧠 Concepts
A JSON schema expresses the expected structure; validation catches malformed or unexpected outputs before use.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Validate a synthetic model response against required keys and enum values.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
An onboarding assistant extracts dates and owners. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. Why validate model output?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
Valid response accepted, malformed response rejected.

## 📚 Further reading
- [Reference](https://json-schema.org/learn/getting-started-step-by-step)
