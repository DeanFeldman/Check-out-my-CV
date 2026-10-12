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

Rename the repository in GitHub **Settings → General → Repository name** to exactly **`deanfeldman.github.io`** (lowercase), then click **Rename**. This converts it from a project site to the personal Pages root site. If the old project URL was shared anywhere, update it; GitHub does not automatically redirect Pages project URLs when repositories are renamed.

Under **Settings → Pages**, set **Build and deployment** source to **GitHub Actions**. The workflow at `.github/workflows/pages.yml` deploys on push to `main`. GitHub may need a fresh deployment after renaming; if necessary, run the workflow manually from the Actions tab.

Personal GitHub Pages address (after renaming the repository): **https://deanfeldman.github.io/**

If the live website does not update, review **Actions**, ensure the repository (not an older `website-showcase` site) is deployed, and hard-refresh.
