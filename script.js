// Edit this array to update the portfolio. Project cards, counts and filters are generated automatically.
const projects = [
  {
    title: "DocSync",
    category: "web-app",
    label: "Document workspace",
    description: "A document synchronisation workspace for viewing, comparing and updating matching content across Word documents.",
    tags: ["React", "TypeScript", "Electron"],
    sourceUrl: "https://github.com/DeanFeldman/DocSync",
    liveUrl: "",
    gradient: "linear-gradient(145deg, #6555d9, #30285f 55%, #111522)"
  },
  {
    title: "Ubuntu Health",
    category: "web-app",
    label: "Healthcare platform",
    description: "A community clinic appointment and queue-management platform focused on improving access, visibility and patient flow.",
    tags: ["React", "Node.js", "Supabase"],
    sourceUrl: "https://github.com/DeanFeldman/Ubuntu-Health",
    liveUrl: "",
    gradient: "linear-gradient(145deg, #0c8f88, #14504c 55%, #0d181a)"
  },
  {
    title: "Lend A Hand",
    category: "mobile-app",
    label: "Community mobile app",
    description: "A resource-sharing application connecting people with surplus items to community members who need them.",
    tags: ["Android", "Java", "PHP", "MySQL"],
    sourceUrl: "https://github.com/DeanFeldman/Lend-A-HAND-",
    liveUrl: "",
    gradient: "linear-gradient(145deg, #d36d3d, #6d321e 55%, #21130f)"
  },
  {
    title: "Kalooki",
    category: "game",
    label: "Multiplayer card game",
    description: "A browser-based multiplayer Kalooki implementation with synchronised game state, meld validation, turns and scoring.",
    tags: ["JavaScript", "Networking", "Game Logic"],
    sourceUrl: "https://github.com/DeanFeldman/Kalooki",
    liveUrl: "",
    gradient: "linear-gradient(145deg, #126b61, #123632 55%, #0c1719)"
  },
  {
    title: "SourceFin Credit Intelligence",
    category: "dashboard",
    label: "Financial technology",
    description: "An AI-enabled credit monitoring and committee workflow prototype with portfolio analytics, covenant tracking and reporting.",
    tags: ["Dashboard", "Finance", "AI", "Data UI"],
    sourceUrl: "",
    liveUrl: "",
    gradient: "linear-gradient(145deg, #3362a5, #182e51 55%, #0d1522)"
  },
  {
    title: "Website Showcase",
    category: "website",
    label: "Portfolio website",
    description: "This responsive portfolio: a data-driven project gallery, CV hub and professional profile built for GitHub Pages.",
    tags: ["HTML5", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/DeanFeldman/website-showcase",
    liveUrl: "https://deanfeldman.github.io/website-showcase/",
    gradient: "linear-gradient(145deg, #7d5be7, #39296e 55%, #121421)"
  }
];

const designSources = [
  {
    name: "Anime.js",
    role: "Animation timing and choreography",
    url: "https://animejs.com/",
    mark: "AJ"
  },
  {
    name: "Motion",
    role: "Modern interface motion patterns",
    url: "https://motion.dev/docs",
    mark: "MO"
  },
  {
    name: "Kokonut UI",
    role: "Bento layouts and polished components",
    url: "https://kokonutui.com/docs",
    mark: "KU"
  },
  {
    name: "Bklit",
    role: "Dashboard hierarchy and visual rhythm",
    url: "https://bklit.com/",
    mark: "BK"
  },
  {
    name: "Manus",
    role: "Clean product-workspace presentation",
    url: "https://manus.im/",
    mark: "MA"
  },
  {
    name: "ReactBits",
    role: "Interactive effects and component ideas",
    url: "https://reactbits.dev/",
    mark: "RB"
  }
];

const categoryLabels = {
  "web-app": "Web apps",
  "mobile-app": "Mobile apps",
  dashboard: "Dashboards",
  game: "Games",
  website: "Websites"
};

const grid = document.querySelector("#project-grid");
const projectCount = document.querySelector("#project-count");
const filtersContainer = document.querySelector("#project-filters");
const resultCount = document.querySelector("#result-count");
const inspirationGrid = document.querySelector("#inspiration-grid");

const escapeHTML = value => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function renderFilters() {
  const categories = [...new Set(projects.map(project => project.category))];
  const buttons = [
    { value: "all", label: "All" },
    ...categories.map(category => ({ value: category, label: categoryLabels[category] || category }))
  ];

  filtersContainer.innerHTML = buttons.map((button, index) => `
    <button class="filter ${index === 0 ? "active" : ""}" type="button" data-filter="${escapeHTML(button.value)}">
      ${escapeHTML(button.label)}
    </button>
  `).join("");
}

function renderProjects(filter = "all") {
  const visibleProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  resultCount.textContent = `${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"} shown`;

  grid.innerHTML = visibleProjects.map(project => {
    const originalIndex = projects.indexOf(project);
    const liveLink = project.liveUrl
      ? `<a href="${escapeHTML(project.liveUrl)}" target="_blank" rel="noreferrer">Live site ↗</a>`
      : `<span class="disabled-link" aria-label="Live site not available">Live site soon</span>`;
    const sourceLink = project.sourceUrl
      ? `<a href="${escapeHTML(project.sourceUrl)}" target="_blank" rel="noreferrer">Source code ↗</a>`
      : `<span class="disabled-link" aria-label="Source code is private">Private project</span>`;

    return `
      <article class="project-card reveal visible" data-category="${escapeHTML(project.category)}">
        <div class="project-preview" style="background:${escapeHTML(project.gradient)}">
          <div class="preview-window" aria-hidden="true">
            <div class="preview-bar"><i></i><i></i><i></i></div>
            <div class="preview-content">
              <span></span><strong></strong>
              <div class="preview-panels"><div></div><div></div></div>
            </div>
          </div>
        </div>
        <div class="project-info">
          <span class="project-number">${String(originalIndex + 1).padStart(2, "0")} · ${escapeHTML(project.label)}</span>
          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.description)}</p>
          <div class="tags">${project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
          <div class="project-links">${liveLink}${sourceLink}</div>
        </div>
      </article>
    `;
  }).join("");
}

function renderInspiration() {
  inspirationGrid.innerHTML = designSources.map(source => `
    <a class="inspiration-card reveal" href="${escapeHTML(source.url)}" target="_blank" rel="noreferrer">
      <span class="source-mark">${escapeHTML(source.mark)}</span>
      <div>
        <h3>${escapeHTML(source.name)}</h3>
        <p>${escapeHTML(source.role)}</p>
      </div>
      <span class="source-arrow">↗</span>
    </a>
  `).join("");
}

renderFilters();
renderProjects();
renderInspiration();
projectCount.textContent = String(projects.length);

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter || "all");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

document.querySelector("#year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", event => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
