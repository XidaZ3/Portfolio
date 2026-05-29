# Portfolio Landing Page Design

## Context

The project starts in an empty Angular workspace directory. The first version will be a one-page service portfolio for Xida Chen, aimed primarily at English-speaking clients who need frontend product development help. Italian visitors should still have a complete localized version through a language toggle.

The content direction is based on the current CV:

- Frontend and full-stack software engineering experience at Moku.
- Angular, Vue, TypeScript, RxJS, GraphQL, REST, Three.js, TailwindCSS, Ruby on Rails collaboration, Git, and agile delivery.
- Work on a dental order lifecycle platform, a vehicle practice management application, and a 3D web configurator.
- University of Padova computer science degree.
- Location in Sacile, Pordenone, Italy, with professional English and native Italian.

## Goals

- Present Xida as a practical, delivery-focused frontend/product engineer.
- Lead with frontend-heavy Angular/Vue product development.
- Provide English-first content with an Italian version.
- Include downloadable CV links and visible contact options.
- Use anonymized CV-based case studies as proof without exposing client details.
- Keep the first version static, fast to ship, and easy to expand.

## Non-Goals

- No backend, CMS, booking system, authentication, or database.
- No named client case studies unless explicit permission and content are provided later.
- No heavy interactive portfolio experience in the first version.
- No separate multi-page portfolio or full case-study pages in the first version.
- No runtime translation framework unless the implementation proves static typed content is insufficient.

## Product Shape

The site will be a single-page Angular landing page. English will be the default language. Italian will be available from a visible language toggle.

Primary sections:

1. Hero
   - Clear service positioning.
   - Short credibility line.
   - Primary CTA to contact.
   - Secondary CTA to view or download the CV.
2. Services
   - Frontend product development.
   - Full-stack collaboration.
   - Maintainability, refactoring, and delivery reliability.
   - Interactive UI and Three.js capability as a supporting strength.
3. Selected Work
   - Three anonymized case studies derived from the CV.
   - Each item explains the problem space, contribution, and delivery value.
4. Skills
   - Compact grouped tooling list.
   - Emphasis on Angular, Vue, TypeScript, RxJS, API integration, and UI implementation.
5. Credentials
   - Current software engineering role.
   - University of Padova degree.
6. Contact
   - Form-style fields that generate a `mailto:` link.
   - Plain email and LinkedIn as visible fallbacks.
7. Footer
   - Location, language toggle, and concise contact information.

## Architecture

The Angular project should use modern standalone Angular conventions and stay intentionally simple. The app will be composed from focused section components, with typed static content for English and Italian.

Proposed structure:

```text
src/app/app.component.*
src/app/content/portfolio-content.ts
src/app/sections/hero-section.*
src/app/sections/services-section.*
src/app/sections/case-studies-section.*
src/app/sections/skills-section.*
src/app/sections/credentials-section.*
src/app/sections/contact-section.*
src/app/sections/site-footer.*
```

The application shell owns the selected language state and passes the selected content to each section. The language state can use Angular signals or simple component state, depending on the generated Angular version and local project conventions.

The CV file should be stored in Angular's public asset location. The existing Italian CV will be linked as a real downloadable file. An English CV link should only be shown if an English PDF is available; otherwise the UI should not include a dead placeholder link.

## Content Model

`portfolio-content.ts` will export typed content for both languages. The content should include:

- Navigation labels.
- Hero headline, subheading, and CTA labels.
- Service items.
- Case study items.
- Skills groups.
- Credentials.
- Contact labels and `mailto:` copy.
- Footer copy.

English copy should be direct and service-oriented. Italian copy should read naturally as professional Italian, not as a literal translation.

## Case Studies

The first version will include these anonymized case studies:

1. Dental order lifecycle platform
   - Position as work on a complex workflow platform for a multinational dental-sector organization.
   - Focus on frontend delivery, product flow, and order lifecycle clarity.
2. Vehicle practice management application
   - Position as codebase restructuring and process acceleration work.
   - Include pipeline monitoring as a reliability improvement.
3. 3D web configurator
   - Position as an immersive browser-based configurator.
   - Highlight realistic interactive UI and Three.js capability.

The case studies must avoid confidential client names and must not imply ownership of work beyond what the CV supports.

## UX And Visual Direction

The visual direction is product engineer: practical, sharp, and delivery-focused.

Implementation guidance:

- Use a responsive, work-focused layout.
- Make the first viewport immediately communicate the service offer.
- Use a neutral base with high contrast and one restrained accent color.
- Keep sections dense but readable.
- Avoid decorative gimmicks, marketing-heavy hero treatment, and heavy animation.
- Avoid nested cards.
- Use compact repeated items for services and case studies.
- Ensure mobile layouts stack cleanly with no text overflow.
- Prefer familiar icon buttons where an icon library is already available; otherwise use clear text buttons for the first scaffold.

## Contact Behavior

The contact section will look like a small inquiry form but will not submit to a backend. It will build a `mailto:` URL from user-entered fields such as name, email, project type, and message.

Fallback behavior:

- The plain email address remains visible.
- LinkedIn remains visible.
- If no local mail client opens, the visitor can still copy the email address.

## Error Handling

Since the site is static, error handling is limited to graceful fallback behavior:

- Missing optional content should not render dead links.
- Contact still exposes plain email if `mailto:` is not useful to the visitor.
- CV links must point to existing files.
- Language switching should never hide the primary CTA or contact details.

## Testing And Verification

The implementation should verify:

- Angular build succeeds.
- English is the default language.
- Italian toggle updates all visible localized copy.
- CV download links resolve.
- Contact `mailto:` contains the inquiry fields.
- Mobile and desktop layouts are usable.
- Text does not overflow buttons, cards, or narrow sections.

## Delivery Plan Boundary

This design document only defines the approved product and technical direction. The next step is a separate implementation plan using the writing-plans workflow. Implementation should not begin until this spec has been reviewed and approved.
