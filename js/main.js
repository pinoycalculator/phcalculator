function toggleMenu(){

let menu = document.getElementById("navMenu");

if(menu){
menu.classList.toggle("active");
}

}


/* LOAD HEADER AND FOOTER */

function loadComponent(id, file){

fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
});

}

loadComponent("header","components/header.html");
loadComponent("footer","components/footer.html");
