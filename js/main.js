function toggleMenu(){

let menu = document.getElementById("navMenu");

if(menu){
menu.classList.toggle("active");
}

}

/* LOAD COMPONENTS */

function loadComponent(id, file){

fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
})
.catch(error => console.error("Error loading component:", error));

}

loadComponent("header","components/header.html");
loadComponent("footer","components/footer.html");
