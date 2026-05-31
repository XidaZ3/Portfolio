# Portfolio Humanized Copy Design

## Context

The current portfolio landing page has a stronger structure and visual hierarchy after the credibility polish pass. The remaining issue is tone. Some copy reads like a generated sales page because it repeats abstract phrases such as "delivery," "workflow-heavy," "release-ready," and broad claims about dependable product work.

The next pass should keep the page professional, but make it sound more like a real engineer describing their work plainly.

## Goals

- Reduce AI-like and brochure-like wording.
- Keep the page credible for agencies, recruiters, and hiring managers.
- Make English copy more direct, specific, and modest.
- Make Italian copy sound natural, with fewer English business terms.
- Preserve the existing page structure and visual design.
- Keep the change mostly content-only.

## Non-Goals

- No new sections.
- No new layout system.
- No visual redesign.
- No casual or overly personal tone.
- No named clients or confidential project details.
- No new claims beyond the existing CV-supported positioning.

## Tone Direction

The target tone is plainspoken professional.

The page should still feel serious and polished, but less like a generic service catalog. It should sound like Xida is explaining the kind of work he does, what he has worked on, and where he can help.

Avoid repeated use of:

- delivery
- workflow-heavy
- release-ready
- practical engineer
- product path
- dependable delivery
- ownership

These words are not banned, but they should only appear when they add real clarity.

## Content Changes

### Hero

Keep the professional positioning and current hero structure. Rewrite the hero summary so it is more direct and less audience-stacked.

The summary should express:

- Xida works mainly on Angular and Vue products.
- He is comfortable with Rails APIs.
- He is useful where product screens, data flow, and reliability matter.
- The sentence should sound natural rather than optimized.

Profile facts should stay, but labels and values can be slightly simpler if needed.

### Professional Snapshot

Keep the snapshot section. Shorten the descriptions and make them factual.

The snapshot should cover:

- Current work at Moku.
- Frontend plus Rails API experience.
- Core stack.
- University of Padova degree.

Avoid turning each item into a claim about end-to-end value. The section should feel like evidence, not marketing.

### Services

Keep the services section and title, but make descriptions more concrete.

Each service should answer: "What would Xida actually help with?"

Examples of preferred wording:

- Build product screens.
- Connect frontend screens to APIs.
- Add or adjust Rails endpoints.
- Clean up a codebase.
- Improve loading, error, and data states.

Avoid service-card descriptions that all follow the same generated rhythm.

### Selected Work

Keep the case studies anonymized. Rewrite them to be modest and specific.

The selected work should:

- Say what kind of product it was.
- Say what Xida contributed to.
- Describe the value in concrete terms.

Avoid inflated phrasing such as "demanding multi-step process" or "richer browser experience" unless the surrounding sentence makes it specific.

### Skills And Credentials

Keep the structure. Minor copy changes are acceptable where the current wording repeats generic positioning.

Skills should remain scan-friendly. Credentials should remain factual.

### Contact

Keep the mailto form behavior. Rewrite the contact summary so it invites both project and career conversations in plain language.

The copy should feel direct, for example: describe the project, role, or team context, and Xida will reply with next steps.

## Italian Copy

Italian should be rewritten as natural professional Italian, not as a literal translation from English.

Guidelines:

- Prefer "sviluppo", "integrazione", "manutenzione", "affidabilità", and "flussi dati" over repeated "delivery".
- Avoid awkward hybrids such as "ownership backend".
- Keep technical terms such as Angular, Vue, Rails, API, GraphQL, REST, and TypeScript.
- Keep the tone direct and concise.

## Architecture

The implementation should stay within the existing content model unless a copy need exposes a real structural issue.

Expected files:

- Modify `src/app/content/portfolio-content.ts` for English and Italian copy.
- Modify `src/app/app.spec.ts` if text assertions need to match the updated hero copy.

No component or style changes are expected.

## Testing And Verification

The implementation should verify:

- Angular tests pass.
- Angular build succeeds.
- English content reads less generic.
- Italian content reads naturally and avoids unnecessary English business terms.
- Language switching still updates visible copy.
- Existing layout does not overflow after the copy changes.

## Delivery Boundary

This document defines the copy direction only. Implementation should not begin until the user reviews this spec and approves moving to a separate implementation plan.
