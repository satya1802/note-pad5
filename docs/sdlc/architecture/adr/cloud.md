<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-05

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Vercel
- Cloudflare

## Decision Outcome

Chosen option: AWS, because Only hosting option; inexpensively serves a small static web app to desktop and mobile browsers with traffic near the floor for a single user.

## Consequences

Slightly more setup than a one-click static host, but keeps the backend and standby database in the same account for later sync.
<!-- sdlc:auto:end adr -->