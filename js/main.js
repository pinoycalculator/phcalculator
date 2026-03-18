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
