# Authentication and authorization

## 💡 Why this matters
Two customer accounts share an application.

## 🎯 Learning objectives
- Explain authentication and authorization in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 10-01: Data privacy and minimization; use synthetic data.

## 🧠 Concepts
Authentication identifies a caller; authorization checks whether a caller may perform a specific action. Enforce checks server-side.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Write a local mock role matrix and unit tests for allowed and denied read actions.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
Two customer accounts share an application. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. What is least privilege?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
Denied cross-account access test.

## 📚 Further reading
- [Reference](https://cheatsheetseries.owasp.org/)
