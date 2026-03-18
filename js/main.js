function toggleMenu(){
  let menu = document.getElementById("navMenu");
  if(menu){
    menu.classList.toggle("active");
  }
}

/* BASE PATH */
let basePath = "";
if(window.location.hostname.includes("github.io")){
  basePath = "/phcalculator/";
}

/* LOAD COMPONENTS */
function loadComponent(id, file){
  fetch(basePath + file)
  .then(res => res.text())
  .then(data => {
    document.getElementById(id).innerHTML = data;

    if(id === "header"){
      highlightActiveMenu();
      applySavedTheme();

      let lang = localStorage.getItem("language") || "en";
      if(typeof setLanguage === "function"){
        setLanguage(lang);
      }
    }
  });
}

loadComponent("header","components/header.html");
loadComponent("footer","components/footer.html");

/* ACTIVE MENU */
function highlightActiveMenu(){
  let links = document.querySelectorAll(".nav-menu a");
  let current = window.location.pathname;

  links.forEach(link => {
    if(link.getAttribute("href") === current){
      link.classList.add("active");
    }
  });
}

/* DARK MODE */
function toggleDarkMode(){
  document.body.classList.toggle("dark");

  let isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  let btn = document.getElementById("themeToggle");
  if(btn){
    btn.innerText = isDark ? "☀️" : "🌙";
  }
}

function applySavedTheme(){
  let saved = localStorage.getItem("theme");
  let btn = document.getElementById("themeToggle");

  if(saved === "dark"){
    document.body.classList.add("dark");
    if(btn) btn.innerText = "☀️";
  }
}

/* LANGUAGE (SIMPLE DEMO) */

