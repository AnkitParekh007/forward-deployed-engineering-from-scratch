# Testing and error handling

## 💡 Why this matters
A malformed ticket causes a crash.

## 🎯 Learning objectives
- Explain testing and error handling in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 03-03: SQL and persistence; use synthetic data.

## 🧠 Concepts
Unit tests verify small behavior; integration tests check boundaries. Errors should be actionable without exposing sensitive details.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Write tests for empty and invalid records and return a structured validation error.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
A malformed ticket causes a crash. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. What does an integration test verify?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
Tests fail before the fix and pass after it.

## 📚 Further reading
- [Reference](https://docs.python.org/3/library/unittest.html)
