# Portfolio Credibility Polish Design

## Context

The current site is a single-page Angular portfolio for Xida Chen. It already has a complete localized structure with hero, services, selected work, skills, credentials, contact, and footer sections. The content has recently shifted toward full-stack product engineering, with Angular, Vue, TypeScript, and Ruby on Rails API capability.

The next improvement should not rebuild the site. It should make the landing page feel more personal, credible, and visually polished for two audiences:

- Software agencies and consultancies evaluating Xida for reliable subcontracting or project support.
- Recruiters and hiring managers evaluating Xida for engineering roles.

The page should remain balanced. It should feel like a professional engineering profile with clear project capability, not a pure freelance sales page and not a static CV page.

## Goals

- Make the first viewport communicate a stronger professional identity.
- Surface credibility signals earlier in the page.
- Improve visual hierarchy, spacing, and component rhythm without adding heavy interaction.
- Keep the page useful for both agency/project conversations and career conversations.
- Preserve the existing static Angular architecture and bilingual content model.
- Keep the implementation focused, maintainable, and easy to verify.

## Non-Goals

- No backend, CMS, authentication, booking flow, or database.
- No new translation framework.
- No multi-page portfolio or full case-study pages.
- No large animation system or decorative interactive experience.
- No unrelated refactor of the Angular app.
- No new claims about named clients or confidential work.

## Positioning

The landing page should lead with Xida as a full-stack product engineer who can work inside a team and deliver practical product software. The message should be credible to agencies that need dependable execution and to hiring managers who need to understand experience quickly.

The hero should move away from a narrowly service-like pitch and toward a rounded professional identity. A suitable direction is:

- Main role: full-stack product engineer.
- Headline direction: reliable web products across Angular, Vue, and Rails.
- Summary direction: frontend strength, Rails API capability, workflow-heavy product experience, and practical delivery.
- Primary action: contact Xida.
- Secondary action: download the CV.

The page should communicate: "I am a reliable engineer you can place into a team or project."

## Page Structure

The site should remain a single-page landing page, but the content order should give proof earlier.

Recommended order:

1. Hero
   - Professional identity, short summary, photo, structured profile snapshot, and balanced CTAs.
2. Professional Snapshot
   - A compact proof band with 3-4 facts that are useful to both agencies and hiring managers.
3. Selected Work
   - Anonymized work examples should appear before service selling or be visually stronger than the services section.
4. Team Support / Services
   - Rename or reframe services as ways Xida can support a team.
5. Skills
   - Keep grouped, but tune the copy so it reads as capability areas rather than only tool tags.
6. Credentials
   - Keep as concise proof, preferably with timeline-like rhythm and less duplication with the snapshot.
7. Contact
   - Keep the mailto behavior, but broaden the copy for project inquiries and career conversations.
8. Footer
   - Keep concise location and positioning copy.

## Hero Design

The hero should feel composed and professional rather than oversized or purely dramatic.

Required changes:

- Reduce the maximum H1 scale slightly so the first viewport feels more senior and controlled.
- Keep the profile photo, but make the media area feel intentional.
- Replace the current generic proof list with a structured profile snapshot.
- Keep the CTA pair visible and balanced.
- Let the first viewport show a hint of the next section on common desktop heights.

The profile snapshot should include facts such as:

- Current role: Software Engineer at Moku.
- Focus: Angular, Vue, TypeScript, and Rails APIs.
- Location: Sacile, Italy, with remote-friendly positioning.
- Languages: Italian native and professional English.

The best-fit tags may remain, but should be adjusted from sales categories toward credible work contexts, such as agencies, product teams, internal tools, and workflow platforms.

## Professional Snapshot Section

Add a compact section immediately after the hero. Its job is to answer why the visitor should trust Xida before they reach the longer sections.

The section should contain 3-4 concise proof items:

- Software Engineer at Moku.
- Full-stack product delivery.
- Angular, Vue, TypeScript, and Rails.
- Computer Science, University of Padova.

This section should be visually compact. It should read as a credibility band, not as another large card grid.

