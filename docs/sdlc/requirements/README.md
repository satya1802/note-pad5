# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-000 · approved · source: requirements:overview

Scope and technology framing for requirements version 1: a lightweight, single-user plain-text notepad with an explicitly approved technology stack.

Delivery scope: lightweight. Requirements version: 1. Technology stack approved by the product owner (design against exactly these, no substitutions): Backend = Express 5; Cloud = AWS (sole hosting option, chosen for low cost given tiny single-user traffic); Database = PostgreSQL 16 (sole DB option, currently on standby/unused since notes live only in browser storage -- in place so cloud backup/multi-device sync later is a config change, not a rebuild); Frontend = Next.js 15. Out of scope: rich-text formatting (bold, headings, lists). In-scope capabilities: create note (title+body), edit note, delete note, browse all notes in a list, search by title/body text, organize with tags and/or folders, persistence across return visits on same device, plain-text only.

**Related:** EPIC-001, EPIC-002, EPIC-003, EPIC-004, EPIC-005

- ⚠ Approval status of the individual user stories/acceptance criteria themselves is not stated -- only the technology stack is explicitly marked approved by the product owner.

### US-001 · draft · source: requirements:EPIC-001/US-001

Critical story: allow the user to create a new plain-text note with a title and body.

As a personal note-taker, create a new note with title and body so it can be referenced later. AC-001: entering title+body and saving stores the note and shows it in the list. AC-002: leaving title or body empty does not block saving -- note saves with whatever content exists. AC-003: applying bold/heading/list formatting has no effect since notes are plain text only.

**Related:** EPIC-001, AC-001, AC-002, AC-003

### US-002 · draft · source: requirements:EPIC-001/US-002

High priority story: allow editing an existing note's title and body.

As a personal note-taker, edit a previously created note to keep it accurate. AC-004: changing title/body and saving persists the update and shows it on next view. AC-005: discarding/cancelling changes before saving leaves the previous title and body intact.

**Related:** EPIC-001, AC-004, AC-005

### US-003 · draft · source: requirements:EPIC-002/US-003

High priority story: allow permanent deletion of a note.

As a personal note-taker, delete a note no longer needed. AC-006: deleting removes it from the list and local storage immediately. AC-007: a deleted note does not reappear on a later visit to the same device.

**Related:** EPIC-002, AC-006, AC-007

### US-004 · draft · source: requirements:EPIC-003/US-004

High priority story: browse all notes in a single scrollable list and open one to read it.

As a personal note-taker, see all notes in one list to find and open the one wanted. AC-008: one or more saved notes are shown in a single scrollable list on app open. AC-009: with no saved notes, an empty state is shown indicating there are no notes yet. AC-010: selecting a note from the list displays its full title and body.

**Related:** EPIC-003, AC-008, AC-009, AC-010

### US-005 · draft · source: requirements:EPIC-003/US-005

High priority story: search notes by text appearing in title or body.

As a personal note-taker, search by text in title/body to locate a specific note without scrolling. AC-011: entering a search term shows only notes whose title or body contains it. AC-012: a term matching nothing shows an indication that no notes match. AC-013: clearing the search term restores the full list.

**Related:** EPIC-003, AC-011, AC-012, AC-013

### US-006 · draft · source: requirements:EPIC-004/US-006

Medium priority story: assign a note to a tag or folder for organization.

As a personal note-taker, add tags or file a note into a folder while creating/editing it. AC-014: adding tag(s) or a folder stores that organization and displays it on the note. AC-015: the tag/folder assignment persists on return visits to the same device.

**Related:** EPIC-004, AC-014, AC-015

- ⚠ EPIC-004 states the choice between tags vs. folders (or both) is decided at build time -- this mechanism has not yet been finalized in any input provided.

### US-007 · draft · source: requirements:EPIC-004/US-007

Medium priority story: filter the notes list by a selected tag or folder.

As a personal note-taker, view notes filtered by a chosen tag or folder to focus on one group. AC-016: selecting a tag/folder shows only notes assigned to it. AC-017: clearing the filter shows all notes again.

**Related:** EPIC-004, AC-016, AC-017

- ⚠ Depends on the same unresolved tags-vs-folders build-time decision noted in US-006.

### US-008 · draft · source: requirements:EPIC-005/US-008

