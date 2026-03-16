function toggleMenu(){

let menu = document.getElementById("navMenu");

if(menu){
menu.classList.toggle("active");
}

}

/* repository base path */
const basePath = "/phcalculator/";

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
})
.catch(error => console.error(error));

}

loadComponent("header","components/header.html");
loadComponent("footer","components/footer.html");
