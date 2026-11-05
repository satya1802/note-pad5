<!-- sdlc:auto:start adr -->
# ADR-0002: Use Express 5 for Backend

Status: Accepted  
Date: 2026-11-05

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- Express 5
- Fastify
- NestJS

## Decision Outcome

Chosen option: Express 5, because Serves the built app and a health endpoint; kept minimal because no note data flows through the server in the current single-device design.

## Consequences

Mostly idle today; its value is providing a ready place to add cloud backup/sync endpoints later without re-platforming.
<!-- sdlc:auto:end adr -->