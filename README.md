# Visa Ops (MVP)

NestJS + Prisma + PostgreSQL + Next.js (App Router).
The project targets a visa operations workflow with authentication, authorization, status lifecycle control, and case notes.

## 1. WHAT - What this project does

### Core business features

- JWT authentication: register and login.
- Role-based access control with `ADMIN` and `OPERATOR`.
- Operator CRUD management (admin-only).
- Visa application workflows:
  - Create application (admin-only),
  - List with filtering, search, and pagination,
  - View application detail,
  - Update status via transition rules,
  - Add notes per application.

### Existing non-functional capabilities

- Backend rate limiting by route and IP, with endpoint-level override.
- Login lockout by email to reduce brute-force attempts.
- Strict request validation and Prisma-to-HTTP exception mapping.
- Frontend request timeout and conditional retry with exponential backoff.
- React Query cache lifecycle with targeted invalidation by domain actions.

## 2. HOW - Architecture and implementation

### Folder structure (high-level)

```txt
.
├── backend/
│   ├── src/
│   │   ├── auth/                 # JWT auth, token verification, guards, role policies.
│   │   ├── users/                # operator management service and controllers.
│   │   ├── visa-applications/    # core visa lifecycle APIs and business logic.
│   │   ├── common/               # rate-limit guard, decorators, and exception filters.
│   │   └── prisma/               # Prisma module/service integration.
│   └── prisma/
│       └── schema.prisma         # relational model and index definitions.
├── frontend/
│   ├── app/                      # App Router pages, layouts, and route-level composition.
│   ├── hooks/                    # query/mutation hooks and debounce utility.
│   ├── services/                 # typed API client layer.
│   ├── components/               # reusable UI blocks.
│   └── contexts/                 # auth and toast state containers.
└── scripts/
    └── setup-local-postgres.sh   # local PostgreSQL bootstrap script.
```


### Backend (NestJS + Prisma)

- **API boundary design**
  - REST endpoints are grouped by bounded context: `/auth`, `/users`, `/visa-applications`.
  - Controllers are thin. Services hold business logic and data orchestration.
  - Global `ValidationPipe` is configured for fail-fast contracts: transform enabled, non-whitelisted fields rejected.
  - DTO normalization trims user input and normalizes optional query values.
- **Security model**
  - Access is protected by `AuthGuard` and `RolesGuard`.
  - JWT payload carries `sub`, `email`, and `role`.
  - Token verification is centralized through a dedicated JWT strategy.
  - Auth endpoints use stricter per-route rate limits than default API routes.
- **Abuse prevention and resilience**
  - Rate limiting is global via `APP_GUARD`.
  - Bucket key is `method:path:ip` to isolate route-level abuse patterns.
  - API exposes `X-RateLimit-*` and `Retry-After` headers for deterministic client behavior.
  - Expired buckets are pruned incrementally to avoid unbounded in-memory growth.
  - Login lockout tracks attempts in a sliding window and applies temporary lock after threshold.
- **Workflow integrity**
  - Visa status transitions are modeled as an explicit finite transition map.
  - Invalid state transitions are rejected at service layer.
  - `travelDate` must be in the future to enforce domain validity.
  - Notes are attached to both application and author identity.
- **Data pattern and performance**
  - Pagination uses `skip/take` with deterministic sort (`createdAt`, `id`).
  - Search is case-insensitive on `applicantName` and `email`.
  - `count` and `findMany` execute in parallel to reduce endpoint latency.
  - Indexes are aligned with read patterns:
    - `VisaApplication`: `status`, `email`, `(createdAt,id)`, `(status,createdAt,id)`.
    - `User`: `(role,createdAt,id)`.
    - `VisaApplicationNote`: `(applicationId,createdAt)`.
- **Error semantics**
  - Prisma known errors are translated into explicit API-level responses.
  - Duplicate keys map to conflict errors.
  - Missing resources map to not-found errors.
  - Relation integrity errors map to bad-request errors.
  - This keeps client error handling predictable and stable.

### Frontend (Next.js + React Query)

- **Route and component architecture**
  - App Router structures the UI by domain route.
  - Root route redirects into the main visa workflow for focused navigation.
  - Views are decomposed into table/filter/detail/modal components to constrain rerender scope.