## Selected Work

Selected Work is the strongest proof section and should have more weight than the service cards.

The existing anonymized case studies remain appropriate:

- Dental order lifecycle platform.
- Vehicle practice management application.
- 3D product configurator.

Improvements should focus on clarity and credibility:

- Keep the work anonymized.
- Avoid implying ownership beyond the CV-supported contribution.
- Make each case easy to scan: context, contribution, value.
- Consider slightly more editorial card styling than services, while staying restrained.

## Services And Team Support

The services section should stay, but the framing should feel less like a generic freelancer menu. A better title direction is "How I can support a team" or similar.

The content should remain useful to agencies:

- Full-stack product development.
- Frontend product development.
- Rails API development.
- API-driven interfaces.
- Product rescue and maintainability.

The copy should emphasize collaboration, dependable delivery, and fitting into existing teams.

## Skills And Credentials

Skills should stay grouped by capability area:

- Frontend.
- Backend.
- Product delivery.

The section should keep the current compact tag approach, but tune the summary and group labels if needed so the skills feel connected to product delivery rather than isolated keywords.

Credentials should become concise proof. Since the new snapshot will already surface the strongest facts, the credentials section should avoid repeating the same information at the same weight. A timeline-style row treatment would fit the page better than another generic card grid.

## Contact

The contact section should keep the existing static mailto flow. The change is mostly copy:

- Support both project inquiries and career conversations.
- Keep the direct email and LinkedIn fallbacks visible.
- Preserve the existing form-like fields and generated mailto behavior.

The contact section should not require validation beyond the browser's native email input behavior, because no backend submission exists.

## Visual Direction

The visual language should remain practical, restrained, and work-focused.

Guidelines:

- Keep the neutral base and teal accent, but reduce repeated teal gradient use.
- Use more neutral contrast and reserve accent color for hierarchy and metadata.
- Keep card radius at the current 8px system value.
- Avoid nested cards.
- Avoid decorative blobs, gimmicks, or heavy animation.
- Make card types distinct by role:
  - selected work can be wider and more proof-oriented;
  - services can be smaller support cards;
  - credentials can be timeline-like proof rows.
- Improve typography hierarchy with tighter large headings, readable paragraphs, and less visually loud repeated labels.
- Keep mobile layouts clean, with hero text first and photo/profile snapshot after it.
- Ensure tags and buttons do not create clutter or overflow on narrow screens.

## Content Model

The existing `portfolio-content.ts` typed content model should be extended for the new credibility content.

Required additions:

- Hero profile snapshot items.
- Professional snapshot section title or items.
- Updated labels and summaries for the services/contact sections.

Both English and Italian content must remain complete. Italian copy should be natural professional Italian, not a literal translation.

## Architecture

The implementation should stay within the current Angular standalone component structure.

Expected changes:

- Update `portfolio-content.ts` with revised copy and any new typed fields.
- Update `hero-section` to render a structured profile snapshot beside the photo.
- Add a focused professional snapshot section component.
- Reorder sections in `app.html` so credibility appears before service selling.
- Adjust SCSS for hero scale, profile block, card rhythm, and mobile layout.
- Keep contact behavior unchanged except for copy.

No new runtime dependencies are required.

## Error Handling And Fallbacks

The site remains static, so fallback behavior is simple:

- CV links must continue pointing to existing files.
- The plain email and LinkedIn links remain visible if `mailto:` is not useful.
- Optional content must not render as empty or dead UI.
- Language switching must preserve all visible section content.

## Testing And Verification

The implementation should verify:

- Angular build succeeds.
- English remains the default language.
- Italian toggle updates all localized visible copy.
- The CV download still resolves to the existing PDF.
- The contact `mailto:` still includes inquiry fields.
- Desktop and mobile layouts are clean.
- Hero, snapshot, cards, tags, and buttons do not overflow.

## Delivery Boundary

This document defines the approved design direction only. Implementation should not begin until the user reviews this spec and approves moving to a separate implementation plan.
