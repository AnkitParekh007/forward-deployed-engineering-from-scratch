# ETL and freshness

## 💡 Why this matters
A knowledge base changes daily.

## 🎯 Learning objectives
- Explain etl and freshness in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 06-04: Webhooks and idempotency; use synthetic data.

## 🧠 Concepts
Extract, transform and load data with checkpoints and provenance. Freshness measures age since last successful refresh.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Transform a local CSV into normalized JSON with source and import timestamps.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
A knowledge base changes daily. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. What should a failed refresh preserve?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
Input counts, output and timestamp.

## 📚 Further reading
- [Reference](https://docs.python.org/3/library/json.html)