Critical story: persist notes in browser local storage across return visits on the same device, with no server account or sync.

As a personal note-taker, keep notes available between sessions on the same device. AC-018: created/edited/organized notes remain present after closing and reopening the browser on the same device. AC-019: notes are stored in browser local storage only, with no server-side account or cross-device sync. AC-020: clearing browser local data permanently loses notes, with no cloud backup -- an accepted, intentional limitation of the local-only design.

**Related:** EPIC-005, AC-018, AC-019, AC-020, NFR-001, NFR-003

### US-009 · draft · source: requirements:EPIC-005/US-009

Medium priority story: usable as a responsive web app on both desktop and mobile browsers.

As a personal note-taker, use the notepad on desktop or mobile without a native app. AC-021: desktop browser load gives a usable layout with all note features accessible. AC-022: mobile browser load adapts responsively and remains usable, no native app required.

**Related:** EPIC-005, AC-021, AC-022, NFR-002

### NFR-001 · draft · source: requirements:NFR-001

Privacy NFR: all note data stays only in the user's own browser local storage.

Titles, bodies, and tag/folder organization are kept only in browser local storage on the user's device; no server-side account and no sync to any other device. Applies to US-008.

**Related:** US-008

### NFR-002 · draft · source: requirements:NFR-002

Compatibility NFR: responsive layout usable on desktop and mobile browsers without a native app.

The app must adapt and stay usable across desktop and mobile browser form factors. Applies to US-009.

**Related:** US-009

### NFR-003 · draft · source: requirements:NFR-003

Availability NFR (accepted risk): no cloud backup or cross-device sync -- clearing local data permanently loses notes.

Deliberate product decision: no cloud backup or cross-device sync exists. If browser local data is cleared, notes are permanently lost. This is an accepted risk for a single-device, local-only app. Applies to US-008.

**Related:** US-008

### NFR-004 · draft · source: requirements:NFR-004

Security NFR (accepted risk): no login, accounts, or authentication anywhere in the system.

Deliberate product decision for a single personal user on their own device: no login, accounts, or authentication. Accepted risk, applies to the whole system.
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-05

**Capabilities in scope:** Create a note with a title and body, Edit an existing note, Delete a note, Browse all notes in a single list, Search notes by title and body text, Organize notes with tags or folders, Notes stay available on return visits on the same device, Plain-text notes only (no bold, headings or lists), Notes organized with tags and/or folders

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | Express | — |
| cloud | AWS | AWS is the only hosting option and is a sound, inexpensive place to serve a small static web app like this to desktop and mobile browsers. For a single-user notepad the traffic is tiny, so costs stay near the floor. |
| database | PostgreSQL | PostgreSQL is the only database option, and for this product it is effectively on standby: you explicitly chose to keep all notes in the user's browser with no account and no sync, so nothing needs to be written to a server database today. It is in place purely so that adding cloud backup or multi-device sync later is a configuration change rather than a rebuild. |
| frontend | Next.js | — |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Note Creation and Editing

The core ability for the single user to create new plain-text notes and edit existing ones. Each note consists of a title and a body. No rich-text formatting is supported; notes are plain text only. Assumption: the app is for a single personal user with no login or accounts.

### US-001: Create a new note

**Priority:** critical

> As a personal note-taker, I want to create a new note with a title and a body, so that I can capture my thoughts and information for later reference.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I am on the note pad app | I choose to create a new note and enter a title and body text, then save | the new note is stored and appears in my list of notes |
| AC-002 | I am creating a new note | I leave the title or body empty and save | the note is still saved with whatever content was provided, so an empty field does not block saving |
| AC-003 | I am editing a note's body | I apply formatting such as bold, headings, or lists | no rich-text formatting is applied because notes are plain text only |

### US-002: Edit an existing note

**Priority:** high

> As a personal note-taker, I want to edit the title and body of a note I previously created, so that I can keep my notes accurate and up to date.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | I have an existing note | I open the note, change its title or body, and save | the updated title and body are stored and shown the next time I view the note |
| AC-005 | I am editing an existing note | I discard or cancel my changes before saving | the note retains its previous title and body |

## EPIC-002: Note Deletion

The ability for the user to delete a note they no longer need. This permanently removes the note from local browser storage.

### US-003: Delete a note

