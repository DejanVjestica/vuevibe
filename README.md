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

```mermaid
flowchart TD
    Dev[Developer] -->|git push| GH[GitHub Repository]
    GH -->|triggers| VC[Vercel CI/CD]
    VC -->|build success| APP[🌐 Live Vue.js 3 App on Vercel]
    VC -->|build fails| FAIL[❌ Build Failed]
    FAIL -->|notify| Dev

```

### Firebase Authentication

This project uses Firebase Auth for secure user management.

Session Persistence: Configured to maintain user state across browser refreshes using onAuthStateChanged.

```mermaid
flowchart TD
    Data[Data source JSONPlaceholder] -->|Fetch| Site[🌐 Live Website Vue]
    Site -->|Fetch| Data

    Site --> Marketing[📢 Marketing Pages]
    Site --> Protected[🔒 Protected Pages]

    Protected --> Login[🔑 Login]
    Protected --> Register[📝 Register]

    Login --> FB[(Firebase Auth)]
    Register -->|Verify Email| FB

    FB -->|Success| JWT[🎫 JWT Token]
    FB -->|Fail| Login

    JWT --> Protected

```
