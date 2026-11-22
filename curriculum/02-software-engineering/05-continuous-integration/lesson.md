# Continuous integration

## 💡 Why this matters
A teammate changes the triage classifier.

## 🎯 Learning objectives
- Explain continuous integration in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 03-04: Testing and error handling; use synthetic data.

## 🧠 Concepts
CI runs repeatable checks on changes; a failing mandatory check should block release.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Create a workflow that runs local unit tests on push and inspect the results.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
A teammate changes the triage classifier. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. Why run CI on every change?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
A workflow and passing test log.

## 📚 Further reading
- [Reference](https://docs.github.com/en/actions)
