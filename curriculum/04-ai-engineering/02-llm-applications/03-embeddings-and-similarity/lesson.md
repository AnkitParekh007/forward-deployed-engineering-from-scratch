# Embeddings and similarity

## 💡 Why this matters
A support user searches for refund rules.

## 🎯 Learning objectives
- Explain embeddings and similarity in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 07-02: Structured outputs; use synthetic data.

## 🧠 Concepts
An embedding represents items as numeric vectors. Cosine similarity compares directions rather than absolute magnitude.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Compute cosine similarity for vectors [1,0], [0.8,0.2] and [0,1].
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
A support user searches for refund rules. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. Does similarity guarantee relevance?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
The first pair ranks above the orthogonal pair.

## 📚 Further reading
- [Reference](https://scikit-learn.org/stable/modules/metrics.html)
