# Portfolio Spacing Density Design

## Context

The portfolio layout now has calmer typography, but the page still leaves too much negative space. The main sources are the hero minimum height, large hero padding, and large gaps between sections.

## Goal

Make the page more compact and better balanced while preserving the current visual style, content, and responsive structure.

## Design

Reduce vertical whitespace in these areas:

- Hero min-height from `calc(92svh - 84px)` to `auto`.
- Hero vertical padding from `clamp(3.25rem, 7vw, 5.75rem) ... clamp(2rem, 4vw, 3.25rem)` to a tighter range.
- Main section gap from `clamp(3.5rem, 7vw, 6rem)` to `clamp(2.5rem, 5vw, 4.25rem)`.
- Shared section intro bottom margin from `1.5rem` to `1rem`.
- Split-section gap from `clamp(1.5rem, 4vw, 4rem)` to `clamp(1.25rem, 3vw, 3rem)`.
- Reduce oversized card/section internal gaps only where they contribute obvious whitespace.

## Verification

- Angular tests pass.
- Angular build succeeds.
- Page feels denser without content overlap or text overflow.