- **Transport and session behavior**
  - Axios client is centralized with fixed timeout and typed error normalization.
  - Request interceptor injects Bearer token.
  - Response interceptor clears token and redirects on `401`.
  - Token payload is decoded client-side for role and expiration checks.
  - Auth context syncs session state across browser tabs via storage events.
- **Server-state architecture**
  - QueryClient defaults define global stale window, cache GC, and retry behavior.
  - Retry is conditional for transient failures (`408`, `429`, `5xx`, network).
  - Retry delay uses bounded exponential backoff.
  - Mutations disable auto-retry to avoid duplicate writes.
  - Query keys are centralized for safe and precise invalidation.
  - Post-mutation invalidation targets only affected caches.
- **UI performance controls**
  - Search input is debounced before request dispatch.
  - List query uses `placeholderData` to preserve previous page data during transitions.
  - Volatility-based stale times are tuned by domain:
    - Shorter for applications list.
    - Medium for application detail.
    - Longer for users list.
  - Critical handlers use `useCallback` to reduce unnecessary rerenders.

## 3. WHY - Why this design

- **Domain modularization** keeps auth, users, and visa lifecycle logic independently scalable.
- **Service-oriented backend** improves maintainability and testability of business rules.
- **NestJS cross-cutting patterns** keep auth, rate limiting, and error handling consistent.
- **React Query over manual state management** accelerates production-grade caching and invalidation.
- **Prisma with explicit indexes** preserves delivery speed while keeping query performance controlled.
- **In-memory safeguards for MVP** reduce setup cost and provide a clear upgrade path for distributed runtime.

## 4. Not implemented yet (intentionally deferred)

- No distributed rate limiting (Redis) for multi-instance deployments.
- No complete observability stack (structured logs, metrics, tracing, alerting).
- No full test coverage across unit/integration/e2e layers.
- No refresh-token rotation and revocation lifecycle.
- Search currently uses `contains` and is not yet optimized for advanced full-text workloads.
- No complete audit trail for every domain mutation.

## 5. Improvements with more time

- Add Redis-backed shared state for rate limiting and login lockout.
- Add idempotency keys for sensitive write endpoints.
- Expand test pyramid:
  - Unit tests for status transitions and auth policies.
  - Integration tests for Prisma/service boundaries.
  - End-to-end tests for core operator flows.
- Add observability stack with structured logging, tracing, and metrics.
- Upgrade search with PostgreSQL full-text and trigram indexing at higher data volume.


## 6. Quick run

### 1. Database (from repo root)

```bash
bash scripts/setup-local-postgres.sh
```

### 2. Backend (`backend/.env`)

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/visa_ops?schema=public"
PORT=8080
JWT_SECRET="your-secret"
CORS_ORIGIN="http://localhost:3000"
```

```bash
cd backend
pnpm install
pnpm run prisma:seed
pnpm run start:dev
```

API: `http://localhost:8080`

### 3. Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL="http://localhost:8080"
```

```bash
cd frontend
pnpm install
pnpm run dev
```

App: `http://localhost:3000` (`/login`).

## 7. Screenshots (placeholder)

### List view

<img width="1463" height="802" alt="image" src="https://github.com/user-attachments/assets/188f95ff-31b5-4914-bc74-723eba38516d" />

### Detail view

<img width="1364" height="857" alt="image" src="https://github.com/user-attachments/assets/2e642fce-04bd-454b-99d4-757b9a477c27" />

### Status update or note creation

<img width="1299" height="857" alt="image" src="https://github.com/user-attachments/assets/7e3862a3-5789-47fd-a8f3-92c23deb3c4b" />

## 8. Summary

- I designed the backend by bounded contexts so auth, users, and visa workflow can evolve independently.
- I kept controllers thin and pushed business rules into services for clearer testing and lower coupling.
- I used guard-based security layering: authentication first, then role policy enforcement.
- I implemented abuse controls in two layers: route/IP throttling and email-based login lockout.
- I made error handling deterministic by mapping Prisma error codes to stable HTTP semantics.
- I modeled visa status changes as an explicit finite transition map to protect workflow integrity.
- I aligned indexes with real query patterns, then enforced deterministic ordering for stable pagination.
- I separated frontend transport from server-state orchestration to keep data flow explicit and maintainable.
- I tuned retry strategy for transient failures only, and disabled mutation retries to avoid duplicate writes.
- I optimized UX and perceived performance with debounce, placeholder data, and targeted cache invalidation.
- I treated this as production-minded MVP: strong foundations first, then clear roadmap for scale hardening.
