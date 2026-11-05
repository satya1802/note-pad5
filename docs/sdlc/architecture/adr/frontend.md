<!-- sdlc:auto:start adr -->
# ADR-0001: Use Next.js 15 for Frontend

Status: Accepted  
Date: 2026-11-05

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- Next.js 15
- Remix
- Vite + React

## Decision Outcome

Chosen option: Next.js 15, because Delivers the entire responsive notepad UI and client-side logic; all note persistence is handled in the browser via localStorage with no server round-trips, satisfying the local-only, no-account design.

## Consequences

Next.js server features (SSR, API routes) are largely unused today since persistence is client-side; it is retained for a familiar structure and easy future enablement of sync.
<!-- sdlc:auto:end adr -->