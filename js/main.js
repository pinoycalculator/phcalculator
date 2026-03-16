function toggleMenu(){

let menu = document.getElementById("navMenu");

if(menu){
menu.classList.toggle("active");
}

}

/* Detect correct path */

let pathPrefix = "";

if(window.location.pathname.includes("/calculators/")){
pathPrefix = "../";
}

/* Load components */

function loadComponent(id, file){

fetch(pathPrefix + file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
})
.catch(error => console.error("Component load error:", error));

}

loadComponent("header","components/header.html");
loadComponent("footer","components/footer.html");
