# Automation reliability

## 💡 Why this matters
A mock CRM task creation fails temporarily.

## 🎯 Learning objectives
- Explain automation reliability in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 08-04: Workflow orchestration; use synthetic data.

## 🧠 Concepts
Durable state, idempotency and bounded retries protect workflows when tasks fail. Retain evidence and surface unresolved cases.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Simulate one transient failure and a permanent failure in a local workflow.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
A mock CRM task creation fails temporarily. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. What should permanent failures do?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
Bounded retry and a manual review record.

## 📚 Further reading
- [Reference](https://12factor.net/)
