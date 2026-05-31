# Portfolio Section Title Scale Design

## Context

After switching to Poppins and reducing the hero headline, the remaining section titles feel oversized and inconsistent. The shared section heading scale reaches `4rem`, while the contact heading reaches `4.6rem`.

## Goal

Reduce section title sizes across the page and make the title hierarchy more consistent while keeping the current layout and content.

## Design

Update the shared section heading scale in `src/styles.scss` from `clamp(2rem, 4vw, 4rem)` to `clamp(1.65rem, 2.7vw, 2.85rem)`.

Update one-off section/component title scales to align with that smaller system:

- Contact H2: `clamp(2.2rem, 5vw, 4.6rem)` to `clamp(1.8rem, 3vw, 3rem)`.
- Case card H3: `clamp(1.35rem, 2.5vw, 2rem)` to `clamp(1.15rem, 1.8vw, 1.55rem)`.
- Service card H3: `clamp(1.1rem, 1.8vw, 1.55rem)` to `clamp(1.05rem, 1.45vw, 1.35rem)`.
- Snapshot section H2: `clamp(1.45rem, 2.2vw, 2rem)` to `clamp(1.35rem, 1.8vw, 1.65rem)`.

Keep hero typography unchanged.

## Verification

- Angular tests pass.
- Angular build succeeds.
- Section headings look calmer and consistent.
