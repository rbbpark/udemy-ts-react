# TypeScript React Monorepo

This is a monorepo containing multiple TypeScript React projects built with Vite for "React & TypeScript - The Practical Guide".

## Project Structure

```
packages/
├── goals-list/    # Goals List Application
├── react-timer/   # React Timer Application
├── shared/   # shared React and TypeScript code
```

## Getting Started

```bash
npm install
npm build -w packages/shared
npm run dev -w packages/react-timer
```

## Technology Stack

- React 18
- TypeScript
- Vite
- ESLint
- Prettier
