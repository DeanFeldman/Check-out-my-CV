# Dean Feldman — Professional Portfolio

A responsive personal portfolio and printable web CV, highlighting Dean's work across computer science, data analytics, enterprise software, consulting case competitions and technical leadership.

## Site structure

- **Homepage (`index.html`)** — introduction, featured project portfolio, experience, competition achievements, leadership, skills, contact.
- **Web CV (`cv.html`)** — structured CV with a **Print / Save as PDF** action.
- **Project catalogue (`script.js`)** — verified public GitHub links, project categories, available demo links and accessible filters.
- **Design system (`styles.css`)** — responsive layouts, mobile navigation, light/dark sections and print styling.

The site uses plain HTML, CSS and JavaScript — no framework or build pipeline needed.

## Local preview

Open `index.html` in a browser, or use a small local server:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Updating content

- Edit `script.js` to add or update project cards and public links.
- Edit `index.html` for professional experience, recognition, leadership and introduction.
- Edit `cv.html` for the printable CV.
- Update `styles.css` to change the design.
- Avoid including private company code, credentials or personal phone numbers on the public site.

## GitHub Pages deployment

A workflow at `.github/workflows/pages.yml` deploys the site after changes are merged into `main`.

In the repository's **Settings → Pages**, choose **GitHub Actions** as the build/deployment source. If Pages is enabled for this repository, the expected site URL is:

https://deanfeldman.github.io/Check-out-my-CV/

The web CV replaces the old static PDF download button with browser printing, so it won't silently serve an out-of-date PDF.

## Content principles

- Only public source repositories are linked; the Sourcefin project is presented as a professional case study.
- Third-party demo links come from project README documentation; verify deployments periodically.
- Competitions and programmes are distinguished from formal employment.
- Business claims describe contributions and prototypes accurately rather than implying deployed production systems.
