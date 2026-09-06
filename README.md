# numerology-stats

A small static site that explores how the **personal arcana** (arcano personal) —
the Major Arcana card derived from a birth date — is distributed across a range of
dates. The narrative is in Spanish; the code is in English.

Live: <https://alichwan.github.io/numerology-stats/>

## The method

Take a date as `dd-mm-yyyy` (8 digits) and sum every digit. If the result is
`≤ 22` that's the arcana. Otherwise reduce once more by summing its digits — the
first sum never exceeds `72`, so a single extra reduction always lands in `1..22`.

```
03-06-1995  ->  0+3+0+6+1+9+9+5 = 33  ->  3+3 = 6  ->  Los Enamorados
```

`El Loco` is numbered `22` (not `0`); `La Justicia` = 8 and `La Fuerza` = 11
(Marseille numbering).

Because there are only 8 digits and the day/month fields are bounded (≤ 31, ≤ 12),
the arcana are **not** uniformly distributed. The page lets you pick a date range
and see the count per arcana, plus a fixed section for `28-07-1914 → 02-09-1945`
(WWI to WWII) where `La Muerte` never comes up.

## Project layout

| File | Purpose |
| --- | --- |
| `src/arcana.ts` | Core logic: `dateToArcana`, `dateRange`, `arcanaCounts`, arcana names |
| `src/ArcanaChart.tsx` | Recharts countplot of arcana `1..22` |
| `src/Story.tsx` | The narrative (rewritten from the `src/story.md` sketch) |
| `src/App.tsx` | Page: story + interactive range picker + the WWI–WWII section |
| `src/App.css` | Gradient sky, twinkling stars, glass panel styling |
| `exploration.ipynb` | Original Python exploration the site is based on |
| `src/story.md` | First draft of the text (not rendered; kept for reference) |

Stack: React 19 + TypeScript + Vite, Recharts for the chart. Package manager: Bun.

## Develop

```sh
bun install
bun run dev      # local dev server
bun run build    # type-check + production build to dist/
bun run preview  # serve the built dist/ (at the /numerology-stats/ base path)
```

## Deploy (GitHub Pages)

`vite.config.ts` sets `base: '/numerology-stats/'` to match the Pages sub-path.
`.github/workflows/deploy.yml` builds with Bun and publishes `dist/` on every push
to `main`.

One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub
Actions**.
