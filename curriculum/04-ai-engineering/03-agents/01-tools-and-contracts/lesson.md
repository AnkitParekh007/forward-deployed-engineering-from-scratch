# Tools and contracts

## 💡 Why this matters
An assistant checks synthetic order status.

## 🎯 Learning objectives
- Explain tools and contracts in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 07-05: Evaluate an LLM application; use synthetic data.

## 🧠 Concepts
A tool exposes an explicitly permitted operation with typed arguments and predictable results. The application validates requests.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Define a read-only local lookup tool and reject unknown IDs.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
An assistant checks synthetic order status. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. Who validates tool parameters?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
Schema, successful lookup and error case.

## 📚 Further reading
- [Reference](https://json-schema.org/)
