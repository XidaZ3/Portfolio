# Portfolio Poppins Font Design

## Context

The portfolio currently uses `Inter` as the global font family in `src/styles.scss`, with system UI fallbacks. `src/index.html` does not load an external web font.

The requested change is to switch the portfolio typography to Poppins.

## Goals

- Use Poppins across the portfolio.
- Load Poppins reliably for visitors through Google Fonts.
- Keep existing layout, copy, colors, and component structure unchanged.
- Keep system font fallbacks for cases where the web font does not load.

## Non-Goals

- No layout redesign.
- No font-size, spacing, or component changes unless build verification exposes a problem.
- No local font asset bundling.
- No copy changes.

## Design

Add Google Fonts preconnect links and the Poppins stylesheet link to `src/index.html`.

Update the global `font-family` in `src/styles.scss` from `Inter` to `Poppins`, keeping the current system fallback stack.

Use a practical weight range that supports the current design:

- 400 for normal text.
- 500 and 600 if browser synthesis is needed less often.
- 700, 800, and 900 for existing bold labels, buttons, and headings.

## Testing And Verification

Verify:

- Angular tests pass.
- Angular build succeeds.
- The app still renders without text overflow.
- If the font request fails, the system fallback stack remains valid.

## Delivery Boundary

This document defines only the font-loading and global typography change. Implementation should not begin until the user approves moving to the implementation plan.
