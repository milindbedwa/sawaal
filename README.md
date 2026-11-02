# SAWAAL — Think. Question. Understand.

A mobile-first, offline-capable learning experience for India: one question a day, playable stories, truth-detective investigations and a city-budget simulation. It teaches *how* to think — evidence, rights, dignity, manipulation — without pushing parties, ideologies or religious positions.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

No accounts, no backend. Progress is stored in `localStorage` on the device.

## What's inside

| Experience | Route | Content |
| --- | --- | --- |
| **Today** — one question a day | `/`, `/today/[slug]` | 16 daily questions (`src/content/daily/`) across science, misinformation, equality, rights, stereotypes, social media, scams, civic life, democracy, health |
| **Explore** — playable stories | `/explore`, `/story/[slug]` | 3 branching stories (`src/content/stories/`): The Equality Question, The Viral Message, The Public Office |
| **Investigate** — truth detective | `/investigate/[slug]` | 2 investigations (`src/content/investigations/`): tap clues in an advert or post, then set an honest confidence level |
| **Decide** — Run Your City | `/decide` | Allocate a hypothetical ₹100 crore budget; a living city responds; residents disagree |
| **My Journey** | `/journey` | Questions, stories, topics, milestones, what to explore next. No streaks, no leaderboards |

Every lesson follows **SEE → CHOOSE → DISCOVER → REFLECT** and ends with one memorable sentence plus a "See evidence" sheet (claim kind, real sources, review date, report-an-inaccuracy).

## Architecture

- **Next.js 16 (App Router) + TypeScript + Tailwind v4 + Motion.** Two route groups: `(tabs)` with the shell navigation, `(play)` for immersive lessons.
- **Content is data.** All lessons are typed objects (`src/content/types.ts`). Components render them: `SceneView` (chat, poster, headline, street, phone, notice), `Choices` (cards, chat chips, confidence slider), `Discover`, `Insight`, `EvidenceSheet`, `Completion`, `LessonFrame`.
- **Languages:** English, Hindi, Gujarati. UI strings in `src/lib/i18n/ui.ts`; content strings are `{ en, hi, gu }` objects with English fallback. To add a language: add it to `LOCALES` in `src/lib/i18n/locales.ts`, add a font in `src/app/layout.tsx` + `globals.css`, and add strings.
- **Progress:** `src/lib/progress.ts` — a versioned local document shaped so a future Supabase sync can upsert it.
- **PWA:** `src/app/manifest.ts` + `public/sw.js` (app-shell caching, registered in production only).
- **Accessibility:** keyboard-operable choices and sliders, focus rings, `aria-live` feedback, native `<dialog>` for the evidence sheet, reduced-motion support, read-aloud via the browser's speech synthesis.

## Content standards

See `src/content/README.md`. In short: fictional scenarios, real sources; no invented studies, numbers or legal provisions; claim kinds (`fact`, `hypothesis`, `opinion`, `fiction`) and a `reviewedOn` date on every lesson; AI-assisted drafts are not treated as verified until reviewed by a human against the primary source.

## Adding a daily question

1. Copy `src/content/daily/q01-bracelet.ts`, give it a new `id` and `slug`.
2. Write `en`, `hi`, `gu` for every string. Max 3 choices. One-sentence insight.
3. Register it in `src/content/daily/index.ts`. The route and Journey pick it up automatically.