**Priority:** high

> As a personal note-taker, I want to delete a note I no longer need, so that I can keep my list of notes relevant and uncluttered.

| ID | Given | When | Then |
|---|---|---|---|
| AC-006 | I have an existing note | I choose to delete that note | the note is removed from my list and from local storage and no longer appears |
| AC-007 | I have deleted a note | I return to the app later on the same device | the deleted note does not reappear |

## EPIC-003: Browse and Search Notes

The user can browse all of their notes in a single list and search across notes by title and body text. Assumption: search filters notes by matching text in the title and body only.

### US-004: Browse all notes in a list

**Priority:** high

> As a personal note-taker, I want to see all of my notes in a single list, so that I can quickly find and open the note I want.

| ID | Given | When | Then |
|---|---|---|---|
| AC-008 | I have one or more saved notes | I open the app | all of my notes are shown in a single list that I can scroll through |
| AC-009 | I have no saved notes | I open the app | I see an empty state indicating there are no notes yet |
| AC-010 | I am viewing the list of notes | I select a note from the list | the note's full title and body are displayed |

### US-005: Search notes by title and body

**Priority:** high

> As a personal note-taker, I want to search my notes by text in their title and body, so that I can locate a specific note without scrolling through all of them.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | I have multiple saved notes | I enter a search term | only notes whose title or body contains that term are shown |
| AC-012 | I have entered a search term that matches no notes | the search is applied | I see an indication that no notes match the search |
| AC-013 | I have an active search term | I clear the search | the full list of all notes is shown again |

## EPIC-004: Organize Notes with Tags or Folders

The user can organize notes using tags and/or folders and filter their list by that organization. Assumption: the choice of tags and/or folders is decided at build time; this epic covers whichever mechanism is chosen.

### US-006: Assign a note to a tag or folder

**Priority:** medium

> As a personal note-taker, I want to assign tags or place notes into folders, so that I can group related notes together for easier organization.

| ID | Given | When | Then |
|---|---|---|---|
| AC-014 | I am creating or editing a note | I add one or more tags to it (or file it into a folder) | the note is stored with that organization and displays its tags or folder |
| AC-015 | I have organized a note with a tag or folder | I return to the app on the same device | the note retains its tag or folder assignment |

### US-007: Filter notes by tag or folder

**Priority:** medium

> As a personal note-taker, I want to view notes filtered by a chosen tag or folder, so that I can focus on one group of related notes at a time.

| ID | Given | When | Then |
|---|---|---|---|
| AC-016 | I have notes organized with tags or folders | I select a specific tag or folder | only the notes assigned to that tag or folder are shown |
| AC-017 | I am viewing notes filtered by a tag or folder | I clear the filter | all notes are shown again regardless of tag or folder |

## EPIC-005: Local Persistence of Notes

Notes persist in the user's browser local storage so they remain available on return visits on the same device. Assumption: there is no server-side account or cross-device sync; clearing browser data (e.g., cache) loses the notes with no cloud backup. The app is a responsive web app usable on desktop and mobile browsers, not a native mobile app.

### US-008: Persist notes across return visits on the same device

**Priority:** critical

> As a personal note-taker, I want my notes to remain available when I come back to the app on the same device, so that I do not lose my notes between sessions.

| ID | Given | When | Then |
|---|---|---|---|
| AC-018 | I have created, edited, or organized notes | I close the browser and reopen the app later on the same device and browser | all of my notes and their organization are still present |
| AC-019 | I am using the app | my notes are saved | they are stored in the browser's local storage with no server-side account or cross-device sync |
| AC-020 | I have saved notes | the browser's local data (e.g., cache/local storage) is cleared | the notes are lost with no cloud backup, consistent with single-device local-only storage |

### US-009: Use the app on desktop and mobile browsers

**Priority:** medium

> As a personal note-taker, I want to use the note pad in a browser on both desktop and mobile devices, so that I can manage my notes conveniently on whatever device I am using.

| ID | Given | When | Then |
|---|---|---|---|
| AC-021 | I open the app in a desktop browser | the interface loads | the layout is usable and the note features are accessible |
| AC-022 | I open the app in a mobile browser | the interface loads | the layout adapts responsively and remains usable, without requiring a native mobile app |
<!-- sdlc:auto:end epics -->
