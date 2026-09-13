# PROJECT:  DEV STACK

A lightweight, high-performance website designed to help users track their stack level and manage projects effortlessly.

---

## 🛠️ Tech Stack

* **Frontend:** React 19, JavaScript (ES6+)
* **Styling:** Tailwind CSS
* **Build Tool:** Vite
* **Data Handling:** Fetch API & JSON Storage

---

## Features

*  **Real-Time Task Filtering:** Dynamically filter tasks by completion status, priority level, or custom tag.
* **Interactive Analytics:** Visual progress bars updating instantly as tasks are checked off.
* **Local Data Persistence:** Fetch initial seed data from JSON and keep changes synced in your browser session.

---

## React Q & A

### What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension that allows you to write HTML-like structure directly inside JavaScript code. It makes rendering UI elements intuitive, easier to read, and allows you to write JavaScript logic (like variables and conditions) directly inside HTML elements using curly braces `{}`.

### What is the difference between props and state?
* **Props:** Read-only data passed down from a parent component to a child component (like function parameters).
* **State:** Internal data managed within a component that changes over time based on user interactions. When state changes, the component re-renders.

### What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows a functional component to hold and update its own internal state. In this project, it was used to track the task list array and manage the current filter selected by the user.

### What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in functional components. It was used with an empty dependency array `[]` to fetch the external JSON task data once when the component first mounts to the screen.

### Why does every item in a `.map()` list need a unique `key` prop?
React relies on unique keys to identify which items in a list have changed, been added, or been removed. The `key` helps React optimize performance by updating only the specific item in the DOM instead of re-rendering the entire list.

### What is conditional rendering? Show one place you used it.
Conditional rendering means displaying specific UI components or elements based on a condition evaluating to true or false. 

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Props
Child to Parent: Callback function passed through props
React follows one-way data flow: parent to child.

