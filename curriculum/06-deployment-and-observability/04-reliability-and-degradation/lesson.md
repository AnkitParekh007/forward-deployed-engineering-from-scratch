# Reliability and degradation

## 💡 Why this matters
A knowledge service becomes unavailable.

## 🎯 Learning objectives
- Explain reliability and degradation in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 09-03: Logs, metrics and traces; use synthetic data.

## 🧠 Concepts
Define a service objective, timeouts and fallbacks. A fallback should preserve useful behavior without pretending success.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Simulate retrieval failure and display a clear unavailable response plus manual alternative.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
A knowledge service becomes unavailable. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. Why avoid fabricated fallback answers?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
A failure test and documented fallback.

## 📚 Further reading
- [Reference](https://sre.google/sre-book/table-of-contents/)
