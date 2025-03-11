# TypeScript React Monorepo

This is a monorepo containing multiple TypeScript React projects built with Vite.

## Project Structure

```
packages/
├── goals-list/    # Goals List Application
├── react-timer/   # React Timer Application
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Build all packages:

```bash
npm run build
```

3. Start development server for a specific project:

```bash
# For Goals List project
npm run dev -w goals-list

# For Timer project
npm run dev -w react-timer
```

## Technology Stack

- React 18
- TypeScript
- Vite
- ESLint
- Prettier

## Development

Each project in the `packages` directory is a standalone Vite application with its own:

- Development server
- Build process
- ESLint configuration
- TypeScript configuration
