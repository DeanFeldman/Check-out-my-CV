# Dean Feldman — Website Showcase

A responsive portfolio for displaying Dean Feldman's websites, dashboards, mobile apps, games and software projects in one place.

## Live site

After GitHub Pages is enabled, the portfolio will be available at:

```text
https://deanfeldman.github.io/website-showcase/
```

## Features

- Data-driven project cards generated from `script.js`
- Project filters generated automatically from project categories
- Responsive desktop and mobile layouts
- Full CV page with print / Save as PDF support
- LinkedIn, GitHub and email links
- Design-inspiration section
- GitHub Pages deployment workflow
- Reduced-motion accessibility support

## Add or edit projects

Open `script.js` and edit the `projects` array.

```js
{
  title: "Project name",
  category: "web-app",
  label: "Short project type",
  description: "Project description",
  tags: ["HTML", "CSS", "JavaScript"],
  sourceUrl: "https://github.com/username/repository",
  liveUrl: "https://username.github.io/repository",
  gradient: "linear-gradient(...)"
}
```

The HTML project grid, total project count and filter buttons all update from this array. You do not need to manually add project cards to `index.html`.

## CV

The full web CV is in `cv.html`. It includes a print button, allowing visitors to print it or save it as a PDF from their browser.

The public page intentionally excludes a phone number. Update the contact section in `cv.html` if you want to publish one.

## Design inspiration

The portfolio lists the resources that informed its visual direction:

- [Anime.js](https://animejs.com/)
- [Motion](https://motion.dev/docs)
- [Kokonut UI](https://kokonutui.com/docs)
- [Bklit](https://bklit.com/)
- [Manus](https://manus.im/)
- [ReactBits](https://reactbits.dev/)

## Run locally

No installation is required. Open `index.html` directly or use the VS Code Live Server extension.

## Deploy with GitHub Pages

1. Open **Settings → Pages** in the GitHub repository.
2. Under **Build and deployment**, choose **GitHub Actions**.
3. Push or merge changes into `main`.
4. The workflow in `.github/workflows/pages.yml` deploys the site.

## Main files

```text
index.html       Portfolio home page
cv.html          Full CV page
script.js        Project and design-source data
styles.css       Shared styling
assets/          Favicon and optional media
```
