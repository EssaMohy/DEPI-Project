# Architecture Overview

This repository follows a 7-layer, feature-driven architecture inspired by API-first design and clear separation of concerns.

Layers (high level):

1. Configuration Layer
  - Single source for environment and feature-flag values (`apps/backend/src/config/app.ts`).

2. Network Transport & Security
  - Express app, CORS, Helmet, and OpenAPI request validation live at the edge (`apps/backend/src/app.ts`).

3. Interceptor / Middleware Layer
  - Sanitizers, response shapers and error handlers. Scaffolds placed under `apps/backend/src/shared/middleware`.

4. Presentation Layer
  - Versioned routes, controllers and DTOs under `apps/backend/src/features/*/v1`.

5. Service Layer
  - Business logic independent of HTTP and persistence (plain objects & domain models).

6. Domain Layer
  - Hydrated domain models and enums under `domain/` folders inside features.

7. Data Infrastructure
  - Driver abstractions and repository base classes under `apps/backend/src/shared/infrastructure`.

Observability & Feature Flags
- Context storage: `apps/backend/src/shared/context/context-storage.ts`
- Logger: `apps/backend/src/shared/observability/logger.ts`
- Feature flag service scaffold: `apps/backend/src/shared/infrastructure/flags/config-feature-flag.service.ts`

What I added in this commit
- Lightweight `globalSanitizer` middleware
- Placeholder `enforceResponseShape` middleware
- `PrismaDriver` stub
- `ConfigFeatureFlagService` scaffold
- `contextStorage` AsyncLocalStorage scaffold
- `activityLogger` simple JSON logger
- `docs/ARCHITECTURE.md` summary

Next recommended steps
- Wire real validators (AJV + compiled OpenAPI schemas)
- Install production deps (winston, ajv, dompurify, prisma)
- Implement `PrismaDriver` using `@prisma/client`
- Extract long-form notes from `file.txt` into docs and remove duplication
