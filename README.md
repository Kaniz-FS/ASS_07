# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Question and Answer

1. What is JSX, and why is it used?

- JSX is a JavaScript syntax that acts like HTML and is used in React. It allows developers to write UI code more easily. JSX improves readability and helps React create UI components efficiently.

2. What is the difference between State and Props?

- The difference between State and Props are:-
  Props are used to pass data from parent to child components. And state is used to manage data inside a component. Props are read only while state can be updated.

3. What is the useState hook, and how does it work?

- useState is a react hook for adding state to functional components.
  It returns an array with the current state and a setter function. And
  when the state changes the component re-renders automatically.

4. How can you share state between components in React?

- State can be shared by lifting it to a common parent components.
  The shared state is passed to child components using props.

5. How is event handling done in React?

- React uses camelCase for event names like onClick. Event handlers are passed as functions not strings. React uses a synthetic event system for better performance.
