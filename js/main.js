function toggleMenu(){

let menu = document.getElementById("navMenu");

if(menu){
menu.classList.toggle("active");
}

}


/* LOAD HEADER */

document.getElementById("header").append(
document.getElementById("header-template").content.cloneNode(true)
);


/* LOAD FOOTER */

document.getElementById("footer").append(
document.getElementById("footer-template").content.cloneNode(true)
);

function loadComponent(id, file){

fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
});

}

loadComponent("header","components/header.html");
loadComponent("footer","components/footer.html");
