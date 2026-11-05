# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `d34f6cb` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
note pad 5 is a generated two-app repository from the Quorq AI SDLC platform: a Next.js 15 frontend that implements the approved, reviewed screens as a static export running on seeded sample data, and an Express 5 (TypeScript) backend that currently only exposes a health check because no backend architecture had been approved yet. The backend is wired for PostgreSQL 16 via Drizzle ORM, connecting lazily and falling back to an in-memory PGlite database when no DATABASE_URL is set, so the whole stack can run locally with zero external services.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js 22+ (matches backend/Dockerfile's node:22-slim base)
- npm
- Docker and Docker Compose (optional, for the Postgres 16 service in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Copy the example environment file: cp .env.example .env
2. Install backend dependencies: cd backend && npm install
3. Install frontend dependencies: cd frontend && npm install
4. (Optional) Start a local Postgres: from the repo root, docker compose up -d db
5. Start the backend API: cd backend && npm run dev
6. In another terminal, start the frontend: cd frontend && npm run dev
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| backend dev | `cd backend && npm run dev` | Runs the Express app with tsx in watch mode (src/main.ts), listening on PORT (default 8000) |
| backend build | `cd backend && npm run build` | Compiles TypeScript to dist/ via tsconfig.build.json |
| backend start | `cd backend && npm run start` | Runs the compiled server from dist/main.js (used in production image) |
| frontend dev | `cd frontend && npm run dev` | Starts the Next.js dev server for the approved screens |
| frontend build | `cd frontend && npm run build` | Builds a static export into frontend/out/ (no typecheck or lint, per next.config.ts) |
| frontend preview | `cd frontend && npm run preview` | Serves the built out/ directory at http://127.0.0.1:4173 |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `frontend/` | Next.js 15 static-export app implementing the approved screens on seeded sample data |
| `frontend/src` | Shared frontend code: src/lib has the API client (api.ts), UI/icon vocabulary (ui.tsx, icons.tsx), navigation helper, and global CSS |
| `frontend/e2e` | Playwright acceptance tests run against either a locally built app or a deployed URL (E2E_BASE_URL) |
| `backend/` | Express 5 + TypeScript API service, currently only a /health endpoint plus DB scaffolding |
| `backend/src` | App setup (app.ts), server entry (main.ts), DB connection/table creation (db.ts), Drizzle schema (schema.ts, currently empty), stubs.ts |
| `backend/tests` | Vitest tests for health check and database bootstrapping |
| `.devcontainer/` | VS Code devcontainer configuration |
| `.quorq/` | Platform metadata (handoff.json) used by the Quorq SDLC tooling |
| `docker-compose.yml` | Defines a local Postgres 16 service (db) for backend development |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend is generated per the approved architecture as one router per component with one handler per declared endpoint; every handler starts as a stub returning a placeholder until implemented
- Database tables are declared with Drizzle's pgTable in backend/src/schema.ts; db() creates any missing table on first connection and never alters/drops existing ones (no migrations yet)
- With no DATABASE_URL set, the backend transparently uses an in-memory PGlite Postgres instead of failing, so tests/dev/e2e runs need no external DB
- Frontend is a fully static export (output: 'export' in next.config.ts): every page is a client component, no server components/route handlers/actions
- Frontend build intentionally skips typecheck/lint (ignoreBuildErrors/ignoreDuringBuilds); npm run typecheck and npm run lint are the real gates and should be run separately and kept green
- Frontend API calls go through frontend/src/lib/api.ts's apiFetch, which sends a Bearer token (session token if present, else the shared API_SECRET_KEY) and reads the API base URL from NEXT_PUBLIC_API_BASE_URL
- Generated screens currently render seeded sample data and are not yet wired to the backend API client
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| frontend unit | `cd frontend && npm test` | Runs Vitest component tests located beside the components they cover |
| frontend typecheck | `cd frontend && npm run typecheck` | Runs tsc --noEmit, skipped by the build itself |
| frontend lint | `cd frontend && npm run lint` | Runs ESLint over the whole frontend app (gate during development) |
| frontend e2e | `cd frontend && npm run test:e2e:install && npm run test:e2e` | Installs the Chromium browser then runs Playwright tests from frontend/e2e; without E2E_BASE_URL it boots the backend with tsx and builds/serves the frontend static export locally |
| backend unit | `cd backend && npm test` | Runs Vitest tests for the health endpoint and database table creation |
| backend lint | `cd backend && npm run lint` | Runs ESLint over the backend source |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Backend fails with 'DATABASE_URL is not set' or similar when calling a real Postgres path | Either set DATABASE_URL (e.g. to the docker-compose Postgres service) or leave it unset to use the automatic in-memory PGlite fallback for local/dev/e2e runs |
| Frontend requests to the API are blocked by CORS | Set ALLOWED_ORIGINS on the backend to include the frontend's dev origin (defaults only allow http://localhost:5173 and 127.0.0.1:5173) or adjust the frontend dev port to match |
| `npm run build` in frontend succeeds but the app has type errors | Run `npm run typecheck` (tsc --noEmit) separately, since next.config.ts disables type/lint checking during build on purpose |
| Playwright e2e tests fail to launch a browser | Run `npm run test:e2e:install` in frontend/ first to fetch the Chromium browser |
| Backend Docker image healthcheck fails | Ensure the container exposes port 8000 and DATABASE_URL is provided in production, since the image removes the in-memory PGlite fallback at build time |
<!-- sdlc:auto:end troubleshooting -->
