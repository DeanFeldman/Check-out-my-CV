// Add or edit projects in this list. Leave liveUrl empty until a project is deployed.
const projects = [
  {
    title: "DocSync",
    category: "web-app",
    label: "Document workspace",
    description: "A document synchronisation workspace designed to view, compare and eventually update matching content across Word documents.",
    tags: ["React", "TypeScript", "Electron"],
    sourceUrl: "https://github.com/DeanFeldman/DocSync",
    liveUrl: "",
    gradient: "linear-gradient(145deg, #6555d9, #30285f 55%, #111522)"
  },
  {
    title: "Kalooki",
    category: "web-app",
    label: "Card game",
    description: "A browser-based implementation of Kalooki with interactive cards, game-state logic and a responsive playing table.",
    tags: ["JavaScript", "Game Logic", "GitHub Pages"],
    sourceUrl: "https://github.com/DeanFeldman/Kalooki",
    liveUrl: "https://kalooki.onrender.com/",
    gradient: "linear-gradient(145deg, #126b61, #123632 55%, #0c1719)"
  },
  {
    title: "Financial Intelligence",
    category: "dashboard",
    label: "Finance dashboard",
    description: "A post-deal credit intelligence and qualification interface that turns spreadsheet-based information into a clearer workflow.",
    tags: ["Dashboard", "Finance", "Data UI"],
    sourceUrl: "",
    liveUrl: "",
    gradient: "linear-gradient(145deg, #3362a5, #182e51 55%, #0d1522)"
  },
  {
    title: "Ubuntu Health",
    category: "web-app",
    label: "Developer tool",
    description: "AThe system helps patients book appointments, join virtual clinic queues, and track their waiting position, while giving clinic staff and admins tools to manage patient flow, clinic information, notifications, and analytics.",
    tags: ["Node", "React", "JS"],
    sourceUrl: "https://github.com/DeanFeldman/Ubuntu-Health",
    liveUrl: "https://ubuntu-health-geb6dbegejfmenc7.southafricanorth-01.azurewebsites.net",
    gradient: "linear-gradient(145deg, #9b3f79, #4b1d3b 55%, #1b1018)"
  },
  {
    title: "Lend-A-HAND",
    category: "Android App",
    label: "Community Trading Business",
    description: "mobile app designed to connect people who have surplus resources with those less fortunate. Users can donate items, request items and facilitate community-driven support through direct connections.",
    tags: ["Java", "CSS", "Android"],
    sourceUrl: "",
    liveUrl: "",
    gradient: "linear-gradient(145deg, #dd7f35, #6b371c 55%, #20130e)"
  },
  
];

const grid = document.querySelector("#project-grid");
const projectCount = document.querySelector("#project-count");
const filters = document.querySelectorAll(".filter");

projectCount.textContent = String(projects.length);

grid.innerHTML = projects.map((project, index) => `
  <article class="project-card reveal" data-category="${project.category}">
    <div class="project-preview" style="background:${project.gradient}">
      <div class="preview-window" aria-hidden="true">
        <div class="preview-bar"><i></i><i></i><i></i></div>
        <div class="preview-content">
          <span></span><strong></strong>
          <div class="preview-panels"><div></div><div></div></div>
        </div>
      </div>
    </div>
    <div class="project-info">
      <span class="project-number">${String(index + 1).padStart(2, "0")} · ${project.label}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <div class="project-links">
        <a class="${project.liveUrl ? "" : "disabled"}" href="${project.liveUrl || "#"}" ${project.liveUrl ? 'target="_blank" rel="noreferrer"' : ""}>Live site ↗</a>
        <a class="${project.sourceUrl ? "" : "disabled"}" href="${project.sourceUrl || "#"}" ${project.sourceUrl ? 'target="_blank" rel="noreferrer"' : ""}>Source code ↗</a>
      </div>
    </div>
  </article>
`).join("");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    document.querySelectorAll(".project-card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
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
