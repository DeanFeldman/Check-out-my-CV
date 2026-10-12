// Minimal behaviour: the portfolio content stays visible even when JavaScript is disabled.
const navigation=document.querySelector(".site-nav");
const menu=document.querySelector(".menu-toggle");
if(navigation&&menu){
  menu.addEventListener("click",()=>{
    const isOpen=navigation.classList.toggle("is-open");
    menu.setAttribute("aria-expanded",String(isOpen));
    menu.setAttribute("aria-label",isOpen?"Close navigation":"Open navigation");
  });
  navigation.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    navigation.classList.remove("is-open");
    menu.setAttribute("aria-expanded","false");
    menu.setAttribute("aria-label","Open navigation");
  }));
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"){
      navigation.classList.remove("is-open");
      menu.setAttribute("aria-expanded","false");
      menu.focus();
    }
  });
}
const filters=document.querySelectorAll(".filter-button");
const projects=document.querySelectorAll(".project[data-category]");
const status=document.querySelector("#filter-status");
filters.forEach(button=>button.addEventListener("click",()=>{
  const category=button.dataset.filter;
  filters.forEach(filter=>{
    const selected=filter===button;
    filter.classList.toggle("is-active",selected);
    filter.setAttribute("aria-pressed",String(selected));
  });
  let visible=0;
  projects.forEach(project=>{
    const show=category==="all"||project.dataset.category===category;
    project.hidden=!show;
    if(show)visible++;
  });
  if(status)status.textContent="Showing "+visible+" "+(visible===1?"project":"projects")+".";
}));
const year=document.querySelector("#year");
if(year)year.textContent=String(new Date().getFullYear());
