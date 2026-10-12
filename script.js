const projects=[
  {title:"Stat'sTheGame",category:"analytics",type:"Sports analytics platform",lead:"From raw cricket events to trusted, explorable data.",description:"An event-driven cricket analytics system with validated submissions, statistical dashboards, dataset exports and a versioned API.",tags:["React","TypeScript","PostgreSQL","Node.js"],github:"https://github.com/DeanFeldman/StatsTheGame",demo:"https://sport-analytics-tool-web.pages.dev/",theme:"data",index:"01"},
  {title:"Sourcefin Credit Intelligence",category:"business",type:"Financial services prototype",lead:"Making complex credit workflows easier to navigate.",description:"A proposed platform and prototypes for credit committee workflows, covenant monitoring, portfolio insights and post-deal reporting, developed during my Sourcefin internship.",tags:["Business analysis","Credit processes","Dashboards","Prototyping"],github:"",demo:"",theme:"finance",index:"02"},
  {title:"Ubuntu Health",category:"business",type:"Community healthcare platform",lead:"More clarity for patients. Better flow for clinics.",description:"A clinic appointment and queue management platform with booking, queue tracking, facility information and administrative functionality.",tags:["React","Node.js","Express","Supabase"],github:"https://github.com/DeanFeldman/Ubuntu-Health",demo:"https://ubuntu-health-geb6dbegejfmenc7.southafricanorth-01.azurewebsites.net",theme:"health",index:"03"},
  {title:"DocSync",category:"engineering",type:"Windows desktop application",lead:"Coordinated document changes, without the chaos.",description:"A local-first tool to compare related Word documents, identify repeated content, preview proposed changes and generate new document versions.",tags:["Electron","React","TypeScript","Document workflows"],github:"https://github.com/DeanFeldman/DocSync",demo:"https://github.com/DeanFeldman/DocSync/releases/latest",demoLabel:"Releases ↗",theme:"docs",index:"04"},
  {title:"7:55AM at Wits Edge",category:"creative",type:"3D browser game",lead:"A chaotic journey to class — in three levels.",description:"A team-built 3D campus game exploring precision driving, traffic timing and stealth through custom gameplay, shaders and interactive environments.",tags:["JavaScript","Three.js","WebGL","Vite"],github:"https://github.com/DeanFeldman/Wits-commute-simulator",demo:"https://wmc.ms.wits.ac.za/students/sgroup3883/index.html",theme:"game",index:"05"},
  {title:"Kalooki Online",category:"creative",type:"Real-time multiplayer game",lead:"Card-game rules meet live multiplayer architecture.",description:"A browser-based multiplayer Kalooki game with room codes, WebSocket synchronisation, player-specific hands, meld validation and scoring.",tags:["JavaScript","Node.js","WebSockets"],github:"https://github.com/DeanFeldman/Kalooki",demo:"https://kalooki.onrender.com/",theme:"cards",index:"06"},
  {title:"Lend A Hand",category:"engineering",type:"Android community application",lead:"Helping resources find the people who need them.",description:"An Android app for donations and requests, featuring community matchmaking, resource listings and recognition for donors.",tags:["Java","Android","PHP","MySQL"],github:"https://github.com/DeanFeldman/Lend-A-HAND-",demo:"",theme:"community",index:"07"}
];
const filters=[["all","All projects"],["analytics","Data & analytics"],["business","Business solutions"],["engineering","Engineering"],["creative","Games & creative"]];
const escapeHTML=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
const projectGrid=document.querySelector("#project-grid");
const filterRoot=document.querySelector("#project-filters");
const resultCount=document.querySelector("#result-count");
let activeFilter="all";
function renderFilters(){
  filterRoot.innerHTML=filters.map(([id,label])=>`<button type="button" class="filter ${id===activeFilter?"active":""}" data-filter="${id}" aria-pressed="${id===activeFilter}">${label}</button>`).join("");
  filterRoot.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{
    activeFilter=button.dataset.filter;
    renderFilters();
    renderProjects();
  }));
}
function renderProjects(){
  const items=activeFilter==="all"?projects:projects.filter(p=>p.category===activeFilter);
  resultCount.textContent=`${items.length} project${items.length===1?"":"s"} · ${activeFilter==="all"?"selected work":filters.find(([id])=>id===activeFilter)?.[1]||"selected work"}`;
  projectGrid.innerHTML=items.map(p=>{
    const links=[
      p.demo?`<a href="${escapeHTML(p.demo)}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.demoLabel||"Live project ↗")}</a>`:"",
      p.github?`<a href="${escapeHTML(p.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`:""
    ].filter(Boolean).join("");
    return `<article class="project-card">
      <div class="project-graphic theme-${escapeHTML(p.theme)}" aria-hidden="true">
        <div class="graphic-top"><span>${escapeHTML(p.index)} / PORTFOLIO</span><span>↗</span></div>
        <div class="graphic-stage">
          <div class="graphic-ambient"></div>
          <span class="graphic-mark">${escapeHTML(p.title.slice(0,2).toUpperCase())}</span>
          <div class="graphic-bars"><i></i><i></i><i></i><i></i><i></i></div>
        </div>
        <span class="graphic-bottom">${escapeHTML(p.type)}</span>
      </div>
      <div class="project-body">
        <span class="project-type">${escapeHTML(p.type)}</span>
        <h3>${escapeHTML(p.title)}</h3>
        <p class="project-lead">${escapeHTML(p.lead)}</p>
        <p class="project-description">${escapeHTML(p.description)}</p>
        <div class="project-tags">${p.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join("")}</div>
        <div class="project-links">${links||'<span class="project-private">Company project · Details in experience</span>'}</div>
      </div>
    </article>`;
  }).join("");
}
if(projectGrid&&filterRoot&&resultCount){renderFilters();renderProjects();}
const menuButton=document.querySelector(".menu-button");
const nav=document.querySelector(".nav");
if(menuButton&&nav){
  menuButton.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded",String(open));
    menuButton.setAttribute("aria-label",open?"Close navigation":"Open navigation");
  });
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded","false");
  }));
}
const year=document.querySelector("#year");
if(year)year.textContent=String(new Date().getFullYear());
