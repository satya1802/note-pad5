<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-05

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- SQLite
- DynamoDB

## Decision Outcome

Chosen option: PostgreSQL 16, because On standby to host notes if cloud backup or multi-device sync is enabled; the standby schema mirrors the client-side note shape so enablement is configuration, not a rebuild.

## Consequences

No reads or writes today, so it is a running cost with no current functional role; accepted to de-risk future sync.
<!-- sdlc:auto:end adr -->