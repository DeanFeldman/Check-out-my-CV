# Dean Feldman — Portfolio

A personal portfolio built as a **graphic editorial website**. No framework, generic template, gradient-card design system or build step.

## Design direction

This 2026 rebuild is deliberately different from the previous dark, teal technology portfolio:

- Warm paper base with deep-ink typography and large, expressive serif headlines.
- Distinctive full-width coloured sections: indigo, yellow, lilac, sage and vermilion.
- Project-specific CSS illustrations, not fabricated screenshots or AI-generated portraits.
- Magazine-like composition with oversized type, numbered entries, asymmetrical layouts and thin rules.
- A purpose-built companion CV page that remains usable as a printable PDF.
- Motion kept minimal; the site works without JavaScript except for optional filtering and mobile navigation.

## Files

```
index.html     Portfolio home page and project/experience content
cv.html        Web CV; Print / Save PDF button
styles.css     Full responsive art direction + print stylesheet
script.js      Accessible project filters, mobile navigation and year
assets/        Favicon and existing assets
```

## Updating details

- Edit `index.html` for project text, links, case competitions, leadership and biography.
- Edit `cv.html` for professional CV information.
- Edit `styles.css` for visual changes.
- Keep the company's Sourcefin work described as a prototype or concept, not public company source code.
- Avoid adding publicly accessible phone numbers or confidential materials.

## Run

Open `index.html` directly, or start a local HTTP server:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080. The site has no package manager dependencies.

## Publish on GitHub Pages

Merge the redesign branch into `main`. Under **Settings → Pages**, set **Build and deployment** source to **GitHub Actions**. The workflow at `.github/workflows/pages.yml` deploys on push to `main`.

Expected project Pages address: https://deanfeldman.github.io/Check-out-my-CV/

If the live website does not update, review **Actions**, ensure the repository (not an older `website-showcase` site) is deployed, and hard-refresh.
