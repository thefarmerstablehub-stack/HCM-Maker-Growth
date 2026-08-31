# HCM Maker Growth — Design Exploration

## Three stylistic approaches

### Workshop Ledger
**Very Brief Intro:** An editorial, tactile product experience inspired by craft journals, paper stock, and a maker's workbench. It makes business growth feel as practical and approachable as planning the next piece of work.

**Probability:** 0.07

### Museum of Making
**Very Brief Intro:** A quiet, gallery-like interface that presents the maker's products, progress, and opportunities with generous space and restrained authority. It positions marketing activity as thoughtful craft rather than promotional noise.

**Probability:** 0.03

### Field Notes Collective
**Very Brief Intro:** A lively community-led dashboard built around seasonal prompts, local markets, and hand-drawn observations. It feels optimistic and social, with a more expressive editorial rhythm.

**Probability:** 0.09

## Chosen approach — Workshop Ledger

**Design Movement:** Contemporary British craft editorial, drawing from independent maker journals, material libraries, and modern utility stationery.

**Core Principles:** The interface must be immediately actionable rather than analytically dense. Information should be grouped as tangible work cards and monthly chapters, with carefully uneven editorial composition rather than a uniform corporate grid. Texture is used sparingly to signal human craft while the system remains lucid and calm. Every screen should answer what to do now, why it matters, and what comes next.

**Color Philosophy:** Deep forest green creates reassurance, competence, and a feeling of rooted long-term growth. Warm parchment reduces the clinical feel of digital dashboards, while burnt terracotta marks active opportunities and measured momentum. The palette is deliberately restrained so progress signals remain easy to scan.

**Layout Paradigm:** The customer experience moves through an "open workbench" layout: an anchored left rail for a maker's working tools, and a broad, staggered canvas which prioritizes the month's principal work. The public page uses a long, editorial storytelling layout with a deliberately off-centre hero.

**Signature Elements:** Timber growth rings are the recurring symbol for progress and compounding work. Torn-paper-like ruled dividers and understated ledger labels reinforce the monthly planning metaphor. Opportunity cards carry a small, tactile category marker instead of decorative generic icons.

**Interaction Philosophy:** Interactions should resemble moving work across a physical desk: direct, restrained, and satisfying. Users can complete an action in one obvious step and update results without being sent to a disconnected system area. Contextual writing appears where a choice is being made, never as a generic AI flourish.

**Animation:** Content enters in short 180–240ms opacity-and-translate transitions using a responsive ease-out, with a low stagger for stacked tasks. Controls give an immediate 100–160ms pressed response. Score indicators and progress bars may settle gently on initial view; nonessential movement is disabled for reduced-motion preferences.

**Typography System:** Fraunces provides an artisanal but authoritative display voice for milestones, key outcomes, and the public proposition. Manrope handles UI and task detail with compact, highly readable forms. Display headlines use strong size contrast; labels are uppercase, letter-spaced, and intentionally small.

**Brand Essence:** HCM Maker Growth is the monthly business-growth workbench for independent makers who want practical momentum without becoming marketers. **Grounded, encouraging, capable.**

**Brand Voice:** Clear, human, and specific. Headlines name a concrete commercial outcome; calls to action invite useful progress rather than issuing abstract commands. Example: “Turn this month’s interest into better enquiries.” Example: “Start with the work that will make a difference.”

**Wordmark & Logo:** The wordmark combines a considered Fraunces logotype with a compact timber-ring-and-sprout emblem. The emblem is used alone as the product icon, favicon, and navigation anchor.

**Signature Brand Color:** **Root Green — #173D32.**

## Portability boundary

The initial app uses a typed local demonstration-data layer, browser storage for prototype persistence, and client-side product rules. Its UI state and domain types are deliberately separated from views so the same interfaces can later be backed by Supabase Auth, Postgres with RLS, Storage, and secured Edge Functions. Vite output remains suitable for GitHub source control and static Vercel deployment.

## Style Decisions

- The app experience always uses an **open workbench** structure: an anchored working-tools rail plus a broad, staggered monthly canvas rather than a conventional uniform SaaS dashboard.
- **Timber growth rings** are the primary recurring brand motif at progress, chapter, and opportunity moments, before generic icon treatments.
- Forms and assessments read as practical **ledger worksheets**, using ruled dividers, numbered fields, chapter labels, and tactile work-card grouping rather than plain web-form minimalism.
