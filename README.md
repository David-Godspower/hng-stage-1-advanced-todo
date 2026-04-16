# HNG14 Stage 1A - Advanced Interactive Todo Card

A state-driven, highly interactive Task Card component that expands upon Stage 0 requirements with dynamic editing, status transitions, and collapsible UI elements.

## Live Demo
- **Live URL:** [[LIVE LINK](https://hng-stage-1-advanced-todo.vercel.app/)]

## Core Enhancements (Stage 1A)
- **State-Sync Pattern:** Uses a centralized JavaScript object to keep UI elements like the checkbox and status dropdown perfectly synchronized.
- **Dynamic Edit Mode:** Implements a full-featured edit form (`test-todo-edit-form`) with real-time saving and validation.
- **Interactive Transitions:** Status changes automatically trigger visual style updates (e.g., strike-through for 'Done', red accents for 'Overdue').
- **Collapsible Content:** Optimizes long descriptions using a keyboard-accessible toggle.
- **Enhanced Time Logic:** Automatically calculates days, hours, and minutes remaining, switching to an overdue state if the deadline passes.

## Technical Decisions
- **Vanilla JS Component Model:** Implemented a `render()` cycle to mimic modern framework behavior (React/Vue) while keeping the bundle size to nearly zero.
- **Tailwind Utility First:** Chose utility classes for rapid styling and high-fidelity "startup" aesthetic.
- **Accessibility:** All interactive elements use semantic tags (`article`, `time`, `button`, `input`) and include `aria-label` for screen reader clarity.

## How to Run Locally
1. Clone the repo.
2. Open `index.html` in your browser.
3. No build steps required.

## Author
- **David Ajala**
- HNG14 Internship - Stage 1A