# Secrets and configuration

## 💡 Why this matters
A prototype needs an optional model API.

## 🎯 Learning objectives
- Explain secrets and configuration in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 10-02: Authentication and authorization; use synthetic data.

## 🧠 Concepts
Never ship API keys in browser bundles or commit them. Use environment variables in trusted backends and rotate exposed credentials.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Document a server-only configuration and test missing-key behavior without a real key.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
A prototype needs an optional model API. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. Can a Vite public env variable contain a secret?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
An example config with placeholders only.

## 📚 Further reading
- [Reference](https://12factor.net/config)
