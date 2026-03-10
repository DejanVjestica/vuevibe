# vuevibe

https://vuevibe.vercel.app/

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Tech Stack & Tooling

Framework: Vue 3 (Composition API)

Build Tool: Vite

Store: Pinia

Router: Vue Router

Linting: ESLint + Prettier

Type Checking: vue-tsc

### Deployment & CI/CD

Vercel Integration
The project is optimized for Vercel with a fully automated CI/CD pipeline:

Production Triggers: Merges to the main branch trigger a production build and deployment.

### Firebase Authentication

This project uses Firebase Auth for secure user management.

Session Persistence: Configured to maintain user state across browser refreshes using onAuthStateChanged.

```mermaid
flowchart TD
    Dev[Developer] -->|git push| GH[GitHub Repository]
    GH -->|trigger| VC[Vercel CI/CD]
    VC -->|build & deploy| App[Vue.js 3 App on Vercel]

    User[User] -->|visit site| App
    App -->|login/register form| FE[Firebase Auth]
    FE -->|email/password check| FB[(Firebase)]
    FB -->|token / error| FE
    FE -->|JWT token| App
    App -->|authenticated| Dashboard[Protected Routes]
    App -->|auth failed| Login[Login Page]

    subgraph Vercel
        VC
        App
    end

    subgraph Firebase
        FE
        FB
    end
```
