# Webhooks and idempotency

## 💡 Why this matters
A customer-created event is delivered twice.

## 🎯 Learning objectives
- Explain webhooks and idempotency in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 06-03: REST integrations; use synthetic data.

## 🧠 Concepts
A webhook delivers an event asynchronously. Deduplicate event IDs so repeated delivery does not repeat business effects.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Process a synthetic event twice using a persistent set of IDs.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
A customer-created event is delivered twice. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. What does idempotency mean?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
Exactly one created task.

## 📚 Further reading
- [Reference](https://docs.github.com/en/webhooks)
