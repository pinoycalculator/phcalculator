function toggleMenu(){
  let menu = document.getElementById("navMenu");
  if(menu){
    menu.classList.toggle("active");
  }
}

/* detect github repo base path */
let basePath = "";

if(window.location.hostname.includes("github.io")){
  basePath = "/phcalculator/";
}

/* load components */
function loadComponent(id, file){
  fetch(basePath + file)
  .then(response => {
    if(!response.ok){
      throw new Error("Failed to load " + file);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById(id).innerHTML = data;

    // 👉 Re-bind events after loading header
    if(id === "header"){
      highlightActiveMenu();
    }
  })
  .catch(error => console.error("Component load error:", error));
}

loadComponent("header","components/header.html");
loadComponent("footer","components/footer.html");

/* highlight active menu */
function highlightActiveMenu(){
  let links = document.querySelectorAll(".nav-menu a");
  let current = window.location.pathname;

  links.forEach(link => {
    if(link.getAttribute("href") === current){
      link.classList.add("active");
    }
  });
}


/* MINI SSS CALCULATOR */
function miniCalc(){
  let salary = parseFloat(document.getElementById("miniSalary").value);
  if(!salary) return;

  let total = salary * 0.14;

  document.getElementById("miniResult").innerHTML =
    "Estimated SSS: ₱ " + total.toLocaleString(undefined, {minimumFractionDigits:2});
}

/* DARK MODE */
function toggleDarkMode(){
  document.body.classList.toggle("dark");

  let isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  document.getElementById("themeToggle").innerText = isDark ? "☀️" : "🌙";
}

(function(){
  let saved = localStorage.getItem("theme");
  if(saved === "dark"){
    document.body.classList.add("dark");
    let btn = document.getElementById("themeToggle");
    if(btn) btn.innerText = "☀️";
  }
})();

/* SAVE CALCULATOR RESULTS */
function saveResult(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

function getSavedResult(key){
  return JSON.parse(localStorage.getItem(key));
}
