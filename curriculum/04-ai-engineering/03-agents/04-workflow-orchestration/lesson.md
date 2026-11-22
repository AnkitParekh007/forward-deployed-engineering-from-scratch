# Workflow orchestration

## 💡 Why this matters
A checklist must be reviewed before onboarding begins.

## 🎯 Learning objectives
- Explain workflow orchestration in your own words.
- Apply the concept to the customer scenario.
- Produce and independently verify the requested evidence.

## 🧰 Prerequisites
Complete lesson 08-03: Bounded agent loops; use synthetic data.

## 🧠 Concepts
Workflows encode known sequences; agents handle narrow uncertain decisions. Preserve explicit state and human approval for consequential actions.

## 🛠️ Build it
1. Read the scenario and identify the input and expected output.
2. Model draft, review, approved and rejected states with a manual approval event.
3. Verify the result using the success evidence below.

## 🌐 Real-world scenario
A checklist must be reviewed before onboarding begins. An FDE documents assumptions, tests the smallest useful change and reviews the outcome with the workflow owner.

## ⚠️ Common mistakes
- Treating a generated result as verified evidence. Check it independently.
- Using real customer data in a learning demo. Use synthetic records.
- Hiding missing evidence. Document limitations and ask for review.

## 🧪 Checkpoint
1. Why separate recommendation from authorization?
2. What evidence would show your exercise works?
3. What should you do if the evidence fails?

## 📦 Deliverable
A trace rejecting an invalid transition.

## 📚 Further reading
- [Reference](https://www.w3.org/TR/scxml/)
