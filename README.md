# TypeScript Practice Tasks

This project contains a collection of small but powerful TypeScript tasks intended for junior-to-middle frontend developers. Tasks are organized to improve understanding of:
- Array manipulation
- Object traversal
- Nested data structures
- String handling
- Type safety and generic constraints

---

## 📁 Folder Structure

Each task is located in its own folder inside `/src`.  
Each folder contains:

- `index.ts` – function implementation
- `types.ts` – function and test types
- `mock.ts` – mock data for testing
- `index.test.ts` – unit tests using **Vitest**

---

## ▶️ How to Run

### Start a single task's playground
```bash
npm run start --folder=<folder-name>
# Example:
npm run start --folder=parse-query-string
```

> This runs `index.ts` with `nodemon`

### Run tests for a specific task
```bash
npm run test --folder=<folder-name>
# Example:
npm run test --folder=parse-query-string
```
## Task Solving Guidelines

### Implementation

- The `index` file is your playground and the main place to implement the task.
- You are allowed to create helper functions.
- You can implement multiple solution variants.
- Only the functions that are meant to pass the tests should be exported from the `index` file.
- Do not export anything from the `index` file that is not a function directly related to the solution.
- Avoid using the `any` type; prefer `unknown` and perform proper type checks.
- You may use the provided type and mock files — they show what the inputs and expected outputs should be.

### Commits

- One task = one commit.

### AI Tools Policy

- Disable powerful AI assistants; only autocomplete is allowed.
- When using ChatGPT:
    - Do **not** ask it to write code for your task.
    - Ask it to **explain concepts with references**, not code.
    - If necessary, ask it to explain abstract code or pseudocode, not the code related to your specific task.

### Team Communication

- If you need help — ask for it in the team chat.
- A teammate helping can explain concepts, show code, send links — anything is allowed.
- However, remember: **doing the task for someone else without their understanding is harmful.**
- Struggling is part of the learning process — don’t take that opportunity away from each other.
