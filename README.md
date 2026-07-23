# Dean Feldman — Website Showcase

A responsive portfolio website for displaying different websites, dashboards, web apps and software projects in one place.

## Features

- Modern dark portfolio design
- Responsive desktop and mobile layouts
- Project filtering
- Animated reveal effects
- Live-site and source-code buttons
- Easy project editing from one JavaScript array
- Ready for GitHub Pages

## Run locally

No installation is required.

Open `index.html` directly in your browser, or use VS Code Live Server.

## Add or edit projects

Open `script.js` and edit the `projects` array near the top of the file.

Each project supports:

```js
{
  title: "Project name",
  category: "web-app", // web-app, dashboard or website
  label: "Short project type",
  description: "Project description",
  tags: ["HTML", "CSS", "JavaScript"],
  sourceUrl: "https://github.com/username/repository",
  liveUrl: "https://username.github.io/repository",
  gradient: "linear-gradient(...)"
}
```

Leave `sourceUrl` or `liveUrl` empty when the link is not available. The relevant button will appear disabled.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `website-showcase`.
2. Add these files to the repository.
3. Push the repository to GitHub.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **GitHub Actions**.
6. The included workflow will publish the website automatically.

Your public website should then be available at:

```text
https://DeanFeldman.github.io/website-showcase/
```

## Suggested Git commands

```powershell
git init
git add .
git commit -m "Create website showcase portfolio"
git branch -M main
git remote add origin https://github.com/DeanFeldman/website-showcase.git
git push -u origin main
```
